import type { INodeProperties } from 'n8n-workflow';
import { documentGetManyDescription } from './getAll';
import { documentGetDescription } from './get';
import { documentDeleteDescription } from './delete';

const showOnlyFordocuments = {
	resource: ['document'],
};

export const documentDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyFordocuments,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get documents',
				description: 'Get documents for a connector',
				routing: {
					request: {
						method: 'GET',
						url: '=/documents/{{$parameter.connectorId}}/',
						arrayFormat: 'repeat',
						qs: {
							fields: '={{$parameter.fieldsToInclude}}',
						},
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a document',
				description: 'Get a single document',
				routing: {
					request: {
						method: 'GET',
						url: '=/documents/{{$parameter.connectorId}}/{{$parameter.documentId}}',
						arrayFormat: 'repeat',
						qs: {
							fields: '={{$parameter.fieldsToInclude}}',
						},
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a document',
				description: 'Delete a document',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/documents/{{$parameter.connectorId}}/{{$parameter.documentId}}',
					},
				},
			},
			{
				name: 'Delete Old Documents',
				value: 'deleteOldDocuments',
				action: 'Delete documents older than a specified timestamp',
				description: 'Delete documents older than a specified timestamp',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/documents/{{$parameter.connectorId}}',
						qs: {
							older_than: '={{$parameter.olderThan + "Z"}}',
						},
					},
				},
			},
		],
		default: 'getAll',
	},
	...documentGetManyDescription,
	...documentGetDescription,
	...documentDeleteDescription,
];
