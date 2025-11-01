"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatGetManyDescription = void 0;
const showOnlyForChatGetMany = {
    operation: ['getAll'],
    resource: ['chat'],
};
exports.chatGetManyDescription = [
    {
        displayName: 'Limit',
        name: 'limit',
        type: 'number',
        displayOptions: {
            show: {
                ...showOnlyForChatGetMany,
                returnAll: [false],
            },
        },
        typeOptions: {
            minValue: 1,
            maxValue: 100,
        },
        default: 50,
        routing: {
            send: {
                type: 'query',
                property: 'limit',
            },
            output: {
                maxResults: '={{$value}}',
            },
        },
        description: 'Max number of results to return',
    },
];
//# sourceMappingURL=getAll.js.map