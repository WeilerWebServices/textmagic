
# FavoriteContact

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityId** | **Integer** | List or Contact ID. | 
**entityType** | [**EntityTypeEnum**](#EntityTypeEnum) | Entity type which should be marked as **favorite**. | 
**primaryLabel** | **String** | Contact first name/last name if entityType is **contact**; List name if entity type is **list**. | 
**secondaryLabel** | **String** | Phone number if entityType is **contact**; List contacts number if entity type is **list**. | 
**tertiaryLabel** | **String** | Contact country if entityType is **contact**; else, null. | 
**avatar** | **String** |  | 


<a name="EntityTypeEnum"></a>
## Enum: EntityTypeEnum
Name | Value
---- | -----
LIST | &quot;list&quot;
CONTACT | &quot;contact&quot;



