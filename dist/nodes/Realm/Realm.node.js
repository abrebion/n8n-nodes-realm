"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Realm = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const GenericFunctions_1 = require("./GenericFunctions");
const chat_1 = require("./resources/chat");
const assistant_1 = require("./resources/assistant");
const connector_1 = require("./resources/connector");
const document_1 = require("./resources/document");
class Realm {
    constructor() {
        this.description = {
            displayName: 'Realm',
            name: 'realm',
            icon: { light: 'file:../../icons/realm.svg', dark: 'file:../../icons/realm-dark.svg' },
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Interact with the Realm API',
            defaults: {
                name: 'Realm',
            },
            usableAsTool: true,
            inputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            outputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            credentials: [{ name: 'realmApi', required: true }],
            requestDefaults: {
                baseURL: '={{ $credentials.baseUrl }}',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            },
            properties: [
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'Chat',
                            value: 'chat',
                        },
                        {
                            name: 'Assistant',
                            value: 'assistant',
                        },
                        {
                            name: 'Connector',
                            value: 'connector',
                        },
                        {
                            name: 'Document',
                            value: 'document',
                        },
                    ],
                    default: 'chat',
                },
                ...chat_1.chatDescription,
                ...assistant_1.assistantDescription,
                ...connector_1.connectorDescription,
                ...document_1.documentDescription,
            ],
            hints: [
                {
                    message: "You are streaming the response. It won't display correctly here.",
                    type: 'info',
                    location: 'outputPane',
                    whenToDisplay: 'beforeExecution',
                    displayCondition: '={{ $parameter["resource"] === "chat" && $parameter["additionalFields"]?.streamResponse === true }}',
                },
            ],
        };
        this.methods = {
            loadOptions: {
                async getAssistants() {
                    const returnData = [];
                    const responseData = await GenericFunctions_1.realmApiRequest.call(this, 'GET', '/assistants', {}, {});
                    const items = responseData.data || [];
                    for (const item of items) {
                        returnData.push({
                            name: item.name,
                            value: item.id,
                            description: item.description,
                        });
                    }
                    return returnData.sort((a, b) => a.name.localeCompare(b.name));
                },
                async getConnectors() {
                    const returnData = [];
                    const responseData = await GenericFunctions_1.realmApiRequest.call(this, 'GET', '/connectors', {}, {});
                    const items = responseData.data || [];
                    for (const item of items) {
                        returnData.push({
                            name: item.name,
                            value: item.id,
                            description: item.description,
                        });
                    }
                    return returnData.sort((a, b) => a.name.localeCompare(b.name));
                },
            },
        };
    }
}
exports.Realm = Realm;
//# sourceMappingURL=Realm.node.js.map