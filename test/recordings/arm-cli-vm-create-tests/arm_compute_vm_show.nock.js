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
    registeredProviders: [],
    registeredResourceNamespaces: [],
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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMCreate/providers/Microsoft.Compute/virtualMachines/xplattestvm?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"563f2a9a987456746c81-os-1429100202355\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage11990.blob.core.windows.net/xplatteststoragecnt17282/xplattestvhd.vhd\"\r\n        },\r\n        \"caching\": \"None\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMCreate/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"provisioningState\": \"failed\"\r\n  },\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMCreate/providers/Microsoft.Compute/virtualMachines/xplattestvm\",\r\n  \"name\": \"xplattestvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '958',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '86d4f95a-e21e-42b1-a136-344d57d4b3cc',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31920',
  'x-ms-correlation-request-id': 'e0ea1154-fa78-42cc-83a4-90e01cde863d',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150415T121920Z:e0ea1154-fa78-42cc-83a4-90e01cde863d',
  date: 'Wed, 15 Apr 2015 12:19:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMCreate/providers/Microsoft.Compute/virtualMachines/xplattestvm?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"563f2a9a987456746c81-os-1429100202355\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage11990.blob.core.windows.net/xplatteststoragecnt17282/xplattestvhd.vhd\"\r\n        },\r\n        \"caching\": \"None\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMCreate/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"provisioningState\": \"failed\"\r\n  },\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMCreate/providers/Microsoft.Compute/virtualMachines/xplattestvm\",\r\n  \"name\": \"xplattestvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '958',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '86d4f95a-e21e-42b1-a136-344d57d4b3cc',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31920',
  'x-ms-correlation-request-id': 'e0ea1154-fa78-42cc-83a4-90e01cde863d',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150415T121920Z:e0ea1154-fa78-42cc-83a4-90e01cde863d',
  date: 'Wed, 15 Apr 2015 12:19:20 GMT',
  connection: 'close' });
 return result; }]];