using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.ViewModels
{
    public class AddressReq
    {
        public string Territory { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public string HomeNum { get; set; }
        public string AddInfo { get; set; }
    }
}
