using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class DocumentType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public int SubtypeId { get; set; }
        public string Description { get; set; }
        public Subtype Subtype { get; set; }
        public Document Document { get; set; }
    }
}
