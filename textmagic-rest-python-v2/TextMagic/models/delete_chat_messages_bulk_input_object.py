# coding: utf-8

"""
    TextMagic API

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: 2
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class DeleteChatMessagesBulkInputObject(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'inbound_ids': 'str',
        'sent_ids': 'str',
        'calls_ids': 'str',
        'all': 'bool'
    }

    attribute_map = {
        'inbound_ids': 'inbound_ids',
        'sent_ids': 'sent_ids',
        'calls_ids': 'calls_ids',
        'all': 'all'
    }

    def __init__(self, inbound_ids=None, sent_ids=None, calls_ids=None, all=None):  # noqa: E501
        """DeleteChatMessagesBulkInputObject - a model defined in Swagger"""  # noqa: E501

        self._inbound_ids = None
        self._sent_ids = None
        self._calls_ids = None
        self._all = None
        self.discriminator = None

        if inbound_ids is not None:
            self.inbound_ids = inbound_ids
        if sent_ids is not None:
            self.sent_ids = sent_ids
        if calls_ids is not None:
            self.calls_ids = calls_ids
        if all is not None:
            self.all = all

    @property
    def inbound_ids(self):
        """Gets the inbound_ids of this DeleteChatMessagesBulkInputObject.  # noqa: E501

        Inbound message IDs to delete. Require when \"all\" is equal to 0 (false).  # noqa: E501

        :return: The inbound_ids of this DeleteChatMessagesBulkInputObject.  # noqa: E501
        :rtype: str
        """
        return self._inbound_ids

    @inbound_ids.setter
    def inbound_ids(self, inbound_ids):
        """Sets the inbound_ids of this DeleteChatMessagesBulkInputObject.

        Inbound message IDs to delete. Require when \"all\" is equal to 0 (false).  # noqa: E501

        :param inbound_ids: The inbound_ids of this DeleteChatMessagesBulkInputObject.  # noqa: E501
        :type: str
        """

        self._inbound_ids = inbound_ids

    @property
    def sent_ids(self):
        """Gets the sent_ids of this DeleteChatMessagesBulkInputObject.  # noqa: E501

        Sent message IDs to delete. Require when \"all\" is equal to 0 (false).  # noqa: E501

        :return: The sent_ids of this DeleteChatMessagesBulkInputObject.  # noqa: E501
        :rtype: str
        """
        return self._sent_ids

    @sent_ids.setter
    def sent_ids(self, sent_ids):
        """Sets the sent_ids of this DeleteChatMessagesBulkInputObject.

        Sent message IDs to delete. Require when \"all\" is equal to 0 (false).  # noqa: E501

        :param sent_ids: The sent_ids of this DeleteChatMessagesBulkInputObject.  # noqa: E501
        :type: str
        """

        self._sent_ids = sent_ids

    @property
    def calls_ids(self):
        """Gets the calls_ids of this DeleteChatMessagesBulkInputObject.  # noqa: E501

        Calls IDs to delete. Require when \"all\" is equal to 0 (false).  # noqa: E501

        :return: The calls_ids of this DeleteChatMessagesBulkInputObject.  # noqa: E501
        :rtype: str
        """
        return self._calls_ids

    @calls_ids.setter
    def calls_ids(self, calls_ids):
        """Sets the calls_ids of this DeleteChatMessagesBulkInputObject.

        Calls IDs to delete. Require when \"all\" is equal to 0 (false).  # noqa: E501

        :param calls_ids: The calls_ids of this DeleteChatMessagesBulkInputObject.  # noqa: E501
        :type: str
        """

        self._calls_ids = calls_ids

    @property
    def all(self):
        """Gets the all of this DeleteChatMessagesBulkInputObject.  # noqa: E501

        Default is 0 (false). If set to 1, all the entities will be removed.  # noqa: E501

        :return: The all of this DeleteChatMessagesBulkInputObject.  # noqa: E501
        :rtype: bool
        """
        return self._all

    @all.setter
    def all(self, all):
        """Sets the all of this DeleteChatMessagesBulkInputObject.

        Default is 0 (false). If set to 1, all the entities will be removed.  # noqa: E501

        :param all: The all of this DeleteChatMessagesBulkInputObject.  # noqa: E501
        :type: bool
        """

        self._all = all

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(DeleteChatMessagesBulkInputObject, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, DeleteChatMessagesBulkInputObject):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
