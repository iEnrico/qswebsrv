import api from "@/scripts/api/api";
import common from "./common/common";

import { /*NativeEventSource, EventSourcePolyfill*/ EventSourcePolyfill } from 'event-source-polyfill';
import { getLocalToken } from "./auth/auth";


export function getUser() {
      return JSON.parse(sessionStorage.getItem("user"));
}

export function getFHIRId() {
    return getUser().fhirResourceId
}

export async function getNextAvailableProcedures() {

    // get running 
    const response = await api.getRunningProcedures(getUser().id);
    if (response.data) {
        return { data: [response.data], state: 0 }; // state 0 means running
    }

    // if running is empty, get unstarted available
    const response2 = await api.getAvailableActivitys(getUser().id);
    return { data: response2.data, state: 1 }; // state 1 means unstarted
}

export async function createProcedure(procedureName, response) {
    //console.log("createProcedure: " + procedureName + ", " + JSON.stringify(response))
    //console.log(response.data.length)

    let unit = null
    let carePlanUnit = null
    for (let x=0; x<response.data.length; x++) {
      
      unit = response.data[x].units.find(o => o.contentPackage.name === procedureName && o.contentPackage.available);
      //console.log("create procedure: \n" + JSON.stringify(response.data[x]))
      carePlanUnit = response.data[x].units[0] //.find(o => o.name === name && o.available);
      //console.log("create procedure for: " + JSON.stringify(unit))
      
      if (unit)
        break
    }
    
    let ownFHIRRessourceId = getFHIRId();
    //console.log("own fhir id: " + ownFHIRRessourceId)

    let carePlanUnitsId = carePlanUnit.id;
    let carePlanUUId = carePlanUnit.contentPackage.id //carePlan.uuid;

    ///TODO: WARNING. THIS IS FOR QUESTIONAIRE OK, BUT ON VR SESSIONS THIS MEAN "ALWAYS DAYSCENE!!!!"
    //console.log(unit)
    let unitResourceId = unit.contentPackage.resources[0].id;

    let procedure_data = {
      "patient": ownFHIRRessourceId,
      "carePlanUuid": carePlanUUId,
      "carePlanUnitId": carePlanUnitsId,
      "fhirProcedure": "0",
      "units": [
        {
          "activityUnitId": unit.id,
          "contentPackageResourceId": unitResourceId,
          "packageParametersIds": [],
          "resourceParametersIds": []
        }
      ]
    }
    
    const result = await api.postProcedures(
        getUser(), 
        procedure_data
    )
    
    //console.log("createProcedure" + result)
    return result
}

export function connectEventSource(procedureId, procedureUnitId) {
    
  console.log("connect to event stream: \n" + "https://backend.relivr-integration.nuromedia.com/procedures/" + procedureId + "/units/" + procedureUnitId + "/events/stream/")

  var events = new EventSourcePolyfill(
    "https://backend.relivr-integration.nuromedia.com/procedures/" + procedureId + "/units/" + procedureUnitId + "/events/stream/"
  
  , {
    withCredentials: true,
    headers: {
      'Authorization': "Bearer " + getLocalToken()
    }
  }
  );

  // Listens to LocalDateTime "type" of Events
  events.addEventListener("LocalDateTime", e => {
    console.log("LocalDateTime", e)
  })

  // Listens to SensorEvent "type" of Events
  /*
  events.addEventListener("SensorEvent", e => {
    console.log("SensorEvent", e)
    let item = JSON.parse(e.data)
    cableStates = item.values
    cableStates.forEach((element) => {
      setCableUpdates(evt, element)
    });
  })
  */

  events.onopen = (event) => {
    console.log("SSE OnOpen: " + JSON.stringify(event))
  }

  events.onerror = (event) => {
    console.log("SSE OnError: " + JSON.stringify(event))
  }

  // THIS IS FIRED AND USED ONLY BY UN-NAMED EVENTS!
  events.onmessage = (event) => {
    console.log("SSE OnMessage: " + JSON.stringify(event));
    //const parsedData = event.data;
  };


  //const EventSource = NativeEventSource || EventSourcePolyfill;
  // OR: may also need to set as global property
  //global.EventSource =  NativeEventSource || EventSourcePolyfill;

}

