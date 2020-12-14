
# SubaccountWithToken

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | Sub-account ID. | 
**username** | **String** | Username. | 
**firstName** | **String** | Account first name. | 
**lastName** | **String** | Account last name. | 
**email** | **String** | Account Email address. | 
**status** | [**StatusEnum**](#StatusEnum) | Current account status: * **A** for Active; * **T** for Trial.  | 
**balance** | **Double** | Account balance (in account currency). | 
**phone** | **String** | Contact phone number. | 
**company** | **String** | Account company name. | 
**currency** | [**Currency**](Currency.md) |  | 
**country** | [**Country**](Country.md) |  | 
**timezone** | [**Timezone**](Timezone.md) |  | 
**subaccountType** | [**SubaccountTypeEnum**](#SubaccountTypeEnum) | Type of account: *   **A** for Administrator sub-account; *   **U** for Regular User.  | 
**emailAccepted** | **Boolean** | Does the account have a confirmed Email?. | 
**phoneAccepted** | **Boolean** | Does the account have a confirmed Phone Number?. | 
**avatar** | [**UserImage**](UserImage.md) |  | 
**token** | **String** | Access token of account. | 


<a name="StatusEnum"></a>
## Enum: StatusEnum
Name | Value
---- | -----
A | &quot;A&quot;
T | &quot;T&quot;


<a name="SubaccountTypeEnum"></a>
## Enum: SubaccountTypeEnum
Name | Value
---- | -----
A | &quot;A&quot;
U | &quot;U&quot;



