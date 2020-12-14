
# UsersInbound

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | Dedicated number ID. | 
**displayTimeFormat** | **String** | Format for representation of time. |  [optional]
**phone** | **String** | Dedicated phone number. |  [optional]
**user** | [**User**](User.md) |  | 
**purchasedAt** | [**OffsetDateTime**](OffsetDateTime.md) | Time when the dedicated number was purchased. | 
**expireAt** | [**OffsetDateTime**](OffsetDateTime.md) | Dedicated number subscription expiration time. | 
**status** | [**StatusEnum**](#StatusEnum) | Number status: *   **U** for Unused. No messages have been sent from (or received to) this number; *   **A** for Active.  | 
**country** | [**Country**](Country.md) |  | 


<a name="StatusEnum"></a>
## Enum: StatusEnum
Name | Value
---- | -----
U | &quot;U&quot;
A | &quot;A&quot;



