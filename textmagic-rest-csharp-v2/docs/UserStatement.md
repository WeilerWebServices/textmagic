# TextMagicClient.Model.UserStatement
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int?** | User statement ID. | 
**UserId** | **int?** | User ID. | 
**Date** | **DateTime?** | User statement date. | 
**Balance** | **double?** |  | 
**Delta** | **float?** | Balance change amount. | 
**Type** | **string** | Type of statement (what you have been charged for): *   **sms** - for sending SMS *   **number** - for renewing a dedicated number; *   **schedule** - for scheduling text messages; *   **topup** - for adding credits to your account.  | 
**Value** | **string** | Value differs by **type**: *   for **sms**, it is the sent messages amount; *   for **number**, it is a dedicated phone number; *   for **schedule**, it is a scheduled messages amount; *   for **top-up**, it is an invoice ID.  | 
**Comment** | **string** | Optional comment. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

