using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class Address
    {
        public int Id { get; set; }
        public int StreetId { get; set; }
        public int CityId { get; set; }
        public int TerritoryId { get; set; }

        public Street Street { get; set; }
        public City City { get; set; }

        public Client Client { get; set; }

    }
}
