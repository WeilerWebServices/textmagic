# TextmagicClient.BulkSession

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Bulk Session ID. | 
**status** | **String** | * **n** – bulk session is just created * **w** - work in progress * **f** - failed * **c** - completed with success * **s** - suspended  | 
**itemsProcessed** | **Number** | Amount of messages already processed. | 
**itemsTotal** | **Number** | Total amount of messages to be processed. | 
**createdAt** | **Date** | Creation date and time of a Bulk Session. | 
**session** | [**MessageSession**](MessageSession.md) |  | 
**text** | **String** | Message text of a Bulk Session. | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `n` (value: `"n"`)

* `w` (value: `"w"`)

* `f` (value: `"f"`)

* `c` (value: `"c"`)

* `s` (value: `"s"`)




