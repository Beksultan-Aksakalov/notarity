using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.ViewModels
{
    public class DocumentReq
    {
        public int DocumentId { get; set; }
        public int Number { get; set; }
        public DateTime DocDate { get; set; }
        public DateTime DateBegin { get; set; }
        public DateTime DateEnd { get; set; }
        public string Territory { get; set; }
        public string Action { get; set; }
        public EmployeeReq Employee { get; set; }
        public ClientReq MajorPerson { get; set; }
        public ClientReq MinorPerson { get; set; }
        public string Type { get; set; }
        public string SubType { get; set; }

    }
}
