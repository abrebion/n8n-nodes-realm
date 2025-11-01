"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatDescription = void 0;
const getAll_1 = require("./getAll");
const get_1 = require("./get");
const create_1 = require("./create");
const delete_1 = require("./delete");
const showOnlyForChats = {
    resource: ['chat'],
};
exports.chatDescription = [
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
    ...getAll_1.chatGetManyDescription,
    ...get_1.chatGetDescription,
    ...create_1.chatCreateDescription,
    ...delete_1.chatDeleteDescription,
];
//# sourceMappingURL=index.js.map