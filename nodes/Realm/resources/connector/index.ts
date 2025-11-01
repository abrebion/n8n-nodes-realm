import type { INodeProperties } from 'n8n-workflow';
import { connectorGetManyDescription } from './getAll';

const showOnlyForConnectors = {
	resource: ['connector'],
};

export const connectorDescription: INodeProperties[] = [
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
	...connectorGetManyDescription,
];
