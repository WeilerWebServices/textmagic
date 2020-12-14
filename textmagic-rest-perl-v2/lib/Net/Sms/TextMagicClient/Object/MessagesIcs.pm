=begin comment

TextMagic API

No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)

OpenAPI spec version: 2

Generated by: https://github.com/swagger-api/swagger-codegen.git

=end comment

=cut

#
# NOTE: This class is auto generated by the swagger code generator program. 
# Do not edit the class manually.
# Ref: https://github.com/swagger-api/swagger-codegen
#
package Net::Sms::TextMagicClient::Object::MessagesIcs;

require 5.6.0;
use strict;
use warnings;
use utf8;
use JSON qw(decode_json);
use Data::Dumper;
use Module::Runtime qw(use_module);
use Log::Any qw($log);
use Date::Parse;
use DateTime;

use Net::Sms::TextMagicClient::Object::MessageSession;
use Net::Sms::TextMagicClient::Object::MessagesIcsParameters;
use Net::Sms::TextMagicClient::Object::MessagesIcsTextParameters;

use base ("Class::Accessor", "Class::Data::Inheritable");


#
#
#
# NOTE: This class is auto generated by the swagger code generator program. Do not edit the class manually.
# REF: https://github.com/swagger-api/swagger-codegen
#

=begin comment

TextMagic API

No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)

OpenAPI spec version: 2

Generated by: https://github.com/swagger-api/swagger-codegen.git

=end comment

=cut

#
# NOTE: This class is auto generated by the swagger code generator program. 
# Do not edit the class manually.
# Ref: https://github.com/swagger-api/swagger-codegen
#
__PACKAGE__->mk_classdata('attribute_map' => {});
__PACKAGE__->mk_classdata('swagger_types' => {});
__PACKAGE__->mk_classdata('method_documentation' => {}); 
__PACKAGE__->mk_classdata('class_documentation' => {});

# new object
sub new { 
    my ($class, %args) = @_; 

	my $self = bless {}, $class;
	
	foreach my $attribute (keys %{$class->attribute_map}) {
		my $args_key = $class->attribute_map->{$attribute};
		$self->$attribute( $args{ $args_key } );
	}
	
	return $self;
}  

# return perl hash
sub to_hash {
    return decode_json(JSON->new->convert_blessed->encode( shift ));
}

# used by JSON for serialization
sub TO_JSON { 
    my $self = shift;
    my $_data = {};
    foreach my $_key (keys %{$self->attribute_map}) {
        if (defined $self->{$_key}) {
            $_data->{$self->attribute_map->{$_key}} = $self->{$_key};
        }
    }
    return $_data;
}

# from Perl hashref
sub from_hash {
    my ($self, $hash) = @_;

    # loop through attributes and use swagger_types to deserialize the data
    while ( my ($_key, $_type) = each %{$self->swagger_types} ) {
    	my $_json_attribute = $self->attribute_map->{$_key}; 
        if ($_type =~ /^array\[/i) { # array
            my $_subclass = substr($_type, 6, -1);
            my @_array = ();
            foreach my $_element (@{$hash->{$_json_attribute}}) {
                push @_array, $self->_deserialize($_subclass, $_element);
            }
            $self->{$_key} = \@_array;
        } elsif (exists $hash->{$_json_attribute}) { #hash(model), primitive, datetime
            $self->{$_key} = $self->_deserialize($_type, $hash->{$_json_attribute});
        } else {
        	$log->debugf("Warning: %s (%s) does not exist in input hash\n", $_key, $_json_attribute);
        }
    }
  
    return $self;
}

# deserialize non-array data
sub _deserialize {
    my ($self, $type, $data) = @_;
    $log->debugf("deserializing %s with %s",Dumper($data), $type);
        
    if ($type eq 'DateTime') {
        return DateTime->from_epoch(epoch => str2time($data));
    } elsif ( grep( /^$type$/, ('int', 'double', 'string', 'boolean'))) {
        return $data;
    } else { # hash(model)
        my $_instance = eval "Net::Sms::TextMagicClient::Object::$type->new()";
        return $_instance->from_hash($data);
    }
}



__PACKAGE__->class_documentation({description => '',
                                  class => 'MessagesIcs',
                                  required => [], # TODO
}                                 );

__PACKAGE__->method_documentation({
    'id' => {
    	datatype => 'int',
    	base_name => 'id',
    	description => 'Schedule ID.',
    	format => '',
    	read_only => '',
    		},
    'next_send' => {
    	datatype => 'DateTime',
    	base_name => 'nextSend',
    	description => 'The next send date in [ISO 8601](https://en.wikipedia.org/?title&#x3D;ISO_8601) format. ',
    	format => '',
    	read_only => '',
    		},
    'rrule' => {
    	datatype => 'string',
    	base_name => 'rrule',
    	description => '[iCal RRULE](http://www.kanzaki.com/docs/ical/rrule.html) string. ',
    	format => '',
    	read_only => '',
    		},
    'session' => {
    	datatype => 'MessageSession',
    	base_name => 'session',
    	description => '',
    	format => '',
    	read_only => '',
    		},
    'last_sent' => {
    	datatype => 'DateTime',
    	base_name => 'lastSent',
    	description => 'The date and time when the last message was sent.',
    	format => '',
    	read_only => '',
    		},
    'contact_name' => {
    	datatype => 'string',
    	base_name => 'contactName',
    	description => 'Aggregated contact information. If the message was scheduled to be sent to a single contact, a full name will be returned here. Otherwise, a total amount of contacts will be returned.',
    	format => '',
    	read_only => '',
    		},
    'parameters' => {
    	datatype => 'MessagesIcsParameters',
    	base_name => 'parameters',
    	description => '',
    	format => '',
    	read_only => '',
    		},
    'type' => {
    	datatype => 'string',
    	base_name => 'type',
    	description => '',
    	format => '',
    	read_only => '',
    		},
    'summary' => {
    	datatype => 'string',
    	base_name => 'summary',
    	description => 'A human-readable summary of the sending schedule.',
    	format => '',
    	read_only => '',
    		},
    'text_parameters' => {
    	datatype => 'MessagesIcsTextParameters',
    	base_name => 'textParameters',
    	description => '',
    	format => '',
    	read_only => '',
    		},
    'first_occurrence' => {
    	datatype => 'DateTime',
    	base_name => 'firstOccurrence',
    	description => 'First occurence date.',
    	format => '',
    	read_only => '',
    		},
    'last_occurrence' => {
    	datatype => 'DateTime',
    	base_name => 'lastOccurrence',
    	description => 'Last occurence date (could be &#x60;null&#x60; if the schedule is endless).',
    	format => '',
    	read_only => '',
    		},
    'recipients_count' => {
    	datatype => 'int',
    	base_name => 'recipientsCount',
    	description => 'Amount of actual recipients.',
    	format => '',
    	read_only => '',
    		},
    'timezone' => {
    	datatype => 'string',
    	base_name => 'timezone',
    	description => 'User-friendly timezone name (with spaces replaced by underscores).',
    	format => '',
    	read_only => '',
    		},
    'completed' => {
    	datatype => 'boolean',
    	base_name => 'completed',
    	description => 'Indicates that scheduling has been completed.',
    	format => '',
    	read_only => '',
    		},
    'avatar' => {
    	datatype => 'string',
    	base_name => 'avatar',
    	description => 'A relative link to the contact avatar.',
    	format => '',
    	read_only => '',
    		},
    'created_at' => {
    	datatype => 'DateTime',
    	base_name => 'createdAt',
    	description => 'Scheduling creation time.',
    	format => '',
    	read_only => '',
    		},
});

__PACKAGE__->swagger_types( {
    'id' => 'int',
    'next_send' => 'DateTime',
    'rrule' => 'string',
    'session' => 'MessageSession',
    'last_sent' => 'DateTime',
    'contact_name' => 'string',
    'parameters' => 'MessagesIcsParameters',
    'type' => 'string',
    'summary' => 'string',
    'text_parameters' => 'MessagesIcsTextParameters',
    'first_occurrence' => 'DateTime',
    'last_occurrence' => 'DateTime',
    'recipients_count' => 'int',
    'timezone' => 'string',
    'completed' => 'boolean',
    'avatar' => 'string',
    'created_at' => 'DateTime'
} );

__PACKAGE__->attribute_map( {
    'id' => 'id',
    'next_send' => 'nextSend',
    'rrule' => 'rrule',
    'session' => 'session',
    'last_sent' => 'lastSent',
    'contact_name' => 'contactName',
    'parameters' => 'parameters',
    'type' => 'type',
    'summary' => 'summary',
    'text_parameters' => 'textParameters',
    'first_occurrence' => 'firstOccurrence',
    'last_occurrence' => 'lastOccurrence',
    'recipients_count' => 'recipientsCount',
    'timezone' => 'timezone',
    'completed' => 'completed',
    'avatar' => 'avatar',
    'created_at' => 'createdAt'
} );

__PACKAGE__->mk_accessors(keys %{__PACKAGE__->attribute_map});


1;