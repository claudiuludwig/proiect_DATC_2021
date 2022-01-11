using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CityDangersAlert.Data
{
    public class CityDangersAlertDBContext: DbContext 
    {
        public CityDangersAlertDBContext(DbContextOptions<CityDangersAlertDBContext> options):base(options)
        {

        }

        public DbSet<Member> tblMembers { get; set; }
        public DbSet<Card> tblCards { get; set; }
    }
}
