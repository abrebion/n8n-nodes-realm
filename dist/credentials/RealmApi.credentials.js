"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealmApi = void 0;
class RealmApi {
    constructor() {
        this.name = 'realmApi';
        this.icon = { light: 'file:../icons/realm.svg', dark: 'file:../icons/realm-dark.svg' };
        this.displayName = 'Realm API';
        this.documentationUrl = 'https://github.com/abrebion/n8n-nodes-realm?tab=readme-ov-file#credentials';
        this.logoFile = 'realm.svg';
        this.logoDarkFile = 'realm-dark.svg';
        this.properties = [
            {
                displayName: 'API Base URL',
                name: 'baseUrl',
                type: 'string',
                required: true,
                default: '',
                description: 'Your custom base URL for the Realm API (e.g. https://myaccount.withrealm.com/api/external/alpha)',
            },
            {
                displayName: 'Access Token',
                name: 'accessToken',
                type: 'string',
                typeOptions: { password: true },
                required: true,
                default: '',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    Authorization: '=Bearer {{$credentials.accessToken}}',
                },
            },
        };
        this.test = {
            request: {
                baseURL: '={{$credentials.baseUrl}}',
                url: '/chats',
            },
        };
    }
}
exports.RealmApi = RealmApi;
//# sourceMappingURL=RealmApi.credentials.js.map