import type {
	IDataObject,
	INodeType,
	ILoadOptionsFunctions,
	INodeTypeDescription,
	INodePropertyOptions,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { realmApiRequest } from './GenericFunctions';
import { chatDescription } from './resources/chat';
import { assistantDescription } from './resources/assistant';
import { connectorDescription } from './resources/connector';
import { documentDescription } from './resources/document';

export class Realm implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Realm',
		name: 'realm',
		icon: { light: 'file:../../icons/realm.svg', dark: 'file:../../icons/realm-dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Realm API',
		defaults: {
			name: 'Realm',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'realmApi', required: true }],
		requestDefaults: {
			baseURL: '={{ $credentials.baseUrl }}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Chat',
						value: 'chat',
					},
					{
						name: 'Assistant',
						value: 'assistant',
					},
					{
						name: 'Connector',
						value: 'connector',
					},
					{
						name: 'Document',
						value: 'document',
					},
				],
				default: 'chat',
			},
			...chatDescription,
			...assistantDescription,
			...connectorDescription,
			...documentDescription,
		],
		hints: [
			{
				// The hint message. You can use HTML.
				message: "You are streaming the response. It won't display correctly here.",
				// Choose from: info, warning, danger. The default is 'info'.
				// Changes the color. info (grey), warning (yellow), danger (red)
				type: 'info',
				// Choose from: inputPane, outputPane, ndv. By default n8n displays the hint in both the input and output panels.
				location: 'outputPane',
				// Choose from: always, beforeExecution, afterExecution. The default is 'always'
				whenToDisplay: 'beforeExecution',
				// Optional. An expression. If it resolves to true, n8n displays the message. Defaults to true.
				displayCondition:
					'={{ $parameter["resource"] === "chat" && $parameter["additionalFields"]?.streamResponse === true }}',
			},
		],
	};

	methods = {
		loadOptions: {
			async getAssistants(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const returnData: INodePropertyOptions[] = [];
				const responseData = await realmApiRequest.call(this, 'GET', '/assistants', {}, {});
				// this.logger.info(JSON.stringify(responseData, null, 2));
				const items = (responseData.data as IDataObject[]) || [];
				for (const item of items) {
					returnData.push({
						name: item.name as string,
						value: item.id as string,
						description: item.description as string,
					});
				}
				return returnData.sort((a: INodePropertyOptions, b: INodePropertyOptions) =>
					a.name.localeCompare(b.name),
				);
			},

			async getConnectors(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const returnData: INodePropertyOptions[] = [];
				const responseData = await realmApiRequest.call(this, 'GET', '/connectors', {}, {});
				// this.logger.info(JSON.stringify(responseData, null, 2));
				const items = (responseData.data as IDataObject[]) || [];
				for (const item of items) {
					returnData.push({
						name: item.name as string,
						value: item.id as string,
						description: item.description as string,
					});
				}
				return returnData.sort((a: INodePropertyOptions, b: INodePropertyOptions) =>
					a.name.localeCompare(b.name),
				);
			},
		},
	};
}
