# Net::Sms::TextMagicClient::Object::BulkSession

## Load the model package
```perl
use Net::Sms::TextMagicClient::Object::BulkSession;
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Bulk Session ID. | 
**status** | **string** | * **n** – bulk session is just created * **w** - work in progress * **f** - failed * **c** - completed with success * **s** - suspended  | 
**items_processed** | **int** | Amount of messages already processed. | 
**items_total** | **int** | Total amount of messages to be processed. | 
**created_at** | **DateTime** | Creation date and time of a Bulk Session. | 
**session** | [**MessageSession**](MessageSession.md) |  | 
**text** | **string** | Message text of a Bulk Session. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


