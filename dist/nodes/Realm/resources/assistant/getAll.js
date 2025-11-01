"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assistantGetManyDescription = void 0;
const showOnlyForAssistantGetMany = {
    operation: ['getAll'],
    resource: ['assistant'],
};
exports.assistantGetManyDescription = [
    {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean',
        displayOptions: {
            show: { ...showOnlyForAssistantGetMany, returnAll: [false] },
        },
        default: true,
        description: 'Whether to return all results or only up to a given limit',
    },
];
//# sourceMappingURL=getAll.js.map