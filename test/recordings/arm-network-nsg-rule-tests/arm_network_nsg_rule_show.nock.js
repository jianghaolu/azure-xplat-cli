// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website'],
    registeredResourceNamespaces: ['microsoft.insights', 'successbricks.cleardb'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule7759/providers/microsoft.network/networkSecurityGroups/xplatTestNsg7231/securityRules/xplatTestNsgRule6787?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestNsgRule6787\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule7759/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg7231/securityRules/xplatTestNsgRule6787\",\r\n  \"etag\": \"W/\\\"31839ac9-d16f-424f-97ab-15edc9b7f7be\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"protocol\": \"Tcp\",\r\n    \"sourcePortRange\": \"80\",\r\n    \"destinationPortRange\": \"80\",\r\n    \"sourceAddressPrefix\": \"*\",\r\n    \"destinationAddressPrefix\": \"*\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 100,\r\n    \"direction\": \"Inbound\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '596',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"31839ac9-d16f-424f-97ab-15edc9b7f7be"',
  'x-ms-request-id': '4ac42f8a-b69e-4518-b672-83a0cab21519',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31914',
  'x-ms-correlation-request-id': '469afad0-6b42-4331-a460-1ec306fd8477',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150415T123400Z:469afad0-6b42-4331-a460-1ec306fd8477',
  date: 'Wed, 15 Apr 2015 12:33:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule7759/providers/microsoft.network/networkSecurityGroups/xplatTestNsg7231/securityRules/xplatTestNsgRule6787?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestNsgRule6787\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule7759/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg7231/securityRules/xplatTestNsgRule6787\",\r\n  \"etag\": \"W/\\\"31839ac9-d16f-424f-97ab-15edc9b7f7be\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"protocol\": \"Tcp\",\r\n    \"sourcePortRange\": \"80\",\r\n    \"destinationPortRange\": \"80\",\r\n    \"sourceAddressPrefix\": \"*\",\r\n    \"destinationAddressPrefix\": \"*\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 100,\r\n    \"direction\": \"Inbound\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '596',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"31839ac9-d16f-424f-97ab-15edc9b7f7be"',
  'x-ms-request-id': '4ac42f8a-b69e-4518-b672-83a0cab21519',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31914',
  'x-ms-correlation-request-id': '469afad0-6b42-4331-a460-1ec306fd8477',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150415T123400Z:469afad0-6b42-4331-a460-1ec306fd8477',
  date: 'Wed, 15 Apr 2015 12:33:59 GMT',
  connection: 'close' });
 return result; }]];