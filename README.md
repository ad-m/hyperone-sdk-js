# hyper_one_api

HyperOneApi - JavaScript client for hyper_one_api
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1
- Package version: 1
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install hyper_one_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your hyper_one_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('hyper_one_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var HyperOneApi = require('hyper_one_api');

var defaultClient = HyperOneApi.ApiClient.instance;

// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix['x-project'] = "Token"

// Configure API key authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix['x-auth-token'] = "Token"

// Configure API key authorization: Session
var Session = defaultClient.authentications['Session'];
Session.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix['x-auth-token'] = "Token"

var api = new HyperOneApi.ContainerApi()
var containerId = "containerId_example"; // {String} ID of container
var opts = {
  'body': null // {Object} 
};
api.actionContainerRestart(containerId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://api.hyperone.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*HyperOneApi.ContainerApi* | [**actionContainerRestart**](docs/ContainerApi.md#actionContainerRestart) | **POST** /container/{containerId}/actions/restart | Action :: restart
*HyperOneApi.ContainerApi* | [**actionContainerStart**](docs/ContainerApi.md#actionContainerStart) | **POST** /container/{containerId}/actions/start | Action :: start
*HyperOneApi.ContainerApi* | [**actionContainerStop**](docs/ContainerApi.md#actionContainerStop) | **POST** /container/{containerId}/actions/stop | Action :: stop
*HyperOneApi.ContainerApi* | [**createContainer**](docs/ContainerApi.md#createContainer) | **POST** /container | Create
*HyperOneApi.ContainerApi* | [**deleteContainer**](docs/ContainerApi.md#deleteContainer) | **DELETE** /container/{containerId} | Delete by ID
*HyperOneApi.ContainerApi* | [**listContainer**](docs/ContainerApi.md#listContainer) | **GET** /container | List
*HyperOneApi.ContainerApi* | [**showContainer**](docs/ContainerApi.md#showContainer) | **GET** /container/{containerId} | Find by ID
*HyperOneApi.ContainerApi* | [**updateContainer**](docs/ContainerApi.md#updateContainer) | **PATCH** /container/{containerId} | Update by ID
*HyperOneApi.DiskApi* | [**actionDiskResize**](docs/DiskApi.md#actionDiskResize) | **POST** /disk/{diskId}/actions/resize | Action :: resize
*HyperOneApi.DiskApi* | [**actionDiskTransfer**](docs/DiskApi.md#actionDiskTransfer) | **POST** /disk/{diskId}/actions/transfer | Action :: transfer
*HyperOneApi.DiskApi* | [**createDisk**](docs/DiskApi.md#createDisk) | **POST** /disk | Create
*HyperOneApi.DiskApi* | [**deleteDisk**](docs/DiskApi.md#deleteDisk) | **DELETE** /disk/{diskId} | Delete by ID
*HyperOneApi.DiskApi* | [**listDisk**](docs/DiskApi.md#listDisk) | **GET** /disk | List
*HyperOneApi.DiskApi* | [**showDisk**](docs/DiskApi.md#showDisk) | **GET** /disk/{diskId} | Find by ID
*HyperOneApi.DiskApi* | [**updateDisk**](docs/DiskApi.md#updateDisk) | **PATCH** /disk/{diskId} | Update by ID
*HyperOneApi.FirewallApi* | [**actionFirewallAttach**](docs/FirewallApi.md#actionFirewallAttach) | **POST** /firewall/{firewallId}/actions/attach | Action :: attach
*HyperOneApi.FirewallApi* | [**actionFirewallDetach**](docs/FirewallApi.md#actionFirewallDetach) | **POST** /firewall/{firewallId}/actions/detach | Action :: detach
*HyperOneApi.FirewallApi* | [**actionFirewallTransfer**](docs/FirewallApi.md#actionFirewallTransfer) | **POST** /firewall/{firewallId}/actions/transfer | Action :: transfer
*HyperOneApi.FirewallApi* | [**createFirewall**](docs/FirewallApi.md#createFirewall) | **POST** /firewall | Create
*HyperOneApi.FirewallApi* | [**deleteFirewall**](docs/FirewallApi.md#deleteFirewall) | **DELETE** /firewall/{firewallId} | Delete by ID
*HyperOneApi.FirewallApi* | [**listFirewall**](docs/FirewallApi.md#listFirewall) | **GET** /firewall | List
*HyperOneApi.FirewallApi* | [**showFirewall**](docs/FirewallApi.md#showFirewall) | **GET** /firewall/{firewallId} | Find by ID
*HyperOneApi.FirewallApi* | [**updateFirewall**](docs/FirewallApi.md#updateFirewall) | **PATCH** /firewall/{firewallId} | Update by ID
*HyperOneApi.ImageApi* | [**actionImageTransfer**](docs/ImageApi.md#actionImageTransfer) | **POST** /image/{imageId}/actions/transfer | Action :: transfer
*HyperOneApi.ImageApi* | [**createImage**](docs/ImageApi.md#createImage) | **POST** /image | Create
*HyperOneApi.ImageApi* | [**deleteImage**](docs/ImageApi.md#deleteImage) | **DELETE** /image/{imageId} | Delete by ID
*HyperOneApi.ImageApi* | [**listImage**](docs/ImageApi.md#listImage) | **GET** /image | List
*HyperOneApi.ImageApi* | [**showImage**](docs/ImageApi.md#showImage) | **GET** /image/{imageId} | Find by ID
*HyperOneApi.ImageApi* | [**updateImage**](docs/ImageApi.md#updateImage) | **PATCH** /image/{imageId} | Update by ID
*HyperOneApi.IpApi* | [**actionIpAllocate**](docs/IpApi.md#actionIpAllocate) | **POST** /ip/{ipId}/actions/allocate | Action :: allocate
*HyperOneApi.IpApi* | [**actionIpAssociate**](docs/IpApi.md#actionIpAssociate) | **POST** /ip/{ipId}/actions/associate | Action :: associate
*HyperOneApi.IpApi* | [**actionIpDisassociate**](docs/IpApi.md#actionIpDisassociate) | **POST** /ip/{ipId}/actions/disassociate | Action :: disassociate
*HyperOneApi.IpApi* | [**actionIpRelease**](docs/IpApi.md#actionIpRelease) | **POST** /ip/{ipId}/actions/release | Action :: release
*HyperOneApi.IpApi* | [**actionIpTransfer**](docs/IpApi.md#actionIpTransfer) | **POST** /ip/{ipId}/actions/transfer | Action :: transfer
*HyperOneApi.IpApi* | [**createIp**](docs/IpApi.md#createIp) | **POST** /ip | Create
*HyperOneApi.IpApi* | [**deleteIp**](docs/IpApi.md#deleteIp) | **DELETE** /ip/{ipId} | Delete by ID
*HyperOneApi.IpApi* | [**listIp**](docs/IpApi.md#listIp) | **GET** /ip | List
*HyperOneApi.IpApi* | [**showIp**](docs/IpApi.md#showIp) | **GET** /ip/{ipId} | Find by ID
*HyperOneApi.IpApi* | [**updateIp**](docs/IpApi.md#updateIp) | **PATCH** /ip/{ipId} | Update by ID
*HyperOneApi.IsoApi* | [**actionIsoTransfer**](docs/IsoApi.md#actionIsoTransfer) | **POST** /iso/{isoId}/actions/transfer | Action :: transfer
*HyperOneApi.IsoApi* | [**createIso**](docs/IsoApi.md#createIso) | **POST** /iso | Create
*HyperOneApi.IsoApi* | [**deleteIso**](docs/IsoApi.md#deleteIso) | **DELETE** /iso/{isoId} | Delete by ID
*HyperOneApi.IsoApi* | [**listIso**](docs/IsoApi.md#listIso) | **GET** /iso | List
*HyperOneApi.IsoApi* | [**showIso**](docs/IsoApi.md#showIso) | **GET** /iso/{isoId} | Find by ID
*HyperOneApi.IsoApi* | [**updateIso**](docs/IsoApi.md#updateIso) | **PATCH** /iso/{isoId} | Update by ID
*HyperOneApi.LogArchiveApi* | [**actionLogArchiveTransfer**](docs/LogArchiveApi.md#actionLogArchiveTransfer) | **POST** /logArchive/{logArchiveId}/actions/transfer | Action :: transfer
*HyperOneApi.LogArchiveApi* | [**createLogArchive**](docs/LogArchiveApi.md#createLogArchive) | **POST** /logArchive | Create
*HyperOneApi.LogArchiveApi* | [**deleteLogArchive**](docs/LogArchiveApi.md#deleteLogArchive) | **DELETE** /logArchive/{logArchiveId} | Delete by ID
*HyperOneApi.LogArchiveApi* | [**listLogArchive**](docs/LogArchiveApi.md#listLogArchive) | **GET** /logArchive | List
*HyperOneApi.LogArchiveApi* | [**showLogArchive**](docs/LogArchiveApi.md#showLogArchive) | **GET** /logArchive/{logArchiveId} | Find by ID
*HyperOneApi.LogArchiveApi* | [**updateLogArchive**](docs/LogArchiveApi.md#updateLogArchive) | **PATCH** /logArchive/{logArchiveId} | Update by ID
*HyperOneApi.NetadpApi* | [**listNetadp**](docs/NetadpApi.md#listNetadp) | **GET** /netadp | List
*HyperOneApi.NetadpApi* | [**showNetadp**](docs/NetadpApi.md#showNetadp) | **GET** /netadp/{netadpId} | Find by ID
*HyperOneApi.NetgwApi* | [**actionNetgwAttach**](docs/NetgwApi.md#actionNetgwAttach) | **POST** /netgw/{netgwId}/actions/attach | Action :: attach
*HyperOneApi.NetgwApi* | [**actionNetgwDetach**](docs/NetgwApi.md#actionNetgwDetach) | **POST** /netgw/{netgwId}/actions/detach | Action :: detach
*HyperOneApi.NetgwApi* | [**createNetgw**](docs/NetgwApi.md#createNetgw) | **POST** /netgw | Create
*HyperOneApi.NetgwApi* | [**deleteNetgw**](docs/NetgwApi.md#deleteNetgw) | **DELETE** /netgw/{netgwId} | Delete by ID
*HyperOneApi.NetgwApi* | [**listNetgw**](docs/NetgwApi.md#listNetgw) | **GET** /netgw | List
*HyperOneApi.NetgwApi* | [**showNetgw**](docs/NetgwApi.md#showNetgw) | **GET** /netgw/{netgwId} | Find by ID
*HyperOneApi.NetgwApi* | [**updateNetgw**](docs/NetgwApi.md#updateNetgw) | **PATCH** /netgw/{netgwId} | Update by ID
*HyperOneApi.NetworkApi* | [**createNetwork**](docs/NetworkApi.md#createNetwork) | **POST** /network | Create
*HyperOneApi.NetworkApi* | [**deleteNetwork**](docs/NetworkApi.md#deleteNetwork) | **DELETE** /network/{networkId} | Delete by ID
*HyperOneApi.NetworkApi* | [**listNetwork**](docs/NetworkApi.md#listNetwork) | **GET** /network | List
*HyperOneApi.NetworkApi* | [**showNetwork**](docs/NetworkApi.md#showNetwork) | **GET** /network/{networkId} | Find by ID
*HyperOneApi.NetworkApi* | [**updateNetwork**](docs/NetworkApi.md#updateNetwork) | **PATCH** /network/{networkId} | Update by ID
*HyperOneApi.OrganisationApi* | [**actionOrganisationTransferAccept**](docs/OrganisationApi.md#actionOrganisationTransferAccept) | **POST** /organisation/{organisationId}/actions/transfer_accept | Action :: transfer_accept
*HyperOneApi.OrganisationApi* | [**createOrganisation**](docs/OrganisationApi.md#createOrganisation) | **POST** /organisation | Create
*HyperOneApi.OrganisationApi* | [**listOrganisation**](docs/OrganisationApi.md#listOrganisation) | **GET** /organisation | List
*HyperOneApi.OrganisationApi* | [**showOrganisation**](docs/OrganisationApi.md#showOrganisation) | **GET** /organisation/{organisationId} | Find by ID
*HyperOneApi.OrganisationApi* | [**updateOrganisation**](docs/OrganisationApi.md#updateOrganisation) | **PATCH** /organisation/{organisationId} | Update by ID
*HyperOneApi.ProjectApi* | [**createProject**](docs/ProjectApi.md#createProject) | **POST** /project | Create
*HyperOneApi.ProjectApi* | [**listProject**](docs/ProjectApi.md#listProject) | **GET** /project | List
*HyperOneApi.ProjectApi* | [**showProject**](docs/ProjectApi.md#showProject) | **GET** /project/{projectId} | Find by ID
*HyperOneApi.ProjectApi* | [**updateProject**](docs/ProjectApi.md#updateProject) | **PATCH** /project/{projectId} | Update by ID
*HyperOneApi.ReplicaApi* | [**actionReplicaImage**](docs/ReplicaApi.md#actionReplicaImage) | **POST** /replica/{replicaId}/actions/image | Action :: image
*HyperOneApi.ReplicaApi* | [**createReplica**](docs/ReplicaApi.md#createReplica) | **POST** /replica | Create
*HyperOneApi.ReplicaApi* | [**deleteReplica**](docs/ReplicaApi.md#deleteReplica) | **DELETE** /replica/{replicaId} | Delete by ID
*HyperOneApi.ReplicaApi* | [**listReplica**](docs/ReplicaApi.md#listReplica) | **GET** /replica | List
*HyperOneApi.ReplicaApi* | [**showReplica**](docs/ReplicaApi.md#showReplica) | **GET** /replica/{replicaId} | Find by ID
*HyperOneApi.ReservationApi* | [**actionReservationAssign**](docs/ReservationApi.md#actionReservationAssign) | **POST** /reservation/{reservationId}/actions/assign | Action :: assign
*HyperOneApi.ReservationApi* | [**actionReservationExtend**](docs/ReservationApi.md#actionReservationExtend) | **POST** /reservation/{reservationId}/actions/extend | Action :: extend
*HyperOneApi.ReservationApi* | [**actionReservationUnassign**](docs/ReservationApi.md#actionReservationUnassign) | **POST** /reservation/{reservationId}/actions/unassign | Action :: unassign
*HyperOneApi.ReservationApi* | [**createReservation**](docs/ReservationApi.md#createReservation) | **POST** /reservation | Create
*HyperOneApi.ReservationApi* | [**deleteReservation**](docs/ReservationApi.md#deleteReservation) | **DELETE** /reservation/{reservationId} | Delete by ID
*HyperOneApi.ReservationApi* | [**listReservation**](docs/ReservationApi.md#listReservation) | **GET** /reservation | List
*HyperOneApi.ReservationApi* | [**showReservation**](docs/ReservationApi.md#showReservation) | **GET** /reservation/{reservationId} | Find by ID
*HyperOneApi.ReservationApi* | [**updateReservation**](docs/ReservationApi.md#updateReservation) | **PATCH** /reservation/{reservationId} | Update by ID
*HyperOneApi.SnapshotApi* | [**createSnapshot**](docs/SnapshotApi.md#createSnapshot) | **POST** /snapshot | Create
*HyperOneApi.SnapshotApi* | [**deleteSnapshot**](docs/SnapshotApi.md#deleteSnapshot) | **DELETE** /snapshot/{snapshotId} | Delete by ID
*HyperOneApi.SnapshotApi* | [**listSnapshot**](docs/SnapshotApi.md#listSnapshot) | **GET** /snapshot | List
*HyperOneApi.SnapshotApi* | [**showSnapshot**](docs/SnapshotApi.md#showSnapshot) | **GET** /snapshot/{snapshotId} | Find by ID
*HyperOneApi.SnapshotApi* | [**updateSnapshot**](docs/SnapshotApi.md#updateSnapshot) | **PATCH** /snapshot/{snapshotId} | Update by ID
*HyperOneApi.VaultApi* | [**actionVaultResize**](docs/VaultApi.md#actionVaultResize) | **POST** /vault/{vaultId}/actions/resize | Action :: resize
*HyperOneApi.VaultApi* | [**actionVaultSnapshot**](docs/VaultApi.md#actionVaultSnapshot) | **POST** /vault/{vaultId}/actions/snapshot | Action :: snapshot
*HyperOneApi.VaultApi* | [**actionVaultStart**](docs/VaultApi.md#actionVaultStart) | **POST** /vault/{vaultId}/actions/start | Action :: start
*HyperOneApi.VaultApi* | [**actionVaultStop**](docs/VaultApi.md#actionVaultStop) | **POST** /vault/{vaultId}/actions/stop | Action :: stop
*HyperOneApi.VaultApi* | [**createVault**](docs/VaultApi.md#createVault) | **POST** /vault | Create
*HyperOneApi.VaultApi* | [**deleteVault**](docs/VaultApi.md#deleteVault) | **DELETE** /vault/{vaultId} | Delete by ID
*HyperOneApi.VaultApi* | [**listVault**](docs/VaultApi.md#listVault) | **GET** /vault | List
*HyperOneApi.VaultApi* | [**showVault**](docs/VaultApi.md#showVault) | **GET** /vault/{vaultId} | Find by ID
*HyperOneApi.VaultApi* | [**updateVault**](docs/VaultApi.md#updateVault) | **PATCH** /vault/{vaultId} | Update by ID
*HyperOneApi.VmApi* | [**actionVmFlavour**](docs/VmApi.md#actionVmFlavour) | **POST** /vm/{vmId}/actions/flavour | Action :: flavour
*HyperOneApi.VmApi* | [**actionVmImage**](docs/VmApi.md#actionVmImage) | **POST** /vm/{vmId}/actions/image | Action :: image
*HyperOneApi.VmApi* | [**actionVmPasswordReset**](docs/VmApi.md#actionVmPasswordReset) | **POST** /vm/{vmId}/actions/password_reset | Action :: password_reset
*HyperOneApi.VmApi* | [**actionVmRename**](docs/VmApi.md#actionVmRename) | **POST** /vm/{vmId}/actions/rename | Action :: rename
*HyperOneApi.VmApi* | [**actionVmRestart**](docs/VmApi.md#actionVmRestart) | **POST** /vm/{vmId}/actions/restart | Action :: restart
*HyperOneApi.VmApi* | [**actionVmStart**](docs/VmApi.md#actionVmStart) | **POST** /vm/{vmId}/actions/start | Action :: start
*HyperOneApi.VmApi* | [**actionVmStop**](docs/VmApi.md#actionVmStop) | **POST** /vm/{vmId}/actions/stop | Action :: stop
*HyperOneApi.VmApi* | [**actionVmTurnoff**](docs/VmApi.md#actionVmTurnoff) | **POST** /vm/{vmId}/actions/turnoff | Action :: turnoff
*HyperOneApi.VmApi* | [**createVm**](docs/VmApi.md#createVm) | **POST** /vm | Create
*HyperOneApi.VmApi* | [**deleteVm**](docs/VmApi.md#deleteVm) | **DELETE** /vm/{vmId} | Delete by ID
*HyperOneApi.VmApi* | [**listVm**](docs/VmApi.md#listVm) | **GET** /vm | List
*HyperOneApi.VmApi* | [**showVm**](docs/VmApi.md#showVm) | **GET** /vm/{vmId} | Find by ID
*HyperOneApi.VmApi* | [**updateVm**](docs/VmApi.md#updateVm) | **PATCH** /vm/{vmId} | Update by ID
*HyperOneApi.VmhostApi* | [**actionVmhostMoveDisk**](docs/VmhostApi.md#actionVmhostMoveDisk) | **POST** /vmhost/{vmhostId}/actions/moveDisk | Action :: moveDisk
*HyperOneApi.VmhostApi* | [**actionVmhostMoveISO**](docs/VmhostApi.md#actionVmhostMoveISO) | **POST** /vmhost/{vmhostId}/actions/moveISO | Action :: moveISO
*HyperOneApi.VmhostApi* | [**actionVmhostMoveImage**](docs/VmhostApi.md#actionVmhostMoveImage) | **POST** /vmhost/{vmhostId}/actions/moveImage | Action :: moveImage
*HyperOneApi.VmhostApi* | [**actionVmhostMoveVM**](docs/VmhostApi.md#actionVmhostMoveVM) | **POST** /vmhost/{vmhostId}/actions/moveVM | Action :: moveVM
*HyperOneApi.VmhostApi* | [**deleteVmhost**](docs/VmhostApi.md#deleteVmhost) | **DELETE** /vmhost/{vmhostId} | Delete by ID
*HyperOneApi.VmhostApi* | [**listVmhost**](docs/VmhostApi.md#listVmhost) | **GET** /vmhost | List
*HyperOneApi.VmhostApi* | [**showVmhost**](docs/VmhostApi.md#showVmhost) | **GET** /vmhost/{vmhostId} | Find by ID
*HyperOneApi.VmhostApi* | [**updateVmhost**](docs/VmhostApi.md#updateVmhost) | **PATCH** /vmhost/{vmhostId} | Update by ID


## Documentation for Models

 - [HyperOneApi.Container](docs/Container.md)
 - [HyperOneApi.ContainerExpose](docs/ContainerExpose.md)
 - [HyperOneApi.ContainerRegistry](docs/ContainerRegistry.md)
 - [HyperOneApi.ContainerServices](docs/ContainerServices.md)
 - [HyperOneApi.ContainerVolumes](docs/ContainerVolumes.md)
 - [HyperOneApi.Disk](docs/Disk.md)
 - [HyperOneApi.DiskMetadata](docs/DiskMetadata.md)
 - [HyperOneApi.DiskMetadata1](docs/DiskMetadata1.md)
 - [HyperOneApi.DiskMetadataSource](docs/DiskMetadataSource.md)
 - [HyperOneApi.Event](docs/Event.md)
 - [HyperOneApi.EventResource](docs/EventResource.md)
 - [HyperOneApi.Firewall](docs/Firewall.md)
 - [HyperOneApi.Image](docs/Image.md)
 - [HyperOneApi.ImageDisks](docs/ImageDisks.md)
 - [HyperOneApi.ImageDisksDisk](docs/ImageDisksDisk.md)
 - [HyperOneApi.ImageVm](docs/ImageVm.md)
 - [HyperOneApi.InlineObject](docs/InlineObject.md)
 - [HyperOneApi.InlineObject1](docs/InlineObject1.md)
 - [HyperOneApi.InlineObject10](docs/InlineObject10.md)
 - [HyperOneApi.InlineObject11](docs/InlineObject11.md)
 - [HyperOneApi.InlineObject12](docs/InlineObject12.md)
 - [HyperOneApi.InlineObject13](docs/InlineObject13.md)
 - [HyperOneApi.InlineObject14](docs/InlineObject14.md)
 - [HyperOneApi.InlineObject15](docs/InlineObject15.md)
 - [HyperOneApi.InlineObject16](docs/InlineObject16.md)
 - [HyperOneApi.InlineObject17](docs/InlineObject17.md)
 - [HyperOneApi.InlineObject18](docs/InlineObject18.md)
 - [HyperOneApi.InlineObject19](docs/InlineObject19.md)
 - [HyperOneApi.InlineObject2](docs/InlineObject2.md)
 - [HyperOneApi.InlineObject20](docs/InlineObject20.md)
 - [HyperOneApi.InlineObject21](docs/InlineObject21.md)
 - [HyperOneApi.InlineObject22](docs/InlineObject22.md)
 - [HyperOneApi.InlineObject23](docs/InlineObject23.md)
 - [HyperOneApi.InlineObject24](docs/InlineObject24.md)
 - [HyperOneApi.InlineObject25](docs/InlineObject25.md)
 - [HyperOneApi.InlineObject26](docs/InlineObject26.md)
 - [HyperOneApi.InlineObject27](docs/InlineObject27.md)
 - [HyperOneApi.InlineObject28](docs/InlineObject28.md)
 - [HyperOneApi.InlineObject29](docs/InlineObject29.md)
 - [HyperOneApi.InlineObject3](docs/InlineObject3.md)
 - [HyperOneApi.InlineObject30](docs/InlineObject30.md)
 - [HyperOneApi.InlineObject31](docs/InlineObject31.md)
 - [HyperOneApi.InlineObject32](docs/InlineObject32.md)
 - [HyperOneApi.InlineObject33](docs/InlineObject33.md)
 - [HyperOneApi.InlineObject34](docs/InlineObject34.md)
 - [HyperOneApi.InlineObject35](docs/InlineObject35.md)
 - [HyperOneApi.InlineObject36](docs/InlineObject36.md)
 - [HyperOneApi.InlineObject37](docs/InlineObject37.md)
 - [HyperOneApi.InlineObject38](docs/InlineObject38.md)
 - [HyperOneApi.InlineObject39](docs/InlineObject39.md)
 - [HyperOneApi.InlineObject4](docs/InlineObject4.md)
 - [HyperOneApi.InlineObject40](docs/InlineObject40.md)
 - [HyperOneApi.InlineObject41](docs/InlineObject41.md)
 - [HyperOneApi.InlineObject42](docs/InlineObject42.md)
 - [HyperOneApi.InlineObject43](docs/InlineObject43.md)
 - [HyperOneApi.InlineObject44](docs/InlineObject44.md)
 - [HyperOneApi.InlineObject45](docs/InlineObject45.md)
 - [HyperOneApi.InlineObject46](docs/InlineObject46.md)
 - [HyperOneApi.InlineObject47](docs/InlineObject47.md)
 - [HyperOneApi.InlineObject48](docs/InlineObject48.md)
 - [HyperOneApi.InlineObject49](docs/InlineObject49.md)
 - [HyperOneApi.InlineObject5](docs/InlineObject5.md)
 - [HyperOneApi.InlineObject50](docs/InlineObject50.md)
 - [HyperOneApi.InlineObject51](docs/InlineObject51.md)
 - [HyperOneApi.InlineObject52](docs/InlineObject52.md)
 - [HyperOneApi.InlineObject53](docs/InlineObject53.md)
 - [HyperOneApi.InlineObject54](docs/InlineObject54.md)
 - [HyperOneApi.InlineObject55](docs/InlineObject55.md)
 - [HyperOneApi.InlineObject6](docs/InlineObject6.md)
 - [HyperOneApi.InlineObject7](docs/InlineObject7.md)
 - [HyperOneApi.InlineObject8](docs/InlineObject8.md)
 - [HyperOneApi.InlineObject9](docs/InlineObject9.md)
 - [HyperOneApi.Ip](docs/Ip.md)
 - [HyperOneApi.Iso](docs/Iso.md)
 - [HyperOneApi.LogArchive](docs/LogArchive.md)
 - [HyperOneApi.Netadp](docs/Netadp.md)
 - [HyperOneApi.NetadpAssigned](docs/NetadpAssigned.md)
 - [HyperOneApi.Netgw](docs/Netgw.md)
 - [HyperOneApi.NetgwNetwork](docs/NetgwNetwork.md)
 - [HyperOneApi.NetgwPrimaryIP](docs/NetgwPrimaryIP.md)
 - [HyperOneApi.NetgwPrimaryIPAssociated](docs/NetgwPrimaryIPAssociated.md)
 - [HyperOneApi.NetgwPrimaryIPMac](docs/NetgwPrimaryIPMac.md)
 - [HyperOneApi.NetgwPublic](docs/NetgwPublic.md)
 - [HyperOneApi.NetgwVpn](docs/NetgwVpn.md)
 - [HyperOneApi.NetgwVpnL2tp](docs/NetgwVpnL2tp.md)
 - [HyperOneApi.NetgwVpnL2tpUser](docs/NetgwVpnL2tpUser.md)
 - [HyperOneApi.NetgwnetgwIdactionsattachPrivate](docs/NetgwnetgwIdactionsattachPrivate.md)
 - [HyperOneApi.Network](docs/Network.md)
 - [HyperOneApi.NetworkDns](docs/NetworkDns.md)
 - [HyperOneApi.Organisation](docs/Organisation.md)
 - [HyperOneApi.OrganisationAccessRights](docs/OrganisationAccessRights.md)
 - [HyperOneApi.OrganisationBilling](docs/OrganisationBilling.md)
 - [HyperOneApi.OrganisationBilling1](docs/OrganisationBilling1.md)
 - [HyperOneApi.OrganisationBillingAddress](docs/OrganisationBillingAddress.md)
 - [HyperOneApi.OrganisationTransfer](docs/OrganisationTransfer.md)
 - [HyperOneApi.OrganisationorganisationIdBilling](docs/OrganisationorganisationIdBilling.md)
 - [HyperOneApi.OrganisationorganisationIdBillingAddress](docs/OrganisationorganisationIdBillingAddress.md)
 - [HyperOneApi.Project](docs/Project.md)
 - [HyperOneApi.ProjectAccessRights](docs/ProjectAccessRights.md)
 - [HyperOneApi.ProjectAccessRights1](docs/ProjectAccessRights1.md)
 - [HyperOneApi.ProjectBilling](docs/ProjectBilling.md)
 - [HyperOneApi.ProjectCompliance](docs/ProjectCompliance.md)
 - [HyperOneApi.ProjectInvoices](docs/ProjectInvoices.md)
 - [HyperOneApi.ProjectInvoicesDuplicate](docs/ProjectInvoicesDuplicate.md)
 - [HyperOneApi.ProjectNetworkAcl](docs/ProjectNetworkAcl.md)
 - [HyperOneApi.ProjectPayments](docs/ProjectPayments.md)
 - [HyperOneApi.ProjectThreshold](docs/ProjectThreshold.md)
 - [HyperOneApi.ProjectThresholdCredits](docs/ProjectThresholdCredits.md)
 - [HyperOneApi.ProjectTransfer](docs/ProjectTransfer.md)
 - [HyperOneApi.Replica](docs/Replica.md)
 - [HyperOneApi.Reservation](docs/Reservation.md)
 - [HyperOneApi.Snapshot](docs/Snapshot.md)
 - [HyperOneApi.Vault](docs/Vault.md)
 - [HyperOneApi.VaultCredential](docs/VaultCredential.md)
 - [HyperOneApi.VaultCredential1](docs/VaultCredential1.md)
 - [HyperOneApi.VaultCredential1Password](docs/VaultCredential1Password.md)
 - [HyperOneApi.VaultCredentialCertificate](docs/VaultCredentialCertificate.md)
 - [HyperOneApi.VaultCredentialPassword](docs/VaultCredentialPassword.md)
 - [HyperOneApi.Vm](docs/Vm.md)
 - [HyperOneApi.VmData](docs/VmData.md)
 - [HyperOneApi.VmDisk](docs/VmDisk.md)
 - [HyperOneApi.VmNetadp](docs/VmNetadp.md)
 - [HyperOneApi.VmPassword](docs/VmPassword.md)
 - [HyperOneApi.VmSourceImage](docs/VmSourceImage.md)
 - [HyperOneApi.Vmhost](docs/Vmhost.md)
 - [HyperOneApi.VmhostvmhostIdEnabledServices](docs/VmhostvmhostIdEnabledServices.md)


## Documentation for Authorization


### Project

- **Type**: API key
- **API key parameter name**: x-project
- **Location**: HTTP header

### ServiceAccount

- **Type**: API key
- **API key parameter name**: x-auth-token
- **Location**: HTTP header

### Session

- **Type**: API key
- **API key parameter name**: x-auth-token
- **Location**: HTTP header

