# Net::Sms::TextMagicClient::Object::CreateContactInputObject

## Load the model package
```perl
use Net::Sms::TextMagicClient::Object::CreateContactInputObject;
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **string** | Contact first name. | [optional] 
**last_name** | **string** | Contact last name. | [optional] 
**phone** | **string** | Phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164). | [optional] 
**email** | **string** | Contact email address. | [optional] 
**company_name** | **string** | Company name. | [optional] 
**lists** | **string** | Contact [list](https://docs.textmagic.com/#tag/Lists) ID. Each contact must be assigned to at least one list. | [optional] 
**favorited** | **boolean** | Is the contact marked as favorite? | [optional] 
**blocked** | **boolean** | Is the contact blocked for outgoing and incoming messaging? | [optional] 
**type** | **int** | Force type of phone. Possible values: 0 is landline; 1 is mobile; default is -1 (auto-detection). | [optional] 
**custom_field_values** | [**ARRAY[CustomFieldListItem]**](CustomFieldListItem.md) |  | [optional] 
**local** | **int** | Treat phone numbers passed in the request body as local. | [optional] 
**country** | **string** | The 2-letter ISO country code for local phone numbers, used when local is  set to true. Default is the account country. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


