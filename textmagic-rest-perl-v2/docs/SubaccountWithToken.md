# Net::Sms::TextMagicClient::Object::SubaccountWithToken

## Load the model package
```perl
use Net::Sms::TextMagicClient::Object::SubaccountWithToken;
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Sub-account ID. | 
**username** | **string** | Username. | 
**first_name** | **string** | Account first name. | 
**last_name** | **string** | Account last name. | 
**email** | **string** | Account Email address. | 
**status** | **string** | Current account status: * **A** for Active; * **T** for Trial.  | 
**balance** | **double** | Account balance (in account currency). | 
**phone** | **string** | Contact phone number. | 
**company** | **string** | Account company name. | 
**currency** | [**Currency**](Currency.md) |  | 
**country** | [**Country**](Country.md) |  | 
**timezone** | [**Timezone**](Timezone.md) |  | 
**subaccount_type** | **string** | Type of account: *   **A** for Administrator sub-account; *   **U** for Regular User.  | 
**email_accepted** | **boolean** | Does the account have a confirmed Email?. | 
**phone_accepted** | **boolean** | Does the account have a confirmed Phone Number?. | 
**avatar** | [**UserImage**](UserImage.md) |  | 
**token** | **string** | Access token of account. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


