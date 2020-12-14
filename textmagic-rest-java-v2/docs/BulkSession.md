
# BulkSession

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | Bulk Session ID. | 
**status** | [**StatusEnum**](#StatusEnum) | * **n** – bulk session is just created * **w** - work in progress * **f** - failed * **c** - completed with success * **s** - suspended  | 
**itemsProcessed** | **Integer** | Amount of messages already processed. | 
**itemsTotal** | **Integer** | Total amount of messages to be processed. | 
**createdAt** | [**OffsetDateTime**](OffsetDateTime.md) | Creation date and time of a Bulk Session. | 
**session** | [**MessageSession**](MessageSession.md) |  | 
**text** | **String** | Message text of a Bulk Session. | 


<a name="StatusEnum"></a>
## Enum: StatusEnum
Name | Value
---- | -----
N | &quot;n&quot;
W | &quot;w&quot;
F | &quot;f&quot;
C | &quot;c&quot;
S | &quot;s&quot;



