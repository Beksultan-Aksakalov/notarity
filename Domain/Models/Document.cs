using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class Document
    {
        public int Id { get; set; }
        public int Number { get; set; }
        public DateTime DateBegin { get; set; }
        public DateTime DateEnd { get; set; }
        public DateTime DocDate { get; set; }
        public DateTime Place { get; set; }
        public int EmployeeId { get; set; }
        public int DocumentTypeId { get; set; }
        public Employee Employee { get; set; }
        public DocumentType Type { get; set; }
    }
}
 