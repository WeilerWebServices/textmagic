# TextmagicClient.List

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | List ID. | 
**name** | **String** | List name. | 
**description** | **String** | Description of the list. | 
**favorited** | **Boolean** | Is the List favorited? See [Favorites list](https://docs.textmagic.com/#operation/getFavourites). | 
**membersCount** | **Number** | List members count. | 
**user** | [**User**](User.md) |  | 
**service** | **Boolean** | Internal service field. | 
**shared** | **Boolean** | Is the list **shared** among all sub-accounts? | 
**avatar** | [**ListImage**](ListImage.md) |  | 
**isDefault** | **Boolean** | Indicates that List is used as a default. All new contacts added via the Web-app will be added in this List by default. | 


