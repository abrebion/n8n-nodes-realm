"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentGetDescription = void 0;
const showOnlyForDocumentsGet = {
    operation: ['get'],
    resource: ['document'],
};
exports.documentGetDescription = [
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
            show: showOnlyForDocumentsGet,
        },
    },
    {
        displayName: 'Document ID',
        name: 'documentId',
        type: 'string',
        displayOptions: {
            show: { ...showOnlyForDocumentsGet },
        },
        default: '',
        description: "The document's ID to retrieve",
    },
    {
        displayName: 'Fields to Include',
        name: 'fieldsToInclude',
        type: 'multiOptions',
        options: [
            {
                name: 'Content',
                value: 'content',
            },
            {
                name: 'Content Type',
                value: 'content_type',
            },
            {
                name: 'Document Created At',
                value: 'document_created_at',
            },
            {
                name: 'Document Updated At',
                value: 'document_updated_at',
            },
            {
                name: 'ID',
                value: 'id',
            },
            {
                name: 'Meta',
                value: 'meta',
            },
            {
                name: 'Title',
                value: 'title',
            },
            {
                name: 'URL',
                value: 'url',
            },
        ],
        default: ['id', 'title'],
        description: 'The fields to include in the response',
        displayOptions: {
            show: showOnlyForDocumentsGet,
        },
    },
];
//# sourceMappingURL=get.js.map