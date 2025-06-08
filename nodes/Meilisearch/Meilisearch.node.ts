import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class Meilisearch implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Meilisearch',
    name: 'meilisearch',
    icon: 'file:meilisearch.svg',
    group: ['transform'],
    version: 1,
    description: 'Interact with Meilisearch API',
    defaults: {
      name: 'Meilisearch',
    },
    inputs: [NodeConnectionType.Main],
    outputs: [NodeConnectionType.Main],
    credentials: [
      {
        name: 'meilisearchApi',
        required: true,
      },
    ],
    properties: [
      {
        displayName: 'Resource',
        name: 'resource',
        type: 'options',
        options: [
          { name: 'Index', value: 'index' },
          { name: 'Document', value: 'document' },
          { name: 'Search', value: 'search' },
          { name: 'Settings', value: 'settings' },
          { name: 'Task', value: 'task' },
          { name: 'Batch', value: 'batch' },
          { name: 'Key', value: 'key' },
          { name: 'Stats', value: 'stats' },
          { name: 'Health', value: 'health' },
          { name: 'Version', value: 'version' },
          { name: 'Network', value: 'network' },
          { name: 'Dump', value: 'dump' },
          { name: 'Snapshot', value: 'snapshot' },
          { name: 'Similar Document', value: 'similarDocument' },
        ],
        default: 'index',
        description: 'Resource to operate on.',
      },
      // Index operations
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: { show: { resource: ['index'] } },
        options: [
          { name: 'List', value: 'list' },
          { name: 'Create', value: 'create' },
          { name: 'Get', value: 'get' },
          { name: 'Update', value: 'update' },
          { name: 'Delete', value: 'delete' },
        ],
        default: 'list',
      },
      // Document operations
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: { show: { resource: ['document'] } },
        options: [
          { name: 'Add', value: 'add' },
          { name: 'Update', value: 'update' },
          { name: 'Get', value: 'get' },
          { name: 'List', value: 'list' },
          { name: 'Delete', value: 'delete' },
          { name: 'Fetch (POST)', value: 'fetchPost' },
        ],
        default: 'list',
      },
      // Search operations
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: { show: { resource: ['search'] } },
        options: [
          { name: 'Search', value: 'search' },
        ],
        default: 'search',
      },
      // Settings operations
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: { show: { resource: ['settings'] } },
        options: [
          { name: 'Get', value: 'get' },
          { name: 'Update', value: 'update' },
          { name: 'Reset', value: 'reset' },
        ],
        default: 'get',
      },
      // Task operations
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: { show: { resource: ['task'] } },
        options: [
          { name: 'List', value: 'list' },
          { name: 'Get', value: 'get' },
          { name: 'Cancel', value: 'cancel' },
          { name: 'Delete', value: 'delete' },
        ],
        default: 'list',
      },
      // Batch operations
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: { show: { resource: ['batch'] } },
        options: [
          { name: 'List', value: 'list' },
          { name: 'Get', value: 'get' },
        ],
        default: 'list',
      },
      // Key operations
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: { show: { resource: ['key'] } },
        options: [
          { name: 'List', value: 'list' },
          { name: 'Create', value: 'create' },
          { name: 'Get', value: 'get' },
          { name: 'Update', value: 'update' },
          { name: 'Delete', value: 'delete' },
        ],
        default: 'list',
      },
      // Stats operations
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: { show: { resource: ['stats'] } },
        options: [
          { name: 'Get Instance Stats', value: 'getInstance' },
          { name: 'Get Index Stats', value: 'getIndex' },
        ],
        default: 'getInstance',
      },
      // Health operations
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: { show: { resource: ['health'] } },
        options: [
          { name: 'Check Health', value: 'check' },
        ],
        default: 'check',
      },
      // Version operations
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: { show: { resource: ['version'] } },
        options: [
          { name: 'Get Version', value: 'get' },
        ],
        default: 'get',
      },
      // Network operations
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: { show: { resource: ['network'] } },
        options: [
          { name: 'Get', value: 'get' },
          { name: 'Update', value: 'update' },
        ],
        default: 'get',
      },
      // Dump operations
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: { show: { resource: ['dump'] } },
        options: [
          { name: 'Create', value: 'create' },
          { name: 'Get Status', value: 'getStatus' },
        ],
        default: 'create',
      },
      // Snapshot operations
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: { show: { resource: ['snapshot'] } },
        options: [
          { name: 'Create', value: 'create' },
          { name: 'Get Status', value: 'getStatus' },
        ],
        default: 'create',
      },
      // Similar Document operations
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: { show: { resource: ['similarDocument'] } },
        options: [
          { name: 'Get Similar', value: 'getSimilar' },
        ],
        default: 'getSimilar',
      },
    ],
  };

  // Execute logic will be implemented later
} 