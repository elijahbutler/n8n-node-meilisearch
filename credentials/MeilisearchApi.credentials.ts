import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class MeilisearchApi implements ICredentialType {
  name = 'meilisearchApi';
  displayName = 'Meilisearch API';
  documentationUrl = 'https://www.meilisearch.com/docs/';
  properties: INodeProperties[] = [
    {
      displayName: 'Base URL',
      name: 'baseUrl',
      type: 'string',
      default: '',
      placeholder: 'https://your-meilisearch-instance.com',
      required: true,
    },
    {
      displayName: 'API Key',
      name: 'apiKey',
      type: 'string',
      typeOptions: { password: true },
      default: '',
      required: true,
    },
  ];
} 