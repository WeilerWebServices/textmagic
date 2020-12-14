
# User

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | User ID. | 
**displayTimeFormat** | [**DisplayTimeFormatEnum**](#DisplayTimeFormatEnum) | User&#39;s preferred format of time display: * *12h* - AM/PM format; * *24h* - 24-hour clock format.  |  [optional]
**username** | **String** | Username. | 
**firstName** | **String** | Account first name. | 
**lastName** | **String** | Account last name. | 
**email** | **String** | User email address. | 
**status** | [**StatusEnum**](#StatusEnum) | Current account status: * **A** for Active; * **T** for Trial.  | 
**balance** | [**BigDecimal**](BigDecimal.md) | Account balance (in account currency). | 
**phone** | **String** | User&#39;s phone number. | 
**company** | **String** | Account company name. | 
**currency** | [**Currency**](Currency.md) |  | 
**country** | [**Country**](Country.md) |  | 
**timezone** | [**Timezone**](Timezone.md) |  | 
**subaccountType** | [**SubaccountTypeEnum**](#SubaccountTypeEnum) | Type of account: * **P** for Parent User; * **A** for Administrator Sub-Account; * **U** for Regular User.  | 
**emailAccepted** | **Boolean** | Does the account have a confirmed email? | 
**phoneAccepted** | **Boolean** | Does the account have a confirmed phone number? | 
**avatar** | [**UserImage**](UserImage.md) |  | 


<a name="DisplayTimeFormatEnum"></a>
## Enum: DisplayTimeFormatEnum
Name | Value
---- | -----
_12H | &quot;12h&quot;
_24H | &quot;24h&quot;


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
P | &quot;P&quot;
A | &quot;A&quot;
U | &quot;U&quot;



