// This file has been autogenerated.
var profile = require('../../lib/util/profile');
exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
      id : 'db1ab6f0-4769-4b27-930e-01e2ef9c123f',
      managementCertificate : {
        key : 'mockedKey',
        cert : 'mockedCert'
      },
      name : 'Azure SDK sandbox',
      username : 'user@domain.example',
      registeredProviders : ['website', 'sqlserver'],
      registeredResourceNamespaces : [],
      isDefault : true
    }, newProfile.environments['AzureCloud']));

  return newProfile;
};
exports.setEnvironment = function () {
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
}
exports.scopes = [
  /*create vm with vnet avail and affin group*/
  [

    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/images')
        .reply(200, "<Images xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><OSImage><Category>Public</Category><Label>RightImage CentOS 6.2 x64 v5.8.8.1</Label><Location>West US;East Asia;Southeast Asia;North Europe;West Europe;East US</Location><LogicalSizeInGB>10</LogicalSizeInGB><Name>0b11de9248dd4d87b18621318e037d37__RightImage-CentOS-6.2-x64-v5.8.8.1</Name><OS>Linux</OS><Eula>http://support.rightscale.com/12-Guides/RightLink/RightLink_End_User_License_Agreeement</Eula><Description>CentOS 6.3 with RightLink 5.8.</Description><ImageFamily>RightScale Linux v13</ImageFamily><ShowInGui>false</ShowInGui><PublishedDate>2012-08-28T00:00:00Z</PublishedDate><IsPremium>false</IsPremium><PrivacyUri>http://www.rightscale.com/privacy_policy.php</PrivacyUri><PublisherName>RightScale with Linux</PublisherName></OSImage></Images>", {
          'cache-control' : 'no-cache',
          'content-length' : '183188',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '3c1093e5080635829fc5aeffaaedbc47',
          date : 'Fri, 22 Nov 2013 05:21:34 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/vmimages')
        .reply(200, "<VMImages xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><VMImage><Name>nerdworksub1-20140716-893917</Name><Label>nerdworks-ubuntu-image1</Label><Category>User</Category><OSDiskConfiguration><Name>nerdworksub1-20140716-893917-os-2014-07-17</Name><HostCaching>ReadWrite</HostCaching><OSState>Specialized</OSState><OS>Linux</OS><MediaLink>https://acsforsdk2.blob.core.windows.net/vhd-store/nerdworksub1-20140716-893917-os-2014-07-17.vhd</MediaLink><LogicalDiskSizeInGB>30</LogicalDiskSizeInGB></OSDiskConfiguration><DataDiskConfigurations/><ServiceName>nerdworksub1</ServiceName><DeploymentName>nerdworksub1</DeploymentName><RoleName>nerdworksub1</RoleName><Location>West US</Location><CreatedTime>2014-07-17T04:48:06.0038647Z</CreatedTime><ModifiedTime>2014-07-17T04:48:06.0038647Z</ModifiedTime><IsPremium>false</IsPremium></VMImage></VMImages>", {
          'cache-control' : 'no-cache',
          'content-length' : '183188',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '3c1093e5080635829fc5aeffaaedbc47',
          date : 'Fri, 22 Nov 2013 05:21:34 GMT'
        });
      return result;
    },
    function (nock) {
      var result =
        nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/networking/virtualnetwork')
        .reply(200, "<VirtualNetworkSites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><VirtualNetworkSite><Name>xplattestaffingrp</Name><Id>2345070e-ee2b-46eb-8a0b-7ac158dcce06</Id><AffinityGroup>xplattestaffingrp</AffinityGroup><State>Created</State><InUse>true</InUse><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Azure-SDK-CI</Name><AddressPrefix>10.0.0.0/29</AddressPrefix></Subnet></Subnets></VirtualNetworkSite><VirtualNetworkSite><Name>javasdkci</Name><Id>dd876c1f-7ac1-4a0a-9462-71f0e1043245</Id><AffinityGroup>javasdkciag</AffinityGroup><State>Created</State><InUse>true</InUse><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>javasdkci</Name><AddressPrefix>10.0.0.0/8</AddressPrefix></Subnet></Subnets></VirtualNetworkSite><VirtualNetworkSite><Name>mynet</Name><Id>e91bddcb-ea78-4272-a88c-4481cb30c5cf</Id><AffinityGroup>AG-CLI-1d0a2453cc8d1118</AffinityGroup><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/11</AddressPrefix></Subnet></Subnets></VirtualNetworkSite><VirtualNetworkSite><Name>mynetwork</Name><Id>42f6ff8d-3f25-40f4-b457-70f116138966</Id><AffinityGroup>AG-CLI-1d0a2453cc8d1118</AffinityGroup><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/11</AddressPrefix></Subnet></Subnets></VirtualNetworkSite><VirtualNetworkSite><Name>vnet1</Name><Id>cc4e249e-babd-4d62-94a3-203e37c4f192</Id><AffinityGroup>AG-CLI-1d0a2453cc8d1118</AffinityGroup><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/11</AddressPrefix></Subnet></Subnets></VirtualNetworkSite></VirtualNetworkSites>", {
          'cache-control' : 'no-cache',
          'content-length' : '2095',
          'content-type' : 'application/xml; charset=utf-8',
          server : '33.0.6198.68 (rd_rdfe_stable.130710-0833) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '905126c245554c2fbde6f6ff1ba0a6e4',
          date : 'Wed, 24 Jul 2013 22:16:25 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/images')
        .reply(200, "<Images xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><OSImage><Category>Public</Category><Label>RightImage CentOS 6.2 x64 v5.8.8.1</Label><Location>West US;East Asia;Southeast Asia;North Europe;West Europe;East US</Location><LogicalSizeInGB>10</LogicalSizeInGB><Name>0b11de9248dd4d87b18621318e037d37__RightImage-CentOS-6.2-x64-v5.8.8.1</Name><OS>Linux</OS><Eula>http://support.rightscale.com/12-Guides/RightLink/RightLink_End_User_License_Agreeement</Eula><Description>CentOS 6.3 with RightLink 5.8.</Description><ImageFamily>RightScale Linux v13</ImageFamily><ShowInGui>false</ShowInGui><PublishedDate>2012-08-28T00:00:00Z</PublishedDate><IsPremium>false</IsPremium><PrivacyUri>http://www.rightscale.com/privacy_policy.php</PrivacyUri><PublisherName>RightScale with Linux</PublisherName></OSImage></Images>", {
          'cache-control' : 'no-cache',
          'content-length' : '183188',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '3c1093e5080635829fc5aeffaaedbc47',
          date : 'Fri, 22 Nov 2013 05:21:34 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/vmimages')
        .reply(200, "<VMImages xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><VMImage><Name>nerdworksub1-20140716-893917</Name><Label>nerdworks-ubuntu-image1</Label><Category>User</Category><OSDiskConfiguration><Name>nerdworksub1-20140716-893917-os-2014-07-17</Name><HostCaching>ReadWrite</HostCaching><OSState>Specialized</OSState><OS>Linux</OS><MediaLink>https://acsforsdk2.blob.core.windows.net/vhd-store/nerdworksub1-20140716-893917-os-2014-07-17.vhd</MediaLink><LogicalDiskSizeInGB>30</LogicalDiskSizeInGB></OSDiskConfiguration><DataDiskConfigurations/><ServiceName>nerdworksub1</ServiceName><DeploymentName>nerdworksub1</DeploymentName><RoleName>nerdworksub1</RoleName><Location>West US</Location><CreatedTime>2014-07-17T04:48:06.0038647Z</CreatedTime><ModifiedTime>2014-07-17T04:48:06.0038647Z</ModifiedTime><IsPremium>false</IsPremium></VMImage></VMImages>", {
          'cache-control' : 'no-cache',
          'content-length' : '183188',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '3c1093e5080635829fc5aeffaaedbc47',
          date : 'Fri, 22 Nov 2013 05:21:34 GMT'
        });
      return result;
    },
    function (nock) {
      var result =
        nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/images/0b11de9248dd4d87b18621318e037d37__RightImage-CentOS-6.2-x64-v5.8.8.1')
        .reply(200, "<OSImage xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Category>User</Category><Label>0b11de9248dd4d87b18621318e037d37__RightImage-CentOS-6.2-x64-v5.8.8.1</Label><Location>West US</Location><LogicalSizeInGB>10</LogicalSizeInGB><MediaLink>http://acsforsdk2.blob.core.windows.net/vm-images/0b11de9248dd4d87b18621318e037d37__RightImage-CentOS-6.2-x64-v5.8.8.1</MediaLink><Name>0b11de9248dd4d87b18621318e037d37__RightImage-CentOS-6.2-x64-v5.8.8.1</Name><OS>Linux</OS><IsPremium>false</IsPremium><PublisherName>User</PublisherName></OSImage>", {
          'cache-control' : 'no-cache',
          'content-length' : '425',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '2e21aebf82a636cebfbdec38c6064c4f',
          date : 'Fri, 22 Nov 2013 04:44:08 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/hostedservices')
        .reply(200, "<HostedServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><HostedService><Url>https://management.core.windows.net/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/hostedservices/xplattestvmVnet1</Url><ServiceName>xplattestvmVnet1</ServiceName><HostedServiceProperties><Description>Implicitly created hosted service</Description><AffinityGroup>xplattestaffingrp</AffinityGroup><Label>dm5ldHZtdGVzdDI=</Label><Status>Created</Status><DateCreated>2013-11-20T22:13:19Z</DateCreated><DateLastModified>2013-11-20T22:13:39Z</DateLastModified><ExtendedProperties/></HostedServiceProperties></HostedService></HostedServices>", {
          'cache-control' : 'no-cache',
          'content-length' : '4051',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '5d885d0c15de3972b157f08150763761',
          date : 'Fri, 22 Nov 2013 05:21:37 GMT'
        });
      return result;
    },
    function (nock) {
      var result =
        nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/networking/virtualnetwork')
        .reply(200, "<VirtualNetworkSites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><VirtualNetworkSite><Name>xplattestaffingrp</Name><Id>2345070e-ee2b-46eb-8a0b-7ac158dcce06</Id><AffinityGroup>xplattestaffingrp</AffinityGroup><State>Created</State><InUse>true</InUse><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Azure-SDK-CI</Name><AddressPrefix>10.0.0.0/29</AddressPrefix></Subnet></Subnets></VirtualNetworkSite><VirtualNetworkSite><Name>javasdkci</Name><Id>dd876c1f-7ac1-4a0a-9462-71f0e1043245</Id><AffinityGroup>javasdkciag</AffinityGroup><State>Created</State><InUse>true</InUse><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>javasdkci</Name><AddressPrefix>10.0.0.0/8</AddressPrefix></Subnet></Subnets></VirtualNetworkSite><VirtualNetworkSite><Name>mynet</Name><Id>e91bddcb-ea78-4272-a88c-4481cb30c5cf</Id><AffinityGroup>AG-CLI-1d0a2453cc8d1118</AffinityGroup><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/11</AddressPrefix></Subnet></Subnets></VirtualNetworkSite><VirtualNetworkSite><Name>mynetwork</Name><Id>42f6ff8d-3f25-40f4-b457-70f116138966</Id><AffinityGroup>AG-CLI-1d0a2453cc8d1118</AffinityGroup><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/11</AddressPrefix></Subnet></Subnets></VirtualNetworkSite><VirtualNetworkSite><Name>vnet1</Name><Id>cc4e249e-babd-4d62-94a3-203e37c4f192</Id><AffinityGroup>AG-CLI-1d0a2453cc8d1118</AffinityGroup><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/11</AddressPrefix></Subnet></Subnets></VirtualNetworkSite></VirtualNetworkSites>", {
          'cache-control' : 'no-cache',
          'content-length' : '2095',
          'content-type' : 'application/xml; charset=utf-8',
          server : '33.0.6198.68 (rd_rdfe_stable.130710-0833) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '905126c245554c2fbde6f6ff1ba0a6e4',
          date : 'Wed, 24 Jul 2013 22:16:25 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/affinitygroups')
        .reply(200, "<AffinityGroups xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><AffinityGroup><Name>xplattestaffingrp</Name><Label>dmFsaWQx</Label><Description/><Location>West US</Location><Capabilities><Capability>PersistentVMRole</Capability><Capability>HighMemory</Capability></Capabilities></AffinityGroup></AffinityGroups>", {
          'cache-control' : 'no-cache',
          'content-length' : '3950',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.27 (rd_rdfe_stable.131122-1638) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : 'd2089a4c56ec3a92bd8490281fc1fc39',
          date : 'Mon, 25 Nov 2013 07:26:23 GMT'
        });
      return result;
    },
    function (nock) {
      var result =
        nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/affinitygroups/xplattestaffingrp')
        .reply(200, "<AffinityGroup xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>xplattestaffingrp</Name><Label>eHBsYXQtYWZnLTE=</Label><Description>AG-DESC</Description><Location>West US</Location><HostedServices/><StorageServices/><Capabilities><Capability>PersistentVMRole</Capability><Capability>HighMemory</Capability></Capabilities></AffinityGroup>", {
          'cache-control' : 'no-cache',
          'content-length' : '390',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.70 (rd_rdfe_stable.140426-2318) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth2',
          'x-ms-request-id' : 'a73a950b93349a52a532dcb58a3ad4e8',
          date : 'Tue, 06 May 2014 17:31:28 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .filteringRequestBody(function (path) {
          return '*';
        })
        .post('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/hostedservices', "*")
        .reply(201, "", {
          'cache-control' : 'no-cache',
          'content-length' : '0',
          location : 'https://management.core.windows.net/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/compute/xplattestvm',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : 'db87ea2e8edb3d57b03497dc6eebc77b',
          date : 'Fri, 22 Nov 2013 05:21:47 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/operations/db87ea2e8edb3d57b03497dc6eebc77b')
        .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>e201c937-9bfd-3a02-ad91-5f1ef3f7c038</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", {
          'cache-control' : 'no-cache',
          'content-length' : '232',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : 'a3d21c4cb67b3fd39506ecd090429171',
          date : 'Fri, 22 Nov 2013 05:21:49 GMT'
        });
      return result;
    },
    function (nock) {
      var result =
        nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/storageservices')
        .reply(200, "<StorageServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><StorageService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/storageservices/acsforsdk2</Url><ServiceName>acsforsdk2</ServiceName><StorageServiceProperties><Description/><AffinityGroup>xplattestaffingrp</AffinityGroup><Location>West US</Location><Label>YW5kcmVyb2Q=</Label><Status>Created</Status><Endpoints><Endpoint>http://acsforsdk2.blob.core.windows.net/</Endpoint><Endpoint>http://acsforsdk2.queue.core.windows.net/</Endpoint><Endpoint>http://acsforsdk2.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>true</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><StatusOfPrimary/><GeoSecondaryRegion>West US</GeoSecondaryRegion><StatusOfSecondary/></StorageServiceProperties><ExtendedProperties/></StorageService></StorageServices>", {
          'cache-control' : 'no-cache',
          'content-length' : '5523',
          'content-type' : 'application/xml; charset=utf-8',
          server : '33.0.6198.30 (rd_rdfe_stable.130419-2156) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '5573fc3bb3054af6b8371637a9215fe7',
          date : 'Thu, 02 May 2013 02:32:14 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .filteringRequestBody(function (path) {
          return '*';
        })
        .post('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/hostedservices/xplattestvmVnet/deployments', "*")
        .reply(202, "", {
          'cache-control' : 'no-cache',
          'content-length' : '0',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '2e637a33f044323a8b856e30c876e0a4',
          date : 'Fri, 22 Nov 2013 05:21:52 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/operations/2e637a33f044323a8b856e30c876e0a4')
        .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>e201c937-9bfd-3a02-ad91-5f1ef3f7c038</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", {
          'cache-control' : 'no-cache',
          'content-length' : '232',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : 'a3d21c4cb67b3fd39506ecd090429171',
          date : 'Fri, 22 Nov 2013 05:21:49 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/hostedservices')
        .reply(200, "<HostedServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><HostedService><Url>https://management.core.windows.net/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/hostedservices/xplattestvmVnet</Url><ServiceName>xplattestvmVnet</ServiceName><HostedServiceProperties><Description>Implicitly created hosted service</Description><Location>West US</Location><Label>eHBsYXR0ZXN0dm0=</Label><Status>Created</Status><DateCreated>2013-11-22T05:21:47Z</DateCreated><DateLastModified>2013-11-22T05:22:06Z</DateLastModified><ExtendedProperties/></HostedServiceProperties></HostedService></HostedServices>", {
          'cache-control' : 'no-cache',
          'content-length' : '1120',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : 'e9e05acc29cd37df8b2c9433f02e84e6',
          date : 'Fri, 22 Nov 2013 05:22:16 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/hostedservices/xplattestvmVnet/deploymentslots/Production')
        .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>No deployments were found.</Message></Error>", {
          'cache-control' : 'no-cache',
          'content-length' : '2445',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '23b475bd87883e1e9335b43052357f49',
          date : 'Fri, 22 Nov 2013 05:22:18 GMT'
        });
      return result;
    }
  ],
  /*delete service on vm fail*/
  [

    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/images')
        .reply(200, "<Images xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><OSImage><Category>Public</Category><Label>RightImage CentOS 6.2 x64 v5.8.8.1</Label><Location>West US;East Asia;Southeast Asia;North Europe;West Europe;East US</Location><LogicalSizeInGB>10</LogicalSizeInGB><Name>0b11de9248dd4d87b18621318e037d37__RightImage-CentOS-6.2-x64-v5.8.8.1</Name><OS>Linux</OS><Eula>http://support.rightscale.com/12-Guides/RightLink/RightLink_End_User_License_Agreeement</Eula><Description>CentOS 6.3 with RightLink 5.8.</Description><ImageFamily>RightScale Linux v13</ImageFamily><ShowInGui>false</ShowInGui><PublishedDate>2012-08-28T00:00:00Z</PublishedDate><IsPremium>false</IsPremium><PrivacyUri>http://www.rightscale.com/privacy_policy.php</PrivacyUri><PublisherName>RightScale with Linux</PublisherName></OSImage></Images>", {
          'cache-control' : 'no-cache',
          'content-length' : '183188',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '3c1093e5080635829fc5aeffaaedbc47',
          date : 'Fri, 22 Nov 2013 05:21:34 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/vmimages')
        .reply(200, "<VMImages xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><VMImage><Name>nerdworksub1-20140716-893917</Name><Label>nerdworks-ubuntu-image1</Label><Category>User</Category><OSDiskConfiguration><Name>nerdworksub1-20140716-893917-os-2014-07-17</Name><HostCaching>ReadWrite</HostCaching><OSState>Specialized</OSState><OS>Linux</OS><MediaLink>https://acsforsdk2.blob.core.windows.net/vhd-store/nerdworksub1-20140716-893917-os-2014-07-17.vhd</MediaLink><LogicalDiskSizeInGB>30</LogicalDiskSizeInGB></OSDiskConfiguration><DataDiskConfigurations/><ServiceName>nerdworksub1</ServiceName><DeploymentName>nerdworksub1</DeploymentName><RoleName>nerdworksub1</RoleName><Location>West US</Location><CreatedTime>2014-07-17T04:48:06.0038647Z</CreatedTime><ModifiedTime>2014-07-17T04:48:06.0038647Z</ModifiedTime><IsPremium>false</IsPremium></VMImage></VMImages>", {
          'cache-control' : 'no-cache',
          'content-length' : '183188',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '3c1093e5080635829fc5aeffaaedbc47',
          date : 'Fri, 22 Nov 2013 05:21:34 GMT'
        });
      return result;
    },
    function (nock) {
      var result =
        nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/images/0b11de9248dd4d87b18621318e037d37__RightImage-CentOS-6.2-x64-v5.8.8.1')
        .reply(200, "<OSImage xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Category>User</Category><Label>0b11de9248dd4d87b18621318e037d37__RightImage-CentOS-6.2-x64-v5.8.8.1</Label><Location>West US</Location><LogicalSizeInGB>10</LogicalSizeInGB><MediaLink>http://acsforsdk2.blob.core.windows.net/vm-images/0b11de9248dd4d87b18621318e037d37__RightImage-CentOS-6.2-x64-v5.8.8.1</MediaLink><Name>0b11de9248dd4d87b18621318e037d37__RightImage-CentOS-6.2-x64-v5.8.8.1</Name><OS>Linux</OS><IsPremium>false</IsPremium><PublisherName>User</PublisherName></OSImage>", {
          'cache-control' : 'no-cache',
          'content-length' : '425',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '2e21aebf82a636cebfbdec38c6064c4f',
          date : 'Fri, 22 Nov 2013 04:44:08 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/hostedservices')
        .reply(200, "<HostedServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><HostedService><Url>https://management.core.windows.net/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/hostedservices/xplattestvmVnet1</Url><ServiceName>xplattestvmVnet1</ServiceName><HostedServiceProperties><Description>Implicitly created hosted service</Description><AffinityGroup>xplattestaffingrp</AffinityGroup><Label>dm5ldHZtdGVzdDI=</Label><Status>Created</Status><DateCreated>2013-11-20T22:13:19Z</DateCreated><DateLastModified>2013-11-20T22:13:39Z</DateLastModified><ExtendedProperties/></HostedServiceProperties></HostedService></HostedServices>", {
          'cache-control' : 'no-cache',
          'content-length' : '4051',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '5d885d0c15de3972b157f08150763761',
          date : 'Fri, 22 Nov 2013 05:21:37 GMT'
        });
      return result;
    },
    function (nock) {
      var result =
        nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/networking/virtualnetwork')
        .reply(200, "<VirtualNetworkSites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><VirtualNetworkSite><Name>xplattestaffingrp</Name><Id>2345070e-ee2b-46eb-8a0b-7ac158dcce06</Id><AffinityGroup>xplattestaffingrp</AffinityGroup><State>Created</State><InUse>true</InUse><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Azure-SDK-CI</Name><AddressPrefix>10.0.0.0/29</AddressPrefix></Subnet></Subnets></VirtualNetworkSite><VirtualNetworkSite><Name>javasdkci</Name><Id>dd876c1f-7ac1-4a0a-9462-71f0e1043245</Id><AffinityGroup>javasdkciag</AffinityGroup><State>Created</State><InUse>true</InUse><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>javasdkci</Name><AddressPrefix>10.0.0.0/8</AddressPrefix></Subnet></Subnets></VirtualNetworkSite><VirtualNetworkSite><Name>mynet</Name><Id>e91bddcb-ea78-4272-a88c-4481cb30c5cf</Id><AffinityGroup>AG-CLI-1d0a2453cc8d1118</AffinityGroup><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/11</AddressPrefix></Subnet></Subnets></VirtualNetworkSite><VirtualNetworkSite><Name>mynetwork</Name><Id>42f6ff8d-3f25-40f4-b457-70f116138966</Id><AffinityGroup>AG-CLI-1d0a2453cc8d1118</AffinityGroup><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/11</AddressPrefix></Subnet></Subnets></VirtualNetworkSite><VirtualNetworkSite><Name>vnet1</Name><Id>cc4e249e-babd-4d62-94a3-203e37c4f192</Id><AffinityGroup>AG-CLI-1d0a2453cc8d1118</AffinityGroup><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/11</AddressPrefix></Subnet></Subnets></VirtualNetworkSite></VirtualNetworkSites>", {
          'cache-control' : 'no-cache',
          'content-length' : '2095',
          'content-type' : 'application/xml; charset=utf-8',
          server : '33.0.6198.68 (rd_rdfe_stable.130710-0833) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '905126c245554c2fbde6f6ff1ba0a6e4',
          date : 'Wed, 24 Jul 2013 22:16:25 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/hostedservices/xplattestvmVnet')
        .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>No deployments were found.</Message></Error>", {
          'cache-control' : 'no-cache',
          'content-length' : '2445',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '23b475bd87883e1e9335b43052357f49',
          date : 'Fri, 22 Nov 2013 05:22:18 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123f/services/hostedservices/xplattestvmVnet')
        .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>No deployments were found.</Message></Error>", {
          'cache-control' : 'no-cache',
          'content-length' : '2445',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth',
          'x-ms-request-id' : '23b475bd87883e1e9335b43052357f49',
          date : 'Fri, 22 Nov 2013 05:22:18 GMT'
        });
      return result;
    }
  ]
]
