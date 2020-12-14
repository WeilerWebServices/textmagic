# TextMagicApi

All URIs are relative to *https://rest.textmagic.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignContactsToList**](TextMagicApi.md#assignContactsToList) | **PUT** /api/v2/lists/{id}/contacts | Assign contacts to a list
[**blockContact**](TextMagicApi.md#blockContact) | **POST** /api/v2/contacts/block | Block a contact by phone number
[**buyDedicatedNumber**](TextMagicApi.md#buyDedicatedNumber) | **POST** /api/v2/numbers | Buy a dedicated number
[**cancelVerification**](TextMagicApi.md#cancelVerification) | **DELETE** /api/v2/verify/{verifyId} | Cancel verification process
[**checkPhoneVerificationCodeTFA**](TextMagicApi.md#checkPhoneVerificationCodeTFA) | **PUT** /api/v2/verify | Step 2: Check the verification code 
[**clearAndAssignContactsToList**](TextMagicApi.md#clearAndAssignContactsToList) | **POST** /api/v2/lists/{id}/contacts | Reset list members to the specified contacts
[**closeChatsBulk**](TextMagicApi.md#closeChatsBulk) | **POST** /api/v2/chats/close/bulk | Close chats (bulk)
[**closeReadChats**](TextMagicApi.md#closeReadChats) | **POST** /api/v2/chats/close/read | Close read chats
[**closeSubaccount**](TextMagicApi.md#closeSubaccount) | **DELETE** /api/v2/subaccounts/{id} | Close sub-account
[**createContact**](TextMagicApi.md#createContact) | **POST** /api/v2/contacts/normalized | Add a new contact
[**createContactNote**](TextMagicApi.md#createContactNote) | **POST** /api/v2/contacts/{id}/notes | Create a new contact note
[**createCustomField**](TextMagicApi.md#createCustomField) | **POST** /api/v2/customfields | Add a new custom field
[**createList**](TextMagicApi.md#createList) | **POST** /api/v2/lists | Create a new list
[**createTemplate**](TextMagicApi.md#createTemplate) | **POST** /api/v2/templates | Create a template
[**deleteAllContacts**](TextMagicApi.md#deleteAllContacts) | **DELETE** /api/v2/contact/all | Delete contacts (bulk)
[**deleteAllOutboundMessages**](TextMagicApi.md#deleteAllOutboundMessages) | **DELETE** /api/v2/message/all | Delete all messages
[**deleteAvatar**](TextMagicApi.md#deleteAvatar) | **DELETE** /api/v2/user/avatar | Delete an avatar
[**deleteChatMessages**](TextMagicApi.md#deleteChatMessages) | **POST** /api/v2/chats/{id}/messages/delete | Delete chat messages by ID(s)
[**deleteChatsBulk**](TextMagicApi.md#deleteChatsBulk) | **POST** /api/v2/chats/delete | Delete chats (bulk)
[**deleteContact**](TextMagicApi.md#deleteContact) | **DELETE** /api/v2/contacts/{id} | Delete a contact
[**deleteContactAvatar**](TextMagicApi.md#deleteContactAvatar) | **DELETE** /api/v2/contacts/{id}/avatar | Delete an avatar
[**deleteContactNote**](TextMagicApi.md#deleteContactNote) | **DELETE** /api/v2/notes/{id} | Delete a contact note
[**deleteContactNotesBulk**](TextMagicApi.md#deleteContactNotesBulk) | **POST** /api/v2/contacts/{id}/notes/delete | Delete contact notes (bulk)
[**deleteContactsByIds**](TextMagicApi.md#deleteContactsByIds) | **POST** /api/v2/contacts/delete | Delete contacts by IDs (bulk)
[**deleteContactsFromList**](TextMagicApi.md#deleteContactsFromList) | **DELETE** /api/v2/lists/{id}/contacts | Unassign contacts from a list
[**deleteCustomField**](TextMagicApi.md#deleteCustomField) | **DELETE** /api/v2/customfields/{id} | Delete a custom field
[**deleteDedicatedNumber**](TextMagicApi.md#deleteDedicatedNumber) | **DELETE** /api/v2/numbers/{id} | Cancel a dedicated number subscription
[**deleteInboundMessage**](TextMagicApi.md#deleteInboundMessage) | **DELETE** /api/v2/replies/{id} | Delete a single inbound message
[**deleteInboundMessagesBulk**](TextMagicApi.md#deleteInboundMessagesBulk) | **POST** /api/v2/replies/delete | Delete inbound messages (bulk)
[**deleteList**](TextMagicApi.md#deleteList) | **DELETE** /api/v2/lists/{id} | Delete a list
[**deleteListAvatar**](TextMagicApi.md#deleteListAvatar) | **DELETE** /api/v2/lists/{id}/avatar | Delete an avatar for a list
[**deleteListContactsBulk**](TextMagicApi.md#deleteListContactsBulk) | **POST** /api/v2/lists/{id}/contacts/delete | Delete contacts from a list (bulk)
[**deleteListsBulk**](TextMagicApi.md#deleteListsBulk) | **POST** /api/v2/lists/delete | Delete lists (bulk)
[**deleteMessageSession**](TextMagicApi.md#deleteMessageSession) | **DELETE** /api/v2/sessions/{id} | Delete a session
[**deleteMessageSessionsBulk**](TextMagicApi.md#deleteMessageSessionsBulk) | **POST** /api/v2/sessions/delete | Delete sessions (bulk)
[**deleteOutboundMessage**](TextMagicApi.md#deleteOutboundMessage) | **DELETE** /api/v2/messages/{id} | Delete message
[**deleteOutboundMessagesBulk**](TextMagicApi.md#deleteOutboundMessagesBulk) | **POST** /api/v2/messages/delete | Delete messages (bulk)
[**deleteScheduledMessage**](TextMagicApi.md#deleteScheduledMessage) | **DELETE** /api/v2/schedules/{id} | Delete a single scheduled message
[**deleteScheduledMessagesBulk**](TextMagicApi.md#deleteScheduledMessagesBulk) | **POST** /api/v2/schedules/delete | Delete scheduled messages (bulk)
[**deleteSenderId**](TextMagicApi.md#deleteSenderId) | **DELETE** /api/v2/senderids/{id} | Delete a Sender ID
[**deleteTemplate**](TextMagicApi.md#deleteTemplate) | **DELETE** /api/v2/templates/{id} | Delete a template
[**deleteTemplatesBulk**](TextMagicApi.md#deleteTemplatesBulk) | **POST** /api/v2/templates/delete | Delete templates (bulk)
[**doCarrierLookup**](TextMagicApi.md#doCarrierLookup) | **GET** /api/v2/lookups/{phone} | Carrier Lookup
[**doEmailLookup**](TextMagicApi.md#doEmailLookup) | **GET** /api/v2/email-lookups/{email} | Email Lookup
[**getAllBulkSessions**](TextMagicApi.md#getAllBulkSessions) | **GET** /api/v2/bulks | Get all bulk sessions
[**getAllChats**](TextMagicApi.md#getAllChats) | **GET** /api/v2/chats | Get all chats
[**getAllInboundMessages**](TextMagicApi.md#getAllInboundMessages) | **GET** /api/v2/replies | Get all inbound messages
[**getAllMessageSessions**](TextMagicApi.md#getAllMessageSessions) | **GET** /api/v2/sessions | Get all sessions
[**getAllOutboundMessages**](TextMagicApi.md#getAllOutboundMessages) | **GET** /api/v2/messages | Get all messages
[**getAllScheduledMessages**](TextMagicApi.md#getAllScheduledMessages) | **GET** /api/v2/schedules | Get all scheduled messages
[**getAllTemplates**](TextMagicApi.md#getAllTemplates) | **GET** /api/v2/templates | Get all templates
[**getAvailableDedicatedNumbers**](TextMagicApi.md#getAvailableDedicatedNumbers) | **GET** /api/v2/numbers/available | Find dedicated numbers available for purchase
[**getAvailableSenderSettingOptions**](TextMagicApi.md#getAvailableSenderSettingOptions) | **GET** /api/v2/sources | Get available sender settings
[**getBalanceNotificationOptions**](TextMagicApi.md#getBalanceNotificationOptions) | **GET** /api/v2/user/notification/balance/bundles | Returns the list of available balance options which can be used as a bound to determine when to send email to user with low balance notification. See https://my.textmagic.com/online/account/notifications/balance
[**getBalanceNotificationSettings**](TextMagicApi.md#getBalanceNotificationSettings) | **GET** /api/v2/user/notification/balance | Get balance notification settings
[**getBlockedContacts**](TextMagicApi.md#getBlockedContacts) | **GET** /api/v2/contacts/block/list | Get blocked contacts
[**getBulkSession**](TextMagicApi.md#getBulkSession) | **GET** /api/v2/bulks/{id} | Get bulk session status
[**getCallbackSettings**](TextMagicApi.md#getCallbackSettings) | **GET** /api/v2/callback/settings | Fetch callback URL settings
[**getChat**](TextMagicApi.md#getChat) | **GET** /api/v2/chats/{id} | Get a single chat
[**getChatByPhone**](TextMagicApi.md#getChatByPhone) | **GET** /api/v2/chats/{phone}/by/phone | Find chats by phone
[**getChatMessages**](TextMagicApi.md#getChatMessages) | **GET** /api/v2/chats/{id}/message | Get chat messages
[**getContact**](TextMagicApi.md#getContact) | **GET** /api/v2/contacts/{id} | Get the details of a specific contact
[**getContactByPhone**](TextMagicApi.md#getContactByPhone) | **GET** /api/v2/contacts/phone/{phone} | Get the details of a specific contact by phone number
[**getContactIfBlocked**](TextMagicApi.md#getContactIfBlocked) | **GET** /api/v2/contacts/block/phone | Check if a phone number is blocked
[**getContactImportSessionProgress**](TextMagicApi.md#getContactImportSessionProgress) | **GET** /api/v2/contacts/import/progress/{id} | Check import progress
[**getContactNote**](TextMagicApi.md#getContactNote) | **GET** /api/v2/notes/{id} | Get a contact note
[**getContactNotes**](TextMagicApi.md#getContactNotes) | **GET** /api/v2/contacts/{id}/notes | Fetch notes assigned to a given contact
[**getContacts**](TextMagicApi.md#getContacts) | **GET** /api/v2/contacts | Get all contacts
[**getContactsAutocomplete**](TextMagicApi.md#getContactsAutocomplete) | **GET** /api/v2/contacts/autocomplete | Get contacts autocomplete suggestions
[**getContactsByListId**](TextMagicApi.md#getContactsByListId) | **GET** /api/v2/lists/{id}/contacts | Get all contacts in a list
[**getCountries**](TextMagicApi.md#getCountries) | **GET** /api/v2/countries | Get countries
[**getCurrentUser**](TextMagicApi.md#getCurrentUser) | **GET** /api/v2/user | Get current account information
[**getCustomField**](TextMagicApi.md#getCustomField) | **GET** /api/v2/customfields/{id} | Get the details of a specific custom field
[**getCustomFields**](TextMagicApi.md#getCustomFields) | **GET** /api/v2/customfields | Get all custom fields
[**getDedicatedNumber**](TextMagicApi.md#getDedicatedNumber) | **GET** /api/v2/numbers/{id} | Get the details of a specific dedicated number
[**getFavorites**](TextMagicApi.md#getFavorites) | **GET** /api/v2/contacts/favorite | Get favorite contacts and lists
[**getInboundMessage**](TextMagicApi.md#getInboundMessage) | **GET** /api/v2/replies/{id} | Get a single inbound message
[**getInboundMessagesNotificationSettings**](TextMagicApi.md#getInboundMessagesNotificationSettings) | **GET** /api/v2/user/notification/inbound | Get inbound messages notification settings
[**getInvoices**](TextMagicApi.md#getInvoices) | **GET** /api/v2/invoices | Get all invoices
[**getList**](TextMagicApi.md#getList) | **GET** /api/v2/lists/{id} | Get the details of a specific list
[**getListContactsIds**](TextMagicApi.md#getListContactsIds) | **GET** /api/v2/lists/{id}/contacts/ids | Get all contact IDs in a list
[**getLists**](TextMagicApi.md#getLists) | **GET** /api/v2/lists | Get all lists
[**getListsOfContact**](TextMagicApi.md#getListsOfContact) | **GET** /api/v2/contacts/{id}/lists | Get a contact&#39;s lists
[**getMessagePreview**](TextMagicApi.md#getMessagePreview) | **GET** /api/v2/messages/preview | Preview message
[**getMessagePrice**](TextMagicApi.md#getMessagePrice) | **GET** /api/v2/messages/price/normalized | Check message price
[**getMessageSession**](TextMagicApi.md#getMessageSession) | **GET** /api/v2/sessions/{id} | Get a session&#x60;s details
[**getMessageSessionStat**](TextMagicApi.md#getMessageSessionStat) | **GET** /api/v2/sessions/{id}/stat | Get a session&#x60;s statistics
[**getMessagesBySessionId**](TextMagicApi.md#getMessagesBySessionId) | **GET** /api/v2/sessions/{id}/messages | Get a session&#x60;s messages
[**getMessagingCounters**](TextMagicApi.md#getMessagingCounters) | **GET** /api/v2/stats/messaging/data | Get sent/received messages counters values
[**getMessagingStat**](TextMagicApi.md#getMessagingStat) | **GET** /api/v2/stats/messaging | Get messaging statistics
[**getOutboundMessage**](TextMagicApi.md#getOutboundMessage) | **GET** /api/v2/messages/{id} | Get a single message
[**getOutboundMessagesHistory**](TextMagicApi.md#getOutboundMessagesHistory) | **GET** /api/v2/history | Get history
[**getScheduledMessage**](TextMagicApi.md#getScheduledMessage) | **GET** /api/v2/schedules/{id} | Get a single scheduled message
[**getSenderId**](TextMagicApi.md#getSenderId) | **GET** /api/v2/senderids/{id} | Get the details of a specific Sender ID
[**getSenderIds**](TextMagicApi.md#getSenderIds) | **GET** /api/v2/senderids | Get all your approved Sender IDs
[**getSenderSettings**](TextMagicApi.md#getSenderSettings) | **GET** /api/v2/sender/settings/normalized | Get current sender settings
[**getSpendingStat**](TextMagicApi.md#getSpendingStat) | **GET** /api/v2/stats/spending | Get spending statistics
[**getSubaccount**](TextMagicApi.md#getSubaccount) | **GET** /api/v2/subaccounts/{id} | Get sub-account information
[**getSubaccounts**](TextMagicApi.md#getSubaccounts) | **GET** /api/v2/subaccounts | Get a sub-accounts list
[**getSubaccountsWithTokens**](TextMagicApi.md#getSubaccountsWithTokens) | **POST** /api/v2/subaccounts/tokens/list | Get all sub-accounts with their REST API tokens associated with a specified app name
[**getTemplate**](TextMagicApi.md#getTemplate) | **GET** /api/v2/templates/{id} | Get a template&#x60;s details
[**getTimezones**](TextMagicApi.md#getTimezones) | **GET** /api/v2/timezones | Get timezones
[**getUnreadMessagesTotal**](TextMagicApi.md#getUnreadMessagesTotal) | **GET** /api/v2/chats/unread/count | Get unread messages number
[**getUnsubscribedContact**](TextMagicApi.md#getUnsubscribedContact) | **GET** /api/v2/unsubscribers/{id} | Get the details of a specific unsubscribed contact
[**getUnsubscribers**](TextMagicApi.md#getUnsubscribers) | **GET** /api/v2/unsubscribers | Get all unsubscribed contacts
[**getUserDedicatedNumbers**](TextMagicApi.md#getUserDedicatedNumbers) | **GET** /api/v2/numbers | Get all your dedicated numbers
[**importContacts**](TextMagicApi.md#importContacts) | **POST** /api/v2/contacts/import/normalized | Import contacts
[**inviteSubaccount**](TextMagicApi.md#inviteSubaccount) | **POST** /api/v2/subaccounts | Invite a new sub-account
[**markChatsReadBulk**](TextMagicApi.md#markChatsReadBulk) | **POST** /api/v2/chats/read/bulk | Mark chats as read (bulk)
[**markChatsUnreadBulk**](TextMagicApi.md#markChatsUnreadBulk) | **POST** /api/v2/chats/unread/bulk | Mark chats as unread (bulk)
[**muteChat**](TextMagicApi.md#muteChat) | **POST** /api/v2/chats/mute | Mute chat sounds
[**muteChatsBulk**](TextMagicApi.md#muteChatsBulk) | **POST** /api/v2/chats/mute/bulk | Mute chats (bulk)
[**ping**](TextMagicApi.md#ping) | **GET** /api/v2/ping | Ping
[**reopenChatsBulk**](TextMagicApi.md#reopenChatsBulk) | **POST** /api/v2/chats/reopen/bulk | Reopen chats (bulk)
[**requestNewSubaccountToken**](TextMagicApi.md#requestNewSubaccountToken) | **POST** /api/v2/subaccounts/tokens | Request a new REST API token for sub-account
[**requestSenderId**](TextMagicApi.md#requestSenderId) | **POST** /api/v2/senderids | Apply for a new Sender ID
[**searchChats**](TextMagicApi.md#searchChats) | **GET** /api/v2/chats/search | Find chats by message text
[**searchChatsByIds**](TextMagicApi.md#searchChatsByIds) | **GET** /api/v2/chats/search/ids | Find chats (bulk)
[**searchChatsByReceipent**](TextMagicApi.md#searchChatsByReceipent) | **GET** /api/v2/chats/search/recipients | Find chats by recipient
[**searchContacts**](TextMagicApi.md#searchContacts) | **GET** /api/v2/contacts/search | Find contacts by given criteria
[**searchInboundMessages**](TextMagicApi.md#searchInboundMessages) | **GET** /api/v2/replies/search | Find inbound messages
[**searchLists**](TextMagicApi.md#searchLists) | **GET** /api/v2/lists/search | Find lists by given criteria
[**searchOutboundMessages**](TextMagicApi.md#searchOutboundMessages) | **GET** /api/v2/messages/search | Find messages
[**searchScheduledMessages**](TextMagicApi.md#searchScheduledMessages) | **GET** /api/v2/schedules/search | Find scheduled messages
[**searchTemplates**](TextMagicApi.md#searchTemplates) | **GET** /api/v2/templates/search | Find templates by criteria
[**sendMessage**](TextMagicApi.md#sendMessage) | **POST** /api/v2/messages | Send message
[**sendPhoneVerificationCodeTFA**](TextMagicApi.md#sendPhoneVerificationCodeTFA) | **POST** /api/v2/verify | Step 1: Send a verification code 
[**setChatStatus**](TextMagicApi.md#setChatStatus) | **POST** /api/v2/chats/status | Change chat status
[**unblockContact**](TextMagicApi.md#unblockContact) | **POST** /api/v2/contacts/unblock | Unblock a contact by phone number
[**unblockContactsBulk**](TextMagicApi.md#unblockContactsBulk) | **POST** /api/v2/contacts/unblock/bulk | Unblock contacts (bulk)
[**unmuteChatsBulk**](TextMagicApi.md#unmuteChatsBulk) | **POST** /api/v2/chats/unmute/bulk | Unmute chats (bulk)
[**unsubscribeContact**](TextMagicApi.md#unsubscribeContact) | **POST** /api/v2/unsubscribers | Manually unsubscribe a contact
[**updateBalanceNotificationSettings**](TextMagicApi.md#updateBalanceNotificationSettings) | **PUT** /api/v2/user/notification/balance | Update balance notification settings
[**updateCallbackSettings**](TextMagicApi.md#updateCallbackSettings) | **PUT** /api/v2/callback/settings | Update callback URL settings
[**updateChatDesktopNotificationSettings**](TextMagicApi.md#updateChatDesktopNotificationSettings) | **PUT** /api/v2/user/desktop/notification | Update chat desktop notification settings
[**updateContact**](TextMagicApi.md#updateContact) | **PUT** /api/v2/contacts/{id}/normalized | Edit a contact
[**updateContactNote**](TextMagicApi.md#updateContactNote) | **PUT** /api/v2/notes/{id} | Update a contact note
[**updateCurrentUser**](TextMagicApi.md#updateCurrentUser) | **PUT** /api/v2/user | Edit current account info
[**updateCustomField**](TextMagicApi.md#updateCustomField) | **PUT** /api/v2/customfields/{id} | Edit a custom field
[**updateCustomFieldValue**](TextMagicApi.md#updateCustomFieldValue) | **PUT** /api/v2/customfields/{id}/update | Edit the custom field value of a specified contact
[**updateInboundMessagesNotificationSettings**](TextMagicApi.md#updateInboundMessagesNotificationSettings) | **PUT** /api/v2/user/notification/inbound | Update inbound messages notification settings
[**updateList**](TextMagicApi.md#updateList) | **PUT** /api/v2/lists/{id} | Edit a list
[**updateSenderSetting**](TextMagicApi.md#updateSenderSetting) | **PUT** /api/v2/sender/settings | Change sender settings
[**updateTemplate**](TextMagicApi.md#updateTemplate) | **PUT** /api/v2/templates/{id} | Update a template
[**uploadAvatar**](TextMagicApi.md#uploadAvatar) | **POST** /api/v2/user/avatar | Upload an avatar
[**uploadContactAvatar**](TextMagicApi.md#uploadContactAvatar) | **POST** /api/v2/contacts/{id}/avatar | Upload an avatar
[**uploadListAvatar**](TextMagicApi.md#uploadListAvatar) | **POST** /api/v2/lists/{id}/avatar | Add an avatar for a list
[**uploadMessageAttachment**](TextMagicApi.md#uploadMessageAttachment) | **POST** /api/v2/messages/attachment | Upload message attachment
[**uploadMessageMMSAttachment**](TextMagicApi.md#uploadMessageMMSAttachment) | **POST** /api/v2/messages/mms/attachment | Upload message mms attachment


<a name="assignContactsToList"></a>
# **assignContactsToList**
> ResourceLinkResponse assignContactsToList(assignContactsToListInputObject, id)

Assign contacts to a list

&gt; Unlike all other PUT requests, this command does not need old contact IDs to be submitted. For example, if you have a list with contacts 150, 151 and 152 and you want to add contact ID 153, you only need to submit 153 as a parameter of PUT /api/v2/lists/{id}/contacts. 

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
AssignContactsToListInputObject assignContactsToListInputObject = new AssignContactsToListInputObject(); // AssignContactsToListInputObject | 
Integer id = 1; // Integer | 
try {
    ResourceLinkResponse result = apiInstance.assignContactsToList(assignContactsToListInputObject, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#assignContactsToList");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignContactsToListInputObject** | [**AssignContactsToListInputObject**](AssignContactsToListInputObject.md)|  |
 **id** | **Integer**|  |

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="blockContact"></a>
# **blockContact**
> ResourceLinkResponse blockContact(blockContactInputObject)

Block a contact by phone number

Block a contact from inbound and outbound communication by phone number.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
BlockContactInputObject blockContactInputObject = new BlockContactInputObject(); // BlockContactInputObject | 
try {
    ResourceLinkResponse result = apiInstance.blockContact(blockContactInputObject);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#blockContact");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockContactInputObject** | [**BlockContactInputObject**](BlockContactInputObject.md)|  |

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="buyDedicatedNumber"></a>
# **buyDedicatedNumber**
> buyDedicatedNumber(buyDedicatedNumberInputObject)

Buy a dedicated number

To buy a dedicated number, you first need to find an available number matching your criteria using the &#x60;/api/v2/numbers/available&#x60; command described above.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
BuyDedicatedNumberInputObject buyDedicatedNumberInputObject = new BuyDedicatedNumberInputObject(); // BuyDedicatedNumberInputObject | 
try {
    apiInstance.buyDedicatedNumber(buyDedicatedNumberInputObject);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#buyDedicatedNumber");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyDedicatedNumberInputObject** | [**BuyDedicatedNumberInputObject**](BuyDedicatedNumberInputObject.md)|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cancelVerification"></a>
# **cancelVerification**
> cancelVerification(verifyId)

Cancel verification process

You can cancel the verification not earlier than 30 seconds after the initial request.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
String verifyId = "\"123e4567-e89b-12d3-a456-426655440000\""; // String | The verifyId that you received in Step 1.
try {
    apiInstance.cancelVerification(verifyId);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#cancelVerification");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verifyId** | **String**| The verifyId that you received in Step 1. |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkPhoneVerificationCodeTFA"></a>
# **checkPhoneVerificationCodeTFA**
> checkPhoneVerificationCodeTFA(checkPhoneVerificationCodeTFAInputObject)

Step 2: Check the verification code 

Check received code from user with the code which was actually sent.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
CheckPhoneVerificationCodeTFAInputObject checkPhoneVerificationCodeTFAInputObject = new CheckPhoneVerificationCodeTFAInputObject(); // CheckPhoneVerificationCodeTFAInputObject | 
try {
    apiInstance.checkPhoneVerificationCodeTFA(checkPhoneVerificationCodeTFAInputObject);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#checkPhoneVerificationCodeTFA");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPhoneVerificationCodeTFAInputObject** | [**CheckPhoneVerificationCodeTFAInputObject**](CheckPhoneVerificationCodeTFAInputObject.md)|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clearAndAssignContactsToList"></a>
# **clearAndAssignContactsToList**
> ResourceLinkResponse clearAndAssignContactsToList(clearAndAssignContactsToListInputObject, id)

Reset list members to the specified contacts



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
ClearAndAssignContactsToListInputObject clearAndAssignContactsToListInputObject = new ClearAndAssignContactsToListInputObject(); // ClearAndAssignContactsToListInputObject | 
Integer id = 1; // Integer | 
try {
    ResourceLinkResponse result = apiInstance.clearAndAssignContactsToList(clearAndAssignContactsToListInputObject, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#clearAndAssignContactsToList");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clearAndAssignContactsToListInputObject** | [**ClearAndAssignContactsToListInputObject**](ClearAndAssignContactsToListInputObject.md)|  |
 **id** | **Integer**|  |

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="closeChatsBulk"></a>
# **closeChatsBulk**
> closeChatsBulk(closeChatsBulkInputObject)

Close chats (bulk)

Close chats by chat IDs or close all chats

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
CloseChatsBulkInputObject closeChatsBulkInputObject = new CloseChatsBulkInputObject(); // CloseChatsBulkInputObject | 
try {
    apiInstance.closeChatsBulk(closeChatsBulkInputObject);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#closeChatsBulk");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **closeChatsBulkInputObject** | [**CloseChatsBulkInputObject**](CloseChatsBulkInputObject.md)|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="closeReadChats"></a>
# **closeReadChats**
> closeReadChats()

Close read chats

Close all chats that have no unread messages.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
try {
    apiInstance.closeReadChats();
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#closeReadChats");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="closeSubaccount"></a>
# **closeSubaccount**
> closeSubaccount(id)

Close sub-account



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
try {
    apiInstance.closeSubaccount(id);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#closeSubaccount");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="createContact"></a>
# **createContact**
> ResourceLinkResponse createContact(createContactInputObject)

Add a new contact



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
CreateContactInputObject createContactInputObject = new CreateContactInputObject(); // CreateContactInputObject | 
try {
    ResourceLinkResponse result = apiInstance.createContact(createContactInputObject);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#createContact");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createContactInputObject** | [**CreateContactInputObject**](CreateContactInputObject.md)|  |

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createContactNote"></a>
# **createContactNote**
> ResourceLinkResponse createContactNote(createContactNoteInputObject, id)

Create a new contact note



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
CreateContactNoteInputObject createContactNoteInputObject = new CreateContactNoteInputObject(); // CreateContactNoteInputObject | 
Integer id = 1; // Integer | 
try {
    ResourceLinkResponse result = apiInstance.createContactNote(createContactNoteInputObject, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#createContactNote");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createContactNoteInputObject** | [**CreateContactNoteInputObject**](CreateContactNoteInputObject.md)|  |
 **id** | **Integer**|  |

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCustomField"></a>
# **createCustomField**
> ResourceLinkResponse createCustomField(createCustomFieldInputObject)

Add a new custom field



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
CreateCustomFieldInputObject createCustomFieldInputObject = new CreateCustomFieldInputObject(); // CreateCustomFieldInputObject | 
try {
    ResourceLinkResponse result = apiInstance.createCustomField(createCustomFieldInputObject);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#createCustomField");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldInputObject** | [**CreateCustomFieldInputObject**](CreateCustomFieldInputObject.md)|  |

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createList"></a>
# **createList**
> ResourceLinkResponse createList(createListInputObject)

Create a new list



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
CreateListInputObject createListInputObject = new CreateListInputObject(); // CreateListInputObject | 
try {
    ResourceLinkResponse result = apiInstance.createList(createListInputObject);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#createList");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createListInputObject** | [**CreateListInputObject**](CreateListInputObject.md)|  |

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTemplate"></a>
# **createTemplate**
> ResourceLinkResponse createTemplate(createTemplateInputObject)

Create a template

There are times when creating a new template makes sense (such as when targeting specific clients or improving your business strategies).  You can create new SMS templates for marketing purposes or SMS templates for business campaigns. 

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
CreateTemplateInputObject createTemplateInputObject = new CreateTemplateInputObject(); // CreateTemplateInputObject | 
try {
    ResourceLinkResponse result = apiInstance.createTemplate(createTemplateInputObject);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#createTemplate");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTemplateInputObject** | [**CreateTemplateInputObject**](CreateTemplateInputObject.md)|  |

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAllContacts"></a>
# **deleteAllContacts**
> deleteAllContacts()

Delete contacts (bulk)



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
try {
    apiInstance.deleteAllContacts();
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#deleteAllContacts");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteAllOutboundMessages"></a>
# **deleteAllOutboundMessages**
> deleteAllOutboundMessages()

Delete all messages

Delete all messages.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
try {
    apiInstance.deleteAllOutboundMessages();
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#deleteAllOutboundMessages");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteAvatar"></a>
# **deleteAvatar**
> deleteAvatar()

Delete an avatar



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
try {
    apiInstance.deleteAvatar();
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#deleteAvatar");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteChatMessages"></a>
# **deleteChatMessages**
> deleteChatMessages(deleteChatMessagesBulkInputObject, id)

Delete chat messages by ID(s)

Delete messages from chat by given message IDs.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
DeleteChatMessagesBulkInputObject deleteChatMessagesBulkInputObject = new DeleteChatMessagesBulkInputObject(); // DeleteChatMessagesBulkInputObject | 
Integer id = 1; // Integer | 
try {
    apiInstance.deleteChatMessages(deleteChatMessagesBulkInputObject, id);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#deleteChatMessages");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteChatMessagesBulkInputObject** | [**DeleteChatMessagesBulkInputObject**](DeleteChatMessagesBulkInputObject.md)|  |
 **id** | **Integer**|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteChatsBulk"></a>
# **deleteChatsBulk**
> deleteChatsBulk(deleteChatsBulkInputObject)

Delete chats (bulk)

Delete chats by given IDs or delete all chats.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
DeleteChatsBulkInputObject deleteChatsBulkInputObject = new DeleteChatsBulkInputObject(); // DeleteChatsBulkInputObject | 
try {
    apiInstance.deleteChatsBulk(deleteChatsBulkInputObject);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#deleteChatsBulk");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteChatsBulkInputObject** | [**DeleteChatsBulkInputObject**](DeleteChatsBulkInputObject.md)|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteContact"></a>
# **deleteContact**
> deleteContact(id)

Delete a contact

&gt; This command removes your contact completely. If it was assigned or saved to a shared list, it will disappear from there too. If you only need to remove a contact from selected lists, use the Contact assignment command in the Lists section instead, rather than deleting the contact. 

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
try {
    apiInstance.deleteContact(id);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#deleteContact");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteContactAvatar"></a>
# **deleteContactAvatar**
> deleteContactAvatar(id)

Delete an avatar



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
try {
    apiInstance.deleteContactAvatar(id);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#deleteContactAvatar");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteContactNote"></a>
# **deleteContactNote**
> deleteContactNote(id)

Delete a contact note



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
try {
    apiInstance.deleteContactNote(id);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#deleteContactNote");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteContactNotesBulk"></a>
# **deleteContactNotesBulk**
> deleteContactNotesBulk(id, deleteContactNotesBulkInputObject)

Delete contact notes (bulk)



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
DeleteContactNotesBulkInputObject deleteContactNotesBulkInputObject = new DeleteContactNotesBulkInputObject(); // DeleteContactNotesBulkInputObject | 
try {
    apiInstance.deleteContactNotesBulk(id, deleteContactNotesBulkInputObject);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#deleteContactNotesBulk");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |
 **deleteContactNotesBulkInputObject** | [**DeleteContactNotesBulkInputObject**](DeleteContactNotesBulkInputObject.md)|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteContactsByIds"></a>
# **deleteContactsByIds**
> deleteContactsByIds(deleteContactsByIdsInputObject)

Delete contacts by IDs (bulk)



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
DeleteContactsByIdsInputObject deleteContactsByIdsInputObject = new DeleteContactsByIdsInputObject(); // DeleteContactsByIdsInputObject | 
try {
    apiInstance.deleteContactsByIds(deleteContactsByIdsInputObject);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#deleteContactsByIds");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteContactsByIdsInputObject** | [**DeleteContactsByIdsInputObject**](DeleteContactsByIdsInputObject.md)|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteContactsFromList"></a>
# **deleteContactsFromList**
> deleteContactsFromList(deleteContacsFromListObject, id)

Unassign contacts from a list

&gt; When you remove contacts from a specific list, they will be deleted permanently, unless they are first saved in another list. 

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
DeleteContacsFromListObject deleteContacsFromListObject = new DeleteContacsFromListObject(); // DeleteContacsFromListObject | 
Integer id = 1; // Integer | 
try {
    apiInstance.deleteContactsFromList(deleteContacsFromListObject, id);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#deleteContactsFromList");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteContacsFromListObject** | [**DeleteContacsFromListObject**](DeleteContacsFromListObject.md)|  |
 **id** | **Integer**|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteCustomField"></a>
# **deleteCustomField**
> deleteCustomField(id)

Delete a custom field

&gt; When a custom field is deleted, all the information that was added to contacts under this custom field will also be lost. 

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
try {
    apiInstance.deleteCustomField(id);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#deleteCustomField");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteDedicatedNumber"></a>
# **deleteDedicatedNumber**
> deleteDedicatedNumber(id)

Cancel a dedicated number subscription



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
try {
    apiInstance.deleteDedicatedNumber(id);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#deleteDedicatedNumber");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteInboundMessage"></a>
# **deleteInboundMessage**
> deleteInboundMessage(id)

Delete a single inbound message

&gt; Note: deleted inbound messages will disappear from TextMagic Online, chats, and any other place they are referenced.  So, be careful! 

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | The unique numeric ID for the inbound message.
try {
    apiInstance.deleteInboundMessage(id);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#deleteInboundMessage");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| The unique numeric ID for the inbound message. |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteInboundMessagesBulk"></a>
# **deleteInboundMessagesBulk**
> deleteInboundMessagesBulk(deleteInboundMessagesBulkInputObject)

Delete inbound messages (bulk)

&gt; Note: deleted inbound messages will disappear from TextMagic Online, chats, and any other place they are referenced.  So, be careful! 

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
DeleteInboundMessagesBulkInputObject deleteInboundMessagesBulkInputObject = new DeleteInboundMessagesBulkInputObject(); // DeleteInboundMessagesBulkInputObject | 
try {
    apiInstance.deleteInboundMessagesBulk(deleteInboundMessagesBulkInputObject);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#deleteInboundMessagesBulk");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteInboundMessagesBulkInputObject** | [**DeleteInboundMessagesBulkInputObject**](DeleteInboundMessagesBulkInputObject.md)|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteList"></a>
# **deleteList**
> deleteList(id)

Delete a list

This command has no parameters. If successful, this command will return the standard delete response (204 No Content); otherwise, a standard error response will be returned.  When you delete a list, the contacts in it are deleted as well, unless they were saved in another list.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
try {
    apiInstance.deleteList(id);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#deleteList");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteListAvatar"></a>
# **deleteListAvatar**
> deleteListAvatar(id)

Delete an avatar for a list

Delete an avatar for a list

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
try {
    apiInstance.deleteListAvatar(id);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#deleteListAvatar");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteListContactsBulk"></a>
# **deleteListContactsBulk**
> deleteListContactsBulk(deleteListContactsBulkInputObject, id)

Delete contacts from a list (bulk)

Delete contacts from a list (bulk)

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
DeleteListContactsBulkInputObject deleteListContactsBulkInputObject = new DeleteListContactsBulkInputObject(); // DeleteListContactsBulkInputObject | 
Integer id = 1; // Integer | 
try {
    apiInstance.deleteListContactsBulk(deleteListContactsBulkInputObject, id);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#deleteListContactsBulk");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteListContactsBulkInputObject** | [**DeleteListContactsBulkInputObject**](DeleteListContactsBulkInputObject.md)|  |
 **id** | **Integer**|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteListsBulk"></a>
# **deleteListsBulk**
> deleteListsBulk(deleteListsBulkInputObject)

Delete lists (bulk)



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
DeleteListsBulkInputObject deleteListsBulkInputObject = new DeleteListsBulkInputObject(); // DeleteListsBulkInputObject | 
try {
    apiInstance.deleteListsBulk(deleteListsBulkInputObject);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#deleteListsBulk");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteListsBulkInputObject** | [**DeleteListsBulkInputObject**](DeleteListsBulkInputObject.md)|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteMessageSession"></a>
# **deleteMessageSession**
> deleteMessageSession(id)

Delete a session

Delete a message session, together with all nested messages. &gt; You will not be refunded for any deleted sent sessions. 

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
try {
    apiInstance.deleteMessageSession(id);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#deleteMessageSession");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteMessageSessionsBulk"></a>
# **deleteMessageSessionsBulk**
> deleteMessageSessionsBulk(deleteMessageSessionsBulkInputObject)

Delete sessions (bulk)

Delete message sessions, together with all nested messages, by given ID(s) or delete all message sessions.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
DeleteMessageSessionsBulkInputObject deleteMessageSessionsBulkInputObject = new DeleteMessageSessionsBulkInputObject(); // DeleteMessageSessionsBulkInputObject | 
try {
    apiInstance.deleteMessageSessionsBulk(deleteMessageSessionsBulkInputObject);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#deleteMessageSessionsBulk");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteMessageSessionsBulkInputObject** | [**DeleteMessageSessionsBulkInputObject**](DeleteMessageSessionsBulkInputObject.md)|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteOutboundMessage"></a>
# **deleteOutboundMessage**
> deleteOutboundMessage(id)

Delete message

Delete a single message.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
try {
    apiInstance.deleteOutboundMessage(id);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#deleteOutboundMessage");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteOutboundMessagesBulk"></a>
# **deleteOutboundMessagesBulk**
> deleteOutboundMessagesBulk(deleteOutboundMessagesBulkInputObject)

Delete messages (bulk)

Delete outbound messages by the given ID(s) or delete all outbound messages.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
DeleteOutboundMessagesBulkInputObject deleteOutboundMessagesBulkInputObject = new DeleteOutboundMessagesBulkInputObject(); // DeleteOutboundMessagesBulkInputObject | 
try {
    apiInstance.deleteOutboundMessagesBulk(deleteOutboundMessagesBulkInputObject);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#deleteOutboundMessagesBulk");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteOutboundMessagesBulkInputObject** | [**DeleteOutboundMessagesBulkInputObject**](DeleteOutboundMessagesBulkInputObject.md)|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteScheduledMessage"></a>
# **deleteScheduledMessage**
> deleteScheduledMessage(id)

Delete a single scheduled message



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
try {
    apiInstance.deleteScheduledMessage(id);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#deleteScheduledMessage");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteScheduledMessagesBulk"></a>
# **deleteScheduledMessagesBulk**
> deleteScheduledMessagesBulk(deleteScheduledMessagesBulkInputObject)

Delete scheduled messages (bulk)



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
DeleteScheduledMessagesBulkInputObject deleteScheduledMessagesBulkInputObject = new DeleteScheduledMessagesBulkInputObject(); // DeleteScheduledMessagesBulkInputObject | 
try {
    apiInstance.deleteScheduledMessagesBulk(deleteScheduledMessagesBulkInputObject);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#deleteScheduledMessagesBulk");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteScheduledMessagesBulkInputObject** | [**DeleteScheduledMessagesBulkInputObject**](DeleteScheduledMessagesBulkInputObject.md)|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteSenderId"></a>
# **deleteSenderId**
> deleteSenderId(id)

Delete a Sender ID



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
try {
    apiInstance.deleteSenderId(id);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#deleteSenderId");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteTemplate"></a>
# **deleteTemplate**
> deleteTemplate(id)

Delete a template



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
try {
    apiInstance.deleteTemplate(id);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#deleteTemplate");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteTemplatesBulk"></a>
# **deleteTemplatesBulk**
> deleteTemplatesBulk(deleteTemplatesBulkInputObject)

Delete templates (bulk)

Delete templates by given IDs or delete all templates.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
DeleteTemplatesBulkInputObject deleteTemplatesBulkInputObject = new DeleteTemplatesBulkInputObject(); // DeleteTemplatesBulkInputObject | 
try {
    apiInstance.deleteTemplatesBulk(deleteTemplatesBulkInputObject);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#deleteTemplatesBulk");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteTemplatesBulkInputObject** | [**DeleteTemplatesBulkInputObject**](DeleteTemplatesBulkInputObject.md)|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="doCarrierLookup"></a>
# **doCarrierLookup**
> DoCarrierLookupResponse doCarrierLookup(phone, country)

Carrier Lookup

This API call allows you to retrieve additional information about a phone number: region-specific phone number formatting, carrier, phone type (landline/mobile) and country information.  &gt; Numbers must be checked one by one. You cannot check multiple numbers in one request.   

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
String phone = "\"447860021130\""; // String | Phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164) or in [National format](https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers). 
String country = "\"GB\""; // String | This option must be specified only if the phone number is in a **[National format](https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers)**. 
try {
    DoCarrierLookupResponse result = apiInstance.doCarrierLookup(phone, country);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#doCarrierLookup");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **String**| Phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164) or in [National format](https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers).  |
 **country** | **String**| This option must be specified only if the phone number is in a **[National format](https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers)**.  | [optional]

### Return type

[**DoCarrierLookupResponse**](DoCarrierLookupResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="doEmailLookup"></a>
# **doEmailLookup**
> DoEmailLookupResponse doEmailLookup(email)

Email Lookup

To get more details about an email address or to check whether it is a valid email or not, you can use the Email Lookup command. To upload and check emails in bulk, please use our [Web app](https://my.textmagic.com/online/email-lookup/).  This API call allows you to retrieve additional information about an email address, such as mailbox detection, syntax checks, DNS validation, deliverability status, and many more helpful values (see the table below).  &gt; Emails must be checked one by one. You cannot check multiple emails in one request. To upload and check emails in bulk, please use our [Web app](https://my.textmagic.com/online/email-lookup/).

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
String email = "\"john@sample.com\""; // String | Email address.
try {
    DoEmailLookupResponse result = apiInstance.doEmailLookup(email);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#doEmailLookup");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email address. |

### Return type

[**DoEmailLookupResponse**](DoEmailLookupResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllBulkSessions"></a>
# **getAllBulkSessions**
> GetAllBulkSessionsPaginatedResponse getAllBulkSessions(page, limit)

Get all bulk sessions



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
try {
    GetAllBulkSessionsPaginatedResponse result = apiInstance.getAllBulkSessions(page, limit);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getAllBulkSessions");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetAllBulkSessionsPaginatedResponse**](GetAllBulkSessionsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllChats"></a>
# **getAllChats**
> GetAllChatsPaginatedResponse getAllChats(status, page, limit, orderBy, voice, flat)

Get all chats



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
String status = "\"a\""; // String | Fetch only (a)ctive, (c)losed or (d)eleted chats.
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
String orderBy = "id"; // String | Order results by some field. Default is id.
Integer voice = 0; // Integer | Fetch results with voice calls.
Integer flat = 0; // Integer | Should additional contact info be included?
try {
    GetAllChatsPaginatedResponse result = apiInstance.getAllChats(status, page, limit, orderBy, voice, flat);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getAllChats");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String**| Fetch only (a)ctive, (c)losed or (d)eleted chats. | [optional] [enum: a, c, d]
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to id] [enum: id, unread, messageTime]
 **voice** | **Integer**| Fetch results with voice calls. | [optional] [default to 0]
 **flat** | **Integer**| Should additional contact info be included? | [optional] [default to 0]

### Return type

[**GetAllChatsPaginatedResponse**](GetAllChatsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllInboundMessages"></a>
# **getAllInboundMessages**
> GetAllInboundMessagesPaginatedResponse getAllInboundMessages(page, limit, orderBy, direction)

Get all inbound messages



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
String orderBy = "id"; // String | Order results by some field. Default is id.
String direction = "desc"; // String | Order direction. Default is desc.
try {
    GetAllInboundMessagesPaginatedResponse result = apiInstance.getAllInboundMessages(page, limit, orderBy, direction);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getAllInboundMessages");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to id] [enum: id, sender, receiver, messageTime, firstName, lastName]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to desc] [enum: asc, desc]

### Return type

[**GetAllInboundMessagesPaginatedResponse**](GetAllInboundMessagesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllMessageSessions"></a>
# **getAllMessageSessions**
> GetAllMessageSessionsPaginatedResponse getAllMessageSessions(page, limit)

Get all sessions

Get all message sending sessions. &gt; This list contains all of your sessions, including those which were sent but not via API 

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
try {
    GetAllMessageSessionsPaginatedResponse result = apiInstance.getAllMessageSessions(page, limit);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getAllMessageSessions");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetAllMessageSessionsPaginatedResponse**](GetAllMessageSessionsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllOutboundMessages"></a>
# **getAllOutboundMessages**
> GetAllOutboundMessagesPaginatedResponse getAllOutboundMessages(page, limit, lastId)

Get all messages

Get all user oubound messages.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
Integer lastId = 56; // Integer | Filter results by ID, selecting all values lesser than the specified ID. Note that the \\'page\\' parameter is ignored when \\'lastId\\' is specified.
try {
    GetAllOutboundMessagesPaginatedResponse result = apiInstance.getAllOutboundMessages(page, limit, lastId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getAllOutboundMessages");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]
 **lastId** | **Integer**| Filter results by ID, selecting all values lesser than the specified ID. Note that the \\&#39;page\\&#39; parameter is ignored when \\&#39;lastId\\&#39; is specified. | [optional]

### Return type

[**GetAllOutboundMessagesPaginatedResponse**](GetAllOutboundMessagesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllScheduledMessages"></a>
# **getAllScheduledMessages**
> GetAllScheduledMessagesPaginatedResponse getAllScheduledMessages(page, limit, status, orderBy, direction)

Get all scheduled messages



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
String status = "x"; // String | Fetch schedules with a specific status: a - actual, c - completed, x - all.
String orderBy = "id"; // String | Order results by some field. Default is id.
String direction = "desc"; // String | Order direction. Default is desc.
try {
    GetAllScheduledMessagesPaginatedResponse result = apiInstance.getAllScheduledMessages(page, limit, status, orderBy, direction);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getAllScheduledMessages");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]
 **status** | **String**| Fetch schedules with a specific status: a - actual, c - completed, x - all. | [optional] [default to x] [enum: a, c, x]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to id] [enum: id, nextSend, lastSend]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to desc] [enum: asc, desc]

### Return type

[**GetAllScheduledMessagesPaginatedResponse**](GetAllScheduledMessagesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllTemplates"></a>
# **getAllTemplates**
> GetAllTemplatesPaginatedResponse getAllTemplates(page, limit)

Get all templates



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
try {
    GetAllTemplatesPaginatedResponse result = apiInstance.getAllTemplates(page, limit);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getAllTemplates");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Fetch specified results page. | [optional]
 **limit** | **Integer**| The number of results per page. | [optional]

### Return type

[**GetAllTemplatesPaginatedResponse**](GetAllTemplatesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAvailableDedicatedNumbers"></a>
# **getAvailableDedicatedNumbers**
> GetAvailableDedicatedNumbersResponse getAvailableDedicatedNumbers(country, prefix, tollfree)

Find dedicated numbers available for purchase



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
String country = "\"GB\""; // String | The 2-letter dedicated number country ISO code.
Integer prefix = 447155; // Integer | Desired number prefix. Should include the country code (i.e. 447 for UK phone number format). Leave blank to get all the available numbers for the specified country.
Integer tollfree = 0; // Integer | Should we show only tollfree numbers (tollfree available only for US).
try {
    GetAvailableDedicatedNumbersResponse result = apiInstance.getAvailableDedicatedNumbers(country, prefix, tollfree);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getAvailableDedicatedNumbers");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **String**| The 2-letter dedicated number country ISO code. |
 **prefix** | **Integer**| Desired number prefix. Should include the country code (i.e. 447 for UK phone number format). Leave blank to get all the available numbers for the specified country. | [optional]
 **tollfree** | **Integer**| Should we show only tollfree numbers (tollfree available only for US). | [optional] [default to 0]

### Return type

[**GetAvailableDedicatedNumbersResponse**](GetAvailableDedicatedNumbersResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAvailableSenderSettingOptions"></a>
# **getAvailableSenderSettingOptions**
> GetAvailableSenderSettingOptionsResponse getAvailableSenderSettingOptions(country)

Get available sender settings

Get all available sender setting options which can be used in the \&quot;from\&quot; parameter of the POST messages method.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
String country = "\"US\""; // String | The 2-letter ISO country ID. If not specified, it returns all the available sender settings.
try {
    GetAvailableSenderSettingOptionsResponse result = apiInstance.getAvailableSenderSettingOptions(country);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getAvailableSenderSettingOptions");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **String**| The 2-letter ISO country ID. If not specified, it returns all the available sender settings. | [optional]

### Return type

[**GetAvailableSenderSettingOptionsResponse**](GetAvailableSenderSettingOptionsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBalanceNotificationOptions"></a>
# **getBalanceNotificationOptions**
> GetBalanceNotificationOptionsResponse getBalanceNotificationOptions()

Returns the list of available balance options which can be used as a bound to determine when to send email to user with low balance notification. See https://my.textmagic.com/online/account/notifications/balance



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
try {
    GetBalanceNotificationOptionsResponse result = apiInstance.getBalanceNotificationOptions();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getBalanceNotificationOptions");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetBalanceNotificationOptionsResponse**](GetBalanceNotificationOptionsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBalanceNotificationSettings"></a>
# **getBalanceNotificationSettings**
> GetBalanceNotificationSettingsResponse getBalanceNotificationSettings()

Get balance notification settings



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
try {
    GetBalanceNotificationSettingsResponse result = apiInstance.getBalanceNotificationSettings();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getBalanceNotificationSettings");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetBalanceNotificationSettingsResponse**](GetBalanceNotificationSettingsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBlockedContacts"></a>
# **getBlockedContacts**
> GetBlockedContactsPaginatedResponse getBlockedContacts(page, limit, query, orderBy, direction)

Get blocked contacts



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
String query = "query_example"; // String | Find blocked contacts by specified search query.
String orderBy = "id"; // String | Order results by some field. Default is id.
String direction = "desc"; // String | Order direction. Default is desc.
try {
    GetBlockedContactsPaginatedResponse result = apiInstance.getBlockedContacts(page, limit, query, orderBy, direction);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getBlockedContacts");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]
 **query** | **String**| Find blocked contacts by specified search query. | [optional]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to id] [enum: id, firstName, lastName]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to desc] [enum: asc, desc]

### Return type

[**GetBlockedContactsPaginatedResponse**](GetBlockedContactsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBulkSession"></a>
# **getBulkSession**
> BulkSession getBulkSession(id)

Get bulk session status



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
try {
    BulkSession result = apiInstance.getBulkSession(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getBulkSession");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

[**BulkSession**](BulkSession.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCallbackSettings"></a>
# **getCallbackSettings**
> GetCallbackSettingsResponse getCallbackSettings()

Fetch callback URL settings



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
try {
    GetCallbackSettingsResponse result = apiInstance.getCallbackSettings();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getCallbackSettings");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetCallbackSettingsResponse**](GetCallbackSettingsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChat"></a>
# **getChat**
> Chat getChat(id)

Get a single chat



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
try {
    Chat result = apiInstance.getChat(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getChat");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

[**Chat**](Chat.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChatByPhone"></a>
# **getChatByPhone**
> Chat getChatByPhone(phone, upsert, reopen)

Find chats by phone



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
String phone = "\"447860021130\""; // String | 
Integer upsert = 0; // Integer | Create a new chat if not found.
Integer reopen = 0; // Integer | Reopen chat if found or do not change status.
try {
    Chat result = apiInstance.getChatByPhone(phone, upsert, reopen);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getChatByPhone");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **String**|  |
 **upsert** | **Integer**| Create a new chat if not found. | [optional] [default to 0]
 **reopen** | **Integer**| Reopen chat if found or do not change status. | [optional] [default to 0]

### Return type

[**Chat**](Chat.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChatMessages"></a>
# **getChatMessages**
> GetChatMessagesPaginatedResponse getChatMessages(id, page, limit, query, start, end, direction, voice)

Get chat messages



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
String query = "query_example"; // String | Find messages by specified search query.
String start = "start_example"; // String | Return messages since specified timestamp only. Required when `end` parameter specified.
String end = "end_example"; // String | Return messages up to specified timestamp only. Required when `start` parameter specified.
String direction = "desc"; // String | Order direction. Default is desc.
Integer voice = 0; // Integer | Fetch results with voice calls.
try {
    GetChatMessagesPaginatedResponse result = apiInstance.getChatMessages(id, page, limit, query, start, end, direction, voice);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getChatMessages");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]
 **query** | **String**| Find messages by specified search query. | [optional]
 **start** | **String**| Return messages since specified timestamp only. Required when &#x60;end&#x60; parameter specified. | [optional]
 **end** | **String**| Return messages up to specified timestamp only. Required when &#x60;start&#x60; parameter specified. | [optional]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to desc] [enum: asc, desc]
 **voice** | **Integer**| Fetch results with voice calls. | [optional] [default to 0]

### Return type

[**GetChatMessagesPaginatedResponse**](GetChatMessagesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContact"></a>
# **getContact**
> Contact getContact(id)

Get the details of a specific contact



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | Contact ID.
try {
    Contact result = apiInstance.getContact(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getContact");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Contact ID. |

### Return type

[**Contact**](Contact.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactByPhone"></a>
# **getContactByPhone**
> Contact getContactByPhone(phone)

Get the details of a specific contact by phone number



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
String phone = "\"447860021130\""; // String | 
try {
    Contact result = apiInstance.getContactByPhone(phone);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getContactByPhone");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **String**|  |

### Return type

[**Contact**](Contact.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactIfBlocked"></a>
# **getContactIfBlocked**
> Contact getContactIfBlocked(phone)

Check if a phone number is blocked



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
String phone = "\"447860021130\""; // String | Phone number to check.
try {
    Contact result = apiInstance.getContactIfBlocked(phone);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getContactIfBlocked");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **String**| Phone number to check. |

### Return type

[**Contact**](Contact.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactImportSessionProgress"></a>
# **getContactImportSessionProgress**
> GetContactImportSessionProgressResponse getContactImportSessionProgress(id)

Check import progress

Get contact import session progress.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
try {
    GetContactImportSessionProgressResponse result = apiInstance.getContactImportSessionProgress(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getContactImportSessionProgress");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

[**GetContactImportSessionProgressResponse**](GetContactImportSessionProgressResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactNote"></a>
# **getContactNote**
> ContactNote getContactNote(id)

Get a contact note



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
try {
    ContactNote result = apiInstance.getContactNote(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getContactNote");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

[**ContactNote**](ContactNote.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactNotes"></a>
# **getContactNotes**
> GetContactNotesPaginatedResponse getContactNotes(id, page, limit)

Fetch notes assigned to a given contact



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
try {
    GetContactNotesPaginatedResponse result = apiInstance.getContactNotes(id, page, limit);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getContactNotes");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetContactNotesPaginatedResponse**](GetContactNotesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContacts"></a>
# **getContacts**
> GetContactsPaginatedResponse getContacts(page, limit, shared, orderBy, direction)

Get all contacts



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
Integer shared = 0; // Integer | Should shared contacts be included?
String orderBy = "id"; // String | Order results by some field. Default is id.
String direction = "desc"; // String | Order direction. Default is desc.
try {
    GetContactsPaginatedResponse result = apiInstance.getContacts(page, limit, shared, orderBy, direction);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getContacts");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]
 **shared** | **Integer**| Should shared contacts be included? | [optional] [default to 0]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to id] [enum: id, firstName, lastName]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to desc] [enum: asc, desc]

### Return type

[**GetContactsPaginatedResponse**](GetContactsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactsAutocomplete"></a>
# **getContactsAutocomplete**
> GetContactsAutocompleteResponse getContactsAutocomplete(query, limit, lists)

Get contacts autocomplete suggestions

Get contacts autocomplete suggestions by given search terms.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
String query = "\"A\""; // String | Find recipients by specified search query.
Integer limit = 10; // Integer | The number of results per page.
Integer lists = 0; // Integer | Should lists be returned or not?
try {
    GetContactsAutocompleteResponse result = apiInstance.getContactsAutocomplete(query, limit, lists);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getContactsAutocomplete");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Find recipients by specified search query. |
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]
 **lists** | **Integer**| Should lists be returned or not? | [optional] [default to 0]

### Return type

[**GetContactsAutocompleteResponse**](GetContactsAutocompleteResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactsByListId"></a>
# **getContactsByListId**
> GetContactsByListIdPaginatedResponse getContactsByListId(id, page, limit, orderBy, direction)

Get all contacts in a list

A useful synonym for the \&quot;contacts/search\&quot; command with the provided \&quot;listId\&quot; parameter.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | Given group ID.
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
String orderBy = "id"; // String | Order results by some field. Default is id.
String direction = "desc"; // String | Order direction. Default is desc.
try {
    GetContactsByListIdPaginatedResponse result = apiInstance.getContactsByListId(id, page, limit, orderBy, direction);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getContactsByListId");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Given group ID. |
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to id] [enum: id, firstName, lastName]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to desc] [enum: asc, desc]

### Return type

[**GetContactsByListIdPaginatedResponse**](GetContactsByListIdPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCountries"></a>
# **getCountries**
> GetCountriesResponse getCountries()

Get countries



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
try {
    GetCountriesResponse result = apiInstance.getCountries();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getCountries");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetCountriesResponse**](GetCountriesResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCurrentUser"></a>
# **getCurrentUser**
> User getCurrentUser()

Get current account information



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
try {
    User result = apiInstance.getCurrentUser();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getCurrentUser");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomField"></a>
# **getCustomField**
> UserCustomField getCustomField(id)

Get the details of a specific custom field



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
try {
    UserCustomField result = apiInstance.getCustomField(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getCustomField");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

[**UserCustomField**](UserCustomField.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomFields"></a>
# **getCustomFields**
> GetCustomFieldsPaginatedResponse getCustomFields(page, limit)

Get all custom fields



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
try {
    GetCustomFieldsPaginatedResponse result = apiInstance.getCustomFields(page, limit);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getCustomFields");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetCustomFieldsPaginatedResponse**](GetCustomFieldsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDedicatedNumber"></a>
# **getDedicatedNumber**
> UsersInbound getDedicatedNumber(id)

Get the details of a specific dedicated number



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
try {
    UsersInbound result = apiInstance.getDedicatedNumber(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getDedicatedNumber");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

[**UsersInbound**](UsersInbound.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFavorites"></a>
# **getFavorites**
> GetFavoritesPaginatedResponse getFavorites(page, limit, query)

Get favorite contacts and lists



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
String query = "\"A\""; // String | Find contacts or lists by specified search query.
try {
    GetFavoritesPaginatedResponse result = apiInstance.getFavorites(page, limit, query);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getFavorites");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]
 **query** | **String**| Find contacts or lists by specified search query. | [optional]

### Return type

[**GetFavoritesPaginatedResponse**](GetFavoritesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInboundMessage"></a>
# **getInboundMessage**
> MessageIn getInboundMessage(id)

Get a single inbound message



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1782832; // Integer | The unique numeric ID for the inbound message.
try {
    MessageIn result = apiInstance.getInboundMessage(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getInboundMessage");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| The unique numeric ID for the inbound message. |

### Return type

[**MessageIn**](MessageIn.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInboundMessagesNotificationSettings"></a>
# **getInboundMessagesNotificationSettings**
> GetInboundMessagesNotificationSettingsResponse getInboundMessagesNotificationSettings()

Get inbound messages notification settings



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
try {
    GetInboundMessagesNotificationSettingsResponse result = apiInstance.getInboundMessagesNotificationSettings();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getInboundMessagesNotificationSettings");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetInboundMessagesNotificationSettingsResponse**](GetInboundMessagesNotificationSettingsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInvoices"></a>
# **getInvoices**
> GetInvoicesPaginatedResponse getInvoices(page, limit)

Get all invoices

With the TextMagic API, you can check the invoices and transactions for your account.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
try {
    GetInvoicesPaginatedResponse result = apiInstance.getInvoices(page, limit);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getInvoices");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetInvoicesPaginatedResponse**](GetInvoicesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getList"></a>
# **getList**
> List getList(id)

Get the details of a specific list



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
try {
    List result = apiInstance.getList(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getList");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

[**List**](List.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getListContactsIds"></a>
# **getListContactsIds**
> GetListContactsIdsResponse getListContactsIds(id)

Get all contact IDs in a list



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
try {
    GetListContactsIdsResponse result = apiInstance.getListContactsIds(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getListContactsIds");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

[**GetListContactsIdsResponse**](GetListContactsIdsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getLists"></a>
# **getLists**
> GetListsPaginatedResponse getLists(page, limit, orderBy, direction, favoriteOnly, onlyMine)

Get all lists



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer page = 1; // Integer | The current fetched page.
Integer limit = 10; // Integer | The number of results per page.
String orderBy = "id"; // String | Order results by some field. Default is id.
String direction = "desc"; // String | Order direction. Default is desc.
Integer favoriteOnly = 0; // Integer | Return only favorited lists.
Integer onlyMine = 0; // Integer | Return only current user lists.
try {
    GetListsPaginatedResponse result = apiInstance.getLists(page, limit, orderBy, direction, favoriteOnly, onlyMine);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getLists");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| The current fetched page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to id] [enum: id, firstName, lastName]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to desc] [enum: asc, desc]
 **favoriteOnly** | **Integer**| Return only favorited lists. | [optional] [default to 0]
 **onlyMine** | **Integer**| Return only current user lists. | [optional] [default to 0]

### Return type

[**GetListsPaginatedResponse**](GetListsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getListsOfContact"></a>
# **getListsOfContact**
> GetListsOfContactPaginatedResponse getListsOfContact(id, page, limit)

Get a contact&#39;s lists

Get all the lists in which a contact is included.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
try {
    GetListsOfContactPaginatedResponse result = apiInstance.getListsOfContact(id, page, limit);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getListsOfContact");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetListsOfContactPaginatedResponse**](GetListsOfContactPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMessagePreview"></a>
# **getMessagePreview**
> GetMessagePreviewResponse getMessagePreview(text, templateId, sendingTime, sendingDateTime, sendingTimezone, contacts, lists, phones, cutExtra, partsCount, referenceId, from, rule, createChat, tts, local, localCountry)

Preview message

Get a messages preview (with tags merged) of up to 100 messages per session.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
String text = "\"Test message test\""; // String | Message text. Required if **template_id** is not set.
Integer templateId = 1; // Integer | Template used instead of message text. Required if **text** is not set.
Integer sendingTime = 1565606455; // Integer | DEPRECATED, consider using sendingDateTime and sendingTimezone parameters instead: Optional (required with rrule set). Message sending time is in unix timestamp format. Default is now.
String sendingDateTime = "\"2020-05-27 13:02:33\""; // String | Sending time is in Y-m-d H:i:s format (e.g. 2016-05-27 13:02:33). This time is relative to the sendingTimezone.
String sendingTimezone = "\"America/Buenos_Aires\""; // String | The ID or ISO-name of the timezone used for sending when the sendingDateTime parameter is set, e.g. if you specify sendingDateTime = \\\"2016-05-27 13:02:33\\\" and sendingTimezone = \\\"America/Buenos_Aires\\\", your message will be sent on May 27, 2016 13:02:33 Buenos Aires time, or 16:02:33 UTC. Default is the account timezone.
String contacts = "\"1,2,3,4\""; // String | Comma-separated array of contact resources id message will be sent to.
String lists = "\"1,2,3,4\""; // String | Comma-separated array of list resources id message will be sent to.
String phones = "\"447860021130,447860021131\""; // String | Comma-separated array of E.164 phone numbers message will be sent to.
Integer cutExtra = 0; // Integer | Should sending method cut extra characters which not fit supplied partsCount or return 400 Bad request response instead.
Integer partsCount = 6; // Integer | Maximum message parts count (TextMagic allows sending of 1 to 6 message parts).
Integer referenceId = 1; // Integer | Custom message reference id which can be used in your application infrastructure.
String from = "\"Test Sender ID\""; // String | One of the allowed Sender ID (phone number or alphanumeric sender ID). If the specified Sender ID is not allowed for some destinations, a fallback default Sender ID will be used to ensure delivery. See [Get timezones](https://docs.textmagic.com/#tag/Sender-IDs).
String rule = "\"FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1;COUNT=1\""; // String | An iCal RRULE parameter to create recurrent scheduled messages. When used, sendingTime is mandatory as the start point of sending. See https://www.textmagic.com/free-tools/rrule-generator for format details.
Integer createChat = 0; // Integer | Should the sending method try to create new Chat(if not exist) with specified recipients?
Integer tts = 0; // Integer | Send Text-to-Speech message.
Integer local = 0; // Integer | Treat phone numbers passed in the \\'phones\\' field as local.
String localCountry = "\"US\""; // String | The 2-letter ISO country code for local phone numbers, used when \\'local\\' is set to true. Default is the account country.
try {
    GetMessagePreviewResponse result = apiInstance.getMessagePreview(text, templateId, sendingTime, sendingDateTime, sendingTimezone, contacts, lists, phones, cutExtra, partsCount, referenceId, from, rule, createChat, tts, local, localCountry);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getMessagePreview");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **String**| Message text. Required if **template_id** is not set. | [optional]
 **templateId** | **Integer**| Template used instead of message text. Required if **text** is not set. | [optional]
 **sendingTime** | **Integer**| DEPRECATED, consider using sendingDateTime and sendingTimezone parameters instead: Optional (required with rrule set). Message sending time is in unix timestamp format. Default is now. | [optional]
 **sendingDateTime** | **String**| Sending time is in Y-m-d H:i:s format (e.g. 2016-05-27 13:02:33). This time is relative to the sendingTimezone. | [optional]
 **sendingTimezone** | **String**| The ID or ISO-name of the timezone used for sending when the sendingDateTime parameter is set, e.g. if you specify sendingDateTime &#x3D; \\\&quot;2016-05-27 13:02:33\\\&quot; and sendingTimezone &#x3D; \\\&quot;America/Buenos_Aires\\\&quot;, your message will be sent on May 27, 2016 13:02:33 Buenos Aires time, or 16:02:33 UTC. Default is the account timezone. | [optional]
 **contacts** | **String**| Comma-separated array of contact resources id message will be sent to. | [optional]
 **lists** | **String**| Comma-separated array of list resources id message will be sent to. | [optional]
 **phones** | **String**| Comma-separated array of E.164 phone numbers message will be sent to. | [optional]
 **cutExtra** | **Integer**| Should sending method cut extra characters which not fit supplied partsCount or return 400 Bad request response instead. | [optional] [default to 0]
 **partsCount** | **Integer**| Maximum message parts count (TextMagic allows sending of 1 to 6 message parts). | [optional] [default to 6]
 **referenceId** | **Integer**| Custom message reference id which can be used in your application infrastructure. | [optional]
 **from** | **String**| One of the allowed Sender ID (phone number or alphanumeric sender ID). If the specified Sender ID is not allowed for some destinations, a fallback default Sender ID will be used to ensure delivery. See [Get timezones](https://docs.textmagic.com/#tag/Sender-IDs). | [optional]
 **rule** | **String**| An iCal RRULE parameter to create recurrent scheduled messages. When used, sendingTime is mandatory as the start point of sending. See https://www.textmagic.com/free-tools/rrule-generator for format details. | [optional]
 **createChat** | **Integer**| Should the sending method try to create new Chat(if not exist) with specified recipients? | [optional] [default to 0]
 **tts** | **Integer**| Send Text-to-Speech message. | [optional] [default to 0]
 **local** | **Integer**| Treat phone numbers passed in the \\&#39;phones\\&#39; field as local. | [optional] [default to 0]
 **localCountry** | **String**| The 2-letter ISO country code for local phone numbers, used when \\&#39;local\\&#39; is set to true. Default is the account country. | [optional]

### Return type

[**GetMessagePreviewResponse**](GetMessagePreviewResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMessagePrice"></a>
# **getMessagePrice**
> GetMessagePriceResponse getMessagePrice(includeBlocked, text, templateId, sendingTime, sendingDateTime, sendingTimezone, contacts, lists, phones, cutExtra, partsCount, referenceId, from, rule, createChat, tts, local, localCountry)

Check message price

Check pricing for a new outbound message.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer includeBlocked = 0; // Integer | Should we show the pricing for blocked contacts?
String text = "\"Test message test\""; // String | Message text. Required if the **template_id** is not set.
Integer templateId = 1; // Integer | Template used instead of message text. Required if the **text** is not set.
Integer sendingTime = 1565606455; // Integer | DEPRECATED, consider using the sendingDateTime and sendingTimezone parameters instead: optional (required with rrule set). Message sending time is in unix timestamp format. Default is now.
String sendingDateTime = "\"2020-05-27 13:02:33\""; // String | Sending time is in Y-m-d H:i:s format (e.g. 2016-05-27 13:02:33). This time is relative to the sendingTimezone.
String sendingTimezone = "\"America/Buenos_Aires\""; // String | The ID or ISO-name of the timezone used for sending when sendingDateTime parameter is set, e.g. if you specify sendingDateTime = \\\"2016-05-27 13:02:33\\\" and sendingTimezone = \\\"America/Buenos_Aires\\\", your message will be sent on May 27, 2016 13:02:33 Buenos Aires time, or 16:02:33 UTC. Default is the account timezone.
String contacts = "\"1,2,3,4\""; // String | Comma-separated array of contact resources id message will be sent to.
String lists = "\"1,2,3,4\""; // String | Comma-separated array of list resources id message will be sent to.
String phones = "\"447860021130,447860021131\""; // String | Comma-separated array of E.164 phone numbers message will be sent to.
Integer cutExtra = 0; // Integer | Should sending method cut extra characters which not fit supplied partsCount or return 400 Bad request response instead.
Integer partsCount = 6; // Integer | Maximum message parts count (TextMagic allows sending 1 to 6 message parts).
Integer referenceId = 1; // Integer | Custom message reference id which can be used in your application infrastructure.
String from = "\"Test Sender ID\""; // String | One of the allowed Sender ID (phone number or alphanumeric sender ID). If the specified Sender ID is not allowed for some destinations, a fallback default Sender ID will be used to ensure delivery. See [Get timezones](https://docs.textmagic.com/#tag/Sender-IDs).
String rule = "\"FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1;COUNT=1\""; // String | An iCal RRULE parameter to create recurrent scheduled messages. When used, sendingTime is mandatory as the start point of sending. See https://www.textmagic.com/free-tools/rrule-generator for format details.
Integer createChat = 0; // Integer | Should the sending method try to create new Chat (if not exist) with specified recipients?
Integer tts = 0; // Integer | Send a Text-to-Speech message.
Integer local = 0; // Integer | Treat phone numbers passed in the \\'phones\\' field as local.
String localCountry = "\"US\""; // String | The 2-letter ISO country code for local phone numbers, used when \\'local\\' is set to true. Default is the account country.
try {
    GetMessagePriceResponse result = apiInstance.getMessagePrice(includeBlocked, text, templateId, sendingTime, sendingDateTime, sendingTimezone, contacts, lists, phones, cutExtra, partsCount, referenceId, from, rule, createChat, tts, local, localCountry);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getMessagePrice");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeBlocked** | **Integer**| Should we show the pricing for blocked contacts? | [optional] [default to 0]
 **text** | **String**| Message text. Required if the **template_id** is not set. | [optional]
 **templateId** | **Integer**| Template used instead of message text. Required if the **text** is not set. | [optional]
 **sendingTime** | **Integer**| DEPRECATED, consider using the sendingDateTime and sendingTimezone parameters instead: optional (required with rrule set). Message sending time is in unix timestamp format. Default is now. | [optional]
 **sendingDateTime** | **String**| Sending time is in Y-m-d H:i:s format (e.g. 2016-05-27 13:02:33). This time is relative to the sendingTimezone. | [optional]
 **sendingTimezone** | **String**| The ID or ISO-name of the timezone used for sending when sendingDateTime parameter is set, e.g. if you specify sendingDateTime &#x3D; \\\&quot;2016-05-27 13:02:33\\\&quot; and sendingTimezone &#x3D; \\\&quot;America/Buenos_Aires\\\&quot;, your message will be sent on May 27, 2016 13:02:33 Buenos Aires time, or 16:02:33 UTC. Default is the account timezone. | [optional]
 **contacts** | **String**| Comma-separated array of contact resources id message will be sent to. | [optional]
 **lists** | **String**| Comma-separated array of list resources id message will be sent to. | [optional]
 **phones** | **String**| Comma-separated array of E.164 phone numbers message will be sent to. | [optional]
 **cutExtra** | **Integer**| Should sending method cut extra characters which not fit supplied partsCount or return 400 Bad request response instead. | [optional] [default to 0]
 **partsCount** | **Integer**| Maximum message parts count (TextMagic allows sending 1 to 6 message parts). | [optional] [default to 6]
 **referenceId** | **Integer**| Custom message reference id which can be used in your application infrastructure. | [optional]
 **from** | **String**| One of the allowed Sender ID (phone number or alphanumeric sender ID). If the specified Sender ID is not allowed for some destinations, a fallback default Sender ID will be used to ensure delivery. See [Get timezones](https://docs.textmagic.com/#tag/Sender-IDs). | [optional]
 **rule** | **String**| An iCal RRULE parameter to create recurrent scheduled messages. When used, sendingTime is mandatory as the start point of sending. See https://www.textmagic.com/free-tools/rrule-generator for format details. | [optional]
 **createChat** | **Integer**| Should the sending method try to create new Chat (if not exist) with specified recipients? | [optional] [default to 0]
 **tts** | **Integer**| Send a Text-to-Speech message. | [optional] [default to 0]
 **local** | **Integer**| Treat phone numbers passed in the \\&#39;phones\\&#39; field as local. | [optional] [default to 0]
 **localCountry** | **String**| The 2-letter ISO country code for local phone numbers, used when \\&#39;local\\&#39; is set to true. Default is the account country. | [optional]

### Return type

[**GetMessagePriceResponse**](GetMessagePriceResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMessageSession"></a>
# **getMessageSession**
> MessageSession getMessageSession(id)

Get a session&#x60;s details

Get a specific session’s details.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | Session ID.
try {
    MessageSession result = apiInstance.getMessageSession(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getMessageSession");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Session ID. |

### Return type

[**MessageSession**](MessageSession.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMessageSessionStat"></a>
# **getMessageSessionStat**
> GetMessageSessionStatResponse getMessageSessionStat(id, includeDeleted)

Get a session&#x60;s statistics



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
Integer includeDeleted = 0; // Integer | Search also in deleted messages.
try {
    GetMessageSessionStatResponse result = apiInstance.getMessageSessionStat(id, includeDeleted);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getMessageSessionStat");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |
 **includeDeleted** | **Integer**| Search also in deleted messages. | [optional] [default to 0]

### Return type

[**GetMessageSessionStatResponse**](GetMessageSessionStatResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMessagesBySessionId"></a>
# **getMessagesBySessionId**
> GetMessagesBySessionIdPaginatedResponse getMessagesBySessionId(id, page, limit, statuses, includeDeleted)

Get a session&#x60;s messages

A useful synonym for the \&quot;messages/search\&quot; command with the provided \&quot;sessionId\&quot; parameter.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
String statuses = "statuses_example"; // String | Find messages by status.
Integer includeDeleted = 0; // Integer | Search also in deleted messages.
try {
    GetMessagesBySessionIdPaginatedResponse result = apiInstance.getMessagesBySessionId(id, page, limit, statuses, includeDeleted);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getMessagesBySessionId");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]
 **statuses** | **String**| Find messages by status. | [optional] [enum: q, s, e, r, a, d, b, f, u, j, i, p, h]
 **includeDeleted** | **Integer**| Search also in deleted messages. | [optional] [default to 0]

### Return type

[**GetMessagesBySessionIdPaginatedResponse**](GetMessagesBySessionIdPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMessagingCounters"></a>
# **getMessagingCounters**
> GetMessagingCountersResponse getMessagingCounters()

Get sent/received messages counters values

Get total contacts, sent messages and received messages counters values.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
try {
    GetMessagingCountersResponse result = apiInstance.getMessagingCounters();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getMessagingCounters");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetMessagingCountersResponse**](GetMessagingCountersResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMessagingStat"></a>
# **getMessagingStat**
> GetMessagingStatResponse getMessagingStat(by, start, end)

Get messaging statistics



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
String by = "off"; // String | *   **off** - to get total values per specified time interval; *   **day** - to show values grouped by day; *   **month** - to show values grouped by month; *   **year** - to show values grouped by year. 
Integer start = 1430438400; // Integer | Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is 7 days prior. 
Integer end = 1431648000; // Integer | Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is today. 
try {
    GetMessagingStatResponse result = apiInstance.getMessagingStat(by, start, end);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getMessagingStat");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **by** | **String**| *   **off** - to get total values per specified time interval; *   **day** - to show values grouped by day; *   **month** - to show values grouped by month; *   **year** - to show values grouped by year.  | [optional] [default to off] [enum: off, day, month, year]
 **start** | **Integer**| Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is 7 days prior.  | [optional]
 **end** | **Integer**| Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is today.  | [optional]

### Return type

[**GetMessagingStatResponse**](GetMessagingStatResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOutboundMessage"></a>
# **getOutboundMessage**
> MessageOut getOutboundMessage(id)

Get a single message

Get a single outgoing message.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
try {
    MessageOut result = apiInstance.getOutboundMessage(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getOutboundMessage");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

[**MessageOut**](MessageOut.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOutboundMessagesHistory"></a>
# **getOutboundMessagesHistory**
> GetOutboundMessagesHistoryPaginatedResponse getOutboundMessagesHistory(limit, lastId, query, orderBy, direction)

Get history

Get the outbound messages history.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer limit = 10; // Integer | The number of results per page.
Integer lastId = 56; // Integer | Filter results by ID, selecting all values lesser than the specified ID.
String query = "query_example"; // String | Find message by specified search query.
String orderBy = "id"; // String | Order results by some field. Default is id.
String direction = "desc"; // String | Order direction. Default is desc.
try {
    GetOutboundMessagesHistoryPaginatedResponse result = apiInstance.getOutboundMessagesHistory(limit, lastId, query, orderBy, direction);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getOutboundMessagesHistory");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]
 **lastId** | **Integer**| Filter results by ID, selecting all values lesser than the specified ID. | [optional]
 **query** | **String**| Find message by specified search query. | [optional]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to id] [enum: id, phone, sender, firstName, lastName, messageTime]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to desc] [enum: asc, desc]

### Return type

[**GetOutboundMessagesHistoryPaginatedResponse**](GetOutboundMessagesHistoryPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getScheduledMessage"></a>
# **getScheduledMessage**
> MessagesIcs getScheduledMessage(id)

Get a single scheduled message



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
try {
    MessagesIcs result = apiInstance.getScheduledMessage(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getScheduledMessage");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

[**MessagesIcs**](MessagesIcs.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSenderId"></a>
# **getSenderId**
> SenderId getSenderId(id)

Get the details of a specific Sender ID



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
try {
    SenderId result = apiInstance.getSenderId(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getSenderId");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

[**SenderId**](SenderId.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSenderIds"></a>
# **getSenderIds**
> GetSenderIdsPaginatedResponse getSenderIds(page, limit)

Get all your approved Sender IDs



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
try {
    GetSenderIdsPaginatedResponse result = apiInstance.getSenderIds(page, limit);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getSenderIds");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetSenderIdsPaginatedResponse**](GetSenderIdsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSenderSettings"></a>
# **getSenderSettings**
> GetSenderSettingsResponse getSenderSettings(country)

Get current sender settings



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
String country = "\"US\""; // String | Return sender settings enabled for sending to a specified country. Should be 2 upper-case characters.
try {
    GetSenderSettingsResponse result = apiInstance.getSenderSettings(country);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getSenderSettings");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **String**| Return sender settings enabled for sending to a specified country. Should be 2 upper-case characters. | [optional]

### Return type

[**GetSenderSettingsResponse**](GetSenderSettingsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSpendingStat"></a>
# **getSpendingStat**
> GetSpendingStatPaginatedResponse getSpendingStat(page, limit, start, end)

Get spending statistics



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
String start = "\"2018-11-11 11:11\""; // String | Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is 7 days prior. 
String end = "\"2019-11-11 11:11\""; // String | Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is today. 
try {
    GetSpendingStatPaginatedResponse result = apiInstance.getSpendingStat(page, limit, start, end);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getSpendingStat");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]
 **start** | **String**| Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is 7 days prior.  | [optional]
 **end** | **String**| Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is today.  | [optional]

### Return type

[**GetSpendingStatPaginatedResponse**](GetSpendingStatPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubaccount"></a>
# **getSubaccount**
> User getSubaccount(id)

Get sub-account information



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
try {
    User result = apiInstance.getSubaccount(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getSubaccount");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

[**User**](User.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubaccounts"></a>
# **getSubaccounts**
> User getSubaccounts(page, limit)

Get a sub-accounts list



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
try {
    User result = apiInstance.getSubaccounts(page, limit);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getSubaccounts");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]

### Return type

[**User**](User.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubaccountsWithTokens"></a>
# **getSubaccountsWithTokens**
> GetSubaccountsWithTokensResponse getSubaccountsWithTokens(getSubaccountsWithTokensInputObject, page, limit)

Get all sub-accounts with their REST API tokens associated with a specified app name

Get all sub-accounts with their REST API tokens associated with specified app name. When more than one token related to app name, last key will be returned.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
GetSubaccountsWithTokensInputObject getSubaccountsWithTokensInputObject = new GetSubaccountsWithTokensInputObject(); // GetSubaccountsWithTokensInputObject | 
BigDecimal page = new BigDecimal(); // BigDecimal | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
try {
    GetSubaccountsWithTokensResponse result = apiInstance.getSubaccountsWithTokens(getSubaccountsWithTokensInputObject, page, limit);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getSubaccountsWithTokens");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getSubaccountsWithTokensInputObject** | [**GetSubaccountsWithTokensInputObject**](GetSubaccountsWithTokensInputObject.md)|  |
 **page** | **BigDecimal**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetSubaccountsWithTokensResponse**](GetSubaccountsWithTokensResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTemplate"></a>
# **getTemplate**
> MessageTemplate getTemplate(id)

Get a template&#x60;s details

Get a single template.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
try {
    MessageTemplate result = apiInstance.getTemplate(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getTemplate");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

[**MessageTemplate**](MessageTemplate.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTimezones"></a>
# **getTimezones**
> GetTimezonesResponse getTimezones(full)

Get timezones

Return all available timezone IDs

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer full = 0; // Integer | Return full info about timezones in array (0 or 1). Default is 0.
try {
    GetTimezonesResponse result = apiInstance.getTimezones(full);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getTimezones");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **full** | **Integer**| Return full info about timezones in array (0 or 1). Default is 0. | [optional] [default to 0]

### Return type

[**GetTimezonesResponse**](GetTimezonesResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUnreadMessagesTotal"></a>
# **getUnreadMessagesTotal**
> GetUnreadMessagesTotalResponse getUnreadMessagesTotal()

Get unread messages number

Get the total amount of unread messages in the current user chats.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
try {
    GetUnreadMessagesTotalResponse result = apiInstance.getUnreadMessagesTotal();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getUnreadMessagesTotal");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetUnreadMessagesTotalResponse**](GetUnreadMessagesTotalResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUnsubscribedContact"></a>
# **getUnsubscribedContact**
> UnsubscribedContact getUnsubscribedContact(id)

Get the details of a specific unsubscribed contact



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
try {
    UnsubscribedContact result = apiInstance.getUnsubscribedContact(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getUnsubscribedContact");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

[**UnsubscribedContact**](UnsubscribedContact.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUnsubscribers"></a>
# **getUnsubscribers**
> GetUnsubscribersPaginatedResponse getUnsubscribers(page, limit)

Get all unsubscribed contacts

When one of your message recipients sends a request with one of the [STOP-words](https://www.textmagic.com/sms-stop-command/), they will be immediately opted-out of your send lists and their contact status will change to an unsubscribed contact. To retrieve information on all contacts who have unsubscribed status, use: 

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
try {
    GetUnsubscribersPaginatedResponse result = apiInstance.getUnsubscribers(page, limit);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getUnsubscribers");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetUnsubscribersPaginatedResponse**](GetUnsubscribersPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserDedicatedNumbers"></a>
# **getUserDedicatedNumbers**
> GetUserDedicatedNumbersPaginatedResponse getUserDedicatedNumbers(page, limit, surveyId)

Get all your dedicated numbers



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
Integer surveyId = 56; // Integer | Fetch only those numbers that are ready for the survey.
try {
    GetUserDedicatedNumbersPaginatedResponse result = apiInstance.getUserDedicatedNumbers(page, limit, surveyId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#getUserDedicatedNumbers");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]
 **surveyId** | **Integer**| Fetch only those numbers that are ready for the survey. | [optional]

### Return type

[**GetUserDedicatedNumbersPaginatedResponse**](GetUserDedicatedNumbersPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importContacts"></a>
# **importContacts**
> ResourceLinkResponse importContacts(file, column, listId, listName)

Import contacts

Import contacts from the CSV, XLS or XLSX file.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
File file = new File("/path/to/file.txt"); // File | File containing contacts in csv or xls(x) formats.
String column = "\"0:firstName;1:lastName;3:phone;4:email\""; // String | Import file column mapping. The string must contain sub-strings of mapping in format `columnNumber:field` glued by `;`. For example: `0:firstName;1:lastName;3:phone;4:email` where the value before `:` is a number of the column in the file, and the value after `:` is a field of the newly created contact or the ID of a custom field. Numbers of columns begin from zero. Allowed built-in contact fields are: `firstName`, `lastName`, `phone`, `email`. Existing of `phone` mapping is required. 
Integer listId = 443; // Integer | List that ID contacts will be imported to. Ignored if `listName` is specified. 
String listName = "\"A new list\""; // String | List name. This list will be created during import. If such name is already taken, an ordinal (1, 2, ...) will be added to the end. Ignored if `listId` is specified. 
try {
    ResourceLinkResponse result = apiInstance.importContacts(file, column, listId, listName);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#importContacts");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| File containing contacts in csv or xls(x) formats. |
 **column** | **String**| Import file column mapping. The string must contain sub-strings of mapping in format &#x60;columnNumber:field&#x60; glued by &#x60;;&#x60;. For example: &#x60;0:firstName;1:lastName;3:phone;4:email&#x60; where the value before &#x60;:&#x60; is a number of the column in the file, and the value after &#x60;:&#x60; is a field of the newly created contact or the ID of a custom field. Numbers of columns begin from zero. Allowed built-in contact fields are: &#x60;firstName&#x60;, &#x60;lastName&#x60;, &#x60;phone&#x60;, &#x60;email&#x60;. Existing of &#x60;phone&#x60; mapping is required.  |
 **listId** | **Integer**| List that ID contacts will be imported to. Ignored if &#x60;listName&#x60; is specified.  | [optional]
 **listName** | **String**| List name. This list will be created during import. If such name is already taken, an ordinal (1, 2, ...) will be added to the end. Ignored if &#x60;listId&#x60; is specified.  | [optional]

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="inviteSubaccount"></a>
# **inviteSubaccount**
> inviteSubaccount(inviteSubaccountInputObject)

Invite a new sub-account



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
InviteSubaccountInputObject inviteSubaccountInputObject = new InviteSubaccountInputObject(); // InviteSubaccountInputObject | 
try {
    apiInstance.inviteSubaccount(inviteSubaccountInputObject);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#inviteSubaccount");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inviteSubaccountInputObject** | [**InviteSubaccountInputObject**](InviteSubaccountInputObject.md)|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="markChatsReadBulk"></a>
# **markChatsReadBulk**
> markChatsReadBulk(markChatsReadBulkInputObject)

Mark chats as read (bulk)

Mark several chats as read by chat IDs or mark all chats as read

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
MarkChatsReadBulkInputObject markChatsReadBulkInputObject = new MarkChatsReadBulkInputObject(); // MarkChatsReadBulkInputObject | 
try {
    apiInstance.markChatsReadBulk(markChatsReadBulkInputObject);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#markChatsReadBulk");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **markChatsReadBulkInputObject** | [**MarkChatsReadBulkInputObject**](MarkChatsReadBulkInputObject.md)|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="markChatsUnreadBulk"></a>
# **markChatsUnreadBulk**
> markChatsUnreadBulk(markChatsUnreadBulkInputObject)

Mark chats as unread (bulk)

Mark several chats as UNread by chat IDs or mark all chats as UNread

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
MarkChatsUnreadBulkInputObject markChatsUnreadBulkInputObject = new MarkChatsUnreadBulkInputObject(); // MarkChatsUnreadBulkInputObject | 
try {
    apiInstance.markChatsUnreadBulk(markChatsUnreadBulkInputObject);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#markChatsUnreadBulk");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **markChatsUnreadBulkInputObject** | [**MarkChatsUnreadBulkInputObject**](MarkChatsUnreadBulkInputObject.md)|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="muteChat"></a>
# **muteChat**
> ResourceLinkResponse muteChat(muteChatInputObject)

Mute chat sounds



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
MuteChatInputObject muteChatInputObject = new MuteChatInputObject(); // MuteChatInputObject | 
try {
    ResourceLinkResponse result = apiInstance.muteChat(muteChatInputObject);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#muteChat");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **muteChatInputObject** | [**MuteChatInputObject**](MuteChatInputObject.md)|  |

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="muteChatsBulk"></a>
# **muteChatsBulk**
> muteChatsBulk(muteChatsBulkInputObject)

Mute chats (bulk)

Mute several chats by chat ids or mute all chats.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
MuteChatsBulkInputObject muteChatsBulkInputObject = new MuteChatsBulkInputObject(); // MuteChatsBulkInputObject | 
try {
    apiInstance.muteChatsBulk(muteChatsBulkInputObject);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#muteChatsBulk");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **muteChatsBulkInputObject** | [**MuteChatsBulkInputObject**](MuteChatsBulkInputObject.md)|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="ping"></a>
# **ping**
> PingResponse ping()

Ping

Make a simple ping request.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
try {
    PingResponse result = apiInstance.ping();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#ping");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PingResponse**](PingResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reopenChatsBulk"></a>
# **reopenChatsBulk**
> reopenChatsBulk(reopenChatsBulkInputObject)

Reopen chats (bulk)

Reopen chats by chat IDs or reopen all chats

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
ReopenChatsBulkInputObject reopenChatsBulkInputObject = new ReopenChatsBulkInputObject(); // ReopenChatsBulkInputObject | 
try {
    apiInstance.reopenChatsBulk(reopenChatsBulkInputObject);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#reopenChatsBulk");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reopenChatsBulkInputObject** | [**ReopenChatsBulkInputObject**](ReopenChatsBulkInputObject.md)|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="requestNewSubaccountToken"></a>
# **requestNewSubaccountToken**
> User requestNewSubaccountToken(requestNewSubaccountTokenInputObject)

Request a new REST API token for sub-account

Returning user object, key and app name.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
RequestNewSubaccountTokenInputObject requestNewSubaccountTokenInputObject = new RequestNewSubaccountTokenInputObject(); // RequestNewSubaccountTokenInputObject | 
try {
    User result = apiInstance.requestNewSubaccountToken(requestNewSubaccountTokenInputObject);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#requestNewSubaccountToken");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestNewSubaccountTokenInputObject** | [**RequestNewSubaccountTokenInputObject**](RequestNewSubaccountTokenInputObject.md)|  |

### Return type

[**User**](User.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="requestSenderId"></a>
# **requestSenderId**
> ResourceLinkResponse requestSenderId(requestSenderIdInputObject)

Apply for a new Sender ID

&gt; Sender IDs are shared among all of your sub-accounts.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
RequestSenderIdInputObject requestSenderIdInputObject = new RequestSenderIdInputObject(); // RequestSenderIdInputObject | 
try {
    ResourceLinkResponse result = apiInstance.requestSenderId(requestSenderIdInputObject);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#requestSenderId");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestSenderIdInputObject** | [**RequestSenderIdInputObject**](RequestSenderIdInputObject.md)|  |

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchChats"></a>
# **searchChats**
> SearchChatsPaginatedResponse searchChats(page, limit, query)

Find chats by message text



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
String query = "query_example"; // String | Find chats by specified search query.
try {
    SearchChatsPaginatedResponse result = apiInstance.searchChats(page, limit, query);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#searchChats");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]
 **query** | **String**| Find chats by specified search query. | [optional]

### Return type

[**SearchChatsPaginatedResponse**](SearchChatsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchChatsByIds"></a>
# **searchChatsByIds**
> SearchChatsByIdsPaginatedResponse searchChatsByIds(page, limit, ids)

Find chats (bulk)



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
String ids = "ids_example"; // String | Find chats by ID(s).
try {
    SearchChatsByIdsPaginatedResponse result = apiInstance.searchChatsByIds(page, limit, ids);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#searchChatsByIds");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]
 **ids** | **String**| Find chats by ID(s). | [optional]

### Return type

[**SearchChatsByIdsPaginatedResponse**](SearchChatsByIdsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchChatsByReceipent"></a>
# **searchChatsByReceipent**
> SearchChatsByReceipentPaginatedResponse searchChatsByReceipent(page, limit, query, orderBy)

Find chats by recipient

Find chats by recipient (contact, list name or phone number).

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
String query = "query_example"; // String | Find chats by specified search query.
String orderBy = "id"; // String | Order results by some field. Default is id.
try {
    SearchChatsByReceipentPaginatedResponse result = apiInstance.searchChatsByReceipent(page, limit, query, orderBy);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#searchChatsByReceipent");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]
 **query** | **String**| Find chats by specified search query. | [optional]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to id] [enum: id, unread, messageTime]

### Return type

[**SearchChatsByReceipentPaginatedResponse**](SearchChatsByReceipentPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchContacts"></a>
# **searchContacts**
> SearchContactsPaginatedResponse searchContacts(page, limit, shared, ids, listId, includeBlocked, query, local, exactMatch, country, orderBy, direction)

Find contacts by given criteria



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
Integer shared = 0; // Integer | Should shared contacts be included?
String ids = "ids_example"; // String | Find contacts by IDs.
Integer listId = 56; // Integer | Find contacts by List ID.
Integer includeBlocked = 56; // Integer | Should blocked contacts be included?
String query = "query_example"; // String | Find contacts by specified search query.
Integer local = 0; // Integer | Treat phone number passed in the \"query\" field as local. Default is 0.
Integer exactMatch = 0; // Integer | Return only exactly matching contacts. Default is 0.
String country = "country_example"; // String | The 2-letter ISO country code for local phone numbers, used when \"local\" is set to true. Default is the account country.
String orderBy = "id"; // String | Order results by some field. Default is id.
String direction = "desc"; // String | Order direction. Default is desc.
try {
    SearchContactsPaginatedResponse result = apiInstance.searchContacts(page, limit, shared, ids, listId, includeBlocked, query, local, exactMatch, country, orderBy, direction);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#searchContacts");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]
 **shared** | **Integer**| Should shared contacts be included? | [optional] [default to 0]
 **ids** | **String**| Find contacts by IDs. | [optional]
 **listId** | **Integer**| Find contacts by List ID. | [optional]
 **includeBlocked** | **Integer**| Should blocked contacts be included? | [optional]
 **query** | **String**| Find contacts by specified search query. | [optional]
 **local** | **Integer**| Treat phone number passed in the \&quot;query\&quot; field as local. Default is 0. | [optional] [default to 0]
 **exactMatch** | **Integer**| Return only exactly matching contacts. Default is 0. | [optional] [default to 0]
 **country** | **String**| The 2-letter ISO country code for local phone numbers, used when \&quot;local\&quot; is set to true. Default is the account country. | [optional]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to id] [enum: id, firstName, lastName]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to desc] [enum: asc, desc]

### Return type

[**SearchContactsPaginatedResponse**](SearchContactsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchInboundMessages"></a>
# **searchInboundMessages**
> SearchInboundMessagesPaginatedResponse searchInboundMessages(page, limit, ids, query, orderBy, direction, expand)

Find inbound messages

Find inbound messages by given parameters.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
String ids = "ids_example"; // String | Find message by ID(s).
String query = "query_example"; // String | Find recipients by specified search query.
String orderBy = "id"; // String | Order results by some field. Default is id.
String direction = "desc"; // String | Order direction. Default is desc.
Integer expand = 0; // Integer | Expand by adding firstName, lastName and contactId.
try {
    SearchInboundMessagesPaginatedResponse result = apiInstance.searchInboundMessages(page, limit, ids, query, orderBy, direction, expand);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#searchInboundMessages");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]
 **ids** | **String**| Find message by ID(s). | [optional]
 **query** | **String**| Find recipients by specified search query. | [optional]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to id] [enum: id, sender, receiver, messageTime, firstName, lastName]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to desc] [enum: asc, desc]
 **expand** | **Integer**| Expand by adding firstName, lastName and contactId. | [optional] [default to 0]

### Return type

[**SearchInboundMessagesPaginatedResponse**](SearchInboundMessagesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchLists"></a>
# **searchLists**
> SearchListsPaginatedResponse searchLists(page, limit, ids, query, onlyMine, onlyDefault, orderBy, direction)

Find lists by given criteria



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
String ids = "\"1,2,3,4\""; // String | Find lists by IDs.
String query = "\"A\""; // String | Find lists by specified search query.
Integer onlyMine = 0; // Integer | Return only current user lists.
Integer onlyDefault = 0; // Integer | Return only default lists.
String orderBy = "id"; // String | Order results by some field. Default is id.
String direction = "desc"; // String | Order direction. Default is desc.
try {
    SearchListsPaginatedResponse result = apiInstance.searchLists(page, limit, ids, query, onlyMine, onlyDefault, orderBy, direction);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#searchLists");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]
 **ids** | **String**| Find lists by IDs. | [optional]
 **query** | **String**| Find lists by specified search query. | [optional]
 **onlyMine** | **Integer**| Return only current user lists. | [optional] [default to 0]
 **onlyDefault** | **Integer**| Return only default lists. | [optional] [default to 0]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to id] [enum: id, firstName, lastName]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to desc] [enum: asc, desc]

### Return type

[**SearchListsPaginatedResponse**](SearchListsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchOutboundMessages"></a>
# **searchOutboundMessages**
> SearchOutboundMessagesPaginatedResponse searchOutboundMessages(page, limit, lastId, ids, sessionId, statuses, includeDeleted, query)

Find messages

Find outbound messages by given parameters.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
Integer lastId = 56; // Integer | Filter results by ID, selecting all values lesser than the specified ID. Note that the \\'page\\' parameter is ignored when \\'lastId\\' is specified.
String ids = "ids_example"; // String | Find message by ID(s).
Integer sessionId = 56; // Integer | Find messages by session ID.
String statuses = "\"q\""; // String | Find messages by status.
Integer includeDeleted = 0; // Integer | Search also in deleted messages.
String query = "query_example"; // String | Find messages by specified search query.
try {
    SearchOutboundMessagesPaginatedResponse result = apiInstance.searchOutboundMessages(page, limit, lastId, ids, sessionId, statuses, includeDeleted, query);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#searchOutboundMessages");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]
 **lastId** | **Integer**| Filter results by ID, selecting all values lesser than the specified ID. Note that the \\&#39;page\\&#39; parameter is ignored when \\&#39;lastId\\&#39; is specified. | [optional]
 **ids** | **String**| Find message by ID(s). | [optional]
 **sessionId** | **Integer**| Find messages by session ID. | [optional]
 **statuses** | **String**| Find messages by status. | [optional] [enum: q, s, e, r, a, d, b, f, u, j, i, p, h]
 **includeDeleted** | **Integer**| Search also in deleted messages. | [optional] [default to 0]
 **query** | **String**| Find messages by specified search query. | [optional]

### Return type

[**SearchOutboundMessagesPaginatedResponse**](SearchOutboundMessagesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchScheduledMessages"></a>
# **searchScheduledMessages**
> SearchScheduledMessagesPaginatedResponse searchScheduledMessages(page, limit, query, ids, status, orderBy, direction)

Find scheduled messages



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
String query = "query_example"; // String | Find messages by specified search query.
String ids = "ids_example"; // String | Find schedules by ID(s).
String status = "x"; // String | Fetch schedules with a specific status: a - actual, c - completed, x - all.
String orderBy = "id"; // String | Order results by some field. Default is id.
String direction = "desc"; // String | Order direction. Default is desc.
try {
    SearchScheduledMessagesPaginatedResponse result = apiInstance.searchScheduledMessages(page, limit, query, ids, status, orderBy, direction);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#searchScheduledMessages");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]
 **query** | **String**| Find messages by specified search query. | [optional]
 **ids** | **String**| Find schedules by ID(s). | [optional]
 **status** | **String**| Fetch schedules with a specific status: a - actual, c - completed, x - all. | [optional] [default to x] [enum: x, a, c]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to id] [enum: id, nextSend, lastSend]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to desc] [enum: asc, desc]

### Return type

[**SearchScheduledMessagesPaginatedResponse**](SearchScheduledMessagesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchTemplates"></a>
# **searchTemplates**
> SearchTemplatesPaginatedResponse searchTemplates(page, limit, ids, name, content)

Find templates by criteria

Find user templates by given parameters.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer page = 1; // Integer | Fetch specified results page.
Integer limit = 10; // Integer | The number of results per page.
String ids = "ids_example"; // String | Find template by ID(s).
String name = "name_example"; // String | Find template by name.
String content = "content_example"; // String | Find template by content.
try {
    SearchTemplatesPaginatedResponse result = apiInstance.searchTemplates(page, limit, ids, name, content);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#searchTemplates");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Integer**| The number of results per page. | [optional] [default to 10]
 **ids** | **String**| Find template by ID(s). | [optional]
 **name** | **String**| Find template by name. | [optional]
 **content** | **String**| Find template by content. | [optional]

### Return type

[**SearchTemplatesPaginatedResponse**](SearchTemplatesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendMessage"></a>
# **sendMessage**
> SendMessageResponse sendMessage(sendMessageInputObject)

Send message

This is the main entrypoint to send messages. See the examples above for the reference.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
SendMessageInputObject sendMessageInputObject = new SendMessageInputObject(); // SendMessageInputObject | 
try {
    SendMessageResponse result = apiInstance.sendMessage(sendMessageInputObject);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#sendMessage");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendMessageInputObject** | [**SendMessageInputObject**](SendMessageInputObject.md)|  |

### Return type

[**SendMessageResponse**](SendMessageResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendPhoneVerificationCodeTFA"></a>
# **sendPhoneVerificationCodeTFA**
> SendPhoneVerificationCodeResponse sendPhoneVerificationCodeTFA(sendPhoneVerificationCodeTFAInputObject)

Step 1: Send a verification code 

Sends a verification code to a specified phone number.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
SendPhoneVerificationCodeTFAInputObject sendPhoneVerificationCodeTFAInputObject = new SendPhoneVerificationCodeTFAInputObject(); // SendPhoneVerificationCodeTFAInputObject | 
try {
    SendPhoneVerificationCodeResponse result = apiInstance.sendPhoneVerificationCodeTFA(sendPhoneVerificationCodeTFAInputObject);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#sendPhoneVerificationCodeTFA");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendPhoneVerificationCodeTFAInputObject** | [**SendPhoneVerificationCodeTFAInputObject**](SendPhoneVerificationCodeTFAInputObject.md)|  |

### Return type

[**SendPhoneVerificationCodeResponse**](SendPhoneVerificationCodeResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setChatStatus"></a>
# **setChatStatus**
> ResourceLinkResponse setChatStatus(setChatStatusInputObject)

Change chat status

Set the status of the chat given by ID.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
SetChatStatusInputObject setChatStatusInputObject = new SetChatStatusInputObject(); // SetChatStatusInputObject | 
try {
    ResourceLinkResponse result = apiInstance.setChatStatus(setChatStatusInputObject);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#setChatStatus");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setChatStatusInputObject** | [**SetChatStatusInputObject**](SetChatStatusInputObject.md)|  |

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="unblockContact"></a>
# **unblockContact**
> unblockContact(unblockContactInputObject)

Unblock a contact by phone number

Unblock a contact by phone number

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
UnblockContactInputObject unblockContactInputObject = new UnblockContactInputObject(); // UnblockContactInputObject | 
try {
    apiInstance.unblockContact(unblockContactInputObject);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#unblockContact");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unblockContactInputObject** | [**UnblockContactInputObject**](UnblockContactInputObject.md)|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="unblockContactsBulk"></a>
# **unblockContactsBulk**
> unblockContactsBulk(unblockContactsBulkInputObject)

Unblock contacts (bulk)

Unblock several contacts by blocked contact IDs or unblock all contacts.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
UnblockContactsBulkInputObject unblockContactsBulkInputObject = new UnblockContactsBulkInputObject(); // UnblockContactsBulkInputObject | 
try {
    apiInstance.unblockContactsBulk(unblockContactsBulkInputObject);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#unblockContactsBulk");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unblockContactsBulkInputObject** | [**UnblockContactsBulkInputObject**](UnblockContactsBulkInputObject.md)|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="unmuteChatsBulk"></a>
# **unmuteChatsBulk**
> unmuteChatsBulk(unmuteChatsBulkInputObject)

Unmute chats (bulk)

Unmute several chats by chat ids or unmute all chats.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
UnmuteChatsBulkInputObject unmuteChatsBulkInputObject = new UnmuteChatsBulkInputObject(); // UnmuteChatsBulkInputObject | 
try {
    apiInstance.unmuteChatsBulk(unmuteChatsBulkInputObject);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#unmuteChatsBulk");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unmuteChatsBulkInputObject** | [**UnmuteChatsBulkInputObject**](UnmuteChatsBulkInputObject.md)|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="unsubscribeContact"></a>
# **unsubscribeContact**
> ResourceLinkResponse unsubscribeContact(unsubscribeContactInputObject)

Manually unsubscribe a contact

&gt; Please note, if you unsubscribe a contact, this action cannot be reversed. 

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
UnsubscribeContactInputObject unsubscribeContactInputObject = new UnsubscribeContactInputObject(); // UnsubscribeContactInputObject | 
try {
    ResourceLinkResponse result = apiInstance.unsubscribeContact(unsubscribeContactInputObject);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#unsubscribeContact");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unsubscribeContactInputObject** | [**UnsubscribeContactInputObject**](UnsubscribeContactInputObject.md)|  |

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateBalanceNotificationSettings"></a>
# **updateBalanceNotificationSettings**
> updateBalanceNotificationSettings(updateBalanceNotificationSettingsInputObject)

Update balance notification settings



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
UpdateBalanceNotificationSettingsInputObject updateBalanceNotificationSettingsInputObject = new UpdateBalanceNotificationSettingsInputObject(); // UpdateBalanceNotificationSettingsInputObject | 
try {
    apiInstance.updateBalanceNotificationSettings(updateBalanceNotificationSettingsInputObject);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#updateBalanceNotificationSettings");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateBalanceNotificationSettingsInputObject** | [**UpdateBalanceNotificationSettingsInputObject**](UpdateBalanceNotificationSettingsInputObject.md)|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="updateCallbackSettings"></a>
# **updateCallbackSettings**
> updateCallbackSettings(updateCallbackSettingsInputObject)

Update callback URL settings



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
UpdateCallbackSettingsInputObject updateCallbackSettingsInputObject = new UpdateCallbackSettingsInputObject(); // UpdateCallbackSettingsInputObject | 
try {
    apiInstance.updateCallbackSettings(updateCallbackSettingsInputObject);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#updateCallbackSettings");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCallbackSettingsInputObject** | [**UpdateCallbackSettingsInputObject**](UpdateCallbackSettingsInputObject.md)|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateChatDesktopNotificationSettings"></a>
# **updateChatDesktopNotificationSettings**
> updateChatDesktopNotificationSettings(updateChatDesktopNotificationSettingsInputObject)

Update chat desktop notification settings



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
UpdateChatDesktopNotificationSettingsInputObject updateChatDesktopNotificationSettingsInputObject = new UpdateChatDesktopNotificationSettingsInputObject(); // UpdateChatDesktopNotificationSettingsInputObject | 
try {
    apiInstance.updateChatDesktopNotificationSettings(updateChatDesktopNotificationSettingsInputObject);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#updateChatDesktopNotificationSettings");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateChatDesktopNotificationSettingsInputObject** | [**UpdateChatDesktopNotificationSettingsInputObject**](UpdateChatDesktopNotificationSettingsInputObject.md)|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateContact"></a>
# **updateContact**
> ResourceLinkResponse updateContact(updateContactInputObject, id)

Edit a contact



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
UpdateContactInputObject updateContactInputObject = new UpdateContactInputObject(); // UpdateContactInputObject | 
Integer id = 1; // Integer | 
try {
    ResourceLinkResponse result = apiInstance.updateContact(updateContactInputObject, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#updateContact");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateContactInputObject** | [**UpdateContactInputObject**](UpdateContactInputObject.md)|  |
 **id** | **Integer**|  |

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateContactNote"></a>
# **updateContactNote**
> ResourceLinkResponse updateContactNote(updateContactNoteInputObject, id)

Update a contact note



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
UpdateContactNoteInputObject updateContactNoteInputObject = new UpdateContactNoteInputObject(); // UpdateContactNoteInputObject | 
Integer id = 1; // Integer | 
try {
    ResourceLinkResponse result = apiInstance.updateContactNote(updateContactNoteInputObject, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#updateContactNote");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateContactNoteInputObject** | [**UpdateContactNoteInputObject**](UpdateContactNoteInputObject.md)|  |
 **id** | **Integer**|  |

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCurrentUser"></a>
# **updateCurrentUser**
> UpdateCurrentUserResponse updateCurrentUser(updateCurrentUserInputObject)

Edit current account info



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
UpdateCurrentUserInputObject updateCurrentUserInputObject = new UpdateCurrentUserInputObject(); // UpdateCurrentUserInputObject | 
try {
    UpdateCurrentUserResponse result = apiInstance.updateCurrentUser(updateCurrentUserInputObject);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#updateCurrentUser");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCurrentUserInputObject** | [**UpdateCurrentUserInputObject**](UpdateCurrentUserInputObject.md)|  |

### Return type

[**UpdateCurrentUserResponse**](UpdateCurrentUserResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCustomField"></a>
# **updateCustomField**
> ResourceLinkResponse updateCustomField(updateCustomFieldInputObject, id)

Edit a custom field



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
UpdateCustomFieldInputObject updateCustomFieldInputObject = new UpdateCustomFieldInputObject(); // UpdateCustomFieldInputObject | 
Integer id = 1; // Integer | 
try {
    ResourceLinkResponse result = apiInstance.updateCustomField(updateCustomFieldInputObject, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#updateCustomField");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomFieldInputObject** | [**UpdateCustomFieldInputObject**](UpdateCustomFieldInputObject.md)|  |
 **id** | **Integer**|  |

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCustomFieldValue"></a>
# **updateCustomFieldValue**
> ResourceLinkResponse updateCustomFieldValue(updateCustomFieldValueInputObject, id)

Edit the custom field value of a specified contact



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
UpdateCustomFieldValueInputObject updateCustomFieldValueInputObject = new UpdateCustomFieldValueInputObject(); // UpdateCustomFieldValueInputObject | 
Integer id = 554; // Integer | 
try {
    ResourceLinkResponse result = apiInstance.updateCustomFieldValue(updateCustomFieldValueInputObject, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#updateCustomFieldValue");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomFieldValueInputObject** | [**UpdateCustomFieldValueInputObject**](UpdateCustomFieldValueInputObject.md)|  |
 **id** | **Integer**|  |

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateInboundMessagesNotificationSettings"></a>
# **updateInboundMessagesNotificationSettings**
> updateInboundMessagesNotificationSettings(updateInboundMessagesNotificationSettingsInputObject)

Update inbound messages notification settings



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
UpdateInboundMessagesNotificationSettingsInputObject updateInboundMessagesNotificationSettingsInputObject = new UpdateInboundMessagesNotificationSettingsInputObject(); // UpdateInboundMessagesNotificationSettingsInputObject | 
try {
    apiInstance.updateInboundMessagesNotificationSettings(updateInboundMessagesNotificationSettingsInputObject);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#updateInboundMessagesNotificationSettings");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateInboundMessagesNotificationSettingsInputObject** | [**UpdateInboundMessagesNotificationSettingsInputObject**](UpdateInboundMessagesNotificationSettingsInputObject.md)|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="updateList"></a>
# **updateList**
> ResourceLinkResponse updateList(id, updateListObject)

Edit a list



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
Integer id = 1; // Integer | 
UpdateListObject updateListObject = new UpdateListObject(); // UpdateListObject | 
try {
    ResourceLinkResponse result = apiInstance.updateList(id, updateListObject);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#updateList");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |
 **updateListObject** | [**UpdateListObject**](UpdateListObject.md)|  | [optional]

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSenderSetting"></a>
# **updateSenderSetting**
> updateSenderSetting(updateSenderSettingInputObject)

Change sender settings



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
UpdateSenderSettingInputObject updateSenderSettingInputObject = new UpdateSenderSettingInputObject(); // UpdateSenderSettingInputObject | 
try {
    apiInstance.updateSenderSetting(updateSenderSettingInputObject);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#updateSenderSetting");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateSenderSettingInputObject** | [**UpdateSenderSettingInputObject**](UpdateSenderSettingInputObject.md)|  |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="updateTemplate"></a>
# **updateTemplate**
> ResourceLinkResponse updateTemplate(updateTemplateInputObject, id)

Update a template



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
UpdateTemplateInputObject updateTemplateInputObject = new UpdateTemplateInputObject(); // UpdateTemplateInputObject | 
Integer id = 1; // Integer | 
try {
    ResourceLinkResponse result = apiInstance.updateTemplate(updateTemplateInputObject, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#updateTemplate");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateTemplateInputObject** | [**UpdateTemplateInputObject**](UpdateTemplateInputObject.md)|  |
 **id** | **Integer**|  |

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="uploadAvatar"></a>
# **uploadAvatar**
> uploadAvatar(image)

Upload an avatar



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
File image = new File("/path/to/file.txt"); // File | User avatar. Should be a PNG or JPG file not more than 10 MB.
try {
    apiInstance.uploadAvatar(image);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#uploadAvatar");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **File**| User avatar. Should be a PNG or JPG file not more than 10 MB. |

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="uploadContactAvatar"></a>
# **uploadContactAvatar**
> ResourceLinkResponse uploadContactAvatar(image, id)

Upload an avatar



### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
File image = new File("/path/to/file.txt"); // File | Contact avatar. Should be a PNG or JPG file not more than 10 MB.
Integer id = 1; // Integer | 
try {
    ResourceLinkResponse result = apiInstance.uploadContactAvatar(image, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#uploadContactAvatar");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **File**| Contact avatar. Should be a PNG or JPG file not more than 10 MB. |
 **id** | **Integer**|  |

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="uploadListAvatar"></a>
# **uploadListAvatar**
> ResourceLinkResponse uploadListAvatar(image, id)

Add an avatar for a list

Add an avatar for a list

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
File image = new File("/path/to/file.txt"); // File | List avatar. Should be a PNG or JPG file not more than 10 MB.
Integer id = 1; // Integer | 
try {
    ResourceLinkResponse result = apiInstance.uploadListAvatar(image, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#uploadListAvatar");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **File**| List avatar. Should be a PNG or JPG file not more than 10 MB. |
 **id** | **Integer**|  |

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="uploadMessageAttachment"></a>
# **uploadMessageAttachment**
> UploadMessageAttachmentResponse uploadMessageAttachment(file)

Upload message attachment

Upload a new file to insert it as a link.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
File file = new File("/path/to/file.txt"); // File | Attachment. Supports .jpg, .gif, .png, .pdf, .txt, .csv, .doc, .docx, .xls, .xlsx, .ppt, .pptx & .vcf file formats.
try {
    UploadMessageAttachmentResponse result = apiInstance.uploadMessageAttachment(file);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#uploadMessageAttachment");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| Attachment. Supports .jpg, .gif, .png, .pdf, .txt, .csv, .doc, .docx, .xls, .xlsx, .ppt, .pptx &amp; .vcf file formats. |

### Return type

[**UploadMessageAttachmentResponse**](UploadMessageAttachmentResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="uploadMessageMMSAttachment"></a>
# **uploadMessageMMSAttachment**
> UploadMessageAttachmentResponse uploadMessageMMSAttachment(file)

Upload message mms attachment

Upload a new file to mms.

### Example
```java
// Import classes:
//import com.textmagic.sdk.ApiClient;
//import com.textmagic.sdk.ApiException;
//import com.textmagic.sdk.Configuration;
//import com.textmagic.sdk.auth.*;
//import com.textmagic.sdk.api.TextMagicApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: BasicAuth
HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
BasicAuth.setUsername("YOUR USERNAME");
BasicAuth.setPassword("YOUR PASSWORD");

TextMagicApi apiInstance = new TextMagicApi();
File file = new File("/path/to/file.txt"); // File | Attachment. Supports .jpg, .gif, .png, .pdf, .txt, .csv, .doc, .docx, .xls, .xlsx, .ppt, .pptx & .vcf file formats.
try {
    UploadMessageAttachmentResponse result = apiInstance.uploadMessageMMSAttachment(file);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TextMagicApi#uploadMessageMMSAttachment");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| Attachment. Supports .jpg, .gif, .png, .pdf, .txt, .csv, .doc, .docx, .xls, .xlsx, .ppt, .pptx &amp; .vcf file formats. |

### Return type

[**UploadMessageAttachmentResponse**](UploadMessageAttachmentResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

