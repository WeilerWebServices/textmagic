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
package Net::Sms::TextMagicClient::Object::Survey;

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

use Net::Sms::TextMagicClient::Object::SurveyRecipient;
use Net::Sms::TextMagicClient::Object::SurveySenderCountries;

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
                                  class => 'Survey',
                                  required => [], # TODO
}                                 );

__PACKAGE__->method_documentation({
    'id' => {
    	datatype => 'int',
    	base_name => 'id',
    	description => '',
    	format => '',
    	read_only => '',
    		},
    'name' => {
    	datatype => 'string',
    	base_name => 'name',
    	description => '',
    	format => '',
    	read_only => '',
    		},
    'status' => {
    	datatype => 'string',
    	base_name => 'status',
    	description => '',
    	format => '',
    	read_only => '',
    		},
    'created_at' => {
    	datatype => 'DateTime',
    	base_name => 'createdAt',
    	description => '',
    	format => '',
    	read_only => '',
    		},
    'updated_at' => {
    	datatype => 'DateTime',
    	base_name => 'updatedAt',
    	description => '',
    	format => '',
    	read_only => '',
    		},
    'receipents' => {
    	datatype => 'ARRAY[SurveyRecipient]',
    	base_name => 'receipents',
    	description => '',
    	format => '',
    	read_only => '',
    		},
    'countries' => {
    	datatype => 'ARRAY[SurveySenderCountries]',
    	base_name => 'countries',
    	description => '',
    	format => '',
    	read_only => '',
    		},
});

__PACKAGE__->swagger_types( {
    'id' => 'int',
    'name' => 'string',
    'status' => 'string',
    'created_at' => 'DateTime',
    'updated_at' => 'DateTime',
    'receipents' => 'ARRAY[SurveyRecipient]',
    'countries' => 'ARRAY[SurveySenderCountries]'
} );

__PACKAGE__->attribute_map( {
    'id' => 'id',
    'name' => 'name',
    'status' => 'status',
    'created_at' => 'createdAt',
    'updated_at' => 'updatedAt',
    'receipents' => 'receipents',
    'countries' => 'countries'
} );

__PACKAGE__->mk_accessors(keys %{__PACKAGE__->attribute_map});


1;