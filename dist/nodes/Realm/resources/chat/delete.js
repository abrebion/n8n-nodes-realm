"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatDeleteDescription = void 0;
const showOnlyForChatDelete = {
    operation: ['delete'],
    resource: ['chat'],
};
exports.chatDeleteDescription = [
    {
        displayName: 'Chat ID',
        name: 'chatId',
        type: 'string',
        displayOptions: { show: showOnlyForChatDelete },
        default: '',
        description: "The chat's ID to delete",
    },
];
//# sourceMappingURL=delete.js.map