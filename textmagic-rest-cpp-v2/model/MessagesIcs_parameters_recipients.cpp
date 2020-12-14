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



#include "MessagesIcs_parameters_recipients.h"

namespace com {
namespace textmagic {
namespace client {
namespace model {

MessagesIcs_parameters_recipients::MessagesIcs_parameters_recipients()
{
}

MessagesIcs_parameters_recipients::~MessagesIcs_parameters_recipients()
{
}

void MessagesIcs_parameters_recipients::validate()
{
    // TODO: implement validation
}

web::json::value MessagesIcs_parameters_recipients::toJson() const
{
    web::json::value val = web::json::value::object();

    {
        std::vector<web::json::value> jsonArray;
        for( auto& item : m_Contacts )
        {
            jsonArray.push_back(ModelBase::toJson(item));
        }
        val[utility::conversions::to_string_t("contacts")] = web::json::value::array(jsonArray);
    }
    {
        std::vector<web::json::value> jsonArray;
        for( auto& item : m_Groups )
        {
            jsonArray.push_back(ModelBase::toJson(item));
        }
        val[utility::conversions::to_string_t("groups")] = web::json::value::array(jsonArray);
    }
    {
        std::vector<web::json::value> jsonArray;
        for( auto& item : m_Numbers )
        {
            jsonArray.push_back(ModelBase::toJson(item));
        }
        val[utility::conversions::to_string_t("numbers")] = web::json::value::array(jsonArray);
    }

    return val;
}

void MessagesIcs_parameters_recipients::fromJson(web::json::value& val)
{
    {
        m_Contacts.clear();
        std::vector<web::json::value> jsonArray;
        if(val.has_field(utility::conversions::to_string_t("contacts")))
        {
        for( auto& item : val[utility::conversions::to_string_t("contacts")].as_array() )
        {
            m_Contacts.push_back(ModelBase::int32_tFromJson(item));
        }
        }
    }
    {
        m_Groups.clear();
        std::vector<web::json::value> jsonArray;
        if(val.has_field(utility::conversions::to_string_t("groups")))
        {
        for( auto& item : val[utility::conversions::to_string_t("groups")].as_array() )
        {
            m_Groups.push_back(ModelBase::int32_tFromJson(item));
        }
        }
    }
    {
        m_Numbers.clear();
        std::vector<web::json::value> jsonArray;
        if(val.has_field(utility::conversions::to_string_t("numbers")))
        {
        for( auto& item : val[utility::conversions::to_string_t("numbers")].as_array() )
        {
            m_Numbers.push_back(ModelBase::stringFromJson(item));
        }
        }
    }
}

void MessagesIcs_parameters_recipients::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    {
        std::vector<web::json::value> jsonArray;
        for( auto& item : m_Contacts )
        {
            jsonArray.push_back(ModelBase::toJson(item));
        }
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("contacts"), web::json::value::array(jsonArray), utility::conversions::to_string_t("application/json")));
            }
    {
        std::vector<web::json::value> jsonArray;
        for( auto& item : m_Groups )
        {
            jsonArray.push_back(ModelBase::toJson(item));
        }
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("groups"), web::json::value::array(jsonArray), utility::conversions::to_string_t("application/json")));
            }
    {
        std::vector<web::json::value> jsonArray;
        for( auto& item : m_Numbers )
        {
            jsonArray.push_back(ModelBase::toJson(item));
        }
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("numbers"), web::json::value::array(jsonArray), utility::conversions::to_string_t("application/json")));
            }
}

void MessagesIcs_parameters_recipients::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    {
        m_Contacts.clear();

        web::json::value jsonArray = web::json::value::parse(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("contacts"))));
        for( auto& item : jsonArray.as_array() )
        {
            m_Contacts.push_back(ModelBase::int32_tFromJson(item));
        }
    }
    {
        m_Groups.clear();

        web::json::value jsonArray = web::json::value::parse(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("groups"))));
        for( auto& item : jsonArray.as_array() )
        {
            m_Groups.push_back(ModelBase::int32_tFromJson(item));
        }
    }
    {
        m_Numbers.clear();

        web::json::value jsonArray = web::json::value::parse(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("numbers"))));
        for( auto& item : jsonArray.as_array() )
        {
            m_Numbers.push_back(ModelBase::stringFromJson(item));
        }
    }
}

std::vector<int32_t>& MessagesIcs_parameters_recipients::getContacts()
{
    return m_Contacts;
}

void MessagesIcs_parameters_recipients::setContacts(std::vector<int32_t> value)
{
    m_Contacts = value;
    
}
std::vector<int32_t>& MessagesIcs_parameters_recipients::getGroups()
{
    return m_Groups;
}

void MessagesIcs_parameters_recipients::setGroups(std::vector<int32_t> value)
{
    m_Groups = value;
    
}
std::vector<utility::string_t>& MessagesIcs_parameters_recipients::getNumbers()
{
    return m_Numbers;
}

void MessagesIcs_parameters_recipients::setNumbers(std::vector<utility::string_t> value)
{
    m_Numbers = value;
    
}
}
}
}
}

