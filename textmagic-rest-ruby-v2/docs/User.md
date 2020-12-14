# TextMagic::User

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | User ID. | 
**display_time_format** | **String** | User&#39;s preferred format of time display: * *12h* - AM/PM format; * *24h* - 24-hour clock format.  | [optional] 
**username** | **String** | Username. | 
**first_name** | **String** | Account first name. | 
**last_name** | **String** | Account last name. | 
**email** | **String** | User email address. | 
**status** | **String** | Current account status: * **A** for Active; * **T** for Trial.  | 
**balance** | **Float** | Account balance (in account currency). | 
**phone** | **String** | User&#39;s phone number. | 
**company** | **String** | Account company name. | 
**currency** | [**Currency**](Currency.md) |  | 
**country** | [**Country**](Country.md) |  | 
**timezone** | [**Timezone**](Timezone.md) |  | 
**subaccount_type** | **String** | Type of account: * **P** for Parent User; * **A** for Administrator Sub-Account; * **U** for Regular User.  | 
**email_accepted** | **BOOLEAN** | Does the account have a confirmed email? | 
**phone_accepted** | **BOOLEAN** | Does the account have a confirmed phone number? | 
**avatar** | [**UserImage**](UserImage.md) |  | 


