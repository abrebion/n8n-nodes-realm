import type { INodeProperties } from 'n8n-workflow';

const showOnlyForChatGetMany = {
	operation: ['getAll'],
	resource: ['chat'],
};

export const chatGetManyDescription: INodeProperties[] = [
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForChatGetMany,
				returnAll: [false],
			},
		},
		default: '',
		description: 'Max number of results to return',
	},
];
