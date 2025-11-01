import type { IAuthenticateGeneric, ICredentialTestRequest, ICredentialType, INodeProperties, Icon } from 'n8n-workflow';
export declare class RealmApi implements ICredentialType {
    name: string;
    icon: Icon;
    displayName: string;
    documentationUrl: string;
    logoFile: string;
    logoDarkFile: string;
    properties: INodeProperties[];
    authenticate: IAuthenticateGeneric;
    test: ICredentialTestRequest;
}
