using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Autoform.NET.Controllers
{
    [Route("[controller]")]
    public class DataController : Controller
    {
        public JsonResult Index() => Json(
            new Dictionary<string, List<Dictionary<string, string>>>
            {
                ["items"] = new List<Dictionary<string, string>> {
                    new Dictionary<string, string> { ["id"] = "1", ["name"] = "Name", ["price"] = "1" }
                }
            } );
    }
}
