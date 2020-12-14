# TextmagicClient.UserStatement

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | User statement ID. | 
**userId** | **Number** | User ID. | 
**_date** | **Date** | User statement date. | 
**balance** | **Number** |  | 
**delta** | **Number** | Balance change amount. | 
**type** | **String** | Type of statement (what you have been charged for): *   **sms** - for sending SMS *   **number** - for renewing a dedicated number; *   **schedule** - for scheduling text messages; *   **topup** - for adding credits to your account.  | 
**value** | **String** | Value differs by **type**: *   for **sms**, it is the sent messages amount; *   for **number**, it is a dedicated phone number; *   for **schedule**, it is a scheduled messages amount; *   for **top-up**, it is an invoice ID.  | 
**comment** | **String** | Optional comment. | 


