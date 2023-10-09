import axios from 'axios';
import { isValidToken, getLocalToken, clearData/*, logout, refreshToken*/ } from '@/scripts/auth/auth.js';
import {appRouter} from "@/router/router.js";
//import store from '@/store/index';
import auth from "@/scripts/auth/auth";

//https://backend.relivr-integration.nuromedia.com/swagger-ui/index.html
//https://backend.relivr-integration.nuromedia.com/swagger-ui/api_changelog
const BASE_BACKEND_URL = "https://backend.relivr-integration.nuromedia.com";

const userEndpoint = "/user/";
const userActivitysEndpoint = "/user/available-activities/";

const availableActivities = "/activities/";

const carePlanPresets = "/care-plans/presets/";
const carePlanRecords = "/care-plans/records/";

const contentPackages = "/content-packages/";

const procedures = "/procedures/";

const usersEndpoint = "/users/";
const patientsEndpoint = "/users/patients/";
const therapistsEndpoint = "/users/therapists/";

const voiceRecordEndpoint = "/voice-records/";

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
                    tokenValidationMiddleware: true,
                    withAuthorization: true,
                    withTokenAutoRefresh: true,
                });

            if (response.status == 200) {
                sessionStorage.setItem("user", JSON.stringify(response.data));
                return response;
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getUserData Error: ', error);
        }
    },
    //---------------------------------------------
    // USER - GET  /user/available-activities/
    //---------------------------------------------
    getAvailableActivitys: async function (userId) {
        try {
            const response = await request(
                "GET",
                BASE_BACKEND_URL+userActivitysEndpoint,
                {
                    fhirPatient: userId,
                },
                null,
                {
                    tokenValidationMiddleware: false,
                    withAuthorization: true,
                    withTokenAutoRefresh: true,
                });

            if (response.status == 200) {
                return response;
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getAvailableActivitys Error: ', error);
        }
    },
    //----------------------------------------------------------------------------
    // PATIENT - GET /activities/?available=true
    //----------------------------------------------------------------------------

    getQuestionnaireAvailableActivities: async function () {
        try {
            const response = await request(
                "GET",
                BASE_BACKEND_URL + `${availableActivities}?available=true&primaryType=QUESTIONNAIRE`,
                {
                },
                null,
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
    // PATIENT - overview with all relevant activities to the other topics inside “Kurs-Programm” - GET /activities/?available=true
    //----------------------------------------------------------------------------

    getOtherAvailableActivities: async function () {
        try {
            const response = await request(
                "GET",
                BASE_BACKEND_URL + `${availableActivities}?available=true`,
                {
                },
                null,
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
            const response = await request("GET", BASE_BACKEND_URL+patientsEndpoint, new URLSearchParams({
                    fhirPatient: userId,
                }), null,
                {
                    tokenValidationMiddleware: false,
                    withAuthorization: true,
                    withTokenAutoRefresh: true,
                });

            if (response.status == 200) {
                return response.data;
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getPatients Error: ', error);
        }
    },
    getPatientsConsents: async function (userId, fhir_uuid) {
        try {

            const response = await request(
                "GET",
                BASE_BACKEND_URL+patientsEndpoint+fhir_uuid+"/consents/", new URLSearchParams({
                    fhirPatient: userId,
                }), null,
                {
                    tokenValidationMiddleware: false,
                    withAuthorization: true,
                    withTokenAutoRefresh: true,
                });

            if (response.status == 200 || response.status == 201) {
                return response.data;
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getPatients Error: ', error);
        }
    },

    postPatientsConsents: async function (userId, fhir_uuid, payload) {
        try {
            console.log("payload: " + JSON.stringify(payload))

            const response = await request(
                "POST",
                BASE_BACKEND_URL+patientsEndpoint+fhir_uuid+"/consents/",
                payload,
                {
                    fhirPatient: userId,
                    headers: {
                        "Content-Type": "application/json",
                        //"accept": "*/*"
                    }
                },
                {
                    tokenValidationMiddleware: false,
                    withAuthorization: true,
                    withTokenAutoRefresh: true,
                });

            if (response.status == 200 || response.status == 201) {
                return response.data;
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getPatients Error: ', error);
        }
    },
    deletePatientsConsents: async function (fhir_uuid, therapist_fhir_uuid) {
        try {
            const response = await request(
                "DELETE",
                BASE_BACKEND_URL +
                patientsEndpoint +
                fhir_uuid +
                "/consents/therapist/" +
                therapist_fhir_uuid +
                "/",
                {
                    tokenValidationMiddleware: false,
                    withAuthorization: true,
                    withTokenAutoRefresh: true,
                }
            );

            if (response.status == 200 || response.status == 201) {
                return response.data;
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log("Api.getPatients Error: ", error);
        }
    },
    //----------------------------------------------------------------------------
    // PATIENTS - GET  /users/patients/{id}/
    //----------------------------------------------------------------------------
    getPatientById: async function (userId, patientId) {
        try {
            const response = await request(
                "GET",
                BASE_BACKEND_URL+usersEndpoint+"patients/"+patientId+"/",
                new URLSearchParams({
                    fhirPatient: userId,
                }),
                null,
                {
                    tokenValidationMiddleware: false,
                    withAuthorization: true,
                    withTokenAutoRefresh: true,
                });
            if (response.status == 200) {
                return response.data;
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getPatients Error: ', error);
        }
    },
    getTherapists: async function (userId) {
        try {

            const response = await request(
                "GET",
                BASE_BACKEND_URL+therapistsEndpoint, new URLSearchParams({
                    fhirPatient: userId,
                }), null,
                {
                    tokenValidationMiddleware: false,
                    withAuthorization: true,
                    withTokenAutoRefresh: true,
                });

            if (response.status == 200 || response.status == 201) {
                return response.data;
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getPatients Error: ', error);
        }
    },
    getTherapistByID: async function (userId, fhir_uuid) {
        try {
            const response = await request(
                "GET",
                BASE_BACKEND_URL + therapistsEndpoint + fhir_uuid + "/", new URLSearchParams({
                    fhirPatient: userId,
                }),null,
                {
                    tokenValidationMiddleware: false,
                    withAuthorization: true,
                    withTokenAutoRefresh: true,
                });
            if (response.status == 200 || response.status == 201) {
                return response.data;
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getPatients Error: ', error);
        }
    },
    getTherapistsConsents: async function (userId, fhir_uuid) {
        try {
            const response = await request(
                "GET",
                BASE_BACKEND_URL+therapistsEndpoint+fhir_uuid+"/consents/", new URLSearchParams({
                    fhirPatient: userId,
                }), null,
                {
                    tokenValidationMiddleware: false,
                    withAuthorization: true,
                    withTokenAutoRefresh: true,
                });
            if (response.status == 200 || response.status == 201) {
                return response.data;
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getPatients Error: ', error);
        }
    },
    postTherapistsConsents: async function (userId, fhir_uuid, payload) {
        try {
            console.log("payload: " + payload);

            const response = await request(
                "POST",
                BASE_BACKEND_URL + therapistsEndpoint + fhir_uuid + "/consents/",
                payload,
                {
                    fhirPatient: userId,
                    headers: {
                        "Content-Type": "application/json",
                        //"accept": "*/*"
                    },
                },
                {
                    tokenValidationMiddleware: false,
                    withAuthorization: true,
                    withTokenAutoRefresh: true,
                }
            );

            if (response.status == 200 || response.status == 201) {
                return response.data;
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log("Api.getPatients Error: ", error);
        }
    },
    deleteTherapistsConsents: async function (fhir_uuid, patient_fhir_uuid) {
        try {
            const response = await request(
                "DELETE",
                BASE_BACKEND_URL +
                therapistsEndpoint +
                fhir_uuid +
                "/consents/patient/" +
                patient_fhir_uuid +
                "/",
                {
                    tokenValidationMiddleware: false,
                    withAuthorization: true,
                    withTokenAutoRefresh: true,
                }
            );

            if (response.status == 200 || response.status == 201) {
                return response.data;
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log("Api.getPatients Error: ", error);
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
                BASE_BACKEND_URL+usersEndpoint,
                payload,
                {
                    fhirPatient: userId,
                    headers: {
                        "Content-Type": "application/json",
                        //"accept": "*/*"
                    }
                },
                {
                    tokenValidationMiddleware: false,
                    withAuthorization: true,
                    withTokenAutoRefresh: true,
                }
            );

            if (response.status == 200 || response.status == 201) {
                alert("User successfully created!");
            } else {
                alert("Oops, something went wrong.");
            }
        } catch (error) {
            console.log('Api.getPatients Error: ', error);
            alert("Oops, something went wrong.");
        }
    },
    //----------------------------------------------------------------------------
    // VOICE RECORDS - GET  /voice-records/
    // returns all voice records from patient
    //----------------------------------------------------------------------------
    getVoiceRecords: async function (userId) {
        try {
            const response = await request("GET", BASE_BACKEND_URL+voiceRecordEndpoint, new URLSearchParams({
                    fhirPatient: userId,
                }), /*null,*/
                {
                    tokenValidationMiddleware: false,
                    withAuthorization: true,
                    withTokenAutoRefresh: false,
                });

            if (response.status == 200) {
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
                BASE_BACKEND_URL+voiceRecordEndpoint+recordId+"/",
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
                //console.log(response);
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
                BASE_BACKEND_URL+voiceRecordEndpoint,
                formData,  // payload,
                {
                    fhirPatient: userId,
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "accept": "*/*"
                    }
                },
                {
                    tokenValidationMiddleware: false,
                    withAuthorization: true,
                    withTokenAutoRefresh: false,
                }
            );

            if (response.status == 200) {
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
    getRunningProcedures: async function (userId) {
        try {
            const response = await request(
                "GET",
                BASE_BACKEND_URL+"/user/running-procedure/",
                new URLSearchParams({
                    fhirPatient: userId,
                }),
                null,
                {
                    tokenValidationMiddleware: false,
                    withAuthorization: true,
                    withTokenAutoRefresh: true,
                });

            if (response.status == 200) {
                return response;
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getProcedures Error: ', error);
        }
    },
    //----------------------------------------------------------------------------
    // PROCEDURES - GET  /procedures/
    //----------------------------------------------------------------------------
    getProcedures: async function (userId) {
        try {
            const response = await request(
                "GET",
                BASE_BACKEND_URL+procedures,
                new URLSearchParams({
                    fhirPatient: userId,
                }),
                null,
                {
                    tokenValidationMiddleware: false,
                    withAuthorization: true,
                    withTokenAutoRefresh: true,
                });

            if (response.status == 200) {
                return response;
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getProcedures Error: ', error);
        }
    },
    //----------------------------------------------------------------------------
    // CREATE PROCEDURE - POST  /procedures/
    // ...
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
                {
                    tokenValidationMiddleware: false,
                    withAuthorization: true,
                    withTokenAutoRefresh: true,
                }
            );

            if (response.status == 200 || response.status == 201) {
                return response
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getPatients Error: ', error);
        }
    },
    patchProcedures: async function (userId, id, payload) {
        try {
            const response = await request(
                "PATCH",
                BASE_BACKEND_URL+procedures+id+"/",
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
                {
                    tokenValidationMiddleware: false,
                    withAuthorization: true,
                    withTokenAutoRefresh: true,
                }
            );

            if (response.status == 200 || response.status == 201) {
                return response
            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Api.getPatients Error: ', error);
        }
    },
    //----------------------------------------------------------------------------
    // CREATE PROCEDURE RESULT - POST  /procedures/{id}/units/{unitid}/results
    // ...
    //----------------------------------------------------------------------------
    postProcedureResultBatch: async function (userId, id, unitId, payload) {
        try {
            const response = await request(
                "POST",
                BASE_BACKEND_URL+procedures+id+"/units/"+unitId+"/results/batch/",
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
                {
                    tokenValidationMiddleware: false,
                    withAuthorization: true,
                    withTokenAutoRefresh: true,
                }
            );

            if (response.status == 200) {
                return response;
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

            if (validations.withTokenAutoRefresh) {
                if (!isValidToken()) {
                    await auth.refreshToken();
                    token = getLocalToken();
                    console.log("token refreshed!")
                } else {
                    console.log("token still valid!")
                }
            }

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

        if (response) {
            console.log("status: " + response)
            if (response.status == 401) {
                //alert("no auth!")
                auth.logout();
            }
            return response;
        }
    }
}

export default api;

