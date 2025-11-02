import type { INodeProperties } from 'n8n-workflow';
import { documentGetManyDescription } from './getAll';
import { documentGetDescription } from './get';
import { documentDeleteDescription } from './delete';
import { documentUpsertDescription } from './upsert';

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
				name: 'Create or Update',
				value: 'createOrUpdate',
				action: 'Create or update documents',
				description: 'Create or update documents for a connector',
				routing: {
					request: {
						method: 'POST',
						url: '=/documents/{{$parameter.connectorId}}',
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
		],
		default: 'getAll',
	},
	...documentGetManyDescription,
	...documentGetDescription,
	...documentDeleteDescription,
	...documentUpsertDescription,
];
