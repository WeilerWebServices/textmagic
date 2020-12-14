# TextMagicClient.Api.TextMagicApi

All URIs are relative to *https://rest.textmagic.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AssignContactsToList**](TextMagicApi.md#assigncontactstolist) | **PUT** /api/v2/lists/{id}/contacts | Assign contacts to a list
[**BlockContact**](TextMagicApi.md#blockcontact) | **POST** /api/v2/contacts/block | Block a contact by phone number
[**BuyDedicatedNumber**](TextMagicApi.md#buydedicatednumber) | **POST** /api/v2/numbers | Buy a dedicated number
[**CancelVerification**](TextMagicApi.md#cancelverification) | **DELETE** /api/v2/verify/{verifyId} | Cancel verification process
[**CheckPhoneVerificationCodeTFA**](TextMagicApi.md#checkphoneverificationcodetfa) | **PUT** /api/v2/verify | Step 2: Check the verification code 
[**ClearAndAssignContactsToList**](TextMagicApi.md#clearandassigncontactstolist) | **POST** /api/v2/lists/{id}/contacts | Reset list members to the specified contacts
[**CloseChatsBulk**](TextMagicApi.md#closechatsbulk) | **POST** /api/v2/chats/close/bulk | Close chats (bulk)
[**CloseReadChats**](TextMagicApi.md#closereadchats) | **POST** /api/v2/chats/close/read | Close read chats
[**CloseSubaccount**](TextMagicApi.md#closesubaccount) | **DELETE** /api/v2/subaccounts/{id} | Close sub-account
[**CreateContact**](TextMagicApi.md#createcontact) | **POST** /api/v2/contacts/normalized | Add a new contact
[**CreateContactNote**](TextMagicApi.md#createcontactnote) | **POST** /api/v2/contacts/{id}/notes | Create a new contact note
[**CreateCustomField**](TextMagicApi.md#createcustomfield) | **POST** /api/v2/customfields | Add a new custom field
[**CreateList**](TextMagicApi.md#createlist) | **POST** /api/v2/lists | Create a new list
[**CreateTemplate**](TextMagicApi.md#createtemplate) | **POST** /api/v2/templates | Create a template
[**DeleteAllContacts**](TextMagicApi.md#deleteallcontacts) | **DELETE** /api/v2/contact/all | Delete contacts (bulk)
[**DeleteAllOutboundMessages**](TextMagicApi.md#deletealloutboundmessages) | **DELETE** /api/v2/message/all | Delete all messages
[**DeleteAvatar**](TextMagicApi.md#deleteavatar) | **DELETE** /api/v2/user/avatar | Delete an avatar
[**DeleteChatMessages**](TextMagicApi.md#deletechatmessages) | **POST** /api/v2/chats/{id}/messages/delete | Delete chat messages by ID(s)
[**DeleteChatsBulk**](TextMagicApi.md#deletechatsbulk) | **POST** /api/v2/chats/delete | Delete chats (bulk)
[**DeleteContact**](TextMagicApi.md#deletecontact) | **DELETE** /api/v2/contacts/{id} | Delete a contact
[**DeleteContactAvatar**](TextMagicApi.md#deletecontactavatar) | **DELETE** /api/v2/contacts/{id}/avatar | Delete an avatar
[**DeleteContactNote**](TextMagicApi.md#deletecontactnote) | **DELETE** /api/v2/notes/{id} | Delete a contact note
[**DeleteContactNotesBulk**](TextMagicApi.md#deletecontactnotesbulk) | **POST** /api/v2/contacts/{id}/notes/delete | Delete contact notes (bulk)
[**DeleteContactsByIds**](TextMagicApi.md#deletecontactsbyids) | **POST** /api/v2/contacts/delete | Delete contacts by IDs (bulk)
[**DeleteContactsFromList**](TextMagicApi.md#deletecontactsfromlist) | **DELETE** /api/v2/lists/{id}/contacts | Unassign contacts from a list
[**DeleteCustomField**](TextMagicApi.md#deletecustomfield) | **DELETE** /api/v2/customfields/{id} | Delete a custom field
[**DeleteDedicatedNumber**](TextMagicApi.md#deletededicatednumber) | **DELETE** /api/v2/numbers/{id} | Cancel a dedicated number subscription
[**DeleteInboundMessage**](TextMagicApi.md#deleteinboundmessage) | **DELETE** /api/v2/replies/{id} | Delete a single inbound message
[**DeleteInboundMessagesBulk**](TextMagicApi.md#deleteinboundmessagesbulk) | **POST** /api/v2/replies/delete | Delete inbound messages (bulk)
[**DeleteList**](TextMagicApi.md#deletelist) | **DELETE** /api/v2/lists/{id} | Delete a list
[**DeleteListAvatar**](TextMagicApi.md#deletelistavatar) | **DELETE** /api/v2/lists/{id}/avatar | Delete an avatar for a list
[**DeleteListContactsBulk**](TextMagicApi.md#deletelistcontactsbulk) | **POST** /api/v2/lists/{id}/contacts/delete | Delete contacts from a list (bulk)
[**DeleteListsBulk**](TextMagicApi.md#deletelistsbulk) | **POST** /api/v2/lists/delete | Delete lists (bulk)
[**DeleteMessageSession**](TextMagicApi.md#deletemessagesession) | **DELETE** /api/v2/sessions/{id} | Delete a session
[**DeleteMessageSessionsBulk**](TextMagicApi.md#deletemessagesessionsbulk) | **POST** /api/v2/sessions/delete | Delete sessions (bulk)
[**DeleteOutboundMessage**](TextMagicApi.md#deleteoutboundmessage) | **DELETE** /api/v2/messages/{id} | Delete message
[**DeleteOutboundMessagesBulk**](TextMagicApi.md#deleteoutboundmessagesbulk) | **POST** /api/v2/messages/delete | Delete messages (bulk)
[**DeleteScheduledMessage**](TextMagicApi.md#deletescheduledmessage) | **DELETE** /api/v2/schedules/{id} | Delete a single scheduled message
[**DeleteScheduledMessagesBulk**](TextMagicApi.md#deletescheduledmessagesbulk) | **POST** /api/v2/schedules/delete | Delete scheduled messages (bulk)
[**DeleteSenderId**](TextMagicApi.md#deletesenderid) | **DELETE** /api/v2/senderids/{id} | Delete a Sender ID
[**DeleteTemplate**](TextMagicApi.md#deletetemplate) | **DELETE** /api/v2/templates/{id} | Delete a template
[**DeleteTemplatesBulk**](TextMagicApi.md#deletetemplatesbulk) | **POST** /api/v2/templates/delete | Delete templates (bulk)
[**DoCarrierLookup**](TextMagicApi.md#docarrierlookup) | **GET** /api/v2/lookups/{phone} | Carrier Lookup
[**DoEmailLookup**](TextMagicApi.md#doemaillookup) | **GET** /api/v2/email-lookups/{email} | Email Lookup
[**GetAllBulkSessions**](TextMagicApi.md#getallbulksessions) | **GET** /api/v2/bulks | Get all bulk sessions
[**GetAllChats**](TextMagicApi.md#getallchats) | **GET** /api/v2/chats | Get all chats
[**GetAllInboundMessages**](TextMagicApi.md#getallinboundmessages) | **GET** /api/v2/replies | Get all inbound messages
[**GetAllMessageSessions**](TextMagicApi.md#getallmessagesessions) | **GET** /api/v2/sessions | Get all sessions
[**GetAllOutboundMessages**](TextMagicApi.md#getalloutboundmessages) | **GET** /api/v2/messages | Get all messages
[**GetAllScheduledMessages**](TextMagicApi.md#getallscheduledmessages) | **GET** /api/v2/schedules | Get all scheduled messages
[**GetAllTemplates**](TextMagicApi.md#getalltemplates) | **GET** /api/v2/templates | Get all templates
[**GetAvailableDedicatedNumbers**](TextMagicApi.md#getavailablededicatednumbers) | **GET** /api/v2/numbers/available | Find dedicated numbers available for purchase
[**GetAvailableSenderSettingOptions**](TextMagicApi.md#getavailablesendersettingoptions) | **GET** /api/v2/sources | Get available sender settings
[**GetBalanceNotificationOptions**](TextMagicApi.md#getbalancenotificationoptions) | **GET** /api/v2/user/notification/balance/bundles | Returns the list of available balance options which can be used as a bound to determine when to send email to user with low balance notification. See https://my.textmagic.com/online/account/notifications/balance
[**GetBalanceNotificationSettings**](TextMagicApi.md#getbalancenotificationsettings) | **GET** /api/v2/user/notification/balance | Get balance notification settings
[**GetBlockedContacts**](TextMagicApi.md#getblockedcontacts) | **GET** /api/v2/contacts/block/list | Get blocked contacts
[**GetBulkSession**](TextMagicApi.md#getbulksession) | **GET** /api/v2/bulks/{id} | Get bulk session status
[**GetCallbackSettings**](TextMagicApi.md#getcallbacksettings) | **GET** /api/v2/callback/settings | Fetch callback URL settings
[**GetChat**](TextMagicApi.md#getchat) | **GET** /api/v2/chats/{id} | Get a single chat
[**GetChatByPhone**](TextMagicApi.md#getchatbyphone) | **GET** /api/v2/chats/{phone}/by/phone | Find chats by phone
[**GetChatMessages**](TextMagicApi.md#getchatmessages) | **GET** /api/v2/chats/{id}/message | Get chat messages
[**GetContact**](TextMagicApi.md#getcontact) | **GET** /api/v2/contacts/{id} | Get the details of a specific contact
[**GetContactByPhone**](TextMagicApi.md#getcontactbyphone) | **GET** /api/v2/contacts/phone/{phone} | Get the details of a specific contact by phone number
[**GetContactIfBlocked**](TextMagicApi.md#getcontactifblocked) | **GET** /api/v2/contacts/block/phone | Check if a phone number is blocked
[**GetContactImportSessionProgress**](TextMagicApi.md#getcontactimportsessionprogress) | **GET** /api/v2/contacts/import/progress/{id} | Check import progress
[**GetContactNote**](TextMagicApi.md#getcontactnote) | **GET** /api/v2/notes/{id} | Get a contact note
[**GetContactNotes**](TextMagicApi.md#getcontactnotes) | **GET** /api/v2/contacts/{id}/notes | Fetch notes assigned to a given contact
[**GetContacts**](TextMagicApi.md#getcontacts) | **GET** /api/v2/contacts | Get all contacts
[**GetContactsAutocomplete**](TextMagicApi.md#getcontactsautocomplete) | **GET** /api/v2/contacts/autocomplete | Get contacts autocomplete suggestions
[**GetContactsByListId**](TextMagicApi.md#getcontactsbylistid) | **GET** /api/v2/lists/{id}/contacts | Get all contacts in a list
[**GetCountries**](TextMagicApi.md#getcountries) | **GET** /api/v2/countries | Get countries
[**GetCurrentUser**](TextMagicApi.md#getcurrentuser) | **GET** /api/v2/user | Get current account information
[**GetCustomField**](TextMagicApi.md#getcustomfield) | **GET** /api/v2/customfields/{id} | Get the details of a specific custom field
[**GetCustomFields**](TextMagicApi.md#getcustomfields) | **GET** /api/v2/customfields | Get all custom fields
[**GetDedicatedNumber**](TextMagicApi.md#getdedicatednumber) | **GET** /api/v2/numbers/{id} | Get the details of a specific dedicated number
[**GetFavorites**](TextMagicApi.md#getfavorites) | **GET** /api/v2/contacts/favorite | Get favorite contacts and lists
[**GetInboundMessage**](TextMagicApi.md#getinboundmessage) | **GET** /api/v2/replies/{id} | Get a single inbound message
[**GetInboundMessagesNotificationSettings**](TextMagicApi.md#getinboundmessagesnotificationsettings) | **GET** /api/v2/user/notification/inbound | Get inbound messages notification settings
[**GetInvoices**](TextMagicApi.md#getinvoices) | **GET** /api/v2/invoices | Get all invoices
[**GetList**](TextMagicApi.md#getlist) | **GET** /api/v2/lists/{id} | Get the details of a specific list
[**GetListContactsIds**](TextMagicApi.md#getlistcontactsids) | **GET** /api/v2/lists/{id}/contacts/ids | Get all contact IDs in a list
[**GetLists**](TextMagicApi.md#getlists) | **GET** /api/v2/lists | Get all lists
[**GetListsOfContact**](TextMagicApi.md#getlistsofcontact) | **GET** /api/v2/contacts/{id}/lists | Get a contact&#39;s lists
[**GetMessagePreview**](TextMagicApi.md#getmessagepreview) | **GET** /api/v2/messages/preview | Preview message
[**GetMessagePrice**](TextMagicApi.md#getmessageprice) | **GET** /api/v2/messages/price/normalized | Check message price
[**GetMessageSession**](TextMagicApi.md#getmessagesession) | **GET** /api/v2/sessions/{id} | Get a session&#x60;s details
[**GetMessageSessionStat**](TextMagicApi.md#getmessagesessionstat) | **GET** /api/v2/sessions/{id}/stat | Get a session&#x60;s statistics
[**GetMessagesBySessionId**](TextMagicApi.md#getmessagesbysessionid) | **GET** /api/v2/sessions/{id}/messages | Get a session&#x60;s messages
[**GetMessagingCounters**](TextMagicApi.md#getmessagingcounters) | **GET** /api/v2/stats/messaging/data | Get sent/received messages counters values
[**GetMessagingStat**](TextMagicApi.md#getmessagingstat) | **GET** /api/v2/stats/messaging | Get messaging statistics
[**GetOutboundMessage**](TextMagicApi.md#getoutboundmessage) | **GET** /api/v2/messages/{id} | Get a single message
[**GetOutboundMessagesHistory**](TextMagicApi.md#getoutboundmessageshistory) | **GET** /api/v2/history | Get history
[**GetScheduledMessage**](TextMagicApi.md#getscheduledmessage) | **GET** /api/v2/schedules/{id} | Get a single scheduled message
[**GetSenderId**](TextMagicApi.md#getsenderid) | **GET** /api/v2/senderids/{id} | Get the details of a specific Sender ID
[**GetSenderIds**](TextMagicApi.md#getsenderids) | **GET** /api/v2/senderids | Get all your approved Sender IDs
[**GetSenderSettings**](TextMagicApi.md#getsendersettings) | **GET** /api/v2/sender/settings/normalized | Get current sender settings
[**GetSpendingStat**](TextMagicApi.md#getspendingstat) | **GET** /api/v2/stats/spending | Get spending statistics
[**GetSubaccount**](TextMagicApi.md#getsubaccount) | **GET** /api/v2/subaccounts/{id} | Get sub-account information
[**GetSubaccounts**](TextMagicApi.md#getsubaccounts) | **GET** /api/v2/subaccounts | Get a sub-accounts list
[**GetSubaccountsWithTokens**](TextMagicApi.md#getsubaccountswithtokens) | **POST** /api/v2/subaccounts/tokens/list | Get all sub-accounts with their REST API tokens associated with a specified app name
[**GetTemplate**](TextMagicApi.md#gettemplate) | **GET** /api/v2/templates/{id} | Get a template&#x60;s details
[**GetTimezones**](TextMagicApi.md#gettimezones) | **GET** /api/v2/timezones | Get timezones
[**GetUnreadMessagesTotal**](TextMagicApi.md#getunreadmessagestotal) | **GET** /api/v2/chats/unread/count | Get unread messages number
[**GetUnsubscribedContact**](TextMagicApi.md#getunsubscribedcontact) | **GET** /api/v2/unsubscribers/{id} | Get the details of a specific unsubscribed contact
[**GetUnsubscribers**](TextMagicApi.md#getunsubscribers) | **GET** /api/v2/unsubscribers | Get all unsubscribed contacts
[**GetUserDedicatedNumbers**](TextMagicApi.md#getuserdedicatednumbers) | **GET** /api/v2/numbers | Get all your dedicated numbers
[**ImportContacts**](TextMagicApi.md#importcontacts) | **POST** /api/v2/contacts/import/normalized | Import contacts
[**InviteSubaccount**](TextMagicApi.md#invitesubaccount) | **POST** /api/v2/subaccounts | Invite a new sub-account
[**MarkChatsReadBulk**](TextMagicApi.md#markchatsreadbulk) | **POST** /api/v2/chats/read/bulk | Mark chats as read (bulk)
[**MarkChatsUnreadBulk**](TextMagicApi.md#markchatsunreadbulk) | **POST** /api/v2/chats/unread/bulk | Mark chats as unread (bulk)
[**MuteChat**](TextMagicApi.md#mutechat) | **POST** /api/v2/chats/mute | Mute chat sounds
[**MuteChatsBulk**](TextMagicApi.md#mutechatsbulk) | **POST** /api/v2/chats/mute/bulk | Mute chats (bulk)
[**Ping**](TextMagicApi.md#ping) | **GET** /api/v2/ping | Ping
[**ReopenChatsBulk**](TextMagicApi.md#reopenchatsbulk) | **POST** /api/v2/chats/reopen/bulk | Reopen chats (bulk)
[**RequestNewSubaccountToken**](TextMagicApi.md#requestnewsubaccounttoken) | **POST** /api/v2/subaccounts/tokens | Request a new REST API token for sub-account
[**RequestSenderId**](TextMagicApi.md#requestsenderid) | **POST** /api/v2/senderids | Apply for a new Sender ID
[**SearchChats**](TextMagicApi.md#searchchats) | **GET** /api/v2/chats/search | Find chats by message text
[**SearchChatsByIds**](TextMagicApi.md#searchchatsbyids) | **GET** /api/v2/chats/search/ids | Find chats (bulk)
[**SearchChatsByReceipent**](TextMagicApi.md#searchchatsbyreceipent) | **GET** /api/v2/chats/search/recipients | Find chats by recipient
[**SearchContacts**](TextMagicApi.md#searchcontacts) | **GET** /api/v2/contacts/search | Find contacts by given criteria
[**SearchInboundMessages**](TextMagicApi.md#searchinboundmessages) | **GET** /api/v2/replies/search | Find inbound messages
[**SearchLists**](TextMagicApi.md#searchlists) | **GET** /api/v2/lists/search | Find lists by given criteria
[**SearchOutboundMessages**](TextMagicApi.md#searchoutboundmessages) | **GET** /api/v2/messages/search | Find messages
[**SearchScheduledMessages**](TextMagicApi.md#searchscheduledmessages) | **GET** /api/v2/schedules/search | Find scheduled messages
[**SearchTemplates**](TextMagicApi.md#searchtemplates) | **GET** /api/v2/templates/search | Find templates by criteria
[**SendMessage**](TextMagicApi.md#sendmessage) | **POST** /api/v2/messages | Send message
[**SendPhoneVerificationCodeTFA**](TextMagicApi.md#sendphoneverificationcodetfa) | **POST** /api/v2/verify | Step 1: Send a verification code 
[**SetChatStatus**](TextMagicApi.md#setchatstatus) | **POST** /api/v2/chats/status | Change chat status
[**UnblockContact**](TextMagicApi.md#unblockcontact) | **POST** /api/v2/contacts/unblock | Unblock a contact by phone number
[**UnblockContactsBulk**](TextMagicApi.md#unblockcontactsbulk) | **POST** /api/v2/contacts/unblock/bulk | Unblock contacts (bulk)
[**UnmuteChatsBulk**](TextMagicApi.md#unmutechatsbulk) | **POST** /api/v2/chats/unmute/bulk | Unmute chats (bulk)
[**UnsubscribeContact**](TextMagicApi.md#unsubscribecontact) | **POST** /api/v2/unsubscribers | Manually unsubscribe a contact
[**UpdateBalanceNotificationSettings**](TextMagicApi.md#updatebalancenotificationsettings) | **PUT** /api/v2/user/notification/balance | Update balance notification settings
[**UpdateCallbackSettings**](TextMagicApi.md#updatecallbacksettings) | **PUT** /api/v2/callback/settings | Update callback URL settings
[**UpdateChatDesktopNotificationSettings**](TextMagicApi.md#updatechatdesktopnotificationsettings) | **PUT** /api/v2/user/desktop/notification | Update chat desktop notification settings
[**UpdateContact**](TextMagicApi.md#updatecontact) | **PUT** /api/v2/contacts/{id}/normalized | Edit a contact
[**UpdateContactNote**](TextMagicApi.md#updatecontactnote) | **PUT** /api/v2/notes/{id} | Update a contact note
[**UpdateCurrentUser**](TextMagicApi.md#updatecurrentuser) | **PUT** /api/v2/user | Edit current account info
[**UpdateCustomField**](TextMagicApi.md#updatecustomfield) | **PUT** /api/v2/customfields/{id} | Edit a custom field
[**UpdateCustomFieldValue**](TextMagicApi.md#updatecustomfieldvalue) | **PUT** /api/v2/customfields/{id}/update | Edit the custom field value of a specified contact
[**UpdateInboundMessagesNotificationSettings**](TextMagicApi.md#updateinboundmessagesnotificationsettings) | **PUT** /api/v2/user/notification/inbound | Update inbound messages notification settings
[**UpdateList**](TextMagicApi.md#updatelist) | **PUT** /api/v2/lists/{id} | Edit a list
[**UpdateSenderSetting**](TextMagicApi.md#updatesendersetting) | **PUT** /api/v2/sender/settings | Change sender settings
[**UpdateTemplate**](TextMagicApi.md#updatetemplate) | **PUT** /api/v2/templates/{id} | Update a template
[**UploadAvatar**](TextMagicApi.md#uploadavatar) | **POST** /api/v2/user/avatar | Upload an avatar
[**UploadContactAvatar**](TextMagicApi.md#uploadcontactavatar) | **POST** /api/v2/contacts/{id}/avatar | Upload an avatar
[**UploadListAvatar**](TextMagicApi.md#uploadlistavatar) | **POST** /api/v2/lists/{id}/avatar | Add an avatar for a list
[**UploadMessageAttachment**](TextMagicApi.md#uploadmessageattachment) | **POST** /api/v2/messages/attachment | Upload message attachment
[**UploadMessageMMSAttachment**](TextMagicApi.md#uploadmessagemmsattachment) | **POST** /api/v2/messages/mms/attachment | Upload message mms attachment


<a name="assigncontactstolist"></a>
# **AssignContactsToList**
> ResourceLinkResponse AssignContactsToList (AssignContactsToListInputObject assignContactsToListInputObject, int? id)

Assign contacts to a list

> Unlike all other PUT requests, this command does not need old contact IDs to be submitted. For example, if you have a list with contacts 150, 151 and 152 and you want to add contact ID 153, you only need to submit 153 as a parameter of PUT /api/v2/lists/{id}/contacts. 

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class AssignContactsToListExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var assignContactsToListInputObject = new AssignContactsToListInputObject(); // AssignContactsToListInputObject | 
            var id = 1;  // int? | 

            try
            {
                // Assign contacts to a list
                ResourceLinkResponse result = apiInstance.AssignContactsToList(assignContactsToListInputObject, id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.AssignContactsToList: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignContactsToListInputObject** | [**AssignContactsToListInputObject**](AssignContactsToListInputObject.md)|  | 
 **id** | **int?**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="blockcontact"></a>
# **BlockContact**
> ResourceLinkResponse BlockContact (BlockContactInputObject blockContactInputObject)

Block a contact by phone number

Block a contact from inbound and outbound communication by phone number.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class BlockContactExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var blockContactInputObject = new BlockContactInputObject(); // BlockContactInputObject | 

            try
            {
                // Block a contact by phone number
                ResourceLinkResponse result = apiInstance.BlockContact(blockContactInputObject);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.BlockContact: " + e.Message );
            }
        }
    }
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="buydedicatednumber"></a>
# **BuyDedicatedNumber**
> void BuyDedicatedNumber (BuyDedicatedNumberInputObject buyDedicatedNumberInputObject)

Buy a dedicated number

To buy a dedicated number, you first need to find an available number matching your criteria using the `/api/v2/numbers/available` command described above.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class BuyDedicatedNumberExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var buyDedicatedNumberInputObject = new BuyDedicatedNumberInputObject(); // BuyDedicatedNumberInputObject | 

            try
            {
                // Buy a dedicated number
                apiInstance.BuyDedicatedNumber(buyDedicatedNumberInputObject);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.BuyDedicatedNumber: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyDedicatedNumberInputObject** | [**BuyDedicatedNumberInputObject**](BuyDedicatedNumberInputObject.md)|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="cancelverification"></a>
# **CancelVerification**
> void CancelVerification (string verifyId)

Cancel verification process

You can cancel the verification not earlier than 30 seconds after the initial request.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class CancelVerificationExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var verifyId = "123e4567-e89b-12d3-a456-426655440000";  // string | The verifyId that you received in Step 1.

            try
            {
                // Cancel verification process
                apiInstance.CancelVerification(verifyId);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.CancelVerification: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verifyId** | **string**| The verifyId that you received in Step 1. | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="checkphoneverificationcodetfa"></a>
# **CheckPhoneVerificationCodeTFA**
> void CheckPhoneVerificationCodeTFA (CheckPhoneVerificationCodeTFAInputObject checkPhoneVerificationCodeTFAInputObject)

Step 2: Check the verification code 

Check received code from user with the code which was actually sent.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class CheckPhoneVerificationCodeTFAExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var checkPhoneVerificationCodeTFAInputObject = new CheckPhoneVerificationCodeTFAInputObject(); // CheckPhoneVerificationCodeTFAInputObject | 

            try
            {
                // Step 2: Check the verification code 
                apiInstance.CheckPhoneVerificationCodeTFA(checkPhoneVerificationCodeTFAInputObject);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.CheckPhoneVerificationCodeTFA: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPhoneVerificationCodeTFAInputObject** | [**CheckPhoneVerificationCodeTFAInputObject**](CheckPhoneVerificationCodeTFAInputObject.md)|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="clearandassigncontactstolist"></a>
# **ClearAndAssignContactsToList**
> ResourceLinkResponse ClearAndAssignContactsToList (ClearAndAssignContactsToListInputObject clearAndAssignContactsToListInputObject, int? id)

Reset list members to the specified contacts

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class ClearAndAssignContactsToListExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var clearAndAssignContactsToListInputObject = new ClearAndAssignContactsToListInputObject(); // ClearAndAssignContactsToListInputObject | 
            var id = 1;  // int? | 

            try
            {
                // Reset list members to the specified contacts
                ResourceLinkResponse result = apiInstance.ClearAndAssignContactsToList(clearAndAssignContactsToListInputObject, id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.ClearAndAssignContactsToList: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clearAndAssignContactsToListInputObject** | [**ClearAndAssignContactsToListInputObject**](ClearAndAssignContactsToListInputObject.md)|  | 
 **id** | **int?**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="closechatsbulk"></a>
# **CloseChatsBulk**
> void CloseChatsBulk (CloseChatsBulkInputObject closeChatsBulkInputObject)

Close chats (bulk)

Close chats by chat IDs or close all chats

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class CloseChatsBulkExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var closeChatsBulkInputObject = new CloseChatsBulkInputObject(); // CloseChatsBulkInputObject | 

            try
            {
                // Close chats (bulk)
                apiInstance.CloseChatsBulk(closeChatsBulkInputObject);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.CloseChatsBulk: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **closeChatsBulkInputObject** | [**CloseChatsBulkInputObject**](CloseChatsBulkInputObject.md)|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="closereadchats"></a>
# **CloseReadChats**
> void CloseReadChats ()

Close read chats

Close all chats that have no unread messages.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class CloseReadChatsExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();

            try
            {
                // Close read chats
                apiInstance.CloseReadChats();
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.CloseReadChats: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="closesubaccount"></a>
# **CloseSubaccount**
> void CloseSubaccount (int? id)

Close sub-account

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class CloseSubaccountExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 

            try
            {
                // Close sub-account
                apiInstance.CloseSubaccount(id);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.CloseSubaccount: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="createcontact"></a>
# **CreateContact**
> ResourceLinkResponse CreateContact (CreateContactInputObject createContactInputObject)

Add a new contact

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class CreateContactExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var createContactInputObject = new CreateContactInputObject(); // CreateContactInputObject | 

            try
            {
                // Add a new contact
                ResourceLinkResponse result = apiInstance.CreateContact(createContactInputObject);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.CreateContact: " + e.Message );
            }
        }
    }
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="createcontactnote"></a>
# **CreateContactNote**
> ResourceLinkResponse CreateContactNote (CreateContactNoteInputObject createContactNoteInputObject, int? id)

Create a new contact note

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class CreateContactNoteExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var createContactNoteInputObject = new CreateContactNoteInputObject(); // CreateContactNoteInputObject | 
            var id = 1;  // int? | 

            try
            {
                // Create a new contact note
                ResourceLinkResponse result = apiInstance.CreateContactNote(createContactNoteInputObject, id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.CreateContactNote: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createContactNoteInputObject** | [**CreateContactNoteInputObject**](CreateContactNoteInputObject.md)|  | 
 **id** | **int?**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="createcustomfield"></a>
# **CreateCustomField**
> ResourceLinkResponse CreateCustomField (CreateCustomFieldInputObject createCustomFieldInputObject)

Add a new custom field

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class CreateCustomFieldExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var createCustomFieldInputObject = new CreateCustomFieldInputObject(); // CreateCustomFieldInputObject | 

            try
            {
                // Add a new custom field
                ResourceLinkResponse result = apiInstance.CreateCustomField(createCustomFieldInputObject);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.CreateCustomField: " + e.Message );
            }
        }
    }
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="createlist"></a>
# **CreateList**
> ResourceLinkResponse CreateList (CreateListInputObject createListInputObject)

Create a new list

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class CreateListExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var createListInputObject = new CreateListInputObject(); // CreateListInputObject | 

            try
            {
                // Create a new list
                ResourceLinkResponse result = apiInstance.CreateList(createListInputObject);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.CreateList: " + e.Message );
            }
        }
    }
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="createtemplate"></a>
# **CreateTemplate**
> ResourceLinkResponse CreateTemplate (CreateTemplateInputObject createTemplateInputObject)

Create a template

There are times when creating a new template makes sense (such as when targeting specific clients or improving your business strategies).  You can create new SMS templates for marketing purposes or SMS templates for business campaigns. 

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class CreateTemplateExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var createTemplateInputObject = new CreateTemplateInputObject(); // CreateTemplateInputObject | 

            try
            {
                // Create a template
                ResourceLinkResponse result = apiInstance.CreateTemplate(createTemplateInputObject);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.CreateTemplate: " + e.Message );
            }
        }
    }
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deleteallcontacts"></a>
# **DeleteAllContacts**
> void DeleteAllContacts ()

Delete contacts (bulk)

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DeleteAllContactsExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();

            try
            {
                // Delete contacts (bulk)
                apiInstance.DeleteAllContacts();
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DeleteAllContacts: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deletealloutboundmessages"></a>
# **DeleteAllOutboundMessages**
> void DeleteAllOutboundMessages ()

Delete all messages

Delete all messages.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DeleteAllOutboundMessagesExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();

            try
            {
                // Delete all messages
                apiInstance.DeleteAllOutboundMessages();
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DeleteAllOutboundMessages: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deleteavatar"></a>
# **DeleteAvatar**
> void DeleteAvatar ()

Delete an avatar

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DeleteAvatarExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();

            try
            {
                // Delete an avatar
                apiInstance.DeleteAvatar();
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DeleteAvatar: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deletechatmessages"></a>
# **DeleteChatMessages**
> void DeleteChatMessages (DeleteChatMessagesBulkInputObject deleteChatMessagesBulkInputObject, int? id)

Delete chat messages by ID(s)

Delete messages from chat by given message IDs.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DeleteChatMessagesExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var deleteChatMessagesBulkInputObject = new DeleteChatMessagesBulkInputObject(); // DeleteChatMessagesBulkInputObject | 
            var id = 1;  // int? | 

            try
            {
                // Delete chat messages by ID(s)
                apiInstance.DeleteChatMessages(deleteChatMessagesBulkInputObject, id);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DeleteChatMessages: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteChatMessagesBulkInputObject** | [**DeleteChatMessagesBulkInputObject**](DeleteChatMessagesBulkInputObject.md)|  | 
 **id** | **int?**|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deletechatsbulk"></a>
# **DeleteChatsBulk**
> void DeleteChatsBulk (DeleteChatsBulkInputObject deleteChatsBulkInputObject)

Delete chats (bulk)

Delete chats by given IDs or delete all chats.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DeleteChatsBulkExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var deleteChatsBulkInputObject = new DeleteChatsBulkInputObject(); // DeleteChatsBulkInputObject | 

            try
            {
                // Delete chats (bulk)
                apiInstance.DeleteChatsBulk(deleteChatsBulkInputObject);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DeleteChatsBulk: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteChatsBulkInputObject** | [**DeleteChatsBulkInputObject**](DeleteChatsBulkInputObject.md)|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deletecontact"></a>
# **DeleteContact**
> void DeleteContact (int? id)

Delete a contact

> This command removes your contact completely. If it was assigned or saved to a shared list, it will disappear from there too. If you only need to remove a contact from selected lists, use the Contact assignment command in the Lists section instead, rather than deleting the contact. 

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DeleteContactExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 

            try
            {
                // Delete a contact
                apiInstance.DeleteContact(id);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DeleteContact: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deletecontactavatar"></a>
# **DeleteContactAvatar**
> void DeleteContactAvatar (int? id)

Delete an avatar

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DeleteContactAvatarExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 

            try
            {
                // Delete an avatar
                apiInstance.DeleteContactAvatar(id);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DeleteContactAvatar: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deletecontactnote"></a>
# **DeleteContactNote**
> void DeleteContactNote (int? id)

Delete a contact note

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DeleteContactNoteExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 

            try
            {
                // Delete a contact note
                apiInstance.DeleteContactNote(id);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DeleteContactNote: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deletecontactnotesbulk"></a>
# **DeleteContactNotesBulk**
> void DeleteContactNotesBulk (int? id, DeleteContactNotesBulkInputObject deleteContactNotesBulkInputObject)

Delete contact notes (bulk)

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DeleteContactNotesBulkExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 
            var deleteContactNotesBulkInputObject = new DeleteContactNotesBulkInputObject(); // DeleteContactNotesBulkInputObject | 

            try
            {
                // Delete contact notes (bulk)
                apiInstance.DeleteContactNotesBulk(id, deleteContactNotesBulkInputObject);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DeleteContactNotesBulk: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 
 **deleteContactNotesBulkInputObject** | [**DeleteContactNotesBulkInputObject**](DeleteContactNotesBulkInputObject.md)|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deletecontactsbyids"></a>
# **DeleteContactsByIds**
> void DeleteContactsByIds (DeleteContactsByIdsInputObject deleteContactsByIdsInputObject)

Delete contacts by IDs (bulk)

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DeleteContactsByIdsExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var deleteContactsByIdsInputObject = new DeleteContactsByIdsInputObject(); // DeleteContactsByIdsInputObject | 

            try
            {
                // Delete contacts by IDs (bulk)
                apiInstance.DeleteContactsByIds(deleteContactsByIdsInputObject);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DeleteContactsByIds: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteContactsByIdsInputObject** | [**DeleteContactsByIdsInputObject**](DeleteContactsByIdsInputObject.md)|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deletecontactsfromlist"></a>
# **DeleteContactsFromList**
> void DeleteContactsFromList (DeleteContacsFromListObject deleteContacsFromListObject, int? id)

Unassign contacts from a list

> When you remove contacts from a specific list, they will be deleted permanently, unless they are first saved in another list. 

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DeleteContactsFromListExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var deleteContacsFromListObject = new DeleteContacsFromListObject(); // DeleteContacsFromListObject | 
            var id = 1;  // int? | 

            try
            {
                // Unassign contacts from a list
                apiInstance.DeleteContactsFromList(deleteContacsFromListObject, id);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DeleteContactsFromList: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteContacsFromListObject** | [**DeleteContacsFromListObject**](DeleteContacsFromListObject.md)|  | 
 **id** | **int?**|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deletecustomfield"></a>
# **DeleteCustomField**
> void DeleteCustomField (int? id)

Delete a custom field

> When a custom field is deleted, all the information that was added to contacts under this custom field will also be lost. 

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DeleteCustomFieldExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 

            try
            {
                // Delete a custom field
                apiInstance.DeleteCustomField(id);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DeleteCustomField: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deletededicatednumber"></a>
# **DeleteDedicatedNumber**
> void DeleteDedicatedNumber (int? id)

Cancel a dedicated number subscription

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DeleteDedicatedNumberExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 

            try
            {
                // Cancel a dedicated number subscription
                apiInstance.DeleteDedicatedNumber(id);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DeleteDedicatedNumber: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deleteinboundmessage"></a>
# **DeleteInboundMessage**
> void DeleteInboundMessage (int? id)

Delete a single inbound message

> Note: deleted inbound messages will disappear from TextMagic Online, chats, and any other place they are referenced.  So, be careful! 

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DeleteInboundMessageExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | The unique numeric ID for the inbound message.

            try
            {
                // Delete a single inbound message
                apiInstance.DeleteInboundMessage(id);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DeleteInboundMessage: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**| The unique numeric ID for the inbound message. | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deleteinboundmessagesbulk"></a>
# **DeleteInboundMessagesBulk**
> void DeleteInboundMessagesBulk (DeleteInboundMessagesBulkInputObject deleteInboundMessagesBulkInputObject)

Delete inbound messages (bulk)

> Note: deleted inbound messages will disappear from TextMagic Online, chats, and any other place they are referenced.  So, be careful! 

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DeleteInboundMessagesBulkExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var deleteInboundMessagesBulkInputObject = new DeleteInboundMessagesBulkInputObject(); // DeleteInboundMessagesBulkInputObject | 

            try
            {
                // Delete inbound messages (bulk)
                apiInstance.DeleteInboundMessagesBulk(deleteInboundMessagesBulkInputObject);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DeleteInboundMessagesBulk: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteInboundMessagesBulkInputObject** | [**DeleteInboundMessagesBulkInputObject**](DeleteInboundMessagesBulkInputObject.md)|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deletelist"></a>
# **DeleteList**
> void DeleteList (int? id)

Delete a list

This command has no parameters. If successful, this command will return the standard delete response (204 No Content); otherwise, a standard error response will be returned.  When you delete a list, the contacts in it are deleted as well, unless they were saved in another list.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DeleteListExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 

            try
            {
                // Delete a list
                apiInstance.DeleteList(id);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DeleteList: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deletelistavatar"></a>
# **DeleteListAvatar**
> void DeleteListAvatar (int? id)

Delete an avatar for a list

Delete an avatar for a list

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DeleteListAvatarExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 

            try
            {
                // Delete an avatar for a list
                apiInstance.DeleteListAvatar(id);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DeleteListAvatar: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deletelistcontactsbulk"></a>
# **DeleteListContactsBulk**
> void DeleteListContactsBulk (DeleteListContactsBulkInputObject deleteListContactsBulkInputObject, int? id)

Delete contacts from a list (bulk)

Delete contacts from a list (bulk)

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DeleteListContactsBulkExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var deleteListContactsBulkInputObject = new DeleteListContactsBulkInputObject(); // DeleteListContactsBulkInputObject | 
            var id = 1;  // int? | 

            try
            {
                // Delete contacts from a list (bulk)
                apiInstance.DeleteListContactsBulk(deleteListContactsBulkInputObject, id);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DeleteListContactsBulk: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteListContactsBulkInputObject** | [**DeleteListContactsBulkInputObject**](DeleteListContactsBulkInputObject.md)|  | 
 **id** | **int?**|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deletelistsbulk"></a>
# **DeleteListsBulk**
> void DeleteListsBulk (DeleteListsBulkInputObject deleteListsBulkInputObject)

Delete lists (bulk)

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DeleteListsBulkExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var deleteListsBulkInputObject = new DeleteListsBulkInputObject(); // DeleteListsBulkInputObject | 

            try
            {
                // Delete lists (bulk)
                apiInstance.DeleteListsBulk(deleteListsBulkInputObject);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DeleteListsBulk: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteListsBulkInputObject** | [**DeleteListsBulkInputObject**](DeleteListsBulkInputObject.md)|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deletemessagesession"></a>
# **DeleteMessageSession**
> void DeleteMessageSession (int? id)

Delete a session

Delete a message session, together with all nested messages. > You will not be refunded for any deleted sent sessions. 

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DeleteMessageSessionExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 

            try
            {
                // Delete a session
                apiInstance.DeleteMessageSession(id);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DeleteMessageSession: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deletemessagesessionsbulk"></a>
# **DeleteMessageSessionsBulk**
> void DeleteMessageSessionsBulk (DeleteMessageSessionsBulkInputObject deleteMessageSessionsBulkInputObject)

Delete sessions (bulk)

Delete message sessions, together with all nested messages, by given ID(s) or delete all message sessions.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DeleteMessageSessionsBulkExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var deleteMessageSessionsBulkInputObject = new DeleteMessageSessionsBulkInputObject(); // DeleteMessageSessionsBulkInputObject | 

            try
            {
                // Delete sessions (bulk)
                apiInstance.DeleteMessageSessionsBulk(deleteMessageSessionsBulkInputObject);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DeleteMessageSessionsBulk: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteMessageSessionsBulkInputObject** | [**DeleteMessageSessionsBulkInputObject**](DeleteMessageSessionsBulkInputObject.md)|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deleteoutboundmessage"></a>
# **DeleteOutboundMessage**
> void DeleteOutboundMessage (int? id)

Delete message

Delete a single message.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DeleteOutboundMessageExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 

            try
            {
                // Delete message
                apiInstance.DeleteOutboundMessage(id);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DeleteOutboundMessage: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deleteoutboundmessagesbulk"></a>
# **DeleteOutboundMessagesBulk**
> void DeleteOutboundMessagesBulk (DeleteOutboundMessagesBulkInputObject deleteOutboundMessagesBulkInputObject)

Delete messages (bulk)

Delete outbound messages by the given ID(s) or delete all outbound messages.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DeleteOutboundMessagesBulkExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var deleteOutboundMessagesBulkInputObject = new DeleteOutboundMessagesBulkInputObject(); // DeleteOutboundMessagesBulkInputObject | 

            try
            {
                // Delete messages (bulk)
                apiInstance.DeleteOutboundMessagesBulk(deleteOutboundMessagesBulkInputObject);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DeleteOutboundMessagesBulk: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteOutboundMessagesBulkInputObject** | [**DeleteOutboundMessagesBulkInputObject**](DeleteOutboundMessagesBulkInputObject.md)|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deletescheduledmessage"></a>
# **DeleteScheduledMessage**
> void DeleteScheduledMessage (int? id)

Delete a single scheduled message

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DeleteScheduledMessageExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 

            try
            {
                // Delete a single scheduled message
                apiInstance.DeleteScheduledMessage(id);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DeleteScheduledMessage: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deletescheduledmessagesbulk"></a>
# **DeleteScheduledMessagesBulk**
> void DeleteScheduledMessagesBulk (DeleteScheduledMessagesBulkInputObject deleteScheduledMessagesBulkInputObject)

Delete scheduled messages (bulk)

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DeleteScheduledMessagesBulkExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var deleteScheduledMessagesBulkInputObject = new DeleteScheduledMessagesBulkInputObject(); // DeleteScheduledMessagesBulkInputObject | 

            try
            {
                // Delete scheduled messages (bulk)
                apiInstance.DeleteScheduledMessagesBulk(deleteScheduledMessagesBulkInputObject);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DeleteScheduledMessagesBulk: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteScheduledMessagesBulkInputObject** | [**DeleteScheduledMessagesBulkInputObject**](DeleteScheduledMessagesBulkInputObject.md)|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deletesenderid"></a>
# **DeleteSenderId**
> void DeleteSenderId (int? id)

Delete a Sender ID

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DeleteSenderIdExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 

            try
            {
                // Delete a Sender ID
                apiInstance.DeleteSenderId(id);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DeleteSenderId: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deletetemplate"></a>
# **DeleteTemplate**
> void DeleteTemplate (int? id)

Delete a template

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DeleteTemplateExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 

            try
            {
                // Delete a template
                apiInstance.DeleteTemplate(id);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DeleteTemplate: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deletetemplatesbulk"></a>
# **DeleteTemplatesBulk**
> void DeleteTemplatesBulk (DeleteTemplatesBulkInputObject deleteTemplatesBulkInputObject)

Delete templates (bulk)

Delete templates by given IDs or delete all templates.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DeleteTemplatesBulkExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var deleteTemplatesBulkInputObject = new DeleteTemplatesBulkInputObject(); // DeleteTemplatesBulkInputObject | 

            try
            {
                // Delete templates (bulk)
                apiInstance.DeleteTemplatesBulk(deleteTemplatesBulkInputObject);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DeleteTemplatesBulk: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteTemplatesBulkInputObject** | [**DeleteTemplatesBulkInputObject**](DeleteTemplatesBulkInputObject.md)|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="docarrierlookup"></a>
# **DoCarrierLookup**
> DoCarrierLookupResponse DoCarrierLookup (string phone, string country = null)

Carrier Lookup

This API call allows you to retrieve additional information about a phone number: region-specific phone number formatting, carrier, phone type (landline/mobile) and country information.  > Numbers must be checked one by one. You cannot check multiple numbers in one request.   

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DoCarrierLookupExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var phone = "447860021130";  // string | Phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164) or in [National format](https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers). 
            var country = "GB";  // string | This option must be specified only if the phone number is in a **[National format](https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers)**.  (optional) 

            try
            {
                // Carrier Lookup
                DoCarrierLookupResponse result = apiInstance.DoCarrierLookup(phone, country);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DoCarrierLookup: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **string**| Phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164) or in [National format](https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers).  | 
 **country** | **string**| This option must be specified only if the phone number is in a **[National format](https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers)**.  | [optional] 

### Return type

[**DoCarrierLookupResponse**](DoCarrierLookupResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="doemaillookup"></a>
# **DoEmailLookup**
> DoEmailLookupResponse DoEmailLookup (string email)

Email Lookup

To get more details about an email address or to check whether it is a valid email or not, you can use the Email Lookup command. To upload and check emails in bulk, please use our [Web app](https://my.textmagic.com/online/email-lookup/).  This API call allows you to retrieve additional information about an email address, such as mailbox detection, syntax checks, DNS validation, deliverability status, and many more helpful values (see the table below).  > Emails must be checked one by one. You cannot check multiple emails in one request. To upload and check emails in bulk, please use our [Web app](https://my.textmagic.com/online/email-lookup/).

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class DoEmailLookupExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var email = "john@sample.com";  // string | Email address.

            try
            {
                // Email Lookup
                DoEmailLookupResponse result = apiInstance.DoEmailLookup(email);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.DoEmailLookup: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **string**| Email address. | 

### Return type

[**DoEmailLookupResponse**](DoEmailLookupResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getallbulksessions"></a>
# **GetAllBulkSessions**
> GetAllBulkSessionsPaginatedResponse GetAllBulkSessions (int? page = null, int? limit = null)

Get all bulk sessions

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetAllBulkSessionsExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)

            try
            {
                // Get all bulk sessions
                GetAllBulkSessionsPaginatedResponse result = apiInstance.GetAllBulkSessions(page, limit);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetAllBulkSessions: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetAllBulkSessionsPaginatedResponse**](GetAllBulkSessionsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getallchats"></a>
# **GetAllChats**
> GetAllChatsPaginatedResponse GetAllChats (string status = null, int? page = null, int? limit = null, string orderBy = null, int? voice = null, int? flat = null)

Get all chats

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetAllChatsExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var status = "a";  // string | Fetch only (a)ctive, (c)losed or (d)eleted chats. (optional) 
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)
            var orderBy = orderBy_example;  // string | Order results by some field. Default is id. (optional)  (default to id)
            var voice = 56;  // int? | Fetch results with voice calls. (optional)  (default to 0)
            var flat = 1;  // int? | Should additional contact info be included? (optional)  (default to 0)

            try
            {
                // Get all chats
                GetAllChatsPaginatedResponse result = apiInstance.GetAllChats(status, page, limit, orderBy, voice, flat);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetAllChats: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **string**| Fetch only (a)ctive, (c)losed or (d)eleted chats. | [optional] 
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]
 **orderBy** | **string**| Order results by some field. Default is id. | [optional] [default to id]
 **voice** | **int?**| Fetch results with voice calls. | [optional] [default to 0]
 **flat** | **int?**| Should additional contact info be included? | [optional] [default to 0]

### Return type

[**GetAllChatsPaginatedResponse**](GetAllChatsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getallinboundmessages"></a>
# **GetAllInboundMessages**
> GetAllInboundMessagesPaginatedResponse GetAllInboundMessages (int? page = null, int? limit = null, string orderBy = null, string direction = null)

Get all inbound messages

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetAllInboundMessagesExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)
            var orderBy = orderBy_example;  // string | Order results by some field. Default is id. (optional)  (default to id)
            var direction = direction_example;  // string | Order direction. Default is desc. (optional)  (default to desc)

            try
            {
                // Get all inbound messages
                GetAllInboundMessagesPaginatedResponse result = apiInstance.GetAllInboundMessages(page, limit, orderBy, direction);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetAllInboundMessages: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]
 **orderBy** | **string**| Order results by some field. Default is id. | [optional] [default to id]
 **direction** | **string**| Order direction. Default is desc. | [optional] [default to desc]

### Return type

[**GetAllInboundMessagesPaginatedResponse**](GetAllInboundMessagesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getallmessagesessions"></a>
# **GetAllMessageSessions**
> GetAllMessageSessionsPaginatedResponse GetAllMessageSessions (int? page = null, int? limit = null)

Get all sessions

Get all message sending sessions. > This list contains all of your sessions, including those which were sent but not via API 

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetAllMessageSessionsExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)

            try
            {
                // Get all sessions
                GetAllMessageSessionsPaginatedResponse result = apiInstance.GetAllMessageSessions(page, limit);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetAllMessageSessions: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetAllMessageSessionsPaginatedResponse**](GetAllMessageSessionsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getalloutboundmessages"></a>
# **GetAllOutboundMessages**
> GetAllOutboundMessagesPaginatedResponse GetAllOutboundMessages (int? page = null, int? limit = null, int? lastId = null)

Get all messages

Get all user oubound messages.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetAllOutboundMessagesExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)
            var lastId = 56;  // int? | Filter results by ID, selecting all values lesser than the specified ID. Note that the \\'page\\' parameter is ignored when \\'lastId\\' is specified. (optional) 

            try
            {
                // Get all messages
                GetAllOutboundMessagesPaginatedResponse result = apiInstance.GetAllOutboundMessages(page, limit, lastId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetAllOutboundMessages: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]
 **lastId** | **int?**| Filter results by ID, selecting all values lesser than the specified ID. Note that the \\&#39;page\\&#39; parameter is ignored when \\&#39;lastId\\&#39; is specified. | [optional] 

### Return type

[**GetAllOutboundMessagesPaginatedResponse**](GetAllOutboundMessagesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getallscheduledmessages"></a>
# **GetAllScheduledMessages**
> GetAllScheduledMessagesPaginatedResponse GetAllScheduledMessages (int? page = null, int? limit = null, string status = null, string orderBy = null, string direction = null)

Get all scheduled messages

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetAllScheduledMessagesExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)
            var status = status_example;  // string | Fetch schedules with a specific status: a - actual, c - completed, x - all. (optional)  (default to x)
            var orderBy = orderBy_example;  // string | Order results by some field. Default is id. (optional)  (default to id)
            var direction = direction_example;  // string | Order direction. Default is desc. (optional)  (default to desc)

            try
            {
                // Get all scheduled messages
                GetAllScheduledMessagesPaginatedResponse result = apiInstance.GetAllScheduledMessages(page, limit, status, orderBy, direction);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetAllScheduledMessages: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]
 **status** | **string**| Fetch schedules with a specific status: a - actual, c - completed, x - all. | [optional] [default to x]
 **orderBy** | **string**| Order results by some field. Default is id. | [optional] [default to id]
 **direction** | **string**| Order direction. Default is desc. | [optional] [default to desc]

### Return type

[**GetAllScheduledMessagesPaginatedResponse**](GetAllScheduledMessagesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getalltemplates"></a>
# **GetAllTemplates**
> GetAllTemplatesPaginatedResponse GetAllTemplates (int? page = null, int? limit = null)

Get all templates

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetAllTemplatesExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var page = 1;  // int? | Fetch specified results page. (optional) 
            var limit = 10;  // int? | The number of results per page. (optional) 

            try
            {
                // Get all templates
                GetAllTemplatesPaginatedResponse result = apiInstance.GetAllTemplates(page, limit);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetAllTemplates: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int?**| Fetch specified results page. | [optional] 
 **limit** | **int?**| The number of results per page. | [optional] 

### Return type

[**GetAllTemplatesPaginatedResponse**](GetAllTemplatesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getavailablededicatednumbers"></a>
# **GetAvailableDedicatedNumbers**
> GetAvailableDedicatedNumbersResponse GetAvailableDedicatedNumbers (string country, int? prefix = null, int? tollfree = null)

Find dedicated numbers available for purchase

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetAvailableDedicatedNumbersExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var country = "GB";  // string | The 2-letter dedicated number country ISO code.
            var prefix = 447155;  // int? | Desired number prefix. Should include the country code (i.e. 447 for UK phone number format). Leave blank to get all the available numbers for the specified country. (optional) 
            var tollfree = 56;  // int? | Should we show only tollfree numbers (tollfree available only for US). (optional)  (default to 0)

            try
            {
                // Find dedicated numbers available for purchase
                GetAvailableDedicatedNumbersResponse result = apiInstance.GetAvailableDedicatedNumbers(country, prefix, tollfree);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetAvailableDedicatedNumbers: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **string**| The 2-letter dedicated number country ISO code. | 
 **prefix** | **int?**| Desired number prefix. Should include the country code (i.e. 447 for UK phone number format). Leave blank to get all the available numbers for the specified country. | [optional] 
 **tollfree** | **int?**| Should we show only tollfree numbers (tollfree available only for US). | [optional] [default to 0]

### Return type

[**GetAvailableDedicatedNumbersResponse**](GetAvailableDedicatedNumbersResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getavailablesendersettingoptions"></a>
# **GetAvailableSenderSettingOptions**
> GetAvailableSenderSettingOptionsResponse GetAvailableSenderSettingOptions (string country = null)

Get available sender settings

Get all available sender setting options which can be used in the \"from\" parameter of the POST messages method.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetAvailableSenderSettingOptionsExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var country = "US";  // string | The 2-letter ISO country ID. If not specified, it returns all the available sender settings. (optional) 

            try
            {
                // Get available sender settings
                GetAvailableSenderSettingOptionsResponse result = apiInstance.GetAvailableSenderSettingOptions(country);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetAvailableSenderSettingOptions: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **string**| The 2-letter ISO country ID. If not specified, it returns all the available sender settings. | [optional] 

### Return type

[**GetAvailableSenderSettingOptionsResponse**](GetAvailableSenderSettingOptionsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getbalancenotificationoptions"></a>
# **GetBalanceNotificationOptions**
> GetBalanceNotificationOptionsResponse GetBalanceNotificationOptions ()

Returns the list of available balance options which can be used as a bound to determine when to send email to user with low balance notification. See https://my.textmagic.com/online/account/notifications/balance

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetBalanceNotificationOptionsExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();

            try
            {
                // Returns the list of available balance options which can be used as a bound to determine when to send email to user with low balance notification. See https://my.textmagic.com/online/account/notifications/balance
                GetBalanceNotificationOptionsResponse result = apiInstance.GetBalanceNotificationOptions();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetBalanceNotificationOptions: " + e.Message );
            }
        }
    }
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getbalancenotificationsettings"></a>
# **GetBalanceNotificationSettings**
> GetBalanceNotificationSettingsResponse GetBalanceNotificationSettings ()

Get balance notification settings

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetBalanceNotificationSettingsExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();

            try
            {
                // Get balance notification settings
                GetBalanceNotificationSettingsResponse result = apiInstance.GetBalanceNotificationSettings();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetBalanceNotificationSettings: " + e.Message );
            }
        }
    }
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getblockedcontacts"></a>
# **GetBlockedContacts**
> GetBlockedContactsPaginatedResponse GetBlockedContacts (int? page = null, int? limit = null, string query = null, string orderBy = null, string direction = null)

Get blocked contacts

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetBlockedContactsExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)
            var query = query_example;  // string | Find blocked contacts by specified search query. (optional) 
            var orderBy = orderBy_example;  // string | Order results by some field. Default is id. (optional)  (default to id)
            var direction = direction_example;  // string | Order direction. Default is desc. (optional)  (default to desc)

            try
            {
                // Get blocked contacts
                GetBlockedContactsPaginatedResponse result = apiInstance.GetBlockedContacts(page, limit, query, orderBy, direction);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetBlockedContacts: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]
 **query** | **string**| Find blocked contacts by specified search query. | [optional] 
 **orderBy** | **string**| Order results by some field. Default is id. | [optional] [default to id]
 **direction** | **string**| Order direction. Default is desc. | [optional] [default to desc]

### Return type

[**GetBlockedContactsPaginatedResponse**](GetBlockedContactsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getbulksession"></a>
# **GetBulkSession**
> BulkSession GetBulkSession (int? id)

Get bulk session status

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetBulkSessionExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 

            try
            {
                // Get bulk session status
                BulkSession result = apiInstance.GetBulkSession(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetBulkSession: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

[**BulkSession**](BulkSession.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getcallbacksettings"></a>
# **GetCallbackSettings**
> GetCallbackSettingsResponse GetCallbackSettings ()

Fetch callback URL settings

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetCallbackSettingsExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();

            try
            {
                // Fetch callback URL settings
                GetCallbackSettingsResponse result = apiInstance.GetCallbackSettings();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetCallbackSettings: " + e.Message );
            }
        }
    }
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getchat"></a>
# **GetChat**
> Chat GetChat (int? id)

Get a single chat

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetChatExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 

            try
            {
                // Get a single chat
                Chat result = apiInstance.GetChat(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetChat: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

[**Chat**](Chat.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getchatbyphone"></a>
# **GetChatByPhone**
> Chat GetChatByPhone (string phone, int? upsert = null, int? reopen = null)

Find chats by phone

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetChatByPhoneExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var phone = "447860021130";  // string | 
            var upsert = 56;  // int? | Create a new chat if not found. (optional)  (default to 0)
            var reopen = 56;  // int? | Reopen chat if found or do not change status. (optional)  (default to 0)

            try
            {
                // Find chats by phone
                Chat result = apiInstance.GetChatByPhone(phone, upsert, reopen);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetChatByPhone: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **string**|  | 
 **upsert** | **int?**| Create a new chat if not found. | [optional] [default to 0]
 **reopen** | **int?**| Reopen chat if found or do not change status. | [optional] [default to 0]

### Return type

[**Chat**](Chat.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getchatmessages"></a>
# **GetChatMessages**
> GetChatMessagesPaginatedResponse GetChatMessages (int? id, int? page = null, int? limit = null, string query = null, string start = null, string end = null, string direction = null, int? voice = null)

Get chat messages

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetChatMessagesExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)
            var query = query_example;  // string | Find messages by specified search query. (optional) 
            var start = start_example;  // string | Return messages since specified timestamp only. Required when `end` parameter specified. (optional) 
            var end = end_example;  // string | Return messages up to specified timestamp only. Required when `start` parameter specified. (optional) 
            var direction = direction_example;  // string | Order direction. Default is desc. (optional)  (default to desc)
            var voice = 56;  // int? | Fetch results with voice calls. (optional)  (default to 0)

            try
            {
                // Get chat messages
                GetChatMessagesPaginatedResponse result = apiInstance.GetChatMessages(id, page, limit, query, start, end, direction, voice);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetChatMessages: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]
 **query** | **string**| Find messages by specified search query. | [optional] 
 **start** | **string**| Return messages since specified timestamp only. Required when &#x60;end&#x60; parameter specified. | [optional] 
 **end** | **string**| Return messages up to specified timestamp only. Required when &#x60;start&#x60; parameter specified. | [optional] 
 **direction** | **string**| Order direction. Default is desc. | [optional] [default to desc]
 **voice** | **int?**| Fetch results with voice calls. | [optional] [default to 0]

### Return type

[**GetChatMessagesPaginatedResponse**](GetChatMessagesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getcontact"></a>
# **GetContact**
> Contact GetContact (int? id)

Get the details of a specific contact

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetContactExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | Contact ID.

            try
            {
                // Get the details of a specific contact
                Contact result = apiInstance.GetContact(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetContact: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**| Contact ID. | 

### Return type

[**Contact**](Contact.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getcontactbyphone"></a>
# **GetContactByPhone**
> Contact GetContactByPhone (string phone)

Get the details of a specific contact by phone number

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetContactByPhoneExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var phone = "447860021130";  // string | 

            try
            {
                // Get the details of a specific contact by phone number
                Contact result = apiInstance.GetContactByPhone(phone);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetContactByPhone: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **string**|  | 

### Return type

[**Contact**](Contact.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getcontactifblocked"></a>
# **GetContactIfBlocked**
> Contact GetContactIfBlocked (string phone)

Check if a phone number is blocked

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetContactIfBlockedExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var phone = "447860021130";  // string | Phone number to check.

            try
            {
                // Check if a phone number is blocked
                Contact result = apiInstance.GetContactIfBlocked(phone);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetContactIfBlocked: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **string**| Phone number to check. | 

### Return type

[**Contact**](Contact.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getcontactimportsessionprogress"></a>
# **GetContactImportSessionProgress**
> GetContactImportSessionProgressResponse GetContactImportSessionProgress (int? id)

Check import progress

Get contact import session progress.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetContactImportSessionProgressExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 

            try
            {
                // Check import progress
                GetContactImportSessionProgressResponse result = apiInstance.GetContactImportSessionProgress(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetContactImportSessionProgress: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

[**GetContactImportSessionProgressResponse**](GetContactImportSessionProgressResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getcontactnote"></a>
# **GetContactNote**
> ContactNote GetContactNote (int? id)

Get a contact note

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetContactNoteExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 

            try
            {
                // Get a contact note
                ContactNote result = apiInstance.GetContactNote(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetContactNote: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

[**ContactNote**](ContactNote.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getcontactnotes"></a>
# **GetContactNotes**
> GetContactNotesPaginatedResponse GetContactNotes (int? id, int? page = null, int? limit = null)

Fetch notes assigned to a given contact

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetContactNotesExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)

            try
            {
                // Fetch notes assigned to a given contact
                GetContactNotesPaginatedResponse result = apiInstance.GetContactNotes(id, page, limit);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetContactNotes: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetContactNotesPaginatedResponse**](GetContactNotesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getcontacts"></a>
# **GetContacts**
> GetContactsPaginatedResponse GetContacts (int? page = null, int? limit = null, int? shared = null, string orderBy = null, string direction = null)

Get all contacts

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetContactsExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)
            var shared = 56;  // int? | Should shared contacts be included? (optional)  (default to 0)
            var orderBy = orderBy_example;  // string | Order results by some field. Default is id. (optional)  (default to id)
            var direction = direction_example;  // string | Order direction. Default is desc. (optional)  (default to desc)

            try
            {
                // Get all contacts
                GetContactsPaginatedResponse result = apiInstance.GetContacts(page, limit, shared, orderBy, direction);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetContacts: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]
 **shared** | **int?**| Should shared contacts be included? | [optional] [default to 0]
 **orderBy** | **string**| Order results by some field. Default is id. | [optional] [default to id]
 **direction** | **string**| Order direction. Default is desc. | [optional] [default to desc]

### Return type

[**GetContactsPaginatedResponse**](GetContactsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getcontactsautocomplete"></a>
# **GetContactsAutocomplete**
> GetContactsAutocompleteResponse GetContactsAutocomplete (string query, int? limit = null, int? lists = null)

Get contacts autocomplete suggestions

Get contacts autocomplete suggestions by given search terms.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetContactsAutocompleteExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var query = "A";  // string | Find recipients by specified search query.
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)
            var lists = 56;  // int? | Should lists be returned or not? (optional)  (default to 0)

            try
            {
                // Get contacts autocomplete suggestions
                GetContactsAutocompleteResponse result = apiInstance.GetContactsAutocomplete(query, limit, lists);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetContactsAutocomplete: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **string**| Find recipients by specified search query. | 
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]
 **lists** | **int?**| Should lists be returned or not? | [optional] [default to 0]

### Return type

[**GetContactsAutocompleteResponse**](GetContactsAutocompleteResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getcontactsbylistid"></a>
# **GetContactsByListId**
> GetContactsByListIdPaginatedResponse GetContactsByListId (int? id, int? page = null, int? limit = null, string orderBy = null, string direction = null)

Get all contacts in a list

A useful synonym for the \"contacts/search\" command with the provided \"listId\" parameter.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetContactsByListIdExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | Given group ID.
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)
            var orderBy = orderBy_example;  // string | Order results by some field. Default is id. (optional)  (default to id)
            var direction = direction_example;  // string | Order direction. Default is desc. (optional)  (default to desc)

            try
            {
                // Get all contacts in a list
                GetContactsByListIdPaginatedResponse result = apiInstance.GetContactsByListId(id, page, limit, orderBy, direction);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetContactsByListId: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**| Given group ID. | 
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]
 **orderBy** | **string**| Order results by some field. Default is id. | [optional] [default to id]
 **direction** | **string**| Order direction. Default is desc. | [optional] [default to desc]

### Return type

[**GetContactsByListIdPaginatedResponse**](GetContactsByListIdPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getcountries"></a>
# **GetCountries**
> GetCountriesResponse GetCountries ()

Get countries

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetCountriesExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();

            try
            {
                // Get countries
                GetCountriesResponse result = apiInstance.GetCountries();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetCountries: " + e.Message );
            }
        }
    }
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getcurrentuser"></a>
# **GetCurrentUser**
> User GetCurrentUser ()

Get current account information

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetCurrentUserExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();

            try
            {
                // Get current account information
                User result = apiInstance.GetCurrentUser();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetCurrentUser: " + e.Message );
            }
        }
    }
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getcustomfield"></a>
# **GetCustomField**
> UserCustomField GetCustomField (int? id)

Get the details of a specific custom field

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetCustomFieldExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 

            try
            {
                // Get the details of a specific custom field
                UserCustomField result = apiInstance.GetCustomField(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetCustomField: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

[**UserCustomField**](UserCustomField.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getcustomfields"></a>
# **GetCustomFields**
> GetCustomFieldsPaginatedResponse GetCustomFields (int? page = null, int? limit = null)

Get all custom fields

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetCustomFieldsExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)

            try
            {
                // Get all custom fields
                GetCustomFieldsPaginatedResponse result = apiInstance.GetCustomFields(page, limit);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetCustomFields: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetCustomFieldsPaginatedResponse**](GetCustomFieldsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getdedicatednumber"></a>
# **GetDedicatedNumber**
> UsersInbound GetDedicatedNumber (int? id)

Get the details of a specific dedicated number

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetDedicatedNumberExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 

            try
            {
                // Get the details of a specific dedicated number
                UsersInbound result = apiInstance.GetDedicatedNumber(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetDedicatedNumber: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

[**UsersInbound**](UsersInbound.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getfavorites"></a>
# **GetFavorites**
> GetFavoritesPaginatedResponse GetFavorites (int? page = null, int? limit = null, string query = null)

Get favorite contacts and lists

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetFavoritesExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)
            var query = "A";  // string | Find contacts or lists by specified search query. (optional) 

            try
            {
                // Get favorite contacts and lists
                GetFavoritesPaginatedResponse result = apiInstance.GetFavorites(page, limit, query);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetFavorites: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]
 **query** | **string**| Find contacts or lists by specified search query. | [optional] 

### Return type

[**GetFavoritesPaginatedResponse**](GetFavoritesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getinboundmessage"></a>
# **GetInboundMessage**
> MessageIn GetInboundMessage (int? id)

Get a single inbound message

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetInboundMessageExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1782832;  // int? | The unique numeric ID for the inbound message.

            try
            {
                // Get a single inbound message
                MessageIn result = apiInstance.GetInboundMessage(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetInboundMessage: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**| The unique numeric ID for the inbound message. | 

### Return type

[**MessageIn**](MessageIn.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getinboundmessagesnotificationsettings"></a>
# **GetInboundMessagesNotificationSettings**
> GetInboundMessagesNotificationSettingsResponse GetInboundMessagesNotificationSettings ()

Get inbound messages notification settings

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetInboundMessagesNotificationSettingsExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();

            try
            {
                // Get inbound messages notification settings
                GetInboundMessagesNotificationSettingsResponse result = apiInstance.GetInboundMessagesNotificationSettings();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetInboundMessagesNotificationSettings: " + e.Message );
            }
        }
    }
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getinvoices"></a>
# **GetInvoices**
> GetInvoicesPaginatedResponse GetInvoices (int? page = null, int? limit = null)

Get all invoices

With the TextMagic API, you can check the invoices and transactions for your account.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetInvoicesExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)

            try
            {
                // Get all invoices
                GetInvoicesPaginatedResponse result = apiInstance.GetInvoices(page, limit);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetInvoices: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetInvoicesPaginatedResponse**](GetInvoicesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getlist"></a>
# **GetList**
> List GetList (int? id)

Get the details of a specific list

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetListExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 

            try
            {
                // Get the details of a specific list
                List result = apiInstance.GetList(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetList: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

**List**

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getlistcontactsids"></a>
# **GetListContactsIds**
> GetListContactsIdsResponse GetListContactsIds (int? id)

Get all contact IDs in a list

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetListContactsIdsExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 

            try
            {
                // Get all contact IDs in a list
                GetListContactsIdsResponse result = apiInstance.GetListContactsIds(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetListContactsIds: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

[**GetListContactsIdsResponse**](GetListContactsIdsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getlists"></a>
# **GetLists**
> GetListsPaginatedResponse GetLists (int? page = null, int? limit = null, string orderBy = null, string direction = null, int? favoriteOnly = null, int? onlyMine = null)

Get all lists

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetListsExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var page = 56;  // int? | The current fetched page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)
            var orderBy = orderBy_example;  // string | Order results by some field. Default is id. (optional)  (default to id)
            var direction = direction_example;  // string | Order direction. Default is desc. (optional)  (default to desc)
            var favoriteOnly = 56;  // int? | Return only favorited lists. (optional)  (default to 0)
            var onlyMine = 56;  // int? | Return only current user lists. (optional)  (default to 0)

            try
            {
                // Get all lists
                GetListsPaginatedResponse result = apiInstance.GetLists(page, limit, orderBy, direction, favoriteOnly, onlyMine);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetLists: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int?**| The current fetched page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]
 **orderBy** | **string**| Order results by some field. Default is id. | [optional] [default to id]
 **direction** | **string**| Order direction. Default is desc. | [optional] [default to desc]
 **favoriteOnly** | **int?**| Return only favorited lists. | [optional] [default to 0]
 **onlyMine** | **int?**| Return only current user lists. | [optional] [default to 0]

### Return type

[**GetListsPaginatedResponse**](GetListsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getlistsofcontact"></a>
# **GetListsOfContact**
> GetListsOfContactPaginatedResponse GetListsOfContact (int? id, int? page = null, int? limit = null)

Get a contact's lists

Get all the lists in which a contact is included.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetListsOfContactExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)

            try
            {
                // Get a contact's lists
                GetListsOfContactPaginatedResponse result = apiInstance.GetListsOfContact(id, page, limit);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetListsOfContact: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetListsOfContactPaginatedResponse**](GetListsOfContactPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getmessagepreview"></a>
# **GetMessagePreview**
> GetMessagePreviewResponse GetMessagePreview (string text = null, int? templateId = null, int? sendingTime = null, string sendingDateTime = null, string sendingTimezone = null, string contacts = null, string lists = null, string phones = null, int? cutExtra = null, int? partsCount = null, int? referenceId = null, string from = null, string rule = null, int? createChat = null, int? tts = null, int? local = null, string localCountry = null)

Preview message

Get a messages preview (with tags merged) of up to 100 messages per session.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetMessagePreviewExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var text = "Test message test";  // string | Message text. Required if **template_id** is not set. (optional) 
            var templateId = 1;  // int? | Template used instead of message text. Required if **text** is not set. (optional) 
            var sendingTime = 1565606455;  // int? | DEPRECATED, consider using sendingDateTime and sendingTimezone parameters instead: Optional (required with rrule set). Message sending time is in unix timestamp format. Default is now. (optional) 
            var sendingDateTime = "2020-05-27 13:02:33";  // string | Sending time is in Y-m-d H:i:s format (e.g. 2016-05-27 13:02:33). This time is relative to the sendingTimezone. (optional) 
            var sendingTimezone = "America/Buenos_Aires";  // string | The ID or ISO-name of the timezone used for sending when the sendingDateTime parameter is set, e.g. if you specify sendingDateTime = \\\"2016-05-27 13:02:33\\\" and sendingTimezone = \\\"America/Buenos_Aires\\\", your message will be sent on May 27, 2016 13:02:33 Buenos Aires time, or 16:02:33 UTC. Default is the account timezone. (optional) 
            var contacts = "1,2,3,4";  // string | Comma-separated array of contact resources id message will be sent to. (optional) 
            var lists = "1,2,3,4";  // string | Comma-separated array of list resources id message will be sent to. (optional) 
            var phones = "447860021130,447860021131";  // string | Comma-separated array of E.164 phone numbers message will be sent to. (optional) 
            var cutExtra = 56;  // int? | Should sending method cut extra characters which not fit supplied partsCount or return 400 Bad request response instead. (optional)  (default to 0)
            var partsCount = 56;  // int? | Maximum message parts count (TextMagic allows sending of 1 to 6 message parts). (optional)  (default to 6)
            var referenceId = 1;  // int? | Custom message reference id which can be used in your application infrastructure. (optional) 
            var from = "Test Sender ID";  // string | One of the allowed Sender ID (phone number or alphanumeric sender ID). If the specified Sender ID is not allowed for some destinations, a fallback default Sender ID will be used to ensure delivery. See [Get timezones](https://docs.textmagic.com/#tag/Sender-IDs). (optional) 
            var rule = "FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1;COUNT=1";  // string | An iCal RRULE parameter to create recurrent scheduled messages. When used, sendingTime is mandatory as the start point of sending. See https://www.textmagic.com/free-tools/rrule-generator for format details. (optional) 
            var createChat = 56;  // int? | Should the sending method try to create new Chat(if not exist) with specified recipients? (optional)  (default to 0)
            var tts = 56;  // int? | Send Text-to-Speech message. (optional)  (default to 0)
            var local = 56;  // int? | Treat phone numbers passed in the \\'phones\\' field as local. (optional)  (default to 0)
            var localCountry = "US";  // string | The 2-letter ISO country code for local phone numbers, used when \\'local\\' is set to true. Default is the account country. (optional) 

            try
            {
                // Preview message
                GetMessagePreviewResponse result = apiInstance.GetMessagePreview(text, templateId, sendingTime, sendingDateTime, sendingTimezone, contacts, lists, phones, cutExtra, partsCount, referenceId, from, rule, createChat, tts, local, localCountry);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetMessagePreview: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **string**| Message text. Required if **template_id** is not set. | [optional] 
 **templateId** | **int?**| Template used instead of message text. Required if **text** is not set. | [optional] 
 **sendingTime** | **int?**| DEPRECATED, consider using sendingDateTime and sendingTimezone parameters instead: Optional (required with rrule set). Message sending time is in unix timestamp format. Default is now. | [optional] 
 **sendingDateTime** | **string**| Sending time is in Y-m-d H:i:s format (e.g. 2016-05-27 13:02:33). This time is relative to the sendingTimezone. | [optional] 
 **sendingTimezone** | **string**| The ID or ISO-name of the timezone used for sending when the sendingDateTime parameter is set, e.g. if you specify sendingDateTime &#x3D; \\\&quot;2016-05-27 13:02:33\\\&quot; and sendingTimezone &#x3D; \\\&quot;America/Buenos_Aires\\\&quot;, your message will be sent on May 27, 2016 13:02:33 Buenos Aires time, or 16:02:33 UTC. Default is the account timezone. | [optional] 
 **contacts** | **string**| Comma-separated array of contact resources id message will be sent to. | [optional] 
 **lists** | **string**| Comma-separated array of list resources id message will be sent to. | [optional] 
 **phones** | **string**| Comma-separated array of E.164 phone numbers message will be sent to. | [optional] 
 **cutExtra** | **int?**| Should sending method cut extra characters which not fit supplied partsCount or return 400 Bad request response instead. | [optional] [default to 0]
 **partsCount** | **int?**| Maximum message parts count (TextMagic allows sending of 1 to 6 message parts). | [optional] [default to 6]
 **referenceId** | **int?**| Custom message reference id which can be used in your application infrastructure. | [optional] 
 **from** | **string**| One of the allowed Sender ID (phone number or alphanumeric sender ID). If the specified Sender ID is not allowed for some destinations, a fallback default Sender ID will be used to ensure delivery. See [Get timezones](https://docs.textmagic.com/#tag/Sender-IDs). | [optional] 
 **rule** | **string**| An iCal RRULE parameter to create recurrent scheduled messages. When used, sendingTime is mandatory as the start point of sending. See https://www.textmagic.com/free-tools/rrule-generator for format details. | [optional] 
 **createChat** | **int?**| Should the sending method try to create new Chat(if not exist) with specified recipients? | [optional] [default to 0]
 **tts** | **int?**| Send Text-to-Speech message. | [optional] [default to 0]
 **local** | **int?**| Treat phone numbers passed in the \\&#39;phones\\&#39; field as local. | [optional] [default to 0]
 **localCountry** | **string**| The 2-letter ISO country code for local phone numbers, used when \\&#39;local\\&#39; is set to true. Default is the account country. | [optional] 

### Return type

[**GetMessagePreviewResponse**](GetMessagePreviewResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getmessageprice"></a>
# **GetMessagePrice**
> GetMessagePriceResponse GetMessagePrice (int? includeBlocked = null, string text = null, int? templateId = null, int? sendingTime = null, string sendingDateTime = null, string sendingTimezone = null, string contacts = null, string lists = null, string phones = null, int? cutExtra = null, int? partsCount = null, int? referenceId = null, string from = null, string rule = null, int? createChat = null, int? tts = null, int? local = null, string localCountry = null)

Check message price

Check pricing for a new outbound message.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetMessagePriceExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var includeBlocked = 56;  // int? | Should we show the pricing for blocked contacts? (optional)  (default to 0)
            var text = "Test message test";  // string | Message text. Required if the **template_id** is not set. (optional) 
            var templateId = 1;  // int? | Template used instead of message text. Required if the **text** is not set. (optional) 
            var sendingTime = 1565606455;  // int? | DEPRECATED, consider using the sendingDateTime and sendingTimezone parameters instead: optional (required with rrule set). Message sending time is in unix timestamp format. Default is now. (optional) 
            var sendingDateTime = "2020-05-27 13:02:33";  // string | Sending time is in Y-m-d H:i:s format (e.g. 2016-05-27 13:02:33). This time is relative to the sendingTimezone. (optional) 
            var sendingTimezone = "America/Buenos_Aires";  // string | The ID or ISO-name of the timezone used for sending when sendingDateTime parameter is set, e.g. if you specify sendingDateTime = \\\"2016-05-27 13:02:33\\\" and sendingTimezone = \\\"America/Buenos_Aires\\\", your message will be sent on May 27, 2016 13:02:33 Buenos Aires time, or 16:02:33 UTC. Default is the account timezone. (optional) 
            var contacts = "1,2,3,4";  // string | Comma-separated array of contact resources id message will be sent to. (optional) 
            var lists = "1,2,3,4";  // string | Comma-separated array of list resources id message will be sent to. (optional) 
            var phones = "447860021130,447860021131";  // string | Comma-separated array of E.164 phone numbers message will be sent to. (optional) 
            var cutExtra = 56;  // int? | Should sending method cut extra characters which not fit supplied partsCount or return 400 Bad request response instead. (optional)  (default to 0)
            var partsCount = 56;  // int? | Maximum message parts count (TextMagic allows sending 1 to 6 message parts). (optional)  (default to 6)
            var referenceId = 1;  // int? | Custom message reference id which can be used in your application infrastructure. (optional) 
            var from = "Test Sender ID";  // string | One of the allowed Sender ID (phone number or alphanumeric sender ID). If the specified Sender ID is not allowed for some destinations, a fallback default Sender ID will be used to ensure delivery. See [Get timezones](https://docs.textmagic.com/#tag/Sender-IDs). (optional) 
            var rule = "FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1;COUNT=1";  // string | An iCal RRULE parameter to create recurrent scheduled messages. When used, sendingTime is mandatory as the start point of sending. See https://www.textmagic.com/free-tools/rrule-generator for format details. (optional) 
            var createChat = 56;  // int? | Should the sending method try to create new Chat (if not exist) with specified recipients? (optional)  (default to 0)
            var tts = 56;  // int? | Send a Text-to-Speech message. (optional)  (default to 0)
            var local = 56;  // int? | Treat phone numbers passed in the \\'phones\\' field as local. (optional)  (default to 0)
            var localCountry = "US";  // string | The 2-letter ISO country code for local phone numbers, used when \\'local\\' is set to true. Default is the account country. (optional) 

            try
            {
                // Check message price
                GetMessagePriceResponse result = apiInstance.GetMessagePrice(includeBlocked, text, templateId, sendingTime, sendingDateTime, sendingTimezone, contacts, lists, phones, cutExtra, partsCount, referenceId, from, rule, createChat, tts, local, localCountry);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetMessagePrice: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeBlocked** | **int?**| Should we show the pricing for blocked contacts? | [optional] [default to 0]
 **text** | **string**| Message text. Required if the **template_id** is not set. | [optional] 
 **templateId** | **int?**| Template used instead of message text. Required if the **text** is not set. | [optional] 
 **sendingTime** | **int?**| DEPRECATED, consider using the sendingDateTime and sendingTimezone parameters instead: optional (required with rrule set). Message sending time is in unix timestamp format. Default is now. | [optional] 
 **sendingDateTime** | **string**| Sending time is in Y-m-d H:i:s format (e.g. 2016-05-27 13:02:33). This time is relative to the sendingTimezone. | [optional] 
 **sendingTimezone** | **string**| The ID or ISO-name of the timezone used for sending when sendingDateTime parameter is set, e.g. if you specify sendingDateTime &#x3D; \\\&quot;2016-05-27 13:02:33\\\&quot; and sendingTimezone &#x3D; \\\&quot;America/Buenos_Aires\\\&quot;, your message will be sent on May 27, 2016 13:02:33 Buenos Aires time, or 16:02:33 UTC. Default is the account timezone. | [optional] 
 **contacts** | **string**| Comma-separated array of contact resources id message will be sent to. | [optional] 
 **lists** | **string**| Comma-separated array of list resources id message will be sent to. | [optional] 
 **phones** | **string**| Comma-separated array of E.164 phone numbers message will be sent to. | [optional] 
 **cutExtra** | **int?**| Should sending method cut extra characters which not fit supplied partsCount or return 400 Bad request response instead. | [optional] [default to 0]
 **partsCount** | **int?**| Maximum message parts count (TextMagic allows sending 1 to 6 message parts). | [optional] [default to 6]
 **referenceId** | **int?**| Custom message reference id which can be used in your application infrastructure. | [optional] 
 **from** | **string**| One of the allowed Sender ID (phone number or alphanumeric sender ID). If the specified Sender ID is not allowed for some destinations, a fallback default Sender ID will be used to ensure delivery. See [Get timezones](https://docs.textmagic.com/#tag/Sender-IDs). | [optional] 
 **rule** | **string**| An iCal RRULE parameter to create recurrent scheduled messages. When used, sendingTime is mandatory as the start point of sending. See https://www.textmagic.com/free-tools/rrule-generator for format details. | [optional] 
 **createChat** | **int?**| Should the sending method try to create new Chat (if not exist) with specified recipients? | [optional] [default to 0]
 **tts** | **int?**| Send a Text-to-Speech message. | [optional] [default to 0]
 **local** | **int?**| Treat phone numbers passed in the \\&#39;phones\\&#39; field as local. | [optional] [default to 0]
 **localCountry** | **string**| The 2-letter ISO country code for local phone numbers, used when \\&#39;local\\&#39; is set to true. Default is the account country. | [optional] 

### Return type

[**GetMessagePriceResponse**](GetMessagePriceResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getmessagesession"></a>
# **GetMessageSession**
> MessageSession GetMessageSession (int? id)

Get a session`s details

Get a specific session’s details.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetMessageSessionExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | Session ID.

            try
            {
                // Get a session`s details
                MessageSession result = apiInstance.GetMessageSession(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetMessageSession: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**| Session ID. | 

### Return type

[**MessageSession**](MessageSession.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getmessagesessionstat"></a>
# **GetMessageSessionStat**
> GetMessageSessionStatResponse GetMessageSessionStat (int? id, int? includeDeleted = null)

Get a session`s statistics

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetMessageSessionStatExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 
            var includeDeleted = 56;  // int? | Search also in deleted messages. (optional)  (default to 0)

            try
            {
                // Get a session`s statistics
                GetMessageSessionStatResponse result = apiInstance.GetMessageSessionStat(id, includeDeleted);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetMessageSessionStat: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 
 **includeDeleted** | **int?**| Search also in deleted messages. | [optional] [default to 0]

### Return type

[**GetMessageSessionStatResponse**](GetMessageSessionStatResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getmessagesbysessionid"></a>
# **GetMessagesBySessionId**
> GetMessagesBySessionIdPaginatedResponse GetMessagesBySessionId (int? id, int? page = null, int? limit = null, string statuses = null, int? includeDeleted = null)

Get a session`s messages

A useful synonym for the \"messages/search\" command with the provided \"sessionId\" parameter.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetMessagesBySessionIdExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)
            var statuses = statuses_example;  // string | Find messages by status. (optional) 
            var includeDeleted = 56;  // int? | Search also in deleted messages. (optional)  (default to 0)

            try
            {
                // Get a session`s messages
                GetMessagesBySessionIdPaginatedResponse result = apiInstance.GetMessagesBySessionId(id, page, limit, statuses, includeDeleted);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetMessagesBySessionId: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]
 **statuses** | **string**| Find messages by status. | [optional] 
 **includeDeleted** | **int?**| Search also in deleted messages. | [optional] [default to 0]

### Return type

[**GetMessagesBySessionIdPaginatedResponse**](GetMessagesBySessionIdPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getmessagingcounters"></a>
# **GetMessagingCounters**
> GetMessagingCountersResponse GetMessagingCounters ()

Get sent/received messages counters values

Get total contacts, sent messages and received messages counters values.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetMessagingCountersExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();

            try
            {
                // Get sent/received messages counters values
                GetMessagingCountersResponse result = apiInstance.GetMessagingCounters();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetMessagingCounters: " + e.Message );
            }
        }
    }
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getmessagingstat"></a>
# **GetMessagingStat**
> GetMessagingStatResponse GetMessagingStat (string by = null, int? start = null, int? end = null)

Get messaging statistics

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetMessagingStatExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var by = "off";  // string | *   **off** - to get total values per specified time interval; *   **day** - to show values grouped by day; *   **month** - to show values grouped by month; *   **year** - to show values grouped by year.  (optional)  (default to off)
            var start = 1430438400;  // int? | Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is 7 days prior.  (optional) 
            var end = 1431648000;  // int? | Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is today.  (optional) 

            try
            {
                // Get messaging statistics
                GetMessagingStatResponse result = apiInstance.GetMessagingStat(by, start, end);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetMessagingStat: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **by** | **string**| *   **off** - to get total values per specified time interval; *   **day** - to show values grouped by day; *   **month** - to show values grouped by month; *   **year** - to show values grouped by year.  | [optional] [default to off]
 **start** | **int?**| Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is 7 days prior.  | [optional] 
 **end** | **int?**| Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is today.  | [optional] 

### Return type

[**GetMessagingStatResponse**](GetMessagingStatResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getoutboundmessage"></a>
# **GetOutboundMessage**
> MessageOut GetOutboundMessage (int? id)

Get a single message

Get a single outgoing message.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetOutboundMessageExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 

            try
            {
                // Get a single message
                MessageOut result = apiInstance.GetOutboundMessage(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetOutboundMessage: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

[**MessageOut**](MessageOut.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getoutboundmessageshistory"></a>
# **GetOutboundMessagesHistory**
> GetOutboundMessagesHistoryPaginatedResponse GetOutboundMessagesHistory (int? limit = null, int? lastId = null, string query = null, string orderBy = null, string direction = null)

Get history

Get the outbound messages history.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetOutboundMessagesHistoryExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)
            var lastId = 56;  // int? | Filter results by ID, selecting all values lesser than the specified ID. (optional) 
            var query = query_example;  // string | Find message by specified search query. (optional) 
            var orderBy = orderBy_example;  // string | Order results by some field. Default is id. (optional)  (default to id)
            var direction = direction_example;  // string | Order direction. Default is desc. (optional)  (default to desc)

            try
            {
                // Get history
                GetOutboundMessagesHistoryPaginatedResponse result = apiInstance.GetOutboundMessagesHistory(limit, lastId, query, orderBy, direction);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetOutboundMessagesHistory: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]
 **lastId** | **int?**| Filter results by ID, selecting all values lesser than the specified ID. | [optional] 
 **query** | **string**| Find message by specified search query. | [optional] 
 **orderBy** | **string**| Order results by some field. Default is id. | [optional] [default to id]
 **direction** | **string**| Order direction. Default is desc. | [optional] [default to desc]

### Return type

[**GetOutboundMessagesHistoryPaginatedResponse**](GetOutboundMessagesHistoryPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getscheduledmessage"></a>
# **GetScheduledMessage**
> MessagesIcs GetScheduledMessage (int? id)

Get a single scheduled message

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetScheduledMessageExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 

            try
            {
                // Get a single scheduled message
                MessagesIcs result = apiInstance.GetScheduledMessage(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetScheduledMessage: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

[**MessagesIcs**](MessagesIcs.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getsenderid"></a>
# **GetSenderId**
> SenderId GetSenderId (int? id)

Get the details of a specific Sender ID

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetSenderIdExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 

            try
            {
                // Get the details of a specific Sender ID
                SenderId result = apiInstance.GetSenderId(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetSenderId: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

[**SenderId**](SenderId.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getsenderids"></a>
# **GetSenderIds**
> GetSenderIdsPaginatedResponse GetSenderIds (int? page = null, int? limit = null)

Get all your approved Sender IDs

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetSenderIdsExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)

            try
            {
                // Get all your approved Sender IDs
                GetSenderIdsPaginatedResponse result = apiInstance.GetSenderIds(page, limit);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetSenderIds: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetSenderIdsPaginatedResponse**](GetSenderIdsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getsendersettings"></a>
# **GetSenderSettings**
> GetSenderSettingsResponse GetSenderSettings (string country = null)

Get current sender settings

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetSenderSettingsExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var country = "US";  // string | Return sender settings enabled for sending to a specified country. Should be 2 upper-case characters. (optional) 

            try
            {
                // Get current sender settings
                GetSenderSettingsResponse result = apiInstance.GetSenderSettings(country);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetSenderSettings: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **string**| Return sender settings enabled for sending to a specified country. Should be 2 upper-case characters. | [optional] 

### Return type

[**GetSenderSettingsResponse**](GetSenderSettingsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getspendingstat"></a>
# **GetSpendingStat**
> GetSpendingStatPaginatedResponse GetSpendingStat (int? page = null, int? limit = null, string start = null, string end = null)

Get spending statistics

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetSpendingStatExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)
            var start = "2018-11-11 11:11";  // string | Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is 7 days prior.  (optional) 
            var end = "2019-11-11 11:11";  // string | Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is today.  (optional) 

            try
            {
                // Get spending statistics
                GetSpendingStatPaginatedResponse result = apiInstance.GetSpendingStat(page, limit, start, end);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetSpendingStat: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]
 **start** | **string**| Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is 7 days prior.  | [optional] 
 **end** | **string**| Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is today.  | [optional] 

### Return type

[**GetSpendingStatPaginatedResponse**](GetSpendingStatPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getsubaccount"></a>
# **GetSubaccount**
> User GetSubaccount (int? id)

Get sub-account information

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetSubaccountExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 

            try
            {
                // Get sub-account information
                User result = apiInstance.GetSubaccount(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetSubaccount: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

[**User**](User.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getsubaccounts"></a>
# **GetSubaccounts**
> User GetSubaccounts (int? page = null, int? limit = null)

Get a sub-accounts list

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetSubaccountsExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)

            try
            {
                // Get a sub-accounts list
                User result = apiInstance.GetSubaccounts(page, limit);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetSubaccounts: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]

### Return type

[**User**](User.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getsubaccountswithtokens"></a>
# **GetSubaccountsWithTokens**
> GetSubaccountsWithTokensResponse GetSubaccountsWithTokens (GetSubaccountsWithTokensInputObject getSubaccountsWithTokensInputObject, decimal? page = null, int? limit = null)

Get all sub-accounts with their REST API tokens associated with a specified app name

Get all sub-accounts with their REST API tokens associated with specified app name. When more than one token related to app name, last key will be returned.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetSubaccountsWithTokensExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var getSubaccountsWithTokensInputObject = new GetSubaccountsWithTokensInputObject(); // GetSubaccountsWithTokensInputObject | 
            var page = 8.14;  // decimal? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)

            try
            {
                // Get all sub-accounts with their REST API tokens associated with a specified app name
                GetSubaccountsWithTokensResponse result = apiInstance.GetSubaccountsWithTokens(getSubaccountsWithTokensInputObject, page, limit);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetSubaccountsWithTokens: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getSubaccountsWithTokensInputObject** | [**GetSubaccountsWithTokensInputObject**](GetSubaccountsWithTokensInputObject.md)|  | 
 **page** | **decimal?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetSubaccountsWithTokensResponse**](GetSubaccountsWithTokensResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="gettemplate"></a>
# **GetTemplate**
> MessageTemplate GetTemplate (int? id)

Get a template`s details

Get a single template.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetTemplateExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 

            try
            {
                // Get a template`s details
                MessageTemplate result = apiInstance.GetTemplate(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetTemplate: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

[**MessageTemplate**](MessageTemplate.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="gettimezones"></a>
# **GetTimezones**
> GetTimezonesResponse GetTimezones (int? full = null)

Get timezones

Return all available timezone IDs

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetTimezonesExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var full = 56;  // int? | Return full info about timezones in array (0 or 1). Default is 0. (optional)  (default to 0)

            try
            {
                // Get timezones
                GetTimezonesResponse result = apiInstance.GetTimezones(full);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetTimezones: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **full** | **int?**| Return full info about timezones in array (0 or 1). Default is 0. | [optional] [default to 0]

### Return type

[**GetTimezonesResponse**](GetTimezonesResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getunreadmessagestotal"></a>
# **GetUnreadMessagesTotal**
> GetUnreadMessagesTotalResponse GetUnreadMessagesTotal ()

Get unread messages number

Get the total amount of unread messages in the current user chats.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetUnreadMessagesTotalExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();

            try
            {
                // Get unread messages number
                GetUnreadMessagesTotalResponse result = apiInstance.GetUnreadMessagesTotal();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetUnreadMessagesTotal: " + e.Message );
            }
        }
    }
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getunsubscribedcontact"></a>
# **GetUnsubscribedContact**
> UnsubscribedContact GetUnsubscribedContact (int? id)

Get the details of a specific unsubscribed contact

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetUnsubscribedContactExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 

            try
            {
                // Get the details of a specific unsubscribed contact
                UnsubscribedContact result = apiInstance.GetUnsubscribedContact(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetUnsubscribedContact: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

[**UnsubscribedContact**](UnsubscribedContact.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getunsubscribers"></a>
# **GetUnsubscribers**
> GetUnsubscribersPaginatedResponse GetUnsubscribers (int? page = null, int? limit = null)

Get all unsubscribed contacts

When one of your message recipients sends a request with one of the [STOP-words](https://www.textmagic.com/sms-stop-command/), they will be immediately opted-out of your send lists and their contact status will change to an unsubscribed contact. To retrieve information on all contacts who have unsubscribed status, use: 

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetUnsubscribersExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)

            try
            {
                // Get all unsubscribed contacts
                GetUnsubscribersPaginatedResponse result = apiInstance.GetUnsubscribers(page, limit);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetUnsubscribers: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetUnsubscribersPaginatedResponse**](GetUnsubscribersPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getuserdedicatednumbers"></a>
# **GetUserDedicatedNumbers**
> GetUserDedicatedNumbersPaginatedResponse GetUserDedicatedNumbers (int? page = null, int? limit = null, int? surveyId = null)

Get all your dedicated numbers

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class GetUserDedicatedNumbersExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)
            var surveyId = 56;  // int? | Fetch only those numbers that are ready for the survey. (optional) 

            try
            {
                // Get all your dedicated numbers
                GetUserDedicatedNumbersPaginatedResponse result = apiInstance.GetUserDedicatedNumbers(page, limit, surveyId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.GetUserDedicatedNumbers: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]
 **surveyId** | **int?**| Fetch only those numbers that are ready for the survey. | [optional] 

### Return type

[**GetUserDedicatedNumbersPaginatedResponse**](GetUserDedicatedNumbersPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="importcontacts"></a>
# **ImportContacts**
> ResourceLinkResponse ImportContacts (System.IO.Stream file, string column, int? listId = null, string listName = null)

Import contacts

Import contacts from the CSV, XLS or XLSX file.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class ImportContactsExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var file = new System.IO.Stream(); // System.IO.Stream | File containing contacts in csv or xls(x) formats.
            var column = "0:firstName;1:lastName;3:phone;4:email";  // string | Import file column mapping. The string must contain sub-strings of mapping in format `columnNumber:field` glued by `;`. For example: `0:firstName;1:lastName;3:phone;4:email` where the value before `:` is a number of the column in the file, and the value after `:` is a field of the newly created contact or the ID of a custom field. Numbers of columns begin from zero. Allowed built-in contact fields are: `firstName`, `lastName`, `phone`, `email`. Existing of `phone` mapping is required. 
            var listId = 443;  // int? | List that ID contacts will be imported to. Ignored if `listName` is specified.  (optional) 
            var listName = "A new list";  // string | List name. This list will be created during import. If such name is already taken, an ordinal (1, 2, ...) will be added to the end. Ignored if `listId` is specified.  (optional) 

            try
            {
                // Import contacts
                ResourceLinkResponse result = apiInstance.ImportContacts(file, column, listId, listName);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.ImportContacts: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **System.IO.Stream**| File containing contacts in csv or xls(x) formats. | 
 **column** | **string**| Import file column mapping. The string must contain sub-strings of mapping in format &#x60;columnNumber:field&#x60; glued by &#x60;;&#x60;. For example: &#x60;0:firstName;1:lastName;3:phone;4:email&#x60; where the value before &#x60;:&#x60; is a number of the column in the file, and the value after &#x60;:&#x60; is a field of the newly created contact or the ID of a custom field. Numbers of columns begin from zero. Allowed built-in contact fields are: &#x60;firstName&#x60;, &#x60;lastName&#x60;, &#x60;phone&#x60;, &#x60;email&#x60;. Existing of &#x60;phone&#x60; mapping is required.  | 
 **listId** | **int?**| List that ID contacts will be imported to. Ignored if &#x60;listName&#x60; is specified.  | [optional] 
 **listName** | **string**| List name. This list will be created during import. If such name is already taken, an ordinal (1, 2, ...) will be added to the end. Ignored if &#x60;listId&#x60; is specified.  | [optional] 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="invitesubaccount"></a>
# **InviteSubaccount**
> void InviteSubaccount (InviteSubaccountInputObject inviteSubaccountInputObject)

Invite a new sub-account

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class InviteSubaccountExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var inviteSubaccountInputObject = new InviteSubaccountInputObject(); // InviteSubaccountInputObject | 

            try
            {
                // Invite a new sub-account
                apiInstance.InviteSubaccount(inviteSubaccountInputObject);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.InviteSubaccount: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inviteSubaccountInputObject** | [**InviteSubaccountInputObject**](InviteSubaccountInputObject.md)|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="markchatsreadbulk"></a>
# **MarkChatsReadBulk**
> void MarkChatsReadBulk (MarkChatsReadBulkInputObject markChatsReadBulkInputObject)

Mark chats as read (bulk)

Mark several chats as read by chat IDs or mark all chats as read

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class MarkChatsReadBulkExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var markChatsReadBulkInputObject = new MarkChatsReadBulkInputObject(); // MarkChatsReadBulkInputObject | 

            try
            {
                // Mark chats as read (bulk)
                apiInstance.MarkChatsReadBulk(markChatsReadBulkInputObject);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.MarkChatsReadBulk: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **markChatsReadBulkInputObject** | [**MarkChatsReadBulkInputObject**](MarkChatsReadBulkInputObject.md)|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="markchatsunreadbulk"></a>
# **MarkChatsUnreadBulk**
> void MarkChatsUnreadBulk (MarkChatsUnreadBulkInputObject markChatsUnreadBulkInputObject)

Mark chats as unread (bulk)

Mark several chats as UNread by chat IDs or mark all chats as UNread

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class MarkChatsUnreadBulkExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var markChatsUnreadBulkInputObject = new MarkChatsUnreadBulkInputObject(); // MarkChatsUnreadBulkInputObject | 

            try
            {
                // Mark chats as unread (bulk)
                apiInstance.MarkChatsUnreadBulk(markChatsUnreadBulkInputObject);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.MarkChatsUnreadBulk: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **markChatsUnreadBulkInputObject** | [**MarkChatsUnreadBulkInputObject**](MarkChatsUnreadBulkInputObject.md)|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="mutechat"></a>
# **MuteChat**
> ResourceLinkResponse MuteChat (MuteChatInputObject muteChatInputObject)

Mute chat sounds

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class MuteChatExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var muteChatInputObject = new MuteChatInputObject(); // MuteChatInputObject | 

            try
            {
                // Mute chat sounds
                ResourceLinkResponse result = apiInstance.MuteChat(muteChatInputObject);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.MuteChat: " + e.Message );
            }
        }
    }
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="mutechatsbulk"></a>
# **MuteChatsBulk**
> void MuteChatsBulk (MuteChatsBulkInputObject muteChatsBulkInputObject)

Mute chats (bulk)

Mute several chats by chat ids or mute all chats.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class MuteChatsBulkExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var muteChatsBulkInputObject = new MuteChatsBulkInputObject(); // MuteChatsBulkInputObject | 

            try
            {
                // Mute chats (bulk)
                apiInstance.MuteChatsBulk(muteChatsBulkInputObject);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.MuteChatsBulk: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **muteChatsBulkInputObject** | [**MuteChatsBulkInputObject**](MuteChatsBulkInputObject.md)|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="ping"></a>
# **Ping**
> PingResponse Ping ()

Ping

Make a simple ping request.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class PingExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();

            try
            {
                // Ping
                PingResponse result = apiInstance.Ping();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.Ping: " + e.Message );
            }
        }
    }
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="reopenchatsbulk"></a>
# **ReopenChatsBulk**
> void ReopenChatsBulk (ReopenChatsBulkInputObject reopenChatsBulkInputObject)

Reopen chats (bulk)

Reopen chats by chat IDs or reopen all chats

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class ReopenChatsBulkExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var reopenChatsBulkInputObject = new ReopenChatsBulkInputObject(); // ReopenChatsBulkInputObject | 

            try
            {
                // Reopen chats (bulk)
                apiInstance.ReopenChatsBulk(reopenChatsBulkInputObject);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.ReopenChatsBulk: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reopenChatsBulkInputObject** | [**ReopenChatsBulkInputObject**](ReopenChatsBulkInputObject.md)|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="requestnewsubaccounttoken"></a>
# **RequestNewSubaccountToken**
> User RequestNewSubaccountToken (RequestNewSubaccountTokenInputObject requestNewSubaccountTokenInputObject)

Request a new REST API token for sub-account

Returning user object, key and app name.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class RequestNewSubaccountTokenExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var requestNewSubaccountTokenInputObject = new RequestNewSubaccountTokenInputObject(); // RequestNewSubaccountTokenInputObject | 

            try
            {
                // Request a new REST API token for sub-account
                User result = apiInstance.RequestNewSubaccountToken(requestNewSubaccountTokenInputObject);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.RequestNewSubaccountToken: " + e.Message );
            }
        }
    }
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="requestsenderid"></a>
# **RequestSenderId**
> ResourceLinkResponse RequestSenderId (RequestSenderIdInputObject requestSenderIdInputObject)

Apply for a new Sender ID

> Sender IDs are shared among all of your sub-accounts.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class RequestSenderIdExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var requestSenderIdInputObject = new RequestSenderIdInputObject(); // RequestSenderIdInputObject | 

            try
            {
                // Apply for a new Sender ID
                ResourceLinkResponse result = apiInstance.RequestSenderId(requestSenderIdInputObject);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.RequestSenderId: " + e.Message );
            }
        }
    }
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="searchchats"></a>
# **SearchChats**
> SearchChatsPaginatedResponse SearchChats (int? page = null, int? limit = null, string query = null)

Find chats by message text

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class SearchChatsExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)
            var query = query_example;  // string | Find chats by specified search query. (optional) 

            try
            {
                // Find chats by message text
                SearchChatsPaginatedResponse result = apiInstance.SearchChats(page, limit, query);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.SearchChats: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]
 **query** | **string**| Find chats by specified search query. | [optional] 

### Return type

[**SearchChatsPaginatedResponse**](SearchChatsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="searchchatsbyids"></a>
# **SearchChatsByIds**
> SearchChatsByIdsPaginatedResponse SearchChatsByIds (int? page = null, int? limit = null, string ids = null)

Find chats (bulk)

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class SearchChatsByIdsExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)
            var ids = ids_example;  // string | Find chats by ID(s). (optional) 

            try
            {
                // Find chats (bulk)
                SearchChatsByIdsPaginatedResponse result = apiInstance.SearchChatsByIds(page, limit, ids);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.SearchChatsByIds: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]
 **ids** | **string**| Find chats by ID(s). | [optional] 

### Return type

[**SearchChatsByIdsPaginatedResponse**](SearchChatsByIdsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="searchchatsbyreceipent"></a>
# **SearchChatsByReceipent**
> SearchChatsByReceipentPaginatedResponse SearchChatsByReceipent (int? page = null, int? limit = null, string query = null, string orderBy = null)

Find chats by recipient

Find chats by recipient (contact, list name or phone number).

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class SearchChatsByReceipentExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)
            var query = query_example;  // string | Find chats by specified search query. (optional) 
            var orderBy = orderBy_example;  // string | Order results by some field. Default is id. (optional)  (default to id)

            try
            {
                // Find chats by recipient
                SearchChatsByReceipentPaginatedResponse result = apiInstance.SearchChatsByReceipent(page, limit, query, orderBy);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.SearchChatsByReceipent: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]
 **query** | **string**| Find chats by specified search query. | [optional] 
 **orderBy** | **string**| Order results by some field. Default is id. | [optional] [default to id]

### Return type

[**SearchChatsByReceipentPaginatedResponse**](SearchChatsByReceipentPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="searchcontacts"></a>
# **SearchContacts**
> SearchContactsPaginatedResponse SearchContacts (int? page = null, int? limit = null, int? shared = null, string ids = null, int? listId = null, int? includeBlocked = null, string query = null, int? local = null, int? exactMatch = null, string country = null, string orderBy = null, string direction = null)

Find contacts by given criteria

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class SearchContactsExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)
            var shared = 56;  // int? | Should shared contacts be included? (optional)  (default to 0)
            var ids = ids_example;  // string | Find contacts by IDs. (optional) 
            var listId = 56;  // int? | Find contacts by List ID. (optional) 
            var includeBlocked = 56;  // int? | Should blocked contacts be included? (optional) 
            var query = query_example;  // string | Find contacts by specified search query. (optional) 
            var local = 56;  // int? | Treat phone number passed in the \"query\" field as local. Default is 0. (optional)  (default to 0)
            var exactMatch = 56;  // int? | Return only exactly matching contacts. Default is 0. (optional)  (default to 0)
            var country = country_example;  // string | The 2-letter ISO country code for local phone numbers, used when \"local\" is set to true. Default is the account country. (optional) 
            var orderBy = orderBy_example;  // string | Order results by some field. Default is id. (optional)  (default to id)
            var direction = direction_example;  // string | Order direction. Default is desc. (optional)  (default to desc)

            try
            {
                // Find contacts by given criteria
                SearchContactsPaginatedResponse result = apiInstance.SearchContacts(page, limit, shared, ids, listId, includeBlocked, query, local, exactMatch, country, orderBy, direction);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.SearchContacts: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]
 **shared** | **int?**| Should shared contacts be included? | [optional] [default to 0]
 **ids** | **string**| Find contacts by IDs. | [optional] 
 **listId** | **int?**| Find contacts by List ID. | [optional] 
 **includeBlocked** | **int?**| Should blocked contacts be included? | [optional] 
 **query** | **string**| Find contacts by specified search query. | [optional] 
 **local** | **int?**| Treat phone number passed in the \&quot;query\&quot; field as local. Default is 0. | [optional] [default to 0]
 **exactMatch** | **int?**| Return only exactly matching contacts. Default is 0. | [optional] [default to 0]
 **country** | **string**| The 2-letter ISO country code for local phone numbers, used when \&quot;local\&quot; is set to true. Default is the account country. | [optional] 
 **orderBy** | **string**| Order results by some field. Default is id. | [optional] [default to id]
 **direction** | **string**| Order direction. Default is desc. | [optional] [default to desc]

### Return type

[**SearchContactsPaginatedResponse**](SearchContactsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="searchinboundmessages"></a>
# **SearchInboundMessages**
> SearchInboundMessagesPaginatedResponse SearchInboundMessages (int? page = null, int? limit = null, string ids = null, string query = null, string orderBy = null, string direction = null, int? expand = null)

Find inbound messages

Find inbound messages by given parameters.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class SearchInboundMessagesExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)
            var ids = ids_example;  // string | Find message by ID(s). (optional) 
            var query = query_example;  // string | Find recipients by specified search query. (optional) 
            var orderBy = orderBy_example;  // string | Order results by some field. Default is id. (optional)  (default to id)
            var direction = direction_example;  // string | Order direction. Default is desc. (optional)  (default to desc)
            var expand = 56;  // int? | Expand by adding firstName, lastName and contactId. (optional)  (default to 0)

            try
            {
                // Find inbound messages
                SearchInboundMessagesPaginatedResponse result = apiInstance.SearchInboundMessages(page, limit, ids, query, orderBy, direction, expand);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.SearchInboundMessages: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]
 **ids** | **string**| Find message by ID(s). | [optional] 
 **query** | **string**| Find recipients by specified search query. | [optional] 
 **orderBy** | **string**| Order results by some field. Default is id. | [optional] [default to id]
 **direction** | **string**| Order direction. Default is desc. | [optional] [default to desc]
 **expand** | **int?**| Expand by adding firstName, lastName and contactId. | [optional] [default to 0]

### Return type

[**SearchInboundMessagesPaginatedResponse**](SearchInboundMessagesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="searchlists"></a>
# **SearchLists**
> SearchListsPaginatedResponse SearchLists (int? page = null, int? limit = null, string ids = null, string query = null, int? onlyMine = null, int? onlyDefault = null, string orderBy = null, string direction = null)

Find lists by given criteria

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class SearchListsExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)
            var ids = "1,2,3,4";  // string | Find lists by IDs. (optional) 
            var query = "A";  // string | Find lists by specified search query. (optional) 
            var onlyMine = 56;  // int? | Return only current user lists. (optional)  (default to 0)
            var onlyDefault = 56;  // int? | Return only default lists. (optional)  (default to 0)
            var orderBy = orderBy_example;  // string | Order results by some field. Default is id. (optional)  (default to id)
            var direction = direction_example;  // string | Order direction. Default is desc. (optional)  (default to desc)

            try
            {
                // Find lists by given criteria
                SearchListsPaginatedResponse result = apiInstance.SearchLists(page, limit, ids, query, onlyMine, onlyDefault, orderBy, direction);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.SearchLists: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]
 **ids** | **string**| Find lists by IDs. | [optional] 
 **query** | **string**| Find lists by specified search query. | [optional] 
 **onlyMine** | **int?**| Return only current user lists. | [optional] [default to 0]
 **onlyDefault** | **int?**| Return only default lists. | [optional] [default to 0]
 **orderBy** | **string**| Order results by some field. Default is id. | [optional] [default to id]
 **direction** | **string**| Order direction. Default is desc. | [optional] [default to desc]

### Return type

[**SearchListsPaginatedResponse**](SearchListsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="searchoutboundmessages"></a>
# **SearchOutboundMessages**
> SearchOutboundMessagesPaginatedResponse SearchOutboundMessages (int? page = null, int? limit = null, int? lastId = null, string ids = null, int? sessionId = null, string statuses = null, int? includeDeleted = null, string query = null)

Find messages

Find outbound messages by given parameters.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class SearchOutboundMessagesExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)
            var lastId = 56;  // int? | Filter results by ID, selecting all values lesser than the specified ID. Note that the \\'page\\' parameter is ignored when \\'lastId\\' is specified. (optional) 
            var ids = ids_example;  // string | Find message by ID(s). (optional) 
            var sessionId = 56;  // int? | Find messages by session ID. (optional) 
            var statuses = "q";  // string | Find messages by status. (optional) 
            var includeDeleted = 56;  // int? | Search also in deleted messages. (optional)  (default to 0)
            var query = query_example;  // string | Find messages by specified search query. (optional) 

            try
            {
                // Find messages
                SearchOutboundMessagesPaginatedResponse result = apiInstance.SearchOutboundMessages(page, limit, lastId, ids, sessionId, statuses, includeDeleted, query);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.SearchOutboundMessages: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]
 **lastId** | **int?**| Filter results by ID, selecting all values lesser than the specified ID. Note that the \\&#39;page\\&#39; parameter is ignored when \\&#39;lastId\\&#39; is specified. | [optional] 
 **ids** | **string**| Find message by ID(s). | [optional] 
 **sessionId** | **int?**| Find messages by session ID. | [optional] 
 **statuses** | **string**| Find messages by status. | [optional] 
 **includeDeleted** | **int?**| Search also in deleted messages. | [optional] [default to 0]
 **query** | **string**| Find messages by specified search query. | [optional] 

### Return type

[**SearchOutboundMessagesPaginatedResponse**](SearchOutboundMessagesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="searchscheduledmessages"></a>
# **SearchScheduledMessages**
> SearchScheduledMessagesPaginatedResponse SearchScheduledMessages (int? page = null, int? limit = null, string query = null, string ids = null, string status = null, string orderBy = null, string direction = null)

Find scheduled messages

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class SearchScheduledMessagesExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)
            var query = query_example;  // string | Find messages by specified search query. (optional) 
            var ids = ids_example;  // string | Find schedules by ID(s). (optional) 
            var status = status_example;  // string | Fetch schedules with a specific status: a - actual, c - completed, x - all. (optional)  (default to x)
            var orderBy = orderBy_example;  // string | Order results by some field. Default is id. (optional)  (default to id)
            var direction = direction_example;  // string | Order direction. Default is desc. (optional)  (default to desc)

            try
            {
                // Find scheduled messages
                SearchScheduledMessagesPaginatedResponse result = apiInstance.SearchScheduledMessages(page, limit, query, ids, status, orderBy, direction);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.SearchScheduledMessages: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]
 **query** | **string**| Find messages by specified search query. | [optional] 
 **ids** | **string**| Find schedules by ID(s). | [optional] 
 **status** | **string**| Fetch schedules with a specific status: a - actual, c - completed, x - all. | [optional] [default to x]
 **orderBy** | **string**| Order results by some field. Default is id. | [optional] [default to id]
 **direction** | **string**| Order direction. Default is desc. | [optional] [default to desc]

### Return type

[**SearchScheduledMessagesPaginatedResponse**](SearchScheduledMessagesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="searchtemplates"></a>
# **SearchTemplates**
> SearchTemplatesPaginatedResponse SearchTemplates (int? page = null, int? limit = null, string ids = null, string name = null, string content = null)

Find templates by criteria

Find user templates by given parameters.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class SearchTemplatesExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var page = 56;  // int? | Fetch specified results page. (optional)  (default to 1)
            var limit = 56;  // int? | The number of results per page. (optional)  (default to 10)
            var ids = ids_example;  // string | Find template by ID(s). (optional) 
            var name = name_example;  // string | Find template by name. (optional) 
            var content = content_example;  // string | Find template by content. (optional) 

            try
            {
                // Find templates by criteria
                SearchTemplatesPaginatedResponse result = apiInstance.SearchTemplates(page, limit, ids, name, content);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.SearchTemplates: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int?**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **int?**| The number of results per page. | [optional] [default to 10]
 **ids** | **string**| Find template by ID(s). | [optional] 
 **name** | **string**| Find template by name. | [optional] 
 **content** | **string**| Find template by content. | [optional] 

### Return type

[**SearchTemplatesPaginatedResponse**](SearchTemplatesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="sendmessage"></a>
# **SendMessage**
> SendMessageResponse SendMessage (SendMessageInputObject sendMessageInputObject)

Send message

This is the main entrypoint to send messages. See the examples above for the reference.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class SendMessageExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var sendMessageInputObject = new SendMessageInputObject(); // SendMessageInputObject | 

            try
            {
                // Send message
                SendMessageResponse result = apiInstance.SendMessage(sendMessageInputObject);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.SendMessage: " + e.Message );
            }
        }
    }
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="sendphoneverificationcodetfa"></a>
# **SendPhoneVerificationCodeTFA**
> SendPhoneVerificationCodeResponse SendPhoneVerificationCodeTFA (SendPhoneVerificationCodeTFAInputObject sendPhoneVerificationCodeTFAInputObject)

Step 1: Send a verification code 

Sends a verification code to a specified phone number.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class SendPhoneVerificationCodeTFAExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var sendPhoneVerificationCodeTFAInputObject = new SendPhoneVerificationCodeTFAInputObject(); // SendPhoneVerificationCodeTFAInputObject | 

            try
            {
                // Step 1: Send a verification code 
                SendPhoneVerificationCodeResponse result = apiInstance.SendPhoneVerificationCodeTFA(sendPhoneVerificationCodeTFAInputObject);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.SendPhoneVerificationCodeTFA: " + e.Message );
            }
        }
    }
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="setchatstatus"></a>
# **SetChatStatus**
> ResourceLinkResponse SetChatStatus (SetChatStatusInputObject setChatStatusInputObject)

Change chat status

Set the status of the chat given by ID.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class SetChatStatusExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var setChatStatusInputObject = new SetChatStatusInputObject(); // SetChatStatusInputObject | 

            try
            {
                // Change chat status
                ResourceLinkResponse result = apiInstance.SetChatStatus(setChatStatusInputObject);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.SetChatStatus: " + e.Message );
            }
        }
    }
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="unblockcontact"></a>
# **UnblockContact**
> void UnblockContact (UnblockContactInputObject unblockContactInputObject)

Unblock a contact by phone number

Unblock a contact by phone number

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class UnblockContactExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var unblockContactInputObject = new UnblockContactInputObject(); // UnblockContactInputObject | 

            try
            {
                // Unblock a contact by phone number
                apiInstance.UnblockContact(unblockContactInputObject);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.UnblockContact: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unblockContactInputObject** | [**UnblockContactInputObject**](UnblockContactInputObject.md)|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="unblockcontactsbulk"></a>
# **UnblockContactsBulk**
> void UnblockContactsBulk (UnblockContactsBulkInputObject unblockContactsBulkInputObject)

Unblock contacts (bulk)

Unblock several contacts by blocked contact IDs or unblock all contacts.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class UnblockContactsBulkExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var unblockContactsBulkInputObject = new UnblockContactsBulkInputObject(); // UnblockContactsBulkInputObject | 

            try
            {
                // Unblock contacts (bulk)
                apiInstance.UnblockContactsBulk(unblockContactsBulkInputObject);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.UnblockContactsBulk: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unblockContactsBulkInputObject** | [**UnblockContactsBulkInputObject**](UnblockContactsBulkInputObject.md)|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="unmutechatsbulk"></a>
# **UnmuteChatsBulk**
> void UnmuteChatsBulk (UnmuteChatsBulkInputObject unmuteChatsBulkInputObject)

Unmute chats (bulk)

Unmute several chats by chat ids or unmute all chats.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class UnmuteChatsBulkExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var unmuteChatsBulkInputObject = new UnmuteChatsBulkInputObject(); // UnmuteChatsBulkInputObject | 

            try
            {
                // Unmute chats (bulk)
                apiInstance.UnmuteChatsBulk(unmuteChatsBulkInputObject);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.UnmuteChatsBulk: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unmuteChatsBulkInputObject** | [**UnmuteChatsBulkInputObject**](UnmuteChatsBulkInputObject.md)|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="unsubscribecontact"></a>
# **UnsubscribeContact**
> ResourceLinkResponse UnsubscribeContact (UnsubscribeContactInputObject unsubscribeContactInputObject)

Manually unsubscribe a contact

> Please note, if you unsubscribe a contact, this action cannot be reversed. 

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class UnsubscribeContactExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var unsubscribeContactInputObject = new UnsubscribeContactInputObject(); // UnsubscribeContactInputObject | 

            try
            {
                // Manually unsubscribe a contact
                ResourceLinkResponse result = apiInstance.UnsubscribeContact(unsubscribeContactInputObject);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.UnsubscribeContact: " + e.Message );
            }
        }
    }
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="updatebalancenotificationsettings"></a>
# **UpdateBalanceNotificationSettings**
> void UpdateBalanceNotificationSettings (UpdateBalanceNotificationSettingsInputObject updateBalanceNotificationSettingsInputObject)

Update balance notification settings

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class UpdateBalanceNotificationSettingsExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var updateBalanceNotificationSettingsInputObject = new UpdateBalanceNotificationSettingsInputObject(); // UpdateBalanceNotificationSettingsInputObject | 

            try
            {
                // Update balance notification settings
                apiInstance.UpdateBalanceNotificationSettings(updateBalanceNotificationSettingsInputObject);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.UpdateBalanceNotificationSettings: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateBalanceNotificationSettingsInputObject** | [**UpdateBalanceNotificationSettingsInputObject**](UpdateBalanceNotificationSettingsInputObject.md)|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="updatecallbacksettings"></a>
# **UpdateCallbackSettings**
> void UpdateCallbackSettings (UpdateCallbackSettingsInputObject updateCallbackSettingsInputObject)

Update callback URL settings

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class UpdateCallbackSettingsExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var updateCallbackSettingsInputObject = new UpdateCallbackSettingsInputObject(); // UpdateCallbackSettingsInputObject | 

            try
            {
                // Update callback URL settings
                apiInstance.UpdateCallbackSettings(updateCallbackSettingsInputObject);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.UpdateCallbackSettings: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCallbackSettingsInputObject** | [**UpdateCallbackSettingsInputObject**](UpdateCallbackSettingsInputObject.md)|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="updatechatdesktopnotificationsettings"></a>
# **UpdateChatDesktopNotificationSettings**
> void UpdateChatDesktopNotificationSettings (UpdateChatDesktopNotificationSettingsInputObject updateChatDesktopNotificationSettingsInputObject)

Update chat desktop notification settings

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class UpdateChatDesktopNotificationSettingsExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var updateChatDesktopNotificationSettingsInputObject = new UpdateChatDesktopNotificationSettingsInputObject(); // UpdateChatDesktopNotificationSettingsInputObject | 

            try
            {
                // Update chat desktop notification settings
                apiInstance.UpdateChatDesktopNotificationSettings(updateChatDesktopNotificationSettingsInputObject);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.UpdateChatDesktopNotificationSettings: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateChatDesktopNotificationSettingsInputObject** | [**UpdateChatDesktopNotificationSettingsInputObject**](UpdateChatDesktopNotificationSettingsInputObject.md)|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="updatecontact"></a>
# **UpdateContact**
> ResourceLinkResponse UpdateContact (UpdateContactInputObject updateContactInputObject, int? id)

Edit a contact

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class UpdateContactExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var updateContactInputObject = new UpdateContactInputObject(); // UpdateContactInputObject | 
            var id = 1;  // int? | 

            try
            {
                // Edit a contact
                ResourceLinkResponse result = apiInstance.UpdateContact(updateContactInputObject, id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.UpdateContact: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateContactInputObject** | [**UpdateContactInputObject**](UpdateContactInputObject.md)|  | 
 **id** | **int?**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="updatecontactnote"></a>
# **UpdateContactNote**
> ResourceLinkResponse UpdateContactNote (UpdateContactNoteInputObject updateContactNoteInputObject, int? id)

Update a contact note

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class UpdateContactNoteExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var updateContactNoteInputObject = new UpdateContactNoteInputObject(); // UpdateContactNoteInputObject | 
            var id = 1;  // int? | 

            try
            {
                // Update a contact note
                ResourceLinkResponse result = apiInstance.UpdateContactNote(updateContactNoteInputObject, id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.UpdateContactNote: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateContactNoteInputObject** | [**UpdateContactNoteInputObject**](UpdateContactNoteInputObject.md)|  | 
 **id** | **int?**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="updatecurrentuser"></a>
# **UpdateCurrentUser**
> UpdateCurrentUserResponse UpdateCurrentUser (UpdateCurrentUserInputObject updateCurrentUserInputObject)

Edit current account info

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class UpdateCurrentUserExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var updateCurrentUserInputObject = new UpdateCurrentUserInputObject(); // UpdateCurrentUserInputObject | 

            try
            {
                // Edit current account info
                UpdateCurrentUserResponse result = apiInstance.UpdateCurrentUser(updateCurrentUserInputObject);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.UpdateCurrentUser: " + e.Message );
            }
        }
    }
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="updatecustomfield"></a>
# **UpdateCustomField**
> ResourceLinkResponse UpdateCustomField (UpdateCustomFieldInputObject updateCustomFieldInputObject, int? id)

Edit a custom field

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class UpdateCustomFieldExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var updateCustomFieldInputObject = new UpdateCustomFieldInputObject(); // UpdateCustomFieldInputObject | 
            var id = 1;  // int? | 

            try
            {
                // Edit a custom field
                ResourceLinkResponse result = apiInstance.UpdateCustomField(updateCustomFieldInputObject, id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.UpdateCustomField: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomFieldInputObject** | [**UpdateCustomFieldInputObject**](UpdateCustomFieldInputObject.md)|  | 
 **id** | **int?**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="updatecustomfieldvalue"></a>
# **UpdateCustomFieldValue**
> ResourceLinkResponse UpdateCustomFieldValue (UpdateCustomFieldValueInputObject updateCustomFieldValueInputObject, int? id)

Edit the custom field value of a specified contact

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class UpdateCustomFieldValueExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var updateCustomFieldValueInputObject = new UpdateCustomFieldValueInputObject(); // UpdateCustomFieldValueInputObject | 
            var id = 554;  // int? | 

            try
            {
                // Edit the custom field value of a specified contact
                ResourceLinkResponse result = apiInstance.UpdateCustomFieldValue(updateCustomFieldValueInputObject, id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.UpdateCustomFieldValue: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomFieldValueInputObject** | [**UpdateCustomFieldValueInputObject**](UpdateCustomFieldValueInputObject.md)|  | 
 **id** | **int?**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="updateinboundmessagesnotificationsettings"></a>
# **UpdateInboundMessagesNotificationSettings**
> void UpdateInboundMessagesNotificationSettings (UpdateInboundMessagesNotificationSettingsInputObject updateInboundMessagesNotificationSettingsInputObject)

Update inbound messages notification settings

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class UpdateInboundMessagesNotificationSettingsExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var updateInboundMessagesNotificationSettingsInputObject = new UpdateInboundMessagesNotificationSettingsInputObject(); // UpdateInboundMessagesNotificationSettingsInputObject | 

            try
            {
                // Update inbound messages notification settings
                apiInstance.UpdateInboundMessagesNotificationSettings(updateInboundMessagesNotificationSettingsInputObject);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.UpdateInboundMessagesNotificationSettings: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateInboundMessagesNotificationSettingsInputObject** | [**UpdateInboundMessagesNotificationSettingsInputObject**](UpdateInboundMessagesNotificationSettingsInputObject.md)|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="updatelist"></a>
# **UpdateList**
> ResourceLinkResponse UpdateList (int? id, UpdateListObject updateListObject = null)

Edit a list

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class UpdateListExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var id = 1;  // int? | 
            var updateListObject = new UpdateListObject(); // UpdateListObject |  (optional) 

            try
            {
                // Edit a list
                ResourceLinkResponse result = apiInstance.UpdateList(id, updateListObject);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.UpdateList: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 
 **updateListObject** | [**UpdateListObject**](UpdateListObject.md)|  | [optional] 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="updatesendersetting"></a>
# **UpdateSenderSetting**
> void UpdateSenderSetting (UpdateSenderSettingInputObject updateSenderSettingInputObject)

Change sender settings

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class UpdateSenderSettingExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var updateSenderSettingInputObject = new UpdateSenderSettingInputObject(); // UpdateSenderSettingInputObject | 

            try
            {
                // Change sender settings
                apiInstance.UpdateSenderSetting(updateSenderSettingInputObject);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.UpdateSenderSetting: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateSenderSettingInputObject** | [**UpdateSenderSettingInputObject**](UpdateSenderSettingInputObject.md)|  | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="updatetemplate"></a>
# **UpdateTemplate**
> ResourceLinkResponse UpdateTemplate (UpdateTemplateInputObject updateTemplateInputObject, int? id)

Update a template

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class UpdateTemplateExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var updateTemplateInputObject = new UpdateTemplateInputObject(); // UpdateTemplateInputObject | 
            var id = 1;  // int? | 

            try
            {
                // Update a template
                ResourceLinkResponse result = apiInstance.UpdateTemplate(updateTemplateInputObject, id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.UpdateTemplate: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateTemplateInputObject** | [**UpdateTemplateInputObject**](UpdateTemplateInputObject.md)|  | 
 **id** | **int?**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="uploadavatar"></a>
# **UploadAvatar**
> void UploadAvatar (System.IO.Stream image)

Upload an avatar

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class UploadAvatarExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var image = new System.IO.Stream(); // System.IO.Stream | User avatar. Should be a PNG or JPG file not more than 10 MB.

            try
            {
                // Upload an avatar
                apiInstance.UploadAvatar(image);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.UploadAvatar: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **System.IO.Stream**| User avatar. Should be a PNG or JPG file not more than 10 MB. | 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="uploadcontactavatar"></a>
# **UploadContactAvatar**
> ResourceLinkResponse UploadContactAvatar (System.IO.Stream image, int? id)

Upload an avatar

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class UploadContactAvatarExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var image = new System.IO.Stream(); // System.IO.Stream | Contact avatar. Should be a PNG or JPG file not more than 10 MB.
            var id = 1;  // int? | 

            try
            {
                // Upload an avatar
                ResourceLinkResponse result = apiInstance.UploadContactAvatar(image, id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.UploadContactAvatar: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **System.IO.Stream**| Contact avatar. Should be a PNG or JPG file not more than 10 MB. | 
 **id** | **int?**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="uploadlistavatar"></a>
# **UploadListAvatar**
> ResourceLinkResponse UploadListAvatar (System.IO.Stream image, int? id)

Add an avatar for a list

Add an avatar for a list

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class UploadListAvatarExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var image = new System.IO.Stream(); // System.IO.Stream | List avatar. Should be a PNG or JPG file not more than 10 MB.
            var id = 1;  // int? | 

            try
            {
                // Add an avatar for a list
                ResourceLinkResponse result = apiInstance.UploadListAvatar(image, id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.UploadListAvatar: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **System.IO.Stream**| List avatar. Should be a PNG or JPG file not more than 10 MB. | 
 **id** | **int?**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="uploadmessageattachment"></a>
# **UploadMessageAttachment**
> UploadMessageAttachmentResponse UploadMessageAttachment (System.IO.Stream file)

Upload message attachment

Upload a new file to insert it as a link.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class UploadMessageAttachmentExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var file = new System.IO.Stream(); // System.IO.Stream | Attachment. Supports .jpg, .gif, .png, .pdf, .txt, .csv, .doc, .docx, .xls, .xlsx, .ppt, .pptx & .vcf file formats.

            try
            {
                // Upload message attachment
                UploadMessageAttachmentResponse result = apiInstance.UploadMessageAttachment(file);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.UploadMessageAttachment: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **System.IO.Stream**| Attachment. Supports .jpg, .gif, .png, .pdf, .txt, .csv, .doc, .docx, .xls, .xlsx, .ppt, .pptx &amp; .vcf file formats. | 

### Return type

[**UploadMessageAttachmentResponse**](UploadMessageAttachmentResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="uploadmessagemmsattachment"></a>
# **UploadMessageMMSAttachment**
> UploadMessageAttachmentResponse UploadMessageMMSAttachment (System.IO.Stream file)

Upload message mms attachment

Upload a new file to mms.

### Example
```csharp
using System;
using System.Diagnostics;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace Example
{
    public class UploadMessageMMSAttachmentExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: BasicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new TextMagicApi();
            var file = new System.IO.Stream(); // System.IO.Stream | Attachment. Supports .jpg, .gif, .png, .pdf, .txt, .csv, .doc, .docx, .xls, .xlsx, .ppt, .pptx & .vcf file formats.

            try
            {
                // Upload message mms attachment
                UploadMessageAttachmentResponse result = apiInstance.UploadMessageMMSAttachment(file);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TextMagicApi.UploadMessageMMSAttachment: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **System.IO.Stream**| Attachment. Supports .jpg, .gif, .png, .pdf, .txt, .csv, .doc, .docx, .xls, .xlsx, .ppt, .pptx &amp; .vcf file formats. | 

### Return type

[**UploadMessageAttachmentResponse**](UploadMessageAttachmentResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

