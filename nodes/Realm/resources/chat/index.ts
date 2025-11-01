import type { INodeProperties } from 'n8n-workflow';
import { chatGetManyDescription } from './getAll';
import { chatGetDescription } from './get';
import { chatCreateDescription } from './create';
import { chatDeleteDescription } from './delete';

const showOnlyForChats = {
	resource: ['chat'],
};

export const chatDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForChats,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get chats',
				description: 'Get many chat conversations',
				routing: {
					request: {
						method: 'GET',
						url: '=/chats',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a chat',
				description: 'Get a single chat conversations',
				routing: {
					request: {
						method: 'GET',
						url: '=/chats/{{$parameter.chatId}}',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a chat',
				description: 'Delete a chat',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/chats/{{$parameter.chatId}}',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Start a chat',
				description: 'Start a new chat or continue an existing one',
				routing: {
					request: {
						method: 'POST',
						url: '={{$parameter["additionalFields"]?.streamResponse ? "/chats-streaming" : "/chats"}}',
					},
				},
			},
		],
		default: 'create',
	},
	...chatGetManyDescription,
	...chatGetDescription,
	...chatCreateDescription,
	...chatDeleteDescription,
];
