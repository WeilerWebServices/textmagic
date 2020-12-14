# TextMagicClient.Model.MessagesIcs
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int?** | Schedule ID. | 
**NextSend** | **DateTime?** | The next send date in [ISO 8601](https://en.wikipedia.org/?title&#x3D;ISO_8601) format.  | 
**Rrule** | **string** | [iCal RRULE](http://www.kanzaki.com/docs/ical/rrule.html) string.  | 
**Session** | [**MessageSession**](MessageSession.md) |  | 
**LastSent** | **DateTime?** | The date and time when the last message was sent. | 
**ContactName** | **string** | Aggregated contact information. If the message was scheduled to be sent to a single contact, a full name will be returned here. Otherwise, a total amount of contacts will be returned. | 
**Parameters** | [**MessagesIcsParameters**](MessagesIcsParameters.md) |  | 
**Type** | **string** |  | 
**Summary** | **string** | A human-readable summary of the sending schedule. | 
**TextParameters** | [**MessagesIcsTextParameters**](MessagesIcsTextParameters.md) |  | 
**FirstOccurrence** | **DateTime?** | First occurence date. | 
**LastOccurrence** | **DateTime?** | Last occurence date (could be &#x60;null&#x60; if the schedule is endless). | 
**RecipientsCount** | **int?** | Amount of actual recipients. | 
**Timezone** | **string** | User-friendly timezone name (with spaces replaced by underscores). | 
**Completed** | **bool?** | Indicates that scheduling has been completed. | 
**Avatar** | **string** | A relative link to the contact avatar. | 
**CreatedAt** | **DateTime?** | Scheduling creation time. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

