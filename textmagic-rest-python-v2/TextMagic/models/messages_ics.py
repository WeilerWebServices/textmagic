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


class MessagesIcs(object):
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
        'next_send': 'datetime',
        'rrule': 'str',
        'session': 'MessageSession',
        'last_sent': 'datetime',
        'contact_name': 'str',
        'parameters': 'MessagesIcsParameters',
        'type': 'str',
        'summary': 'str',
        'text_parameters': 'MessagesIcsTextParameters',
        'first_occurrence': 'datetime',
        'last_occurrence': 'datetime',
        'recipients_count': 'int',
        'timezone': 'str',
        'completed': 'bool',
        'avatar': 'str',
        'created_at': 'datetime'
    }

    attribute_map = {
        'id': 'id',
        'next_send': 'nextSend',
        'rrule': 'rrule',
        'session': 'session',
        'last_sent': 'lastSent',
        'contact_name': 'contactName',
        'parameters': 'parameters',
        'type': 'type',
        'summary': 'summary',
        'text_parameters': 'textParameters',
        'first_occurrence': 'firstOccurrence',
        'last_occurrence': 'lastOccurrence',
        'recipients_count': 'recipientsCount',
        'timezone': 'timezone',
        'completed': 'completed',
        'avatar': 'avatar',
        'created_at': 'createdAt'
    }

    def __init__(self, id=None, next_send=None, rrule=None, session=None, last_sent=None, contact_name=None, parameters=None, type=None, summary=None, text_parameters=None, first_occurrence=None, last_occurrence=None, recipients_count=None, timezone=None, completed=None, avatar=None, created_at=None):  # noqa: E501
        """MessagesIcs - a model defined in Swagger"""  # noqa: E501

        self._id = None
        self._next_send = None
        self._rrule = None
        self._session = None
        self._last_sent = None
        self._contact_name = None
        self._parameters = None
        self._type = None
        self._summary = None
        self._text_parameters = None
        self._first_occurrence = None
        self._last_occurrence = None
        self._recipients_count = None
        self._timezone = None
        self._completed = None
        self._avatar = None
        self._created_at = None
        self.discriminator = None

        self.id = id
        self.next_send = next_send
        self.rrule = rrule
        self.session = session
        self.last_sent = last_sent
        self.contact_name = contact_name
        self.parameters = parameters
        self.type = type
        self.summary = summary
        self.text_parameters = text_parameters
        self.first_occurrence = first_occurrence
        self.last_occurrence = last_occurrence
        self.recipients_count = recipients_count
        self.timezone = timezone
        self.completed = completed
        self.avatar = avatar
        self.created_at = created_at

    @property
    def id(self):
        """Gets the id of this MessagesIcs.  # noqa: E501

        Schedule ID.  # noqa: E501

        :return: The id of this MessagesIcs.  # noqa: E501
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this MessagesIcs.

        Schedule ID.  # noqa: E501

        :param id: The id of this MessagesIcs.  # noqa: E501
        :type: int
        """

        self._id = id

    @property
    def next_send(self):
        """Gets the next_send of this MessagesIcs.  # noqa: E501

        The next send date in [ISO 8601](https://en.wikipedia.org/?title=ISO_8601) format.   # noqa: E501

        :return: The next_send of this MessagesIcs.  # noqa: E501
        :rtype: datetime
        """
        return self._next_send

    @next_send.setter
    def next_send(self, next_send):
        """Sets the next_send of this MessagesIcs.

        The next send date in [ISO 8601](https://en.wikipedia.org/?title=ISO_8601) format.   # noqa: E501

        :param next_send: The next_send of this MessagesIcs.  # noqa: E501
        :type: datetime
        """

        self._next_send = next_send

    @property
    def rrule(self):
        """Gets the rrule of this MessagesIcs.  # noqa: E501

        [iCal RRULE](http://www.kanzaki.com/docs/ical/rrule.html) string.   # noqa: E501

        :return: The rrule of this MessagesIcs.  # noqa: E501
        :rtype: str
        """
        return self._rrule

    @rrule.setter
    def rrule(self, rrule):
        """Sets the rrule of this MessagesIcs.

        [iCal RRULE](http://www.kanzaki.com/docs/ical/rrule.html) string.   # noqa: E501

        :param rrule: The rrule of this MessagesIcs.  # noqa: E501
        :type: str
        """

        self._rrule = rrule

    @property
    def session(self):
        """Gets the session of this MessagesIcs.  # noqa: E501


        :return: The session of this MessagesIcs.  # noqa: E501
        :rtype: MessageSession
        """
        return self._session

    @session.setter
    def session(self, session):
        """Sets the session of this MessagesIcs.


        :param session: The session of this MessagesIcs.  # noqa: E501
        :type: MessageSession
        """

        self._session = session

    @property
    def last_sent(self):
        """Gets the last_sent of this MessagesIcs.  # noqa: E501

        The date and time when the last message was sent.  # noqa: E501

        :return: The last_sent of this MessagesIcs.  # noqa: E501
        :rtype: datetime
        """
        return self._last_sent

    @last_sent.setter
    def last_sent(self, last_sent):
        """Sets the last_sent of this MessagesIcs.

        The date and time when the last message was sent.  # noqa: E501

        :param last_sent: The last_sent of this MessagesIcs.  # noqa: E501
        :type: datetime
        """

        self._last_sent = last_sent

    @property
    def contact_name(self):
        """Gets the contact_name of this MessagesIcs.  # noqa: E501

        Aggregated contact information. If the message was scheduled to be sent to a single contact, a full name will be returned here. Otherwise, a total amount of contacts will be returned.  # noqa: E501

        :return: The contact_name of this MessagesIcs.  # noqa: E501
        :rtype: str
        """
        return self._contact_name

    @contact_name.setter
    def contact_name(self, contact_name):
        """Sets the contact_name of this MessagesIcs.

        Aggregated contact information. If the message was scheduled to be sent to a single contact, a full name will be returned here. Otherwise, a total amount of contacts will be returned.  # noqa: E501

        :param contact_name: The contact_name of this MessagesIcs.  # noqa: E501
        :type: str
        """

        self._contact_name = contact_name

    @property
    def parameters(self):
        """Gets the parameters of this MessagesIcs.  # noqa: E501


        :return: The parameters of this MessagesIcs.  # noqa: E501
        :rtype: MessagesIcsParameters
        """
        return self._parameters

    @parameters.setter
    def parameters(self, parameters):
        """Sets the parameters of this MessagesIcs.


        :param parameters: The parameters of this MessagesIcs.  # noqa: E501
        :type: MessagesIcsParameters
        """

        self._parameters = parameters

    @property
    def type(self):
        """Gets the type of this MessagesIcs.  # noqa: E501


        :return: The type of this MessagesIcs.  # noqa: E501
        :rtype: str
        """
        return self._type

    @type.setter
    def type(self, type):
        """Sets the type of this MessagesIcs.


        :param type: The type of this MessagesIcs.  # noqa: E501
        :type: str
        """
        allowed_values = ["Once", "Hourly", "Daily", "Weekly", "Monthly", "Yearly"]  # noqa: E501
        if type not in allowed_values:
            raise ValueError(
                "Invalid value for `type` ({0}), must be one of {1}"  # noqa: E501
                .format(type, allowed_values)
            )

        self._type = type

    @property
    def summary(self):
        """Gets the summary of this MessagesIcs.  # noqa: E501

        A human-readable summary of the sending schedule.  # noqa: E501

        :return: The summary of this MessagesIcs.  # noqa: E501
        :rtype: str
        """
        return self._summary

    @summary.setter
    def summary(self, summary):
        """Sets the summary of this MessagesIcs.

        A human-readable summary of the sending schedule.  # noqa: E501

        :param summary: The summary of this MessagesIcs.  # noqa: E501
        :type: str
        """

        self._summary = summary

    @property
    def text_parameters(self):
        """Gets the text_parameters of this MessagesIcs.  # noqa: E501


        :return: The text_parameters of this MessagesIcs.  # noqa: E501
        :rtype: MessagesIcsTextParameters
        """
        return self._text_parameters

    @text_parameters.setter
    def text_parameters(self, text_parameters):
        """Sets the text_parameters of this MessagesIcs.


        :param text_parameters: The text_parameters of this MessagesIcs.  # noqa: E501
        :type: MessagesIcsTextParameters
        """

        self._text_parameters = text_parameters

    @property
    def first_occurrence(self):
        """Gets the first_occurrence of this MessagesIcs.  # noqa: E501

        First occurence date.  # noqa: E501

        :return: The first_occurrence of this MessagesIcs.  # noqa: E501
        :rtype: datetime
        """
        return self._first_occurrence

    @first_occurrence.setter
    def first_occurrence(self, first_occurrence):
        """Sets the first_occurrence of this MessagesIcs.

        First occurence date.  # noqa: E501

        :param first_occurrence: The first_occurrence of this MessagesIcs.  # noqa: E501
        :type: datetime
        """

        self._first_occurrence = first_occurrence

    @property
    def last_occurrence(self):
        """Gets the last_occurrence of this MessagesIcs.  # noqa: E501

        Last occurence date (could be `null` if the schedule is endless).  # noqa: E501

        :return: The last_occurrence of this MessagesIcs.  # noqa: E501
        :rtype: datetime
        """
        return self._last_occurrence

    @last_occurrence.setter
    def last_occurrence(self, last_occurrence):
        """Sets the last_occurrence of this MessagesIcs.

        Last occurence date (could be `null` if the schedule is endless).  # noqa: E501

        :param last_occurrence: The last_occurrence of this MessagesIcs.  # noqa: E501
        :type: datetime
        """

        self._last_occurrence = last_occurrence

    @property
    def recipients_count(self):
        """Gets the recipients_count of this MessagesIcs.  # noqa: E501

        Amount of actual recipients.  # noqa: E501

        :return: The recipients_count of this MessagesIcs.  # noqa: E501
        :rtype: int
        """
        return self._recipients_count

    @recipients_count.setter
    def recipients_count(self, recipients_count):
        """Sets the recipients_count of this MessagesIcs.

        Amount of actual recipients.  # noqa: E501

        :param recipients_count: The recipients_count of this MessagesIcs.  # noqa: E501
        :type: int
        """

        self._recipients_count = recipients_count

    @property
    def timezone(self):
        """Gets the timezone of this MessagesIcs.  # noqa: E501

        User-friendly timezone name (with spaces replaced by underscores).  # noqa: E501

        :return: The timezone of this MessagesIcs.  # noqa: E501
        :rtype: str
        """
        return self._timezone

    @timezone.setter
    def timezone(self, timezone):
        """Sets the timezone of this MessagesIcs.

        User-friendly timezone name (with spaces replaced by underscores).  # noqa: E501

        :param timezone: The timezone of this MessagesIcs.  # noqa: E501
        :type: str
        """

        self._timezone = timezone

    @property
    def completed(self):
        """Gets the completed of this MessagesIcs.  # noqa: E501

        Indicates that scheduling has been completed.  # noqa: E501

        :return: The completed of this MessagesIcs.  # noqa: E501
        :rtype: bool
        """
        return self._completed

    @completed.setter
    def completed(self, completed):
        """Sets the completed of this MessagesIcs.

        Indicates that scheduling has been completed.  # noqa: E501

        :param completed: The completed of this MessagesIcs.  # noqa: E501
        :type: bool
        """

        self._completed = completed

    @property
    def avatar(self):
        """Gets the avatar of this MessagesIcs.  # noqa: E501

        A relative link to the contact avatar.  # noqa: E501

        :return: The avatar of this MessagesIcs.  # noqa: E501
        :rtype: str
        """
        return self._avatar

    @avatar.setter
    def avatar(self, avatar):
        """Sets the avatar of this MessagesIcs.

        A relative link to the contact avatar.  # noqa: E501

        :param avatar: The avatar of this MessagesIcs.  # noqa: E501
        :type: str
        """

        self._avatar = avatar

    @property
    def created_at(self):
        """Gets the created_at of this MessagesIcs.  # noqa: E501

        Scheduling creation time.  # noqa: E501

        :return: The created_at of this MessagesIcs.  # noqa: E501
        :rtype: datetime
        """
        return self._created_at

    @created_at.setter
    def created_at(self, created_at):
        """Sets the created_at of this MessagesIcs.

        Scheduling creation time.  # noqa: E501

        :param created_at: The created_at of this MessagesIcs.  # noqa: E501
        :type: datetime
        """

        self._created_at = created_at

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
        if issubclass(MessagesIcs, dict):
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
        if not isinstance(other, MessagesIcs):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other