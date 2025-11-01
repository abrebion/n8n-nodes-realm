import type { INodeProperties } from 'n8n-workflow';

const showOnlyForChatGet = {
	operation: ['get'],
	resource: ['chat'],
};

export const chatGetDescription: INodeProperties[] = [
	{
		displayName: 'Chat ID',
		name: 'chatId',
		type: 'string',
		displayOptions: { show: showOnlyForChatGet },
		default: '',
		description: "The chat's ID to retrieve",
	},
];
