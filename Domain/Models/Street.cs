using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class Street
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int HomeNum { get; set; }
        public string AddInfo { get; set; }

        public Address Address { get; set; }
    }
}
