# TextmagicClient.DeleteChatMessagesBulkInputObject

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inboundIds** | **String** | Inbound message IDs to delete. Require when \"all\" is equal to 0 (false). | [optional] 
**sentIds** | **String** | Sent message IDs to delete. Require when \"all\" is equal to 0 (false). | [optional] 
**callsIds** | **String** | Calls IDs to delete. Require when \"all\" is equal to 0 (false). | [optional] 
**all** | **Boolean** | Default is 0 (false). If set to 1, all the entities will be removed. | [optional] 


