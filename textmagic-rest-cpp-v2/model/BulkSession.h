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
 * BulkSession.h
 *
 * 
 */

#ifndef COM_TEXTMAGIC_CLIENT_MODEL_BulkSession_H_
#define COM_TEXTMAGIC_CLIENT_MODEL_BulkSession_H_


#include "../ModelBase.h"

#include "MessageSession.h"
#include <cpprest/details/basic_types.h>

namespace com {
namespace textmagic {
namespace client {
namespace model {

/// <summary>
/// 
/// </summary>
class  BulkSession
    : public ModelBase
{
public:
    BulkSession();
    virtual ~BulkSession();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    void fromJson(web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    void fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    /////////////////////////////////////////////
    /// BulkSession members

    /// <summary>
    /// Bulk Session ID.
    /// </summary>
    int32_t getId() const;
        void setId(int32_t value);
    /// <summary>
    /// * **n** – bulk session is just created * **w** - work in progress * **f** - failed * **c** - completed with success * **s** - suspended 
    /// </summary>
    utility::string_t getStatus() const;
        void setStatus(utility::string_t value);
    /// <summary>
    /// Amount of messages already processed.
    /// </summary>
    int32_t getItemsProcessed() const;
        void setItemsProcessed(int32_t value);
    /// <summary>
    /// Total amount of messages to be processed.
    /// </summary>
    int32_t getItemsTotal() const;
        void setItemsTotal(int32_t value);
    /// <summary>
    /// Creation date and time of a Bulk Session.
    /// </summary>
    utility::datetime getCreatedAt() const;
        void setCreatedAt(utility::datetime value);
    /// <summary>
    /// 
    /// </summary>
    std::shared_ptr<MessageSession> getSession() const;
        void setSession(std::shared_ptr<MessageSession> value);
    /// <summary>
    /// Message text of a Bulk Session.
    /// </summary>
    utility::string_t getText() const;
        void setText(utility::string_t value);

protected:
    int32_t m_Id;
        utility::string_t m_Status;
        int32_t m_ItemsProcessed;
        int32_t m_ItemsTotal;
        utility::datetime m_CreatedAt;
        std::shared_ptr<MessageSession> m_Session;
        utility::string_t m_Text;
    };

}
}
}
}

#endif /* COM_TEXTMAGIC_CLIENT_MODEL_BulkSession_H_ */