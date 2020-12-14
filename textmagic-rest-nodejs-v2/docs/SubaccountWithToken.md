# TextmagicClient.SubaccountWithToken

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Sub-account ID. | 
**username** | **String** | Username. | 
**firstName** | **String** | Account first name. | 
**lastName** | **String** | Account last name. | 
**email** | **String** | Account Email address. | 
**status** | **String** | Current account status: * **A** for Active; * **T** for Trial.  | 
**balance** | **Number** | Account balance (in account currency). | 
**phone** | **String** | Contact phone number. | 
**company** | **String** | Account company name. | 
**currency** | [**Currency**](Currency.md) |  | 
**country** | [**Country**](Country.md) |  | 
**timezone** | [**Timezone**](Timezone.md) |  | 
**subaccountType** | **String** | Type of account: *   **A** for Administrator sub-account; *   **U** for Regular User.  | 
**emailAccepted** | **Boolean** | Does the account have a confirmed Email?. | 
**phoneAccepted** | **Boolean** | Does the account have a confirmed Phone Number?. | 
**avatar** | [**UserImage**](UserImage.md) |  | 
**token** | **String** | Access token of account. | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `A` (value: `"A"`)

* `T` (value: `"T"`)




<a name="SubaccountTypeEnum"></a>
## Enum: SubaccountTypeEnum


* `A` (value: `"A"`)

* `U` (value: `"U"`)




