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
 * GetBalanceNotificationOptionsResponse.h
 *
 * 
 */

#ifndef COM_TEXTMAGIC_CLIENT_MODEL_GetBalanceNotificationOptionsResponse_H_
#define COM_TEXTMAGIC_CLIENT_MODEL_GetBalanceNotificationOptionsResponse_H_


#include "../ModelBase.h"

#include <cpprest/details/basic_types.h>

namespace com {
namespace textmagic {
namespace client {
namespace model {

/// <summary>
/// 
/// </summary>
class  GetBalanceNotificationOptionsResponse
    : public ModelBase
{
public:
    GetBalanceNotificationOptionsResponse();
    virtual ~GetBalanceNotificationOptionsResponse();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    void fromJson(web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    void fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    /////////////////////////////////////////////
    /// GetBalanceNotificationOptionsResponse members

    /// <summary>
    /// Contains sign of currency in Unicode hex code.
    /// </summary>
    utility::string_t get1() const;
        void set1(utility::string_t value);
    /// <summary>
    /// Contains sign of currency in Unicode hex code.
    /// </summary>
    utility::string_t get2() const;
        void set2(utility::string_t value);
    /// <summary>
    /// Contains sign of currency in Unicode hex code.
    /// </summary>
    utility::string_t get3() const;
        void set3(utility::string_t value);
    /// <summary>
    /// Contains sign of currency in Unicode hex code.
    /// </summary>
    utility::string_t get5() const;
        void set5(utility::string_t value);
    /// <summary>
    /// Contains sign of currency in Unicode hex code.
    /// </summary>
    utility::string_t get10() const;
        void set10(utility::string_t value);
    /// <summary>
    /// Contains sign of currency in Unicode hex code.
    /// </summary>
    utility::string_t get20() const;
        void set20(utility::string_t value);
    /// <summary>
    /// Contains sign of currency in Unicode hex code.
    /// </summary>
    utility::string_t get30() const;
        void set30(utility::string_t value);
    /// <summary>
    /// Contains sign of currency in Unicode hex code.
    /// </summary>
    utility::string_t get50() const;
        void set50(utility::string_t value);
    /// <summary>
    /// Contains sign of currency in Unicode hex code.
    /// </summary>
    utility::string_t get100() const;
        void set100(utility::string_t value);
    /// <summary>
    /// Contains sign of currency in Unicode hex code.
    /// </summary>
    utility::string_t get500() const;
        void set500(utility::string_t value);
    /// <summary>
    /// Contains sign of currency in Unicode hex code.
    /// </summary>
    utility::string_t get1000() const;
        void set1000(utility::string_t value);

protected:
    utility::string_t m_1;
        utility::string_t m_2;
        utility::string_t m_3;
        utility::string_t m_5;
        utility::string_t m_10;
        utility::string_t m_20;
        utility::string_t m_30;
        utility::string_t m_50;
        utility::string_t m_100;
        utility::string_t m_500;
        utility::string_t m_1000;
    };

}
}
}
}

#endif /* COM_TEXTMAGIC_CLIENT_MODEL_GetBalanceNotificationOptionsResponse_H_ */