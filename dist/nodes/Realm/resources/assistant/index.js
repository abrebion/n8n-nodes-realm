"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assistantDescription = void 0;
const getAll_1 = require("./getAll");
const showOnlyForAssistants = {
    resource: ['assistant'],
};
exports.assistantDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForAssistants,
        },
        options: [
            {
                name: 'Get Many',
                value: 'getAll',
                action: 'Get assistants',
                description: 'Get assistants',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/assistants',
                    },
                },
            },
        ],
        default: 'getAll',
    },
    ...getAll_1.assistantGetManyDescription,
];
//# sourceMappingURL=index.js.map