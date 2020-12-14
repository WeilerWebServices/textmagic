
# MessagesIcs

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | Schedule ID. | 
**nextSend** | [**OffsetDateTime**](OffsetDateTime.md) | The next send date in [ISO 8601](https://en.wikipedia.org/?title&#x3D;ISO_8601) format.  | 
**rrule** | **String** | [iCal RRULE](http://www.kanzaki.com/docs/ical/rrule.html) string.  | 
**session** | [**MessageSession**](MessageSession.md) |  | 
**lastSent** | [**OffsetDateTime**](OffsetDateTime.md) | The date and time when the last message was sent. | 
**contactName** | **String** | Aggregated contact information. If the message was scheduled to be sent to a single contact, a full name will be returned here. Otherwise, a total amount of contacts will be returned. | 
**parameters** | [**MessagesIcsParameters**](MessagesIcsParameters.md) |  | 
**type** | [**TypeEnum**](#TypeEnum) |  | 
**summary** | **String** | A human-readable summary of the sending schedule. | 
**textParameters** | [**MessagesIcsTextParameters**](MessagesIcsTextParameters.md) |  | 
**firstOccurrence** | [**OffsetDateTime**](OffsetDateTime.md) | First occurence date. | 
**lastOccurrence** | [**OffsetDateTime**](OffsetDateTime.md) | Last occurence date (could be &#x60;null&#x60; if the schedule is endless). | 
**recipientsCount** | **Integer** | Amount of actual recipients. | 
**timezone** | **String** | User-friendly timezone name (with spaces replaced by underscores). | 
**completed** | **Boolean** | Indicates that scheduling has been completed. | 
**avatar** | **String** | A relative link to the contact avatar. | 
**createdAt** | [**OffsetDateTime**](OffsetDateTime.md) | Scheduling creation time. | 


<a name="TypeEnum"></a>
## Enum: TypeEnum
Name | Value
---- | -----
ONCE | &quot;Once&quot;
HOURLY | &quot;Hourly&quot;
DAILY | &quot;Daily&quot;
WEEKLY | &quot;Weekly&quot;
MONTHLY | &quot;Monthly&quot;
YEARLY | &quot;Yearly&quot;



