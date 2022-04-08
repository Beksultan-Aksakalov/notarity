using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.ViewModels
{
    public class ClientReq
    {
        public int ClientId { get; set; }
        public string ClientType { get; set; }
        public string IINBIN { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string Patronymic { get; set; }
        public DateTime BirthDate { get; set; }
        public AddressReq BirthAddress { get; set; }
        public AddressReq HomeAddress { get; set; }
    }
}
