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

/*
 * SurveyRecipient.h
 *
 * 
 */

#ifndef COM_TEXTMAGIC_CLIENT_MODEL_SurveyRecipient_H_
#define COM_TEXTMAGIC_CLIENT_MODEL_SurveyRecipient_H_


#include "../ModelBase.h"

#include <cpprest/details/basic_types.h>

namespace com {
namespace textmagic {
namespace client {
namespace model {

/// <summary>
/// 
/// </summary>
class  SurveyRecipient
    : public ModelBase
{
public:
    SurveyRecipient();
    virtual ~SurveyRecipient();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    void fromJson(web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    void fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    /////////////////////////////////////////////
    /// SurveyRecipient members

    /// <summary>
    /// 
    /// </summary>
    utility::string_t getPhone() const;
        void setPhone(utility::string_t value);

protected:
    utility::string_t m_Phone;
    };

}
}
}
}

#endif /* COM_TEXTMAGIC_CLIENT_MODEL_SurveyRecipient_H_ */
