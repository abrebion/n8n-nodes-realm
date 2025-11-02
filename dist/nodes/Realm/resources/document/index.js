"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentDescription = void 0;
const getAll_1 = require("./getAll");
const get_1 = require("./get");
const delete_1 = require("./delete");
const upsert_1 = require("./upsert");
const showOnlyFordocuments = {
    resource: ['document'],
};
exports.documentDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyFordocuments,
        },
        options: [
            {
                name: 'Create or Update',
                value: 'createOrUpdate',
                action: 'Create or update documents',
                description: 'Create or update documents for a connector',
                routing: {
                    request: {
                        method: 'POST',
                        url: '=/documents/{{$parameter.connectorId}}',
                    },
                },
            },
            {
                name: 'Delete',
                value: 'delete',
                action: 'Delete a document',
                description: 'Delete a document',
                routing: {
                    request: {
                        method: 'DELETE',
                        url: '=/documents/{{$parameter.connectorId}}/{{$parameter.documentId}}',
                    },
                },
            },
            {
                name: 'Delete Old Documents',
                value: 'deleteOldDocuments',
                action: 'Delete documents older than a specified timestamp',
                description: 'Delete documents older than a specified timestamp',
                routing: {
                    request: {
                        method: 'DELETE',
                        url: '=/documents/{{$parameter.connectorId}}',
                        qs: {
                            older_than: '={{$parameter.olderThan + "Z"}}',
                        },
                    },
                },
            },
            {
                name: 'Get',
                value: 'get',
                action: 'Get a document',
                description: 'Get a single document',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/documents/{{$parameter.connectorId}}/{{$parameter.documentId}}',
                        arrayFormat: 'repeat',
                        qs: {
                            fields: '={{$parameter.fieldsToInclude}}',
                        },
                    },
                },
            },
            {
                name: 'Get Many',
                value: 'getAll',
                action: 'Get documents',
                description: 'Get documents for a connector',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/documents/{{$parameter.connectorId}}/',
                        arrayFormat: 'repeat',
                        qs: {
                            fields: '={{$parameter.fieldsToInclude}}',
                        },
                    },
                },
            },
        ],
        default: 'getAll',
    },
    ...getAll_1.documentGetManyDescription,
    ...get_1.documentGetDescription,
    ...delete_1.documentDeleteDescription,
    ...upsert_1.documentUpsertDescription,
];
//# sourceMappingURL=index.js.map