export function startProcedure(procedure) {

    //console.log("startProcedureUnit " + JSON.stringify(procedure))
    //return api.patchProcedures(this.user.id, procedure.id, {"state": "RUNNING"})
    let procedureUnit = procedure.data.units ? procedure.data.units[procedure.data.units.length-1] : procedure.data.activityUnit
    let payload = {"state": "RUNNING"};
    return api.patchActivityUnitAlternate(getUser(), procedure.data.id, procedureUnit.id, payload)
}

export function startNextProcedure(procedure) {
    if (procedure.nextActivityUnit) {
        let procedureUnit = procedure.nextActivityUnit
        let payload = {"state": "RUNNING"};
        return api.patchActivityUnitAlternate(getUser(), procedure.id, procedureUnit.id, payload)
    }
}

export async function isAllUnitsComplete(procedure) {
    //console.log("allUnitsComplete" + JSON.stringify(procedure))
    let anyrunning = procedure.units?.find(o => (o.state == 'RUNNING' || o.state == 'CREATED'));
    //console.log("!!!!!!!!!!!!!: \n" + JSON.stringify(anyrunning) + ", " + (anyrunning ? false : true))
    return (anyrunning ? false : true)
}
export  function isAllUnitsCompleteSync(procedure) {
  //console.log("allUnitsComplete" + JSON.stringify(procedure))
  let anyrunning = procedure.units?.find(o => (o.state == 'RUNNING' || o.state == 'CREATED'));
  //console.log("!!!!!!!!!!!!!: \n" + JSON.stringify(anyrunning) + ", " + (anyrunning ? false : true))
  return (anyrunning ? false : true)
}
export async function getNextTaskActivity(activityId) {
    //console.log("getNextTaskActivity: " + activityName)
    let response = await api.getRunningProcedures(getUser())
    //console.log("getNextTaskActivity.response #1\n"+JSON.stringify(response))
    if (response.data) {
        let item = response.data.units.find(o => (o.state == 'RUNNING' || o.state == 'CREATED') && o.activityUnit.contentPackage.id == activityId);
        //console.log("TADADADAD\n\n" + item)
        if (item) {
            return item.activityUnit.contentPackage;
        } else {
            return response.data.nextActivityUnit.contentPackage
        } 
    } 

/*
    response.forEach(async (element) => {
        if (element.name == activityName && !element.state == 'COMPLETED') {
            return element.activityUnit.contentPackage;
        }
    })
*/

    let response2 = await api.getAvailableActivitys(getUser().id);
    //console.log("getNextTaskActivity.response #2\n"+JSON.stringify(response2))
    //console.log("info: " + response2.data)

    for (let i=0; i<response2.data.length; i++) {
      let item = response2.data[i].activity.units.find(o => 
        ( o.contentPackage.id === activityId )
        //console.log(activityName + " == " + o.contentPackage.name)
      );
      
      //console.log("response #2 item: " + JSON.stringify(item)) // JSON.stringify(item)
      
      if (item) {
        return item;
      }
    }

/*
    let item = null
    response2.data.forEach(element => {
      item = element.units.find(o => 
        ( o.contentPackage.id === activityId )
        //console.log(activityName + " == " + o.contentPackage.name)
      );

      console.log("response #2 item: " + JSON.stringify(item)) // JSON.stringify(item)
      
      //console.log("item: " + item.contentPackage.name) //  JSON.stringify(item)
      if (item) {
        return;
      }

    });
    return item;
*/

    /*
    if (response2.data[0]) {

        let item = response2.data[0].units.find(o => {
          ( o.contentPackage.name == activityName )
          console.log(o.contentPackage.name)
        });
        return item;
    */
    
        /*
        response2.data[0].units.forEach( (element) => {
            console.log("avail element: " + JSON.stringify(element))
            if (element.contentPackage.name == activityName) {
                console.log("returning! " + element.contentPackage.name)
                return element.contentPackage
            }
        })*/
    
        //}

}

export async function getProcedureInformation(name) {
  //console.log(name)
  const activitiesResult = await api.getOtherAvailableActivities()
  //console.log(activitiesResult)
  return activitiesResult.data.find(function (o) {
    return o.name == name /*&& (o.primaryType == 'WEBSITE' ||
           o.primaryType == 'VR_DEVICE')*/
  });

}

