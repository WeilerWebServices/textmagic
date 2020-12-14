
# SenderId

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | Numeric sender ID. | 
**displayTimeFormat** | **String** | Format for representation of time. |  [optional]
**senderId** | **String** | Alphanumeric ID. | 
**user** | [**User**](User.md) |  | 
**status** | [**StatusEnum**](#StatusEnum) | *   **P** for Pending - this Sender ID is being reviewed by our support team; *   **R** for Rejected - our support team rejected your application for this Sender ID; *   **A** for Active.  | 


<a name="StatusEnum"></a>
## Enum: StatusEnum
Name | Value
---- | -----
A | &quot;A&quot;
R | &quot;R&quot;
P | &quot;P&quot;



