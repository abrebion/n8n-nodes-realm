"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.realmApiRequest = realmApiRequest;
const n8n_workflow_1 = require("n8n-workflow");
async function realmApiRequest(method, path, body = {}, qs = {}) {
    const options = {
        headers: {},
        method,
        body,
        qs,
        baseURL: 'https://abtasty.withrealm.com/api/external/alpha',
        url: path,
        json: true,
    };
    try {
        if (Object.keys(body).length === 0) {
            delete options.body;
        }
        return await this.helpers.httpRequestWithAuthentication.call(this, 'realmApi', options);
    }
    catch (error) {
        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
    }
}
//# sourceMappingURL=GenericFunctions.js.map