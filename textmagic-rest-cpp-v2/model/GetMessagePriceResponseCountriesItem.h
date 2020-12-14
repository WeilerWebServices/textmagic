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
 * GetMessagePriceResponseCountriesItem.h
 *
 * 
 */

#ifndef COM_TEXTMAGIC_CLIENT_MODEL_GetMessagePriceResponseCountriesItem_H_
#define COM_TEXTMAGIC_CLIENT_MODEL_GetMessagePriceResponseCountriesItem_H_


#include "../ModelBase.h"

#include <cpprest/details/basic_types.h>

namespace com {
namespace textmagic {
namespace client {
namespace model {

/// <summary>
/// 
/// </summary>
class  GetMessagePriceResponseCountriesItem
    : public ModelBase
{
public:
    GetMessagePriceResponseCountriesItem();
    virtual ~GetMessagePriceResponseCountriesItem();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    void fromJson(web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    void fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    /////////////////////////////////////////////
    /// GetMessagePriceResponseCountriesItem members

    /// <summary>
    /// The 2-letter ISO country code.
    /// </summary>
    utility::string_t getCountry() const;
        void setCountry(utility::string_t value);
    /// <summary>
    /// Country name.
    /// </summary>
    utility::string_t getCountryName() const;
        void setCountryName(utility::string_t value);
    /// <summary>
    /// Is allowed to use a dedicated number?
    /// </summary>
    bool isAllowDedicated() const;
        void setAllowDedicated(bool value);
    /// <summary>
    /// Parts count to send.
    /// </summary>
    double getCount() const;
        void setCount(double value);
    /// <summary>
    /// Maximum parts to send.
    /// </summary>
    double getMax() const;
        void setMax(double value);
    /// <summary>
    /// Total price to send.
    /// </summary>
    utility::string_t getSum() const;
        void setSum(utility::string_t value);
    /// <summary>
    /// Is this a landline number?
    /// </summary>
    double getLandline() const;
        void setLandline(double value);

protected:
    utility::string_t m_Country;
        utility::string_t m_CountryName;
        bool m_AllowDedicated;
        double m_Count;
        double m_Max;
        utility::string_t m_Sum;
        double m_Landline;
    };

}
}
}
}

#endif /* COM_TEXTMAGIC_CLIENT_MODEL_GetMessagePriceResponseCountriesItem_H_ */