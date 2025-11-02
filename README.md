# n8n-nodes-realm

This is an n8n community node. It lets you consume Realm API in your n8n workflows.

Realm is an AI-powered enterprise search engine that unifies your knowledge bases (Google Drive, Slack, Jira, Confluence, Salesforce, Gong, etc.) and makes them accessible to custom AI assistants.

With the Realm API, you can programmatically add, edit, and delete documents for custom connectors (non-native knowledge data sources) and interact with Realm assistants.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

This node supports the following resources/operations:

* Create or continue a chat conversation
* Get a single chat conversation
* Get many chat conversations
* Delete a chat conversation
* Get all asssistants
* Get all connectors
* Create or update documents in a connector
* Get all documents from a connector
* Get a specific document from a connector
* Delete a specific document from a connector
* Delete documents from a connector older than a specified timestamp

## Credentials

* From the Realm app, create an API key and give it access to assistants.
* In n8n, create a new Realm credential. Enter your API base url (e.g. https://your-account.withrealm.com/api/external/alpha) and the API key you've just created.

## Usage

In your Workflow, find the Realm node and use as you need. I accept comments and suggestions in Issues repository on GitHub.

## Compatibility

Tested against n8n version 1.117.3+

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
