﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RestSharp.Deserializers;

namespace TextmagicRest.Model
{
    /// <summary>
    /// List of UnsubscribedContact objects
    /// </summary>
    public class UnsubscribedContactsResult
    {
        [DeserializeAs(Name = "resources")]
        public List<UnsubscribedContact> UnsubscribedContacts { get; set; }
    }
}
