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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/microsoft.network/loadBalancers/xplattestlb?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlb\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb\",\r\n  \"etag\": \"W/\\\"78e8dada-7d9a-420f-b92d-7c0e94180f20\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"78e8dada-7d9a-420f-b92d-7c0e94180f20\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLb\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1021',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"78e8dada-7d9a-420f-b92d-7c0e94180f20"',
  'x-ms-request-id': '80683afa-9ec9-4cdb-a035-9f9bd6f1a5df',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31904',
  'x-ms-correlation-request-id': '0733c440-5698-4c2a-a4e4-bccc7abfaa5d',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150415T122835Z:0733c440-5698-4c2a-a4e4-bccc7abfaa5d',
  date: 'Wed, 15 Apr 2015 12:28:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/microsoft.network/loadBalancers/xplattestlb?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlb\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb\",\r\n  \"etag\": \"W/\\\"78e8dada-7d9a-420f-b92d-7c0e94180f20\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"LB-Frontend\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb/frontendIPConfigurations/LB-Frontend\",\r\n        \"etag\": \"W/\\\"78e8dada-7d9a-420f-b92d-7c0e94180f20\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLb\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1021',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"78e8dada-7d9a-420f-b92d-7c0e94180f20"',
  'x-ms-request-id': '80683afa-9ec9-4cdb-a035-9f9bd6f1a5df',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31904',
  'x-ms-correlation-request-id': '0733c440-5698-4c2a-a4e4-bccc7abfaa5d',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150415T122835Z:0733c440-5698-4c2a-a4e4-bccc7abfaa5d',
  date: 'Wed, 15 Apr 2015 12:28:35 GMT',
  connection: 'close' });
 return result; }]];