/**
 * Created by yassinehaddioui on 1/8/17.
 */

import request from 'superagent';

const AUTH_URL = 'http://0.0.0.0:8080/auth-check';

class ApiService {
    constructor() {

        this.request = request;
    }

    verifyKey(key, callback) {
        console.log('verifying key');
        this.request.get(AUTH_URL)
            .set('Authorization', key)
            .end(function (err, res) {
                console.log(err, res);
                if (typeof callback === "function") {
                    callback(err, res);
                }
            });
    }

    getApiKey() {
        return localStorage.getItem("apiKey");
    }

    setApiKey(key) {
        localStorage.setItem("apiKey", key);
    }
}

export default ApiService;