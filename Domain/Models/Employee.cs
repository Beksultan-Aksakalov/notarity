using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Patronymic { get; set; }
        public int RoleId { get; set; }
        public int TerritoryId { get; set; }
        public DateTime LicenseDate { get; set; }

        public Role Role { get; set; }
        public Territory Territory { get; set; }
        public Document Document { get; set; }
    }
}
