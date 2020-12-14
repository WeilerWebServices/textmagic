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


class Survey(object):
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
        'id': 'int',
        'name': 'str',
        'status': 'str',
        'created_at': 'datetime',
        'updated_at': 'datetime',
        'receipents': 'list[SurveyRecipient]',
        'countries': 'list[SurveySenderCountries]'
    }

    attribute_map = {
        'id': 'id',
        'name': 'name',
        'status': 'status',
        'created_at': 'createdAt',
        'updated_at': 'updatedAt',
        'receipents': 'receipents',
        'countries': 'countries'
    }

    def __init__(self, id=None, name=None, status=None, created_at=None, updated_at=None, receipents=None, countries=None):  # noqa: E501
        """Survey - a model defined in Swagger"""  # noqa: E501

        self._id = None
        self._name = None
        self._status = None
        self._created_at = None
        self._updated_at = None
        self._receipents = None
        self._countries = None
        self.discriminator = None

        self.id = id
        self.name = name
        self.status = status
        self.created_at = created_at
        self.updated_at = updated_at
        if receipents is not None:
            self.receipents = receipents
        if countries is not None:
            self.countries = countries

    @property
    def id(self):
        """Gets the id of this Survey.  # noqa: E501


        :return: The id of this Survey.  # noqa: E501
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this Survey.


        :param id: The id of this Survey.  # noqa: E501
        :type: int
        """

        self._id = id

    @property
    def name(self):
        """Gets the name of this Survey.  # noqa: E501


        :return: The name of this Survey.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this Survey.


        :param name: The name of this Survey.  # noqa: E501
        :type: str
        """

        self._name = name

    @property
    def status(self):
        """Gets the status of this Survey.  # noqa: E501


        :return: The status of this Survey.  # noqa: E501
        :rtype: str
        """
        return self._status

    @status.setter
    def status(self, status):
        """Sets the status of this Survey.


        :param status: The status of this Survey.  # noqa: E501
        :type: str
        """

        self._status = status

    @property
    def created_at(self):
        """Gets the created_at of this Survey.  # noqa: E501


        :return: The created_at of this Survey.  # noqa: E501
        :rtype: datetime
        """
        return self._created_at

    @created_at.setter
    def created_at(self, created_at):
        """Sets the created_at of this Survey.


        :param created_at: The created_at of this Survey.  # noqa: E501
        :type: datetime
        """

        self._created_at = created_at

    @property
    def updated_at(self):
        """Gets the updated_at of this Survey.  # noqa: E501


        :return: The updated_at of this Survey.  # noqa: E501
        :rtype: datetime
        """
        return self._updated_at

    @updated_at.setter
    def updated_at(self, updated_at):
        """Sets the updated_at of this Survey.


        :param updated_at: The updated_at of this Survey.  # noqa: E501
        :type: datetime
        """

        self._updated_at = updated_at

    @property
    def receipents(self):
        """Gets the receipents of this Survey.  # noqa: E501


        :return: The receipents of this Survey.  # noqa: E501
        :rtype: list[SurveyRecipient]
        """
        return self._receipents

    @receipents.setter
    def receipents(self, receipents):
        """Sets the receipents of this Survey.


        :param receipents: The receipents of this Survey.  # noqa: E501
        :type: list[SurveyRecipient]
        """

        self._receipents = receipents

    @property
    def countries(self):
        """Gets the countries of this Survey.  # noqa: E501


        :return: The countries of this Survey.  # noqa: E501
        :rtype: list[SurveySenderCountries]
        """
        return self._countries

    @countries.setter
    def countries(self, countries):
        """Sets the countries of this Survey.


        :param countries: The countries of this Survey.  # noqa: E501
        :type: list[SurveySenderCountries]
        """

        self._countries = countries

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
        if issubclass(Survey, dict):
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
        if not isinstance(other, Survey):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other