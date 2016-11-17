using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SitoPersonale.Services
{
    interface IMailSender
    {
        bool SendMail(string from, string to, string subject, string body);
    }
}
