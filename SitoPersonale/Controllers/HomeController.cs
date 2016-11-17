using SitoPersonale.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SitoPersonale.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(string from, string to, string mittente, string subject, string messaggio)
        {
            var services = new MailSender();

            string msg = "E-Mail Mittente: " + mittente + "\nInviato: " + DateTime.Now.ToString("dd/MM/yyyy - hh:mm") + "\nMessaggio:\n" + messaggio;

            ViewBag.IsSent = services.SendMail(from, to, subject, msg);

            return View();
        }
    }
}