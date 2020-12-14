# TextmagicClient.UsersInbound

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Dedicated number ID. | 
**displayTimeFormat** | **String** | Format for representation of time. | [optional] 
**phone** | **String** | Dedicated phone number. | [optional] 
**user** | [**User**](User.md) |  | 
**purchasedAt** | **Date** | Time when the dedicated number was purchased. | 
**expireAt** | **Date** | Dedicated number subscription expiration time. | 
**status** | **String** | Number status: *   **U** for Unused. No messages have been sent from (or received to) this number; *   **A** for Active.  | 
**country** | [**Country**](Country.md) |  | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `U` (value: `"U"`)

* `A` (value: `"A"`)




