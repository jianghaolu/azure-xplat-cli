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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/armrestestingpubgrp?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'armrestestingpubgrp' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '31910',
  'x-ms-request-id': '6b07e29c-12db-4765-a520-cadf5d3b67df',
  'x-ms-correlation-request-id': '6b07e29c-12db-4765-a520-cadf5d3b67df',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150415T123630Z:6b07e29c-12db-4765-a520-cadf5d3b67df',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 15 Apr 2015 12:36:30 GMT',
  connection: 'close',
  'content-length': '111' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/armrestestingpubgrp?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'armrestestingpubgrp' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '31910',
  'x-ms-request-id': '6b07e29c-12db-4765-a520-cadf5d3b67df',
  'x-ms-correlation-request-id': '6b07e29c-12db-4765-a520-cadf5d3b67df',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150415T123630Z:6b07e29c-12db-4765-a520-cadf5d3b67df',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 15 Apr 2015 12:36:30 GMT',
  connection: 'close',
  'content-length': '111' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/armrestestingpubgrp?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp\",\"name\":\"armrestestingpubgrp\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '201',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1167',
  'x-ms-request-id': 'fd3e2b2c-bbd2-4768-bc1c-6051f23122a0',
  'x-ms-correlation-request-id': 'fd3e2b2c-bbd2-4768-bc1c-6051f23122a0',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150415T123634Z:fd3e2b2c-bbd2-4768-bc1c-6051f23122a0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 15 Apr 2015 12:36:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/armrestestingpubgrp?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp\",\"name\":\"armrestestingpubgrp\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '201',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1167',
  'x-ms-request-id': 'fd3e2b2c-bbd2-4768-bc1c-6051f23122a0',
  'x-ms-correlation-request-id': 'fd3e2b2c-bbd2-4768-bc1c-6051f23122a0',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150415T123634Z:fd3e2b2c-bbd2-4768-bc1c-6051f23122a0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 15 Apr 2015 12:36:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/microsoft.network/publicIPAddresses/armpublicip9051/?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'e7d4b4ae-a610-45ee-b00b-94109b7c3966',
  'x-ms-correlation-request-id': 'e7d4b4ae-a610-45ee-b00b-94109b7c3966',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150415T123635Z:e7d4b4ae-a610-45ee-b00b-94109b7c3966',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 15 Apr 2015 12:36:34 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/microsoft.network/publicIPAddresses/armpublicip9051/?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'e7d4b4ae-a610-45ee-b00b-94109b7c3966',
  'x-ms-correlation-request-id': 'e7d4b4ae-a610-45ee-b00b-94109b7c3966',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150415T123635Z:e7d4b4ae-a610-45ee-b00b-94109b7c3966',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 15 Apr 2015 12:36:34 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/microsoft.network/publicIPAddresses/armpublicip9051/?api-version=2014-12-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"armpublicip9051\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip9051\",\r\n  \"etag\": \"W/\\\"38e8db29-13cb-42ef-9800-c55839f97c24\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip8624\",\r\n      \"fqdn\": \"dnstestpubip8624.eastus.cloudapp.azure.com.\"\r\n    }\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '595',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'ffe3ea43-66aa-4357-9280-3534a131866c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/ffe3ea43-66aa-4357-9280-3534a131866c?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1166',
  'x-ms-correlation-request-id': '62667ae1-4345-456e-ae7a-d8b7346aa9be',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150415T123643Z:62667ae1-4345-456e-ae7a-d8b7346aa9be',
  date: 'Wed, 15 Apr 2015 12:36:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/microsoft.network/publicIPAddresses/armpublicip9051/?api-version=2014-12-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"armpublicip9051\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip9051\",\r\n  \"etag\": \"W/\\\"38e8db29-13cb-42ef-9800-c55839f97c24\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip8624\",\r\n      \"fqdn\": \"dnstestpubip8624.eastus.cloudapp.azure.com.\"\r\n    }\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '595',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'ffe3ea43-66aa-4357-9280-3534a131866c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/ffe3ea43-66aa-4357-9280-3534a131866c?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1166',
  'x-ms-correlation-request-id': '62667ae1-4345-456e-ae7a-d8b7346aa9be',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150415T123643Z:62667ae1-4345-456e-ae7a-d8b7346aa9be',
  date: 'Wed, 15 Apr 2015 12:36:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/ffe3ea43-66aa-4357-9280-3534a131866c?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'be1ed3bb-2323-44a4-8f97-1f1f66b75a6e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31916',
  'x-ms-correlation-request-id': '548c498a-044c-4eb1-8a0e-77f7bd52a714',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150415T123655Z:548c498a-044c-4eb1-8a0e-77f7bd52a714',
  date: 'Wed, 15 Apr 2015 12:36:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/ffe3ea43-66aa-4357-9280-3534a131866c?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'be1ed3bb-2323-44a4-8f97-1f1f66b75a6e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31916',
  'x-ms-correlation-request-id': '548c498a-044c-4eb1-8a0e-77f7bd52a714',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150415T123655Z:548c498a-044c-4eb1-8a0e-77f7bd52a714',
  date: 'Wed, 15 Apr 2015 12:36:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/microsoft.network/publicIPAddresses/armpublicip9051/?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armpublicip9051\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip9051\",\r\n  \"etag\": \"W/\\\"903568a5-b3ff-4c6e-aaaf-31329efca496\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"ipAddress\": \"104.45.155.232\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip8624\",\r\n      \"fqdn\": \"dnstestpubip8624.eastus.cloudapp.azure.com.\"\r\n    }\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '632',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"903568a5-b3ff-4c6e-aaaf-31329efca496"',
  'x-ms-request-id': 'abe7e764-3309-44eb-b35f-9a03e099de65',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31909',
  'x-ms-correlation-request-id': '9e914df4-296b-44ae-b320-49f5ac627953',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150415T123657Z:9e914df4-296b-44ae-b320-49f5ac627953',
  date: 'Wed, 15 Apr 2015 12:36:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/microsoft.network/publicIPAddresses/armpublicip9051/?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armpublicip9051\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip9051\",\r\n  \"etag\": \"W/\\\"903568a5-b3ff-4c6e-aaaf-31329efca496\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"ipAddress\": \"104.45.155.232\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip8624\",\r\n      \"fqdn\": \"dnstestpubip8624.eastus.cloudapp.azure.com.\"\r\n    }\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '632',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"903568a5-b3ff-4c6e-aaaf-31329efca496"',
  'x-ms-request-id': 'abe7e764-3309-44eb-b35f-9a03e099de65',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31909',
  'x-ms-correlation-request-id': '9e914df4-296b-44ae-b320-49f5ac627953',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150415T123657Z:9e914df4-296b-44ae-b320-49f5ac627953',
  date: 'Wed, 15 Apr 2015 12:36:56 GMT',
  connection: 'close' });
 return result; }]];