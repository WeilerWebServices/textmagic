# TextMagicClient.Model.BulkSession
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int?** | Bulk Session ID. | 
**Status** | **string** | * **n** – bulk session is just created * **w** - work in progress * **f** - failed * **c** - completed with success * **s** - suspended  | 
**ItemsProcessed** | **int?** | Amount of messages already processed. | 
**ItemsTotal** | **int?** | Total amount of messages to be processed. | 
**CreatedAt** | **DateTime?** | Creation date and time of a Bulk Session. | 
**Session** | [**MessageSession**](MessageSession.md) |  | 
**Text** | **string** | Message text of a Bulk Session. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

