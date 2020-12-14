# Net::Sms::TextMagicClient::Object::FavoriteContact

## Load the model package
```perl
use Net::Sms::TextMagicClient::Object::FavoriteContact;
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_id** | **int** | List or Contact ID. | 
**entity_type** | **string** | Entity type which should be marked as **favorite**. | 
**primary_label** | **string** | Contact first name/last name if entityType is **contact**; List name if entity type is **list**. | 
**secondary_label** | **string** | Phone number if entityType is **contact**; List contacts number if entity type is **list**. | 
**tertiary_label** | **string** | Contact country if entityType is **contact**; else, null. | 
**avatar** | **string** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


