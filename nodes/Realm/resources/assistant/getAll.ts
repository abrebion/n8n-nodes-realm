import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAssistantGetMany = {
	operation: ['getAll'],
	resource: ['assistant'],
};

export const assistantGetManyDescription: INodeProperties[] = [
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
