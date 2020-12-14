# TextMagicClient.Model.GetContactsAutocompleteResponseItem
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntityId** | **int?** | Id of entity. 0 if object is a reply. | 
**EntityType** | **string** | Entry type: * **contact** if it is related to a contact; * **list** if it is related to a contact list; * **reply** if it is related to an incoming message.  | 
**Value** | **string** | ID of the contact/list if entityType is contact/list OR phone number if entityType is reply. | 
**Label** | **string** | Name of the contact/list if entityType is contact/list OR phone number if entityType is reply. | 
**SharedBy** | **string** | If contact or list was shared by another sub-account, the name of this user will be shown. | 
**IsShared** | **bool?** | If contact or list was shared by another sub-account then &#x60;true&#x60; will be set. | 
**Avatar** | **string** | Contact avatar URI. | 
**Favorited** | **bool?** | If contact has been marked as favorite. | 
**UserId** | **int?** | Owner ID of the contact/list (if it was shared). | 
**CountryName** | **string** |  | 
**Qposition** | **int?** |  | 
**Rposition** | **int?** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

