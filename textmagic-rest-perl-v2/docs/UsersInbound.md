# Net::Sms::TextMagicClient::Object::UsersInbound

## Load the model package
```perl
use Net::Sms::TextMagicClient::Object::UsersInbound;
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Dedicated number ID. | 
**display_time_format** | **string** | Format for representation of time. | [optional] 
**phone** | **string** | Dedicated phone number. | [optional] 
**user** | [**User**](User.md) |  | 
**purchased_at** | **DateTime** | Time when the dedicated number was purchased. | 
**expire_at** | **DateTime** | Dedicated number subscription expiration time. | 
**status** | **string** | Number status: *   **U** for Unused. No messages have been sent from (or received to) this number; *   **A** for Active.  | 
**country** | [**Country**](Country.md) |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


