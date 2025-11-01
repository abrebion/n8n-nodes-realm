"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectorGetManyDescription = void 0;
const showOnlyForConnectorsGetMany = {
    operation: ['getAll'],
    resource: ['connector'],
};
exports.connectorGetManyDescription = [
    {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean',
        displayOptions: {
            show: { ...showOnlyForConnectorsGetMany, returnAll: [false] },
        },
        default: true,
        description: 'Whether to return all results or only up to a given limit',
    },
];
//# sourceMappingURL=getAll.js.map