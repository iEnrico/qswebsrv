import { getDescriptionText, getTextByLanguage } from './common/utils'
import { getCourseType, getStateId, getContainingUnitsFromProcedure } from './procedureEngine'


/*
create an ui element to display in the overview grid
*/
export async function createUIElementFromRunning(data) {
    return {
        id: data.id
    }
}

export async function createUIElementFromAvailable(item, contentPackage, locales) {

    // get infos about procedure

    //console.log("searching for: " + contentPackage.name)
    //const projectInfo = await getProcedureInformation(contentPackage.name.replace("_", "-"))
    //console.log("Project: " + JSON.stringify(projectInfo.translations))
    
    //console.log("Item: " + JSON.stringify(item.state))
    
    console.log("creating ui element from: \n"+JSON.stringify(item)+"\n"+JSON.stringify(contentPackage))
    //console.log(JSON.stringify(item))
    //console.log(item.activity.units.length)

    return {
        id: contentPackage.id,
        name: contentPackage.name,
        carePlanUuid: item.carePlan.uuid,
        carePlanId: item.carePlan.id,
        activityUnitId: item.activity.id,
        date: 1673482872000,
        //title: getTextByLanguage(projectInfo.translations ? projectInfo.translations : contentPackage.translations, this.$i18n), 
        //TODO: mock title
        title: getTextByLanguage(item.carePlanUnit?.activity ? item.carePlanUnit?.activity.translations : item.activity.translations, locales),//"Achtsamkeit (VR)",
        subtitle: getTextByLanguage(contentPackage.translations, locales),
        state: getStateId(item.carePlanUnits ? item.carePlanUnits[0].carePlan.state : item.state), // see "session states" in common.js
        description: getDescriptionText(contentPackage.name),
        image: require('@/assets/sunshine.jpg'),
        progress: item.fhirActivityDefinition ? 0 : item.activity.units.length,
        //TODO: mock 5
        max_progress: item.carePlanUnit?.activity ? item.carePlanUnit?.activity.units.length : item.activity.units.length, //5, //projectInfo.units.length,
        duration: "10 Min.",
        course_type: getCourseType(contentPackage.type), 
        elements: [],
        requirements: [],
        completed: [],
        listOfUnits: await getContainingUnitsFromProcedure(/*item*/),
    }
}