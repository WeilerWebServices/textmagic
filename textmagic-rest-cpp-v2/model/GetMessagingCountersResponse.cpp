/**
 * TextMagic API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator 2.4.8.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



#include "GetMessagingCountersResponse.h"

namespace com {
namespace textmagic {
namespace client {
namespace model {

GetMessagingCountersResponse::GetMessagingCountersResponse()
{
    m_Contacts = 0;
    m_Sent = 0;
    m_Received = 0;
}

GetMessagingCountersResponse::~GetMessagingCountersResponse()
{
}

void GetMessagingCountersResponse::validate()
{
    // TODO: implement validation
}

web::json::value GetMessagingCountersResponse::toJson() const
{
    web::json::value val = web::json::value::object();

    val[utility::conversions::to_string_t("contacts")] = ModelBase::toJson(m_Contacts);
    val[utility::conversions::to_string_t("sent")] = ModelBase::toJson(m_Sent);
    val[utility::conversions::to_string_t("received")] = ModelBase::toJson(m_Received);

    return val;
}

void GetMessagingCountersResponse::fromJson(web::json::value& val)
{
    if(val.has_field(utility::conversions::to_string_t("contacts")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("contacts")];
        if(!fieldValue.is_null())
        {
            setContacts(ModelBase::int32_tFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("sent")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("sent")];
        if(!fieldValue.is_null())
        {
            setSent(ModelBase::int32_tFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("received")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("received")];
        if(!fieldValue.is_null())
        {
            setReceived(ModelBase::int32_tFromJson(fieldValue));
        }
    }
}

void GetMessagingCountersResponse::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("contacts"), m_Contacts));
    multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("sent"), m_Sent));
    multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("received"), m_Received));
}

void GetMessagingCountersResponse::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    setContacts(ModelBase::int32_tFromHttpContent(multipart->getContent(utility::conversions::to_string_t("contacts"))));
    setSent(ModelBase::int32_tFromHttpContent(multipart->getContent(utility::conversions::to_string_t("sent"))));
    setReceived(ModelBase::int32_tFromHttpContent(multipart->getContent(utility::conversions::to_string_t("received"))));
}

int32_t GetMessagingCountersResponse::getContacts() const
{
    return m_Contacts;
}


void GetMessagingCountersResponse::setContacts(int32_t value)
{
    m_Contacts = value;
    
}
int32_t GetMessagingCountersResponse::getSent() const
{
    return m_Sent;
}


void GetMessagingCountersResponse::setSent(int32_t value)
{
    m_Sent = value;
    
}
int32_t GetMessagingCountersResponse::getReceived() const
{
    return m_Received;
}


void GetMessagingCountersResponse::setReceived(int32_t value)
{
    m_Received = value;
    
}
}
}
}
}

