﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Web;

namespace SitoPersonale.Services
{
    public class MailSender : IMailSender
    {
        public bool SendMail(string from, string to, string subject, string body)
        {
            try
            {
                var msg = new MailMessage(from, to, subject, body);
                var client = new SmtpClient();
                client.Send(msg);
            }
            catch (Exception e)
            {
                return false;
            }
            return true;
        }
    }
}