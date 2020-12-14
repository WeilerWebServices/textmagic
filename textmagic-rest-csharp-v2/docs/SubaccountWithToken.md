# TextMagicClient.Model.SubaccountWithToken
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int?** | Sub-account ID. | 
**Username** | **string** | Username. | 
**FirstName** | **string** | Account first name. | 
**LastName** | **string** | Account last name. | 
**Email** | **string** | Account Email address. | 
**Status** | **string** | Current account status: * **A** for Active; * **T** for Trial.  | 
**Balance** | **double?** | Account balance (in account currency). | 
**Phone** | **string** | Contact phone number. | 
**Company** | **string** | Account company name. | 
**Currency** | [**Currency**](Currency.md) |  | 
**Country** | [**Country**](Country.md) |  | 
**Timezone** | [**Timezone**](Timezone.md) |  | 
**SubaccountType** | **string** | Type of account: *   **A** for Administrator sub-account; *   **U** for Regular User.  | 
**EmailAccepted** | **bool?** | Does the account have a confirmed Email?. | 
**PhoneAccepted** | **bool?** | Does the account have a confirmed Phone Number?. | 
**Avatar** | [**UserImage**](UserImage.md) |  | 
**Token** | **string** | Access token of account. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

