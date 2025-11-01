import type { INodeType, ILoadOptionsFunctions, INodeTypeDescription, INodePropertyOptions } from 'n8n-workflow';
export declare class Realm implements INodeType {
    description: INodeTypeDescription;
    methods: {
        loadOptions: {
            getAssistants(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]>;
            getConnectors(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]>;
        };
    };
}
