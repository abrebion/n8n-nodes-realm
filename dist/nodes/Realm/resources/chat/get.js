"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatGetDescription = void 0;
const showOnlyForChatGet = {
    operation: ['get'],
    resource: ['chat'],
};
exports.chatGetDescription = [
    {
        displayName: 'Chat ID',
        name: 'chatId',
        type: 'string',
        displayOptions: { show: showOnlyForChatGet },
        default: '',
        description: "The chat's ID to retrieve",
    },
];
//# sourceMappingURL=get.js.map