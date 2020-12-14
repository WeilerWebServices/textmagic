# TextMagicClient.Model.UsersInbound
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int?** | Dedicated number ID. | 
**DisplayTimeFormat** | **string** | Format for representation of time. | [optional] 
**Phone** | **string** | Dedicated phone number. | [optional] 
**User** | [**User**](User.md) |  | 
**PurchasedAt** | **DateTime?** | Time when the dedicated number was purchased. | 
**ExpireAt** | **DateTime?** | Dedicated number subscription expiration time. | 
**Status** | **string** | Number status: *   **U** for Unused. No messages have been sent from (or received to) this number; *   **A** for Active.  | 
**Country** | [**Country**](Country.md) |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

