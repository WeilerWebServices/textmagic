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



#include "SurveySenderCountries.h"

namespace com {
namespace textmagic {
namespace client {
namespace model {

SurveySenderCountries::SurveySenderCountries()
{
    m_Id = 0;
    m_CountryName = utility::conversions::to_string_t("");
    m_FromNumber = utility::conversions::to_string_t("");
    m_AllowDedicated = false;
}

SurveySenderCountries::~SurveySenderCountries()
{
}

void SurveySenderCountries::validate()
{
    // TODO: implement validation
}

web::json::value SurveySenderCountries::toJson() const
{
    web::json::value val = web::json::value::object();

    val[utility::conversions::to_string_t("id")] = ModelBase::toJson(m_Id);
    val[utility::conversions::to_string_t("countryName")] = ModelBase::toJson(m_CountryName);
    val[utility::conversions::to_string_t("fromNumber")] = ModelBase::toJson(m_FromNumber);
    val[utility::conversions::to_string_t("allowDedicated")] = ModelBase::toJson(m_AllowDedicated);

    return val;
}

void SurveySenderCountries::fromJson(web::json::value& val)
{
    if(val.has_field(utility::conversions::to_string_t("id")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("id")];
        if(!fieldValue.is_null())
        {
            setId(ModelBase::int32_tFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("countryName")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("countryName")];
        if(!fieldValue.is_null())
        {
            setCountryName(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("fromNumber")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("fromNumber")];
        if(!fieldValue.is_null())
        {
            setFromNumber(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("allowDedicated")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("allowDedicated")];
        if(!fieldValue.is_null())
        {
            setAllowDedicated(ModelBase::boolFromJson(fieldValue));
        }
    }
}

void SurveySenderCountries::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("id"), m_Id));
    multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("countryName"), m_CountryName));
    multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("fromNumber"), m_FromNumber));
    multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("allowDedicated"), m_AllowDedicated));
}

void SurveySenderCountries::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    setId(ModelBase::int32_tFromHttpContent(multipart->getContent(utility::conversions::to_string_t("id"))));
    setCountryName(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("countryName"))));
    setFromNumber(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("fromNumber"))));
    setAllowDedicated(ModelBase::boolFromHttpContent(multipart->getContent(utility::conversions::to_string_t("allowDedicated"))));
}

int32_t SurveySenderCountries::getId() const
{
    return m_Id;
}


void SurveySenderCountries::setId(int32_t value)
{
    m_Id = value;
    
}
utility::string_t SurveySenderCountries::getCountryName() const
{
    return m_CountryName;
}


void SurveySenderCountries::setCountryName(utility::string_t value)
{
    m_CountryName = value;
    
}
utility::string_t SurveySenderCountries::getFromNumber() const
{
    return m_FromNumber;
}


void SurveySenderCountries::setFromNumber(utility::string_t value)
{
    m_FromNumber = value;
    
}
bool SurveySenderCountries::isAllowDedicated() const
{
    return m_AllowDedicated;
}


void SurveySenderCountries::setAllowDedicated(bool value)
{
    m_AllowDedicated = value;
    
}
}
}
}
}

