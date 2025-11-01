import type { INodeProperties } from 'n8n-workflow';
import { assistantGetManyDescription } from './getAll';

const showOnlyForAssistants = {
	resource: ['assistant'],
};

export const assistantDescription: INodeProperties[] = [
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
	...assistantGetManyDescription,
];
