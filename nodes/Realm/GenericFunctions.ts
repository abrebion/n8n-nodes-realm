import type {
	JsonObject,
	IDataObject,
	IExecuteFunctions,
	IExecuteSingleFunctions,
	IHookFunctions,
	IHttpRequestMethods,
	IHttpRequestOptions,
	ILoadOptionsFunctions,
	IN8nHttpFullResponse,
	INodeExecutionData,
} from 'n8n-workflow';
import { NodeApiError } from 'n8n-workflow';

/**
 * Make an API request to Realm
 *
 */

export async function realmApiRequest(
	this: IExecuteFunctions | ILoadOptionsFunctions | IHookFunctions,
	method: IHttpRequestMethods,
	path: string,
	body: IDataObject = {},
	qs: IDataObject = {},
): Promise<IDataObject> {
	const { baseUrl } = await this.getCredentials<{ baseUrl: string }>('realmApi');
	const options: IHttpRequestOptions = {
		headers: {},
		method,
		body,
		qs,
		baseURL: baseUrl,
		url: path,
		json: true,
	};
	try {
		if (Object.keys(body as IDataObject).length === 0) {
			delete options.body;
		}
		return await this.helpers.httpRequestWithAuthentication.call(this, 'realmApi', options);
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}

export async function debugRequest(
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	console.log(`>>> ${this.getNode().type} >>> ${this.getNode().name} >> Request`, requestOptions);
	return requestOptions;
}

export async function debugResponse(
	this: IExecuteSingleFunctions,
	items: INodeExecutionData[],
	response: IN8nHttpFullResponse,
) {
	console.log(`>>> ${this.getNode().type} >>> ${this.getNode().name} >>> Response`, response);
	return items;
}
