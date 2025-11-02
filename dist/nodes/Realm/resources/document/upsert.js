"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentUpsertDescription = void 0;
const showOnlyForDocumentsUpsert = {
    operation: ['createOrUpdate'],
    resource: ['document'],
};
exports.documentUpsertDescription = [
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
            show: showOnlyForDocumentsUpsert,
        },
    },
    {
        displayName: 'Documents',
        name: 'documents',
        type: 'json',
        description: 'The documents to upsert',
        hint: 'Array of documents. Each document should have "id", "title", "url", "content", "content_type", "created_at" and "updated_at" keys. Possibly with a "meta" key.',
        default: '{}',
        displayOptions: {
            show: { ...showOnlyForDocumentsUpsert },
        },
        required: true,
        routing: {
            send: {
                type: 'body',
                property: 'documents',
            },
        },
    },
];
//# sourceMappingURL=upsert.js.map