"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentDeleteDescription = void 0;
exports.documentDeleteDescription = [
    {
        displayName: 'Connector Name or ID',
        name: 'connectorId',
        type: 'options',
        typeOptions: {
            loadOptionsMethod: 'getConnectors',
        },
        default: '',
        description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
        required: true,
        displayOptions: {
            show: {
                operation: ['delete', 'deleteOldDocuments'],
                resource: ['document'],
            },
        },
    },
    {
        displayName: 'Document ID',
        name: 'documentId',
        type: 'string',
        displayOptions: {
            show: {
                operation: ['delete'],
                resource: ['document'],
            },
        },
        default: '',
        description: "The document's ID to delete",
    },
    {
        displayName: 'Older Than',
        name: 'olderThan',
        type: 'dateTime',
        displayOptions: {
            show: {
                operation: ['deleteOldDocuments'],
                resource: ['document'],
            },
        },
        default: '',
        description: 'The timestamp to delete documents older than',
    },
];
//# sourceMappingURL=delete.js.map