import axios from 'axios';
import { isValidToken, getLocalToken, clearData } from '@/scripts/auth/auth.js';
import {appRouter} from "@/router/router.js";
//import store from '@/store/index';

//https://backend.relivr-integration.nuromedia.com/swagger-ui/index.html
//https://backend.relivr-integration.nuromedia.com/swagger-ui/api_changelog
const BASE_BACKEND_URL = "https://backend.relivr-integration.nuromedia.com";

const userEndpoint = "/user/";
const userActivitysEndpoint = "/user/available-activities/";

const carePlanPresets = "/care-plans/presets/";
const carePlanRecords = "/care-plans/records/";

const contentPackages = "/content-packages/";

const procedures = "/procedures/";

const usersEndoint = "/users/";

const voiceRecordEndoint = "/voice-records/";

/*

Keycloak (and session management), 
https://keycloak.relivr-integration.nuromedia.com/auth/

-- Java backend application --

Keycloak integration Swagger
https://backend.relivr-integration.nuromedia.com/swagger-ui/index.html

API changelog
https://backend.relivr-integration.nuromedia.com/swagger-ui/api_changelog

FHIR serverSwagger
https://fhir.relivr-integration.nuromedia.com/openapi/ui/

Keycloak integrationSVN “starter pack”
https://svn.local.nurogames.com/ReliVR/trunk/Documentation/StarterPack/

*/

var api = {
   
    //---------------------------------------------
    // USER - GET  /user/
    //---------------------------------------------
    getUserData: async function () {
        try {

            const response = await request("GET", BASE_BACKEND_URL+userEndpoint, null, null,
            {
              tokenValidationMiddleware: false,
              withAuthorization: true,
              withTokenAutoRefresh: false,
            });

            if (response.status == 200) {
                console.log(response);
                //alert(JSON.stringify(response.data));
                sessionStorage.setItem("user", JSON.stringify(response.data));
                return response;
            } else {
                console.error(response);
            }
        } catch (error) {

            // fallback
            sessionStorage.setItem(
                "user", 
                JSON.stringify({
                    "id": "00000000-0000-0000-0000-000000000000",
                    "firstName": "firstname",
                    "lastName": "lastname",
                    "fullName": "full name",
                    "email": "name@company.domain",
                    "fhirResourceId": null,
                    "roles": [
                        "ADMIN"
                    ],
                    "patients": []
                })
            );

            console.log('Api.getUserData Error: ', error);
        }
    },
    //---------------------------------------------
    // USER - GET  /user/available-activities/
    //---------------------------------------------
    getAvailableActivitys: async function (userId) {
        try {
            const response = await request("GET", BASE_BACKEND_URL+userActivitysEndpoint, new URLSearchParams({
                fhirPatient: userId,
            }), null,
            {
              tokenValidationMiddleware: false,
              withAuthorization: true,
              withTokenAutoRefresh: false,
            });

            if (response.status == 200) {
                console.log(response);

                alert("USER - GET  /user/available-activities/\n\n" + (response.data.length == 0 ? "empty :(" : JSON.stringify(response.data)));
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getAvailableActivitys Error: ', error);
        } 
    },
    //----------------------------------------------------------------------------
    // CAREPLAN PRESETS - GET  /care-plans/presets/
    //----------------------------------------------------------------------------
    getCareplanPresets: async function (userId) {
        try {
            const response = await request("GET", BASE_BACKEND_URL+carePlanPresets, new URLSearchParams({
                fhirPatient: userId,
            }), null,
            {
              tokenValidationMiddleware: false,
              withAuthorization: true,
              withTokenAutoRefresh: false,
            });

            if (response.status == 200) {
                console.log(response);

                alert("CAREPLAN PRESETS - GET  /care-plans/presets/\n\n" + (response.data.length == 0 ? "empty :(" : JSON.stringify(response.data)));
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getAvailableActivitys Error: ', error);
        } 
    },
    //----------------------------------------------------------------------------
    // CAREPLAN PRESETS - GET  /care-plans/presets/{presetId}/
    //----------------------------------------------------------------------------
    getCareplanPresetById: async function (userId, id) {
        try {
            const response = await request("GET", BASE_BACKEND_URL+carePlanPresets+id+"/", new URLSearchParams({
                fhirPatient: userId,
            }), null,
            {
              tokenValidationMiddleware: false,
              withAuthorization: true,
              withTokenAutoRefresh: false,
            });

            if (response.status == 200) {
                console.log(response);

                alert("CAREPLAN PRESETS - GET  /care-plans/presets/{presetId}/\n\n" + (response.data.length == 0 ? "empty :(" : JSON.stringify(response.data)));
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getAvailableActivitys Error: ', error);
        } 
    },
    //---------------------------------------------
    // CAREPLAN RECORDS - GET  /care-plans/records/
    //---------------------------------------------
    getCareplanRecords: async function (userId) {
        try {
            const response = await request("GET", BASE_BACKEND_URL+carePlanRecords, new URLSearchParams({
                fhirPatient: userId,
            }), null,
            {
              tokenValidationMiddleware: false,
              withAuthorization: true,
              withTokenAutoRefresh: false,
            });

            if (response.status == 200) {
                console.log(response);

                return response;
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getAvailableActivitys Error: ', error);
        } 
    },
    //--------------------------------------------------
    // CAREPLAN RECORDS - GET  /care-plans/records/{ID}/
    //--------------------------------------------------
    getCareplanRecordById: async function (userId, id) {
        try {
            const response = await request("GET", BASE_BACKEND_URL+carePlanRecords+id+"/", new URLSearchParams({
                fhirPatient: userId,
            }), null,
            {
              tokenValidationMiddleware: false,
              withAuthorization: true,
              withTokenAutoRefresh: false,
            });

            if (response.status == 200) {
                console.log(response);

                alert("CAREPLAN RECORDS - GET  /care-plans/records/{ID}/\n\n" + (response.data.length == 0 ? "empty :(" : JSON.stringify(response.data)));
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getAvailableActivitys Error: ', error);
        } 
    },
    //-----------------------------------------------------------
    // CAREPLAN RECORDS - GET  /care-plans/records/{ID}/history/
    //-----------------------------------------------------------
    getCareplanRecordHistory: async function (userId, id) {
        try {
            const response = await request("GET", BASE_BACKEND_URL+carePlanRecords+id+"/history/", new URLSearchParams({
                fhirPatient: userId,
            }), null,
            {
              tokenValidationMiddleware: false,
              withAuthorization: true,
              withTokenAutoRefresh: false,
            });

            if (response.status == 200) {
                console.log(response);

                alert("CAREPLAN RECORDS - GET  /care-plans/records/{ID}/history/\n\n" + (response.data.length == 0 ? "empty :(" : JSON.stringify(response.data)));
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getAvailableActivitys Error: ', error);
        } 
    },
    //-------------------------------------------------------------
    // CAREPLAN RECORDS - GET  /care-plans/records/{ID}/units/
    //-------------------------------------------------------------
    getCareplanRecordUnits: async function (userId, id) {
        try {
            const response = await request("GET", BASE_BACKEND_URL+carePlanRecords+id+"/units/", new URLSearchParams({
                fhirPatient: userId,
            }), null,
            {
              tokenValidationMiddleware: false,
              withAuthorization: true,
              withTokenAutoRefresh: false,
            });

            if (response.status == 200) {
                console.log(response);

                alert("CAREPLAN RECORDS - GET  /care-plans/records/{ID}/units/\n\n" + (response.data.length == 0 ? "empty :(" : JSON.stringify(response.data)));
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getAvailableActivitys Error: ', error);
        } 
    },
    //------------------------------------------------------------------
    // CAREPLAN RECORDS - GET  /care-plans/records/{ID}/units/{UnitID}/
    //------------------------------------------------------------------
    getCareplanRecordUnitByUnitId: async function (userId, id, unitId) {
        try {
            const response = await request("GET", BASE_BACKEND_URL+carePlanRecords+id+"/units/"+unitId+"/", new URLSearchParams({
                fhirPatient: userId,
            }), null,
            {
              tokenValidationMiddleware: false,
              withAuthorization: true,
              withTokenAutoRefresh: false,
            });

            if (response.status == 200) {
                console.log(response);

                alert("CAREPLAN RECORDS - GET  /care-plans/records/{ID}/units/{UnitID}/\n\n" + (response.data.length == 0 ? "empty :(" : JSON.stringify(response.data)));
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getAvailableActivitys Error: ', error);
        } 
    },
    //----------------------------------------------------------------------------
    // CAREPLAN RECORDS - GET  /care-plans/records/{ID}/units/{UnitID}/schedules/
    //----------------------------------------------------------------------------
    getCareplanRecordUnitSchedules: async function (userId, id, unitId) {
        try {
            const response = await request("GET", BASE_BACKEND_URL+carePlanRecords+id+"/units/"+unitId+"/schedules/", new URLSearchParams({
                fhirPatient: userId,
            }), null,
            {
              tokenValidationMiddleware: false,
              withAuthorization: true,
              withTokenAutoRefresh: false,
            });

            if (response.status == 200) {
                console.log(response);

                alert("CAREPLAN RECORDS - GET  /care-plans/records/{ID}/units/{UnitID}/schedules/\n\n" + (response.data.length == 0 ? "empty :(" : JSON.stringify(response.data)));
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getAvailableActivitys Error: ', error);
        } 
    },
    //----------------------------------------------------------------------------
    // CAREPLAN RECORDS - GET  /care-plans/records/{ID}/units/{UnitID}/schedules/{ScheduleID}/
    //----------------------------------------------------------------------------
    getCareplanRecordUnitSchedulesById: async function (userId, id, unitId, scheduleId) {
        try {
            const response = await request("GET", BASE_BACKEND_URL+carePlanRecords+id+"/units/"+unitId+"/schedules/"+scheduleId+"/", new URLSearchParams({
                fhirPatient: userId,
            }), null,
            {
              tokenValidationMiddleware: false,
              withAuthorization: true,
              withTokenAutoRefresh: false,
            });

            if (response.status == 200) {
                console.log(response);

                alert("CAREPLAN RECORDS - GET  /care-plans/records/{ID}/units/{UnitID}/schedules/{ScheduleID}/\n\n" + (response.data.length == 0 ? "empty :(" : JSON.stringify(response.data)));
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getAvailableActivitys Error: ', error);
        } 
    },
    //----------------------------------------------------------------------------
    // CAREPLAN RECORDS - GET  /care-plans/records/{ID}/update-check/
    //----------------------------------------------------------------------------
    getCareplanRecordUpdateCheck: async function (userId, id) {
        try {
            const response = await request("GET", BASE_BACKEND_URL+carePlanRecords+id+"/update-check/", new URLSearchParams({
                fhirPatient: userId,
            }), null,
            {
              tokenValidationMiddleware: false,
              withAuthorization: true,
              withTokenAutoRefresh: false,
            });

            if (response.status == 200) {
                console.log(response);

                alert("CAREPLAN RECORDS - GET  /care-plans/records/{ID}/update-check/\n\n" + (response.data.length == 0 ? "empty :(" : JSON.stringify(response.data)));
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getAvailableActivitys Error: ', error);
        } 
    },
    //----------------------------------------------------------------------------
    // CONTENT PACKAGE - GET  /content-packages/
    //----------------------------------------------------------------------------
    getContentPackage: async function (userId) {
        try {
            const response = await request("GET", BASE_BACKEND_URL+contentPackages, new URLSearchParams({
                fhirPatient: userId,
            }), null,
            {
              tokenValidationMiddleware: false,
              withAuthorization: true,
              withTokenAutoRefresh: false,
            });

            if (response.status == 200) {
                console.log(response);

                return response;
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getAvailableActivitys Error: ', error);
        } 
    },
    //----------------------------------------------------------------------------
    // CONTENT PACKAGE - GET  /content-packages/{name}/
    //----------------------------------------------------------------------------
    getContentPackageByName: async function (userId, name) {
        try {
            const response = await request("GET", BASE_BACKEND_URL+contentPackages+name+"/", new URLSearchParams({
                fhirPatient: userId,
            }), null,
            {
              tokenValidationMiddleware: false,
              withAuthorization: true,
              withTokenAutoRefresh: false,
            });

            if (response.status == 200) {
                console.log(response);

                alert("CONTENT PACKAGE - GET  /content-packages/{name}/\n\n" + (response.data.length == 0 ? "empty :(" : JSON.stringify(response.data)));
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getAvailableActivitys Error: ', error);
        } 
    },
    //----------------------------------------------------------------------------
    // CONTENT PACKAGE - GET  /content-packages/{name}/{version}/
    //----------------------------------------------------------------------------
    getContentPackageByNameVersion: async function (userId, name, version) {
        try {
            const response = await request("GET", BASE_BACKEND_URL+contentPackages+name+"/"+version+"/", new URLSearchParams({
                fhirPatient: userId,
            }), null,
            {
              tokenValidationMiddleware: false,
              withAuthorization: true,
              withTokenAutoRefresh: false,
            });

            if (response.status == 200) {
                console.log(response);

                alert("CONTENT PACKAGE - GET  /content-packages/{name}/{version}/\n\n" + (response.data.length == 0 ? "empty :(" : JSON.stringify(response.data)));
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getAvailableActivitys Error: ', error);
        } 
    },
    //----------------------------------------------------------------------------
    // PATIENTS - GET  /users/patients/
    //----------------------------------------------------------------------------
    getPatients: async function (userId) {
        try {
            const response = await request("GET", BASE_BACKEND_URL+usersEndoint+"patients/", new URLSearchParams({
                fhirPatient: userId,
            }), null,
            {
              tokenValidationMiddleware: false,
              withAuthorization: true,
              withTokenAutoRefresh: false,
            });

            if (response.status == 200) {
                console.log(response);

                alert("PATIENTS - GET  /users/patients/\n\n" + (response.data.length == 0 ? "empty :(" : JSON.stringify(response.data)));
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getPatients Error: ', error);
        } 
    },
    //----------------------------------------------------------------------------
    // PATIENTS - GET  /users/patients/{id}/
    //----------------------------------------------------------------------------
    getPatientById: async function (userId, patientId) {
        try {
            const response = await request("GET", BASE_BACKEND_URL+usersEndoint+"patients/"+patientId+"/", new URLSearchParams({
                fhirPatient: userId,
            }), null,
            {
              tokenValidationMiddleware: false,
              withAuthorization: true,
              withTokenAutoRefresh: false,
            });

            if (response.status == 200) {
                console.log(response);

                alert("PATIENTS - GET  /users/patients/\n\n" + (response.data.length == 0 ? "empty :(" : JSON.stringify(response.data)));
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getPatients Error: ', error);
        } 
    },
    //----------------------------------------------------------------------------
    // CREATE USER - POST  /users/patients/{id}/
    // Register a new user in the application
    //----------------------------------------------------------------------------
    postCreateNewUser: async function (userId, payload) {
        try {
            const response = await request(
                "POST", 
                BASE_BACKEND_URL+usersEndoint, 
                payload, 
                new URLSearchParams({
                    fhirPatient: userId,
                    headers: {
                        //"Content-Type": "application/json",
                        //"accept": "*/*"
                        'Accept': 'application/json',
                        'Content-Type': 'application/json' 
                    }
                }), 
                //null,
                {
                    tokenValidationMiddleware: false,
                    withAuthorization: true,
                    withTokenAutoRefresh: false,
                }
            );

            if (response.status == 200) {
                console.log(response);

                alert("CREATE USER - POST  /users/\n\n" + (response.data.length == 0 ? "empty :(" : JSON.stringify(response.data)));
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getPatients Error: ', error);
        } 
    },
    //----------------------------------------------------------------------------
    // VOICE RECORDS - GET  /voice-records/
    // returns all voice records from patient
    //----------------------------------------------------------------------------
    getVoiceRecords: async function (userId) {
        try {
            const response = await request("GET", BASE_BACKEND_URL+voiceRecordEndoint, new URLSearchParams({
                fhirPatient: userId,
            }), /*null,*/
            {
              tokenValidationMiddleware: false,
              withAuthorization: true,
              withTokenAutoRefresh: false,
            });

            if (response.status == 200) {
                console.log(userId, response);

                alert("VOICE RECORDS - GET  /voice-records/\n\n" + (response.data.length == 0 ? "empty :(" : JSON.stringify(response.data)));
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getVoiceRecords Error: ', error);
        } 
    },
    //----------------------------------------------------------------------------
    // VOICE RECORDS - GET  /voice-records/{id}/
    // download a voice record
    //----------------------------------------------------------------------------
    getVoiceRecordById: async function (userId, recordId) {
        try {

            const response = await request(
                "GET", 
                BASE_BACKEND_URL+voiceRecordEndoint+recordId+"/", 
                new URLSearchParams({
                    fhirPatient: userId,
                }), 
                null,
                {
                    tokenValidationMiddleware: false,
                    withAuthorization: true,
                    withTokenAutoRefresh: false,
                }
            );

            if (response.status == 200) {
                console.log(response);
                alert("VOICE RECORDS - GET  /voice-records/{id}/\n\n" + (response.data.length == 0 ? "empty :(" : JSON.stringify(response.data)));
            } else {
                console.error(response);
            }

        } catch (error) {
            console.log('Api.getVoiceRecordById Error: ', error);
        } 
    },
    //----------------------------------------------------------------------------
    // VOICE RECORD - POST  /voice-records/
    // Upload a new voice record
    //----------------------------------------------------------------------------
    postVoiceRecords: async function (userId, payload) {
        try {

            var formData = new FormData();
            formData.append("file", payload);

            const response = await request(
                "POST", 
                BASE_BACKEND_URL+voiceRecordEndoint, 
                formData,  // payload,
                {
                    fhirPatient: userId,
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "accept": "*/*"
                    }
                },
                /*
                new URLSearchParams({
                    fhirPatient: userId,
                }),*/
                {
                    tokenValidationMiddleware: false,
                    withAuthorization: true,
                    withTokenAutoRefresh: false,
                }
            );

            if (response.status == 200) {
                console.log(response);
                alert("VOICE RECORD - POST  /voice-records/\n\n" + (response.data.length == 0 ? "empty :(" : JSON.stringify(response.data)));
            } else {
                console.error(response);
            }

        } catch (error) {
            console.log('Api.postVoiceRecords Error: ', error);
        } 
    },
    //----------------------------------------------------------------------------
    // PROCEDURES - GET  /procedures/
    //----------------------------------------------------------------------------
    getProcedures: async function (userId) {
        try {
            const response = await request("GET", BASE_BACKEND_URL+procedures, new URLSearchParams({
                fhirPatient: userId,
            }), null,
            {
              tokenValidationMiddleware: false,
              withAuthorization: true,
              withTokenAutoRefresh: false,
            });

            if (response.status == 200) {
                console.log(response);
                alert("PROCEDURES - GET  /procedures/\n\n" + (response.data.length == 0 ? "empty :(" : JSON.stringify(response.data)));

                return response;
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getProcedures Error: ', error);
        } 
    },
    //----------------------------------------------------------------------------
    // CREATE USER - POST  /users/patients/{id}/
    // Register a new user in the application
    //----------------------------------------------------------------------------
    postProcedures: async function (userId, payload) {
        try {
            const response = await request(
                "POST", 
                BASE_BACKEND_URL+procedures, 
                payload, 
                new URLSearchParams({
                    fhirPatient: userId,
                    headers: {
                        //"Content-Type": "application/json",
                        //"accept": "*/*"
                        'Accept': 'application/json',
                        'Content-Type': 'application/json' 
                    }
                }), 
                //null,
                {
                    tokenValidationMiddleware: false,
                    withAuthorization: true,
                    withTokenAutoRefresh: false,
                }
            );

            if (response.status == 200) {
                console.log(response);

                alert("CREATE USER - POST  /users/\n\n" + (response.data.length == 0 ? "empty :(" : JSON.stringify(response.data)));
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getPatients Error: ', error);
        } 
    },
}

export async function request (
    method, 
    url, 
    options, 
    customConfig, 
    validations = {
        tokenValidationMiddleware: true,
        withAuthorization: true,
        withTokenAutoRefresh: true,
    } 
) {
    if (!isValidToken() && validations.tokenValidationMiddleware) {
        //store.commit('alerts/setAlertMessage', 'The session has expired');
        //store.commit('alerts/setShowAlert', true);
        
        clearData();
        
        await appRouter.push({ path: '/'});
        throw new Error('Session expired, going to login!');
    } else {

        let config = { headers: {} };
    
        
        if (customConfig) {
            config = { ...customConfig };
        }
    
        if (validations.withAuthorization) {
            let token = getLocalToken();
            /*
            if (validations.withTokenAutoRefresh) {
            token = await getAuthTokenWithRefresh();
            }
            */
            config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`,
            };
        }
            
        let response = null;
        switch (method) {
        case "GET":
            response = await axios.get(url, config);
            break;
        case "POST":
            response = await axios.post(url, options, config);
            break;
        case "PATCH":
            response = await axios.patch(url, options, config);
            break;
        case "PUT":
            response = await axios.put(url, options, config);
            break;
        case "DELETE":
            response = await axios.delete(url, config);
            break;
        default:
            response = await axios.get(url, config);
            break;
        }
        return response;
    }
}

export default api;

