# TextMagicClient.Model.User
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int?** | User ID. | 
**DisplayTimeFormat** | **string** | User&#39;s preferred format of time display: * *12h* - AM/PM format; * *24h* - 24-hour clock format.  | [optional] 
**Username** | **string** | Username. | 
**FirstName** | **string** | Account first name. | 
**LastName** | **string** | Account last name. | 
**Email** | **string** | User email address. | 
**Status** | **string** | Current account status: * **A** for Active; * **T** for Trial.  | 
**Balance** | **decimal?** | Account balance (in account currency). | 
**Phone** | **string** | User&#39;s phone number. | 
**Company** | **string** | Account company name. | 
**Currency** | [**Currency**](Currency.md) |  | 
**Country** | [**Country**](Country.md) |  | 
**Timezone** | [**Timezone**](Timezone.md) |  | 
**SubaccountType** | **string** | Type of account: * **P** for Parent User; * **A** for Administrator Sub-Account; * **U** for Regular User.  | 
**EmailAccepted** | **bool?** | Does the account have a confirmed email? | 
**PhoneAccepted** | **bool?** | Does the account have a confirmed phone number? | 
**Avatar** | [**UserImage**](UserImage.md) |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

