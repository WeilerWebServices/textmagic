use ExtUtils::MakeMaker;

WriteMakefile(
    NAME            => 'Net::Sms::TextMagicClient',
    VERSION => 2.0.1588,
    PREREQ_PM  => {
        "URI::Query" => 0,
        "Log::Any" => 0,
        "JSON" => 0,
        "Data::Dumper" => 0,
        "LWP::UserAgent" => 0,
        "Module::Runtime" => 0,
        "Class::Data::Inheritable" => 0,
        "Date::Parse" => 0,
        "DateTime" => 0,
        "Class::Accessor" => 0,
        "LWP::Protocol::https" => 0
    }
);