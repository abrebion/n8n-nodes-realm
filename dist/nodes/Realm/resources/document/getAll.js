"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentGetManyDescription = void 0;
const showOnlyForDocumentsGetMany = {
    operation: ['getAll'],
    resource: ['document'],
};
exports.documentGetManyDescription = [
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
            show: showOnlyForDocumentsGetMany,
        },
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
            show: showOnlyForDocumentsGetMany,
        },
    },
];
//# sourceMappingURL=getAll.js.map