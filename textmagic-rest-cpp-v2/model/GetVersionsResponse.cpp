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



#include "GetVersionsResponse.h"

namespace com {
namespace textmagic {
namespace client {
namespace model {

GetVersionsResponse::GetVersionsResponse()
{
    m_Ios = 0;
    m_Android = 0;
    m_Desktop = 0;
}

GetVersionsResponse::~GetVersionsResponse()
{
}

void GetVersionsResponse::validate()
{
    // TODO: implement validation
}

web::json::value GetVersionsResponse::toJson() const
{
    web::json::value val = web::json::value::object();

    val[utility::conversions::to_string_t("ios")] = ModelBase::toJson(m_Ios);
    val[utility::conversions::to_string_t("android")] = ModelBase::toJson(m_Android);
    val[utility::conversions::to_string_t("desktop")] = ModelBase::toJson(m_Desktop);

    return val;
}

void GetVersionsResponse::fromJson(web::json::value& val)
{
    if(val.has_field(utility::conversions::to_string_t("ios")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("ios")];
        if(!fieldValue.is_null())
        {
            setIos(ModelBase::int32_tFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("android")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("android")];
        if(!fieldValue.is_null())
        {
            setAndroid(ModelBase::int32_tFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("desktop")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("desktop")];
        if(!fieldValue.is_null())
        {
            setDesktop(ModelBase::int32_tFromJson(fieldValue));
        }
    }
}

void GetVersionsResponse::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("ios"), m_Ios));
    multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("android"), m_Android));
    multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("desktop"), m_Desktop));
}

void GetVersionsResponse::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    setIos(ModelBase::int32_tFromHttpContent(multipart->getContent(utility::conversions::to_string_t("ios"))));
    setAndroid(ModelBase::int32_tFromHttpContent(multipart->getContent(utility::conversions::to_string_t("android"))));
    setDesktop(ModelBase::int32_tFromHttpContent(multipart->getContent(utility::conversions::to_string_t("desktop"))));
}

int32_t GetVersionsResponse::getIos() const
{
    return m_Ios;
}


void GetVersionsResponse::setIos(int32_t value)
{
    m_Ios = value;
    
}
int32_t GetVersionsResponse::getAndroid() const
{
    return m_Android;
}


void GetVersionsResponse::setAndroid(int32_t value)
{
    m_Android = value;
    
}
int32_t GetVersionsResponse::getDesktop() const
{
    return m_Desktop;
}


void GetVersionsResponse::setDesktop(int32_t value)
{
    m_Desktop = value;
    
}
}
}
}
}
