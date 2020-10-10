using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Autoform.NET.Models
{
    public class DummyData
    {
        public static List<Page> Pages = new List<Page>
        {
            new Page
            {
                Elements = new List<Element>
                {
                    new Element
                    {
                        Type = "input",
                        Name = "s_date",
                        Label = "Дата начала поездки",
                        Comment = "Введите предполагаемую дату начала поездки",
                        Example = "31.12.1900",
                        Check = @"zD^(([012]\d|3[01])\.((0\d)|(1[012]))\.(19\d\d|20[0-3]\d))$",
                    },
                    new Element
                    {
                        Type = "input",
                        Name = "e_date",
                        Label = "Дата конца поездки",
                        Comment = "Введите предполагаемую дату конца поездки",
                        Example = "31.12.1901",
                        Check = @"zD^(([012]\d|3[01])\.((0\d)|(1[012]))\.(19\d\d|20[0-3]\d))$",
                    }
                }
            },
            new Page
            {
                Elements = new List<Element>
                {
                    new Element
                    {
                        Type = "text",
                        Name = "text",
                        Label = "Просто пустое поле",
                        Comment = "Текст",
                        Example = "",
                        Check = @"",
                    },
                    new Element
                    {
                        Type = "checkbox",
                        Name = "checkbox",
                        Label = "Чекбокс",
                        Comment = "Комментарий к чекбоксу",
                        Example = "",
                        Check = @"",
                    },
                }
            }
        };
    }
}
