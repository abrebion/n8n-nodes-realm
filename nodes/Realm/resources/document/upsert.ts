import type { INodeProperties } from 'n8n-workflow';

const showOnlyForDocumentsUpsert = {
	operation: ['createOrUpdate'],
	resource: ['document'],
};

export const documentUpsertDescription: INodeProperties[] = [
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
			show: showOnlyForDocumentsUpsert,
		},
	},
	{
		displayName: 'Documents',
		name: 'documents',
		type: 'json',
		description: 'The documents to upsert',
		hint: 'Array of documents. Each document should have "id", "title", "url", "content", "content_type", "created_at" and "updated_at" keys. Possibly with a "meta" key.',
		default: '{}',
		displayOptions: {
			show: { ...showOnlyForDocumentsUpsert },
		},
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'documents',
			},
		},
	},
	// {
	// 	displayName: 'Documents',
	// 	name: 'documents',
	// 	type: 'fixedCollection',
	// 	displayOptions: {
	// 		show: { ...showOnlyForDocumentsUpsert },
	// 	},
	// 	default: {},
	// 	required: true,
	// 	typeOptions: {
	// 		multipleValues: true,
	// 	},
	// 	description: 'The documents to upsert',
	// 	options: [
	// 		{
	// 			name: 'document',
	// 			displayName: 'Document',
	// 			values: [
	// 				{
	// 					displayName: 'Content',
	// 					name: 'content',
	// 					type: 'string',
	// 					default: '',
	// 					description: "The document's content to upsert",
	// 				},
	// 				{
	// 					displayName: 'Content Type',
	// 					name: 'content_type',
	// 					type: 'options',
	// 					options: [
	// 						{
	// 							name: 'Markdown',
	// 							value: 'markdown',
	// 						},
	// 						{
	// 							name: 'Text',
	// 							value: 'text',
	// 						},
	// 						{
	// 							name: 'HTML',
	// 							value: 'html',
	// 						},
	// 					],
	// 					default: 'text',
	// 					description: "The document's content type to upsert",
	// 				},
	// 				{
	// 					displayName: 'Created At',
	// 					name: 'created_at',
	// 					type: 'dateTime',
	// 					default: '',
	// 					description: "The document's created at to upsert",
	// 				},
	// 				{
	// 					displayName: 'ID',
	// 					name: 'id',
	// 					type: 'string',
	// 					default: '',
	// 					description: "The document's ID to upsert",
	// 				},
	// 				{
	// 					displayName: 'Title',
	// 					name: 'title',
	// 					type: 'string',
	// 					default: '',
	// 					description: "The document's title to upsert",
	// 				},
	// 				{
	// 					displayName: 'Updated At',
	// 					name: 'updated_at',
	// 					type: 'dateTime',
	// 					default: '',
	// 					description: "The document's updated at to upsert",
	// 				},
	// 			],
	// 		},
	// 	],
	// },
];
