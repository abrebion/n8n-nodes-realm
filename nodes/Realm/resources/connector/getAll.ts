import type { INodeProperties } from 'n8n-workflow';

const showOnlyForConnectorsGetMany = {
	operation: ['getAll'],
	resource: ['connector'],
};

export const connectorGetManyDescription: INodeProperties[] = [
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
