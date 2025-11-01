import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
	Icon,
} from 'n8n-workflow';

export class RealmApi implements ICredentialType {
	name = 'realmApi';
	icon = { light: 'file:../icons/realm.svg', dark: 'file:../icons/realm-dark.svg' } as Icon;
	displayName = 'Realm API';
	documentationUrl = 'https://github.com/abrebion/n8n-nodes-realm?tab=readme-ov-file#credentials';

	logoFile = 'realm.svg';
	logoDarkFile = 'realm-dark.svg';

	properties: INodeProperties[] = [
		{
			displayName: 'API Base URL',
			name: 'baseUrl',
			type: 'string',
			required: true,
			default: '',
			description:
				'Your custom base URL for the Realm API (e.g. https://myaccount.withrealm.com/api/external/alpha)',
		},
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.accessToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.baseUrl}}',
			url: '/chats',
		},
	};
}
