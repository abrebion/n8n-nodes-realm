import type {
	JsonObject,
	IDataObject,
	IExecuteFunctions,
	IHookFunctions,
	IHttpRequestMethods,
	IHttpRequestOptions,
	ILoadOptionsFunctions,
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
