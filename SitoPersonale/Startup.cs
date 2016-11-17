using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SitoPersonale.Startup))]
namespace SitoPersonale
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
