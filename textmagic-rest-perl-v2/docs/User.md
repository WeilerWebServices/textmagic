# Net::Sms::TextMagicClient::Object::User

## Load the model package
```perl
use Net::Sms::TextMagicClient::Object::User;
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | User ID. | 
**display_time_format** | **string** | User&#39;s preferred format of time display: * *12h* - AM/PM format; * *24h* - 24-hour clock format.  | [optional] 
**username** | **string** | Username. | 
**first_name** | **string** | Account first name. | 
**last_name** | **string** | Account last name. | 
**email** | **string** | User email address. | 
**status** | **string** | Current account status: * **A** for Active; * **T** for Trial.  | 
**balance** | [**Number**](Number.md) | Account balance (in account currency). | 
**phone** | **string** | User&#39;s phone number. | 
**company** | **string** | Account company name. | 
**currency** | [**Currency**](Currency.md) |  | 
**country** | [**Country**](Country.md) |  | 
**timezone** | [**Timezone**](Timezone.md) |  | 
**subaccount_type** | **string** | Type of account: * **P** for Parent User; * **A** for Administrator Sub-Account; * **U** for Regular User.  | 
**email_accepted** | **boolean** | Does the account have a confirmed email? | 
**phone_accepted** | **boolean** | Does the account have a confirmed phone number? | 
**avatar** | [**UserImage**](UserImage.md) |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


