import type { INodeProperties } from 'n8n-workflow';

export const documentDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Connector Name or ID',
		name: 'connectorId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getConnectors',
		},
		default: '',
		description:
			'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
		required: true,
		displayOptions: {
			show: {
				operation: ['delete', 'deleteOldDocuments'],
				resource: ['document'],
			},
		},
	},
	{
		displayName: 'Document ID',
		name: 'documentId',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['delete'],
				resource: ['document'],
			},
		},
		default: '',
		description: "The document's ID to delete",
	},
	{
		displayName: 'Older Than',
		name: 'olderThan',
		type: 'dateTime',
		displayOptions: {
			show: {
				operation: ['deleteOldDocuments'],
				resource: ['document'],
			},
		},
		default: '',
		description: 'The timestamp to delete documents older than',
	},
];
