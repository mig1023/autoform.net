using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Autoform.NET.Models;

namespace Autoform.NET.Controllers
{
    [Route("[controller]")]
    public class DataController : Controller
    {
        public JsonResult Index() => Json(DummyData.Pages);
    }
}
