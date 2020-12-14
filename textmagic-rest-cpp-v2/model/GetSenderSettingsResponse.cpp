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



#include "GetSenderSettingsResponse.h"

namespace com {
namespace textmagic {
namespace client {
namespace model {

GetSenderSettingsResponse::GetSenderSettingsResponse()
{
}

GetSenderSettingsResponse::~GetSenderSettingsResponse()
{
}

void GetSenderSettingsResponse::validate()
{
    // TODO: implement validation
}

web::json::value GetSenderSettingsResponse::toJson() const
{
    web::json::value val = web::json::value::object();

    {
        std::vector<web::json::value> jsonArray;
        for( auto& item : m_User )
        {
            jsonArray.push_back(ModelBase::toJson(item));
        }
        val[utility::conversions::to_string_t("user")] = web::json::value::array(jsonArray);
    }
    {
        std::vector<web::json::value> jsonArray;
        for( auto& item : m_Special )
        {
            jsonArray.push_back(ModelBase::toJson(item));
        }
        val[utility::conversions::to_string_t("special")] = web::json::value::array(jsonArray);
    }
    {
        std::vector<web::json::value> jsonArray;
        for( auto& item : m_Other )
        {
            jsonArray.push_back(ModelBase::toJson(item));
        }
        val[utility::conversions::to_string_t("other")] = web::json::value::array(jsonArray);
    }

    return val;
}

void GetSenderSettingsResponse::fromJson(web::json::value& val)
{
    {
        m_User.clear();
        std::vector<web::json::value> jsonArray;
        if(val.has_field(utility::conversions::to_string_t("user")))
        {
        for( auto& item : val[utility::conversions::to_string_t("user")].as_array() )
        {
            if(item.is_null())
            {
                m_User.push_back( std::shared_ptr<SenderSettingsItem>(nullptr) );
            }
            else
            {
                std::shared_ptr<SenderSettingsItem> newItem(new SenderSettingsItem());
                newItem->fromJson(item);
                m_User.push_back( newItem );
            }
        }
        }
    }
    {
        m_Special.clear();
        std::vector<web::json::value> jsonArray;
        if(val.has_field(utility::conversions::to_string_t("special")))
        {
        for( auto& item : val[utility::conversions::to_string_t("special")].as_array() )
        {
            if(item.is_null())
            {
                m_Special.push_back( std::shared_ptr<SenderSettingsItem>(nullptr) );
            }
            else
            {
                std::shared_ptr<SenderSettingsItem> newItem(new SenderSettingsItem());
                newItem->fromJson(item);
                m_Special.push_back( newItem );
            }
        }
        }
    }
    {
        m_Other.clear();
        std::vector<web::json::value> jsonArray;
        if(val.has_field(utility::conversions::to_string_t("other")))
        {
        for( auto& item : val[utility::conversions::to_string_t("other")].as_array() )
        {
            if(item.is_null())
            {
                m_Other.push_back( std::shared_ptr<SenderSettingsItem>(nullptr) );
            }
            else
            {
                std::shared_ptr<SenderSettingsItem> newItem(new SenderSettingsItem());
                newItem->fromJson(item);
                m_Other.push_back( newItem );
            }
        }
        }
    }
}

void GetSenderSettingsResponse::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    {
        std::vector<web::json::value> jsonArray;
        for( auto& item : m_User )
        {
            jsonArray.push_back(ModelBase::toJson(item));
        }
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("user"), web::json::value::array(jsonArray), utility::conversions::to_string_t("application/json")));
            }
    {
        std::vector<web::json::value> jsonArray;
        for( auto& item : m_Special )
        {
            jsonArray.push_back(ModelBase::toJson(item));
        }
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("special"), web::json::value::array(jsonArray), utility::conversions::to_string_t("application/json")));
            }
    {
        std::vector<web::json::value> jsonArray;
        for( auto& item : m_Other )
        {
            jsonArray.push_back(ModelBase::toJson(item));
        }
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("other"), web::json::value::array(jsonArray), utility::conversions::to_string_t("application/json")));
            }
}

void GetSenderSettingsResponse::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    {
        m_User.clear();

        web::json::value jsonArray = web::json::value::parse(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("user"))));
        for( auto& item : jsonArray.as_array() )
        {
            if(item.is_null())
            {
                m_User.push_back( std::shared_ptr<SenderSettingsItem>(nullptr) );
            }
            else
            {
                std::shared_ptr<SenderSettingsItem> newItem(new SenderSettingsItem());
                newItem->fromJson(item);
                m_User.push_back( newItem );
            }
        }
    }
    {
        m_Special.clear();

        web::json::value jsonArray = web::json::value::parse(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("special"))));
        for( auto& item : jsonArray.as_array() )
        {
            if(item.is_null())
            {
                m_Special.push_back( std::shared_ptr<SenderSettingsItem>(nullptr) );
            }
            else
            {
                std::shared_ptr<SenderSettingsItem> newItem(new SenderSettingsItem());
                newItem->fromJson(item);
                m_Special.push_back( newItem );
            }
        }
    }
    {
        m_Other.clear();

        web::json::value jsonArray = web::json::value::parse(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("other"))));
        for( auto& item : jsonArray.as_array() )
        {
            if(item.is_null())
            {
                m_Other.push_back( std::shared_ptr<SenderSettingsItem>(nullptr) );
            }
            else
            {
                std::shared_ptr<SenderSettingsItem> newItem(new SenderSettingsItem());
                newItem->fromJson(item);
                m_Other.push_back( newItem );
            }
        }
    }
}

std::vector<std::shared_ptr<SenderSettingsItem>>& GetSenderSettingsResponse::getUser()
{
    return m_User;
}

void GetSenderSettingsResponse::setUser(std::vector<std::shared_ptr<SenderSettingsItem>> value)
{
    m_User = value;
    
}
std::vector<std::shared_ptr<SenderSettingsItem>>& GetSenderSettingsResponse::getSpecial()
{
    return m_Special;
}

void GetSenderSettingsResponse::setSpecial(std::vector<std::shared_ptr<SenderSettingsItem>> value)
{
    m_Special = value;
    
}
std::vector<std::shared_ptr<SenderSettingsItem>>& GetSenderSettingsResponse::getOther()
{
    return m_Other;
}

void GetSenderSettingsResponse::setOther(std::vector<std::shared_ptr<SenderSettingsItem>> value)
{
    m_Other = value;
    
}
}
}
}
}
