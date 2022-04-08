using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.ViewModels
{
    public class EmployeeReq
    {
        public int EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Patronymic { get; set; }
        public string RoleCode { get; set; }
        public string Territory { get; set; }
        public DateTime LicenseDate { get; set; }
        public string LicenseNumber { get; set; }
    }
}
