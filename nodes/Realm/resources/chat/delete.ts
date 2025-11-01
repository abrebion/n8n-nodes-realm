import type { INodeProperties } from 'n8n-workflow';

const showOnlyForChatDelete = {
	operation: ['delete'],
	resource: ['chat'],
};

export const chatDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Chat ID',
		name: 'chatId',
		type: 'string',
		displayOptions: { show: showOnlyForChatDelete },
		default: '',
		description: "The chat's ID to delete",
	},
];