export async function getNextActivity() {
    let response = await api.getRunningProcedures(getUser())
    return response.data
}

export async function continueProcedure(activityId) {
    let response = await api.getRunningProcedures(getUser())
    //console.log("engine1.continueProcedure\n" + JSON.stringify(response))
    if (response.data) {
        let item = response.data.units.find(o => o.state == 'RUNNING');
        if (!item) {
            //console.log("no running procedure...")
            item = response.data.units.find(o => o.state == 'CREATED');
            if (item) {
                startProcedure(response.data)
            } else {
                console.log("no created procedure...")
            }
        }
        return {
            "procedureId": response.id,
            "item": item
            //"procedureUnitId": item.id
        }
    } else {

        let response2 = await api.getAvailableActivitys(getUser())
        //console.log("engine2.continueProcedure" + JSON.stringify(response2))
        //startProcedure(response2.data[0].units[0])

        for (let i=0; i<response2.data.length; i++) {
          let item = response2.data[i].units.find(o => 
            ( o.contentPackage.id === activityId )
            //console.log(activityName + " == " + o.contentPackage.name)
          );
          
          //console.log("response #2 item: " + JSON.stringify(item)) // JSON.stringify(item)
          
          if (item) {
            return {
              "procedureId": response2.data[i].id,
              "item": response2.data[i]
              //"procedureUnitId": item.id
            }
          }
        }


/*
        let item = null
        response2.data.forEach(element => {
          console.log("r2: " + element.name.replace("-", "_") + " === " + activityName)
          
          if (element.name.replace("-", "_") === activityName) {
            item =  {
              "procedureId": element.id,
              "item": element
              //"procedureUnitId": item.id
            }
          }

          element.units.forEach(element => {
            console.log("r3: " + element.contentPackage.name)
          });

        });
        console.log("continue item: " + item)
        return item
*/



        /*
        return {
            "procedureId": response2.data[0].id,
            "item": response2.data[0]
            //"procedureUnitId": item.id
        }
        */
    }
}   

export async function createConfig(env, type, object, procedure, user) {

    console.log("createConfig " + JSON.stringify(procedure))

    let procedure_data = {     
      "activityUnitId": procedure.data.nextActivityUnit.id,
      "contentPackageResourceId": procedure.data.nextActivityUnit.contentPackage.resources[0].id,
      "packageParametersIds": [
        type, object,
      ],
      "resourceParametersIds": [
        //env
      ],
      "state": "RUNNING"
    }

    let result = await api.postActiveUnit(user, procedure_data)
    await startNextProcedure(result)
    
    //this.procedureUnitId = result.data.id
    //this.procedureId = result.data.procedure.id

}

function getResultDataSetForName(results, name, isPartial){

  console.log(" -> get result set for: " + name)
  console.log(" -> results: " + JSON.stringify(results))
  
  var payload = ""
      
  switch (name) {

    case "audio_diary_activities":
    case "audio_diary_positive_emotions":
    case "audio_diary_negative_situations":
    case "audio_diary_social_relations":
      payload += '['
      /*
      results.forEach((element, index) => {
        if (isPartial && element.userRating != -1 || !isPartial) {
          payload += '{ "resultTemplateId": ' + (2+index) + ', "values": [ ' + element.userRating + ' ] }';
          (index+1 == results.length) ? payload += '' : payload += ',';
        } 
      })
      */
      payload += ']'
      return payload; 

    case "system-usability-scale":
      payload += '['
      results.forEach((element, index) => {
        if (isPartial && element.userRating != -1 || !isPartial) {
          payload += '{ "resultTemplateId": ' + (2+index) + ', "values": [ ' + element.userRating + ' ] }';
          (index+1 == results.length) ? payload += '' : payload += ',';
        } 
      })
      payload += ']'
      return payload; 

    case "BDI-II":
      payload += '['
        results.forEach((element, index) => {
          if (isPartial && element.userRating != -1 || !isPartial) {
            payload += '{ "resultTemplateId": ' + (14+index) + ', "values": [ ' + element.userRating + ' ] }';
            (index+1 == results.length) ? payload += '' : payload += ',';
          }
        })
      payload += ']'
      return payload; 
   
    case "SAM":
      payload += '['
        results.forEach((element, index) => {
          if (isPartial && element.userRating != -1 || !isPartial) {
            payload += '{ "resultTemplateId": ' + (35+index) + ', "values": [ ' + element.userRating + ' ] }';
            (index+1 == results.length) ? payload += '' : payload += ',';
          }
        })
      if (payload.endsWith(',')) 
        payload = payload.substring(0, payload.length-1)
      payload += ']'
      return payload; 
    
    case "TMS":
      payload += '['
      results.forEach((element, index) => {
        if (isPartial && element.list_items[0].value != -1 || !isPartial) {
          payload += '{ "resultTemplateId": ' + (38+index) + ', "values": [ ' + element.list_items[0].value + ' ] }';
          (index+1 == results.length) ? payload += '' : payload += ',';
        }
      })
      if (payload.endsWith(',')) 
        payload = payload.substring(0, payload.length-1)
      payload += ']'
      return payload; 

    case "GAD-7":
      payload += '['
      results.forEach((element, index) => {
        if (isPartial && element.list_items[0].value != -1 || !isPartial) {
          payload += '{ "resultTemplateId": ' + (51+index) + ', "values": [ ' + element.list_items[0].value + ' ] }';
          (index+1 == results.length) ? payload += '' : payload += ',';
        }
      })
      payload += ']'
      return payload; 
 
    default:
      break;
  }
}

