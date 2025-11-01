"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectorDescription = void 0;
const getAll_1 = require("./getAll");
const showOnlyForConnectors = {
    resource: ['connector'],
};
exports.connectorDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForConnectors,
        },
        options: [
            {
                name: 'Get Many',
                value: 'getAll',
                action: 'Get connectors',
                description: 'Get connectors',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/connectors',
                    },
                },
            },
        ],
        default: 'getAll',
    },
    ...getAll_1.connectorGetManyDescription,
];
//# sourceMappingURL=index.js.map