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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet6708/providers/microsoft.network/virtualnetworks/xplatTestVnet1372/subnets/xplatTestSubnet9287?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestSubnet9287\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet6708/providers/Microsoft.Network/virtualNetworks/xplatTestVnet1372/subnets/xplatTestSubnet9287\",\r\n  \"etag\": \"W/\\\"513a33d3-8c3a-4891-a8ad-b87db5488c16\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.1.0/24\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '390',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"513a33d3-8c3a-4891-a8ad-b87db5488c16"',
  'x-ms-request-id': 'ae1e7d7e-e0af-4798-8c20-5f6f2fbf2a1c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31924',
  'x-ms-correlation-request-id': 'dff1f8ca-c801-47d9-ada0-eaa9383ac116',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150415T124013Z:dff1f8ca-c801-47d9-ada0-eaa9383ac116',
  date: 'Wed, 15 Apr 2015 12:40:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet6708/providers/microsoft.network/virtualnetworks/xplatTestVnet1372/subnets/xplatTestSubnet9287?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestSubnet9287\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet6708/providers/Microsoft.Network/virtualNetworks/xplatTestVnet1372/subnets/xplatTestSubnet9287\",\r\n  \"etag\": \"W/\\\"513a33d3-8c3a-4891-a8ad-b87db5488c16\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.1.0/24\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '390',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"513a33d3-8c3a-4891-a8ad-b87db5488c16"',
  'x-ms-request-id': 'ae1e7d7e-e0af-4798-8c20-5f6f2fbf2a1c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31924',
  'x-ms-correlation-request-id': 'dff1f8ca-c801-47d9-ada0-eaa9383ac116',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150415T124013Z:dff1f8ca-c801-47d9-ada0-eaa9383ac116',
  date: 'Wed, 15 Apr 2015 12:40:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet6708/providers/microsoft.network/virtualnetworks/xplatTestVnet1372/subnets/xplatTestSubnet9287?api-version=2014-12-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operationResults/d59abd8e-e5a5-499d-a8ac-8913fadda7b0?api-version=2014-12-01-preview',
  'retry-after': '10',
  'x-ms-request-id': 'd59abd8e-e5a5-499d-a8ac-8913fadda7b0',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/d59abd8e-e5a5-499d-a8ac-8913fadda7b0?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1177',
  'x-ms-correlation-request-id': '59f83253-9a20-40ae-a39c-833bc824290c',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150415T124015Z:59f83253-9a20-40ae-a39c-833bc824290c',
  date: 'Wed, 15 Apr 2015 12:40:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet6708/providers/microsoft.network/virtualnetworks/xplatTestVnet1372/subnets/xplatTestSubnet9287?api-version=2014-12-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operationResults/d59abd8e-e5a5-499d-a8ac-8913fadda7b0?api-version=2014-12-01-preview',
  'retry-after': '10',
  'x-ms-request-id': 'd59abd8e-e5a5-499d-a8ac-8913fadda7b0',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/d59abd8e-e5a5-499d-a8ac-8913fadda7b0?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1177',
  'x-ms-correlation-request-id': '59f83253-9a20-40ae-a39c-833bc824290c',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150415T124015Z:59f83253-9a20-40ae-a39c-833bc824290c',
  date: 'Wed, 15 Apr 2015 12:40:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/d59abd8e-e5a5-499d-a8ac-8913fadda7b0?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '02666433-e59f-4cd8-ba8f-6f5ca1cbb2b6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31925',
  'x-ms-correlation-request-id': 'fdc1628c-0f69-493f-8281-a6fd0b0056fb',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150415T124027Z:fdc1628c-0f69-493f-8281-a6fd0b0056fb',
  date: 'Wed, 15 Apr 2015 12:40:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/d59abd8e-e5a5-499d-a8ac-8913fadda7b0?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '02666433-e59f-4cd8-ba8f-6f5ca1cbb2b6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31925',
  'x-ms-correlation-request-id': 'fdc1628c-0f69-493f-8281-a6fd0b0056fb',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150415T124027Z:fdc1628c-0f69-493f-8281-a6fd0b0056fb',
  date: 'Wed, 15 Apr 2015 12:40:26 GMT',
  connection: 'close' });
 return result; }]];