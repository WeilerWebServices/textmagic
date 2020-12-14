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
 * Timezone.h
 *
 * 
 */

#ifndef COM_TEXTMAGIC_CLIENT_MODEL_Timezone_H_
#define COM_TEXTMAGIC_CLIENT_MODEL_Timezone_H_


#include "../ModelBase.h"

#include <cpprest/details/basic_types.h>

namespace com {
namespace textmagic {
namespace client {
namespace model {

/// <summary>
/// 
/// </summary>
class  Timezone
    : public ModelBase
{
public:
    Timezone();
    virtual ~Timezone();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    void fromJson(web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    void fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    /////////////////////////////////////////////
    /// Timezone members

    /// <summary>
    /// Internal timezone ID.
    /// </summary>
    int32_t getId() const;
        void setId(int32_t value);
    /// <summary>
    /// Timezone area.
    /// </summary>
    utility::string_t getArea() const;
        void setArea(utility::string_t value);
    /// <summary>
    /// Is daylight saving time used in this timezone?
    /// </summary>
    int32_t getDst() const;
        void setDst(int32_t value);
    /// <summary>
    /// Offset from UTC time in seconds. In this example, it is 21600/60/60&#x3D;6 hours.
    /// </summary>
    int32_t getOffset() const;
        void setOffset(int32_t value);
    /// <summary>
    /// User-friendly timezone name (with spaces replaced by underscores).
    /// </summary>
    utility::string_t getTimezone() const;
        void setTimezone(utility::string_t value);

protected:
    int32_t m_Id;
        utility::string_t m_Area;
        int32_t m_Dst;
        int32_t m_Offset;
        utility::string_t m_Timezone;
    };

}
}
}
}

#endif /* COM_TEXTMAGIC_CLIENT_MODEL_Timezone_H_ */