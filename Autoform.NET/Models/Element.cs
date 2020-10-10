using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Autoform.NET.Models
{
    public class Element
    {
        public string Type { get; set; }
        public string Name { get; set; }
        public string Label { get; set; }
        public string Comment { get; set; }
        public string Example { get; set; }
        public string Check { get; set; }
    }
}
