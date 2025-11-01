"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatCreateDescription = void 0;
const showOnlyForChatCreate = {
    operation: ['create'],
    resource: ['chat'],
};
exports.chatCreateDescription = [
    {
        displayName: 'Assistant Name or ID',
        name: 'assistantId',
        type: 'options',
        typeOptions: {
            loadOptionsMethod: 'getAssistants',
        },
        default: '',
        description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
        required: true,
        routing: {
            send: {
                type: 'body',
                property: 'assistant_id',
            },
        },
        displayOptions: {
            show: showOnlyForChatCreate,
        },
    },
    {
        displayName: 'Message',
        name: 'message',
        type: 'string',
        typeOptions: {
            rows: 4,
        },
        default: '',
        required: true,
        requiresDataPath: 'single',
        displayOptions: {
            show: showOnlyForChatCreate,
        },
        description: 'The message to send to the assistant',
        routing: {
            send: {
                type: 'body',
                property: 'content',
            },
        },
    },
    {
        displayName: 'Research Mode',
        name: 'researchMode',
        type: 'boolean',
        default: false,
        required: true,
        displayOptions: {
            show: showOnlyForChatCreate,
        },
        description: 'Whether to use research mode',
        routing: {
            send: {
                type: 'body',
                property: 'research_mode',
            },
        },
    },
    {
        displayName: 'Citation Style',
        name: 'citationStyle',
        type: 'options',
        options: [
            {
                name: 'Remove',
                value: 'remove',
                description: 'Remove citations from the output',
            },
            {
                name: 'Link',
                value: 'link',
                description: 'Link to the source of the citation',
            },
        ],
        default: 'remove',
        required: true,
        displayOptions: {
            show: showOnlyForChatCreate,
        },
        description: 'The style of citations to use',
        routing: {
            send: {
                type: 'body',
                property: 'citation_style',
            },
        },
    },
    {
        displayName: 'Output Format',
        name: 'outputFormat',
        type: 'options',
        options: [
            {
                name: 'Markdown',
                value: 'markdown',
            },
            {
                name: 'Text',
                value: 'text',
            },
        ],
        default: 'markdown',
        required: true,
        displayOptions: {
            show: showOnlyForChatCreate,
        },
        description: 'The format of the output',
        routing: {
            send: {
                type: 'body',
                property: 'output_format',
            },
        },
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        options: [
            {
                displayName: 'Stream Response',
                name: 'streamResponse',
                type: 'boolean',
                default: false,
                description: 'Whether to stream the response',
                routing: {
                    send: {
                        type: 'body',
                        property: 'stream_response',
                    },
                },
            },
            {
                displayName: 'Chat ID',
                name: 'chatId',
                type: 'string',
                default: '',
                requiresDataPath: 'single',
                description: 'The ID of the chat to continue',
                routing: {
                    send: {
                        type: 'body',
                        property: 'chat_id',
                    },
                },
            },
        ],
        displayOptions: {
            show: showOnlyForChatCreate,
        },
    },
];
//# sourceMappingURL=create.js.map