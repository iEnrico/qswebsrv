import decode from 'jwt-decode';
import {request} from '@/scripts/api/api.js'
//import {appRouter} from "@/router/router.js";
//import api from "@/scripts/api/api.js";

const BASE_URL = "https://keycloak.relivr-integration.nuromedia.com/realms/relivr/protocol/openid-connect";
const AUD_URL = "https://fhir.relivr-integration.nuromedia.com/fhir-server/api/v4";

const DEVICE_URL = "https://keycloak.relivr-integration.nuromedia.com/realms/relivr/device";

const authorizeEndpoint = "/auth";
const tokenEndpoint = "/token";
const logoutEndpoint = "/logout";

const clientId = "website";

var auth = {

    generateToken: async function () {
        if (window.location.search) {

            var args = new URLSearchParams(window.location.search);
            var code = args.get("code");
            console.log("returned keycloak code: " + code)

            if (code) {
                try {

                    const response = await request("POST", BASE_URL+tokenEndpoint, new URLSearchParams({
                        client_id: clientId,
                        code_verifier: window.sessionStorage.getItem("code_verifier"),
                        grant_type: "authorization_code",
                        redirect_uri: location.href.replace(location.search, ''),
                        code: code
                    }),
                    null,
                    {
                      tokenValidationMiddleware: false,
                      withAuthorization: false,
                      withTokenAutoRefresh: false,
                    });

                    if (response.status == 200) {
                        console.log(response);
                        saveData(response);

                        // stay on login and show token
                        //location.href = location.href.replace(location.search, '');

                        window.location.reload(true);

                        // goto dashboard if success
                        //await appRouter.push({ path: '/dashboard1'});

                    } else {
                        console.error(response);
                    }
                } catch (error) {
                    console.log('Auth.refreshToken Error: ', error);
                }
            }
        }
    },
    refreshToken: async function () {
        try {

            const response = await request("POST", BASE_URL+tokenEndpoint, new URLSearchParams({
                client_id: clientId,
                grant_type: "refresh_token",
                refresh_token: sessionStorage.getItem("refresh_token")
            }),
            null,
            {
                tokenValidationMiddleware: false,
                withAuthorization: false,
                withTokenAutoRefresh: false,
            });

            if (response.status == 200) {
                console.log("Refresh token saved response:",response);
                saveData(response);

                // stay on login and show token
                //location.href = location.href.replace(location.search, '');

                // goto dashboard if success
                //await appRouter.push({ path: '/dashboard1'});

            } else {
                console.error(response);
            }
        } catch (error) {
            console.log('Auth.refreshToken Error: ', error);
        }
    },
    deviceLogin: async function () {
        try {
            redirectKeycloakNoParam(DEVICE_URL);
        } catch (error) {
            console.log('Auth.deviceLogin Error: ', error);
        }
    },
    login: function () {
        var codeVerifier = generateRandomString(64);
        const challengeMethod = crypto.subtle ? "S256" : "plain";
        Promise.resolve()
            .then(() => {
                return (challengeMethod === 'S256') ? generateCodeChallenge(codeVerifier) : codeVerifier;
            })
            .then(function (codeChallenge) {
                window.sessionStorage.setItem("code_verifier", codeVerifier);
                redirectKeycloak(authorizeEndpoint, new URLSearchParams({
                    scope: "openid",
                    response_type: "code",
                    client_id: clientId,
                    code_challenge_method: challengeMethod,
                    code_challenge: codeChallenge,
                    redirect_uri: window.location.href.split('?')[0],
                    aud: AUD_URL
                }));
            });
    },
    logout: function (/*token*/) {
        Promise.resolve()
            .then(function () {
                redirectKeycloak(logoutEndpoint, new URLSearchParams({
                    client_id: clientId,
                    //id_token_hint: token,
                    post_logout_redirect_uri: "http://localhost:8080"//window.location.href.split('?')[0],
                }));
                clearData();
            });
    }

}

function saveData(response) {
    sessionStorage.setItem("access_token", response.data.access_token);
    sessionStorage.setItem("expires_in", response.data.expires_in);
    sessionStorage.setItem("refresh_expires_in", response.data.refresh_expires_in);
    sessionStorage.setItem("refresh_token", response.data.refresh_token);
    sessionStorage.setItem("token_type", response.data.token_type);
    sessionStorage.setItem("id_token", response.data.id_token);
    //sessionStorage.setItem("not-before-policy", response.data.not-before-policy);
    sessionStorage.setItem("session_state", response.data.session_state);
    sessionStorage.setItem("scope", response.data.scope);
}

export function clearData() {
    sessionStorage.removeItem("id_token");
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("expires_in");
    sessionStorage.removeItem("refresh_expires_in");
    sessionStorage.removeItem("refresh_token");
    sessionStorage.removeItem("token_type");
    sessionStorage.removeItem("id_token");
    //sessionStorage.removeItem("not-before-policy");
    sessionStorage.removeItem("session_state");
    sessionStorage.removeItem("scope");

    // move to pinia?
    sessionStorage.removeItem("user");
}

function redirectKeycloak(endpoint, params) {
    window.location = BASE_URL+endpoint + "/?" + params;
}

function redirectKeycloakNoParam(endpoint) {
    window.location = endpoint;
}

async function generateCodeChallenge(codeVerifier) {
    var digest = await crypto.subtle.digest("SHA-256",
        new TextEncoder().encode(codeVerifier));

    return btoa(String.fromCharCode(...new Uint8Array(digest)))
        .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
}

function generateRandomString(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

export function isLoggedIn () {
    //return true;
    return sessionStorage.getItem("access_token") ? true : false;
}

export function isValidToken () {
    //return true;
    if (remainingSessionTime()) {
        return true;
    } else {
        return false;
    }
}


export function remainingSessionTime () {
    const token = getLocalToken();
    console.log('token:',token);
    if (token) {
        try {
            const decodedToken = decode(token);
            console.log('decodedToken:',decodedToken);
            const date = Math.round(new Date().getTime() / 1000);
            console.log('date:',date);
            const remainingSessionMinutes = Number(((decodedToken.exp - date) / 60).toFixed(0));
            console.log('remaining session minutes: ', remainingSessionMinutes);
            return remainingSessionMinutes > 0;
        } catch (error) {
            console.log('Remaining session time -> invalid token format', error);
        }
    }
}

export function getLocalToken () {
    return sessionStorage.getItem("access_token");
}

export default auth;
