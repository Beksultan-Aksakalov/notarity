using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class Client
    {
        public int Id { get; set; }
        public int ClientType { get; set; }
        public int IINBIN { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Patronymic { get; set; }
        public DateTime BirthDate { get; set; }
        public int BirthAddressId { get; set; }
        public int HomeAddressId { get; set; }
        public Address HomeAddress { get; set; }
        public Address Address { get; set; }

    }
}