export async function sendResults(/*data,*/ results, /*procedureId, procedureUnitId,*/ isPartial) {
  
  //console.log("procedure.sendresults: " + data.course_type)

  /*
  if (data.course_type == common.course_type_vr) {
    const sampledata = {"state": "ABORTED"};
    await api.patchProcedures(getUser(), JSON.parse(data).id, sampledata)
  } 
  else {
  */

    let questionaire = results[0].name;
    let questionaire_results = null;

    questionaire_results = getResultDataSetForName(results, questionaire, isPartial)

    //var parsedData = JSON.parse(data)
    
    var parsedData = await getNextAvailableProcedures() 

    //console.log("INFOOOOOO: \n" + JSON.stringify(parsedData.data[0]))

    var units = parsedData.data[0].units ? parsedData.data[0].units : parsedData.data[0].activity.units


    var payload = JSON.parse(questionaire_results)
    if (payload.length != 0) {
      await api.postProcedureResultBatch(
        getUser(), 
        parsedData.data[0].id, 
        units[units.length-1].id, //activityUnit.id, 
        payload
      );
    }
    else {
      console.log("nothing to save here...")
    }

  //}

}

export async function getContainingUnitsFromProcedure(/*item*/) {
  
  //TODO: do live if metadata updated and containing full information (philip)

  /*
  var unitNames = []
  console.log("parse this item: " + JSON.stringify(item))
  item.units.forEach(unit => {
    console.log(JSON.stringify(unit))
    unitNames.push(unit.activityUnit.contentPackage.name)
  });
  return unitNames
  */

  // until then use mocked data

 return ["Aktuelle Empfindung und Stimmung", "Toronto Mindfulness Scale", "Achtsamkeit (VR)", "Aktuelle Empfindung und Stimmung", "Toronto Mindfulness Scale"]
}


export function getStateId (item) {
  switch(item) {
    case "COMPLETED":
      return common.session_state_done
    case "RUNNING":
      return common.session_state_running
    case "ACTIVE":
      return common.session_state_notstarted
    case "OVERDUE":
      return common.session_state_overdue
    case "ABORTED":
      return common.session_state_aborted
  }
  return common.session_state_notstarted
}

export function getStateMsg (item) {
  switch (item) {
    case "ACTIVE": //common.session_state_notstarted:
      return "state_notstarted";
    case "RUNNING": //common.session_state_running:
      return "state_paused";
    case "COMPLETED": //common.session_state_done:
      return "state_done";
    case "OVERDUE": //common.session_state_overdue:
      return "state_overdue";
    case "ABORTED": //common.session_state_aborted:
      return "state_abort";
  }
  return;
}

export function getStateIcon (item) {
  //console.log(item)
  switch (item) {
    case "ACTIVE": //common.session_state_notstarted:
      return "mdi-play-circle";
    case "RUNNING": //common.session_state_running:
      return "mdi-pause-circle";
    case "COMPLETED": //common.session_state_done:
      return "mdi-check-circle";
    case "OVERDUE": //common.session_state_overdue:
      return "mdi-alert-circle";
    case "ABORTED": //common.session_state_aborted:
      return "mdi-alert-circle";
  }
  return;
}

