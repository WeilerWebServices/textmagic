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



#include "GetSubaccountsWithTokensResponse.h"

namespace com {
namespace textmagic {
namespace client {
namespace model {

GetSubaccountsWithTokensResponse::GetSubaccountsWithTokensResponse()
{
}

GetSubaccountsWithTokensResponse::~GetSubaccountsWithTokensResponse()
{
}

void GetSubaccountsWithTokensResponse::validate()
{
    // TODO: implement validation
}

web::json::value GetSubaccountsWithTokensResponse::toJson() const
{
    web::json::value val = web::json::value::object();


    return val;
}

void GetSubaccountsWithTokensResponse::fromJson(web::json::value& val)
{
}

void GetSubaccountsWithTokensResponse::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

}

void GetSubaccountsWithTokensResponse::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

}

}
}
}
}