export function getStateColor (item) {

  var state = item.carePlan ? item.carePlan.state : item.state

  //console.log ("getStateColorA: " + item)
  //console.log ("getStateColorB: " + state)
  
  switch (state) {
    /*
    case "ACTIVE":
      return "#DDD";
    case "CREATED":
      return "#FAC194";
    */
    case "ACTIVE": //common.session_state_notstarted:
      return "#DDD";
    case "RUNNING": //common.session_state_running:
      return "#FAC194";
    case "COMPLETED": //common.session_state_done:
      return "#4FAF9C";
    case "OVERDUE": //common.session_state_overdue:
      return "#F47F76";
    case "ABORTED": //common.session_state_aborted:
      return "#F22224";
  }
  return;
}

export function getCourseType (item) {
  switch(item) {
    case "QUESTIONNAIRE":
      return 4
    case "WEBSITE":
      return 1
    case "VR_DEVICE":
      return 2
    case "AUDIO_DIARY":
      return 3
  }
  return 2
}

export function getCourseIcon (item) {
  //console.log("getCourseIcon: " + JSON.stringify(item))
  switch (item) {
    case "QUESTIONNAIRE":
      return 'mdi-file-sign';
    case "WEBSITE":
      return 'mdi-web';
    case "VR_DEVICE":
      return 'mdi-safety-goggles';
    case "AUDIO_DIARY":
      return 'mdi-headphones';
  }
  return;
}

export function getCourseInfo (item) {
  switch (item) {
    case "QUESTIONNAIRE":
      return "course_info_questionnaire";
    case "WEBSITE":
      return "course_info_web";
    case "VR_DEVICE":
      return "course_info_vr";
    case "AUDIO_DIARY":
      return "course_info_diary";
  }
  return;
}

export function getIconForType (type) {
  switch (type) {
    case 4:
      return "mdi-file-document-edit"
    case 2:
      return "mdi-safety-goggles"
    case 1:
      return "mdi-web"
    default:
      break;
  }
}


      /*
      const result2 = await api.getRunningProcedures(this.user.id);
      if (result2.data) {
        //console.log("data: " + JSON.stringify(result2.data))
        //console.log("size: " + result2.data[0].units.length)
        
        var isRunning = false;
        result2.data.units.forEach(element => {
          if (element.state == 'RUNNING') {
            isRunning = true;
            //alert("some procedure is running!")
            
            this.procedureId = result2.data.id;
            this.procedureUnitId = element.id;

          }
          
          if (element.state == 'CREATED') {
            isRunning = true;
            //this.procedureId = result2.data.units[result2.data.units.length-1].id;
            let payload = 
            {
              "state": "RUNNING"
            }
            const resultB = api.patchActivityUnitAlternate(this.user, result2.data.id, result2.data.units[result2.data.units.length-1].id, payload) //units[0].id, payload)
            console.log("PATCH result: " + resultB)
          }
          
        });

        if (!isRunning) {
          
          ///TODO: use this shortcut if working again!
          
          this.procedureId = result2.data.nextActivityUnit.id;
          this.procedureUnitId = result2.data.nextActivityUnit.contentPackage.resources[0].id;
          console.log("try patching procedure: " + this.procedureId + ", " + this.procedureUnitId)
          
          let procedure_data = {     
            "activityUnitId": this.procedureId,
            "contentPackageResourceId": this.procedureUnitId,
            "packageParametersIds": [
              
            ],
            "resourceParametersIds": [
              
            ],
            "state": "CREATED"
          }
          const resultA = await api.postActiveUnit(this.user, procedure_data)
          console.log("POST result: " + resultA)
          
          
          ///TODO: until than use this... this.procedureId this.procedureUnitId
          let payload = 
          {
            "state": "RUNNING"
          }
          //const result = await api.patchActivityUnitAlternate(this.user, result2.data.id, result2.data.nextActivityUnit.id, payload) //units[0].id, payload)
          const resultB = await api.patchActivityUnitAlternate(this.user, result2.data.id, result2.data.units[result2.data.units.length-1].id, payload) //units[0].id, payload)
          console.log("PATCH result: " + resultB)
          
      }
      */
     