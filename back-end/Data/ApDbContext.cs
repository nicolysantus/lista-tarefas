using Microsoft.EntityFrameworkCore;
using to_do_list.Models;

namespace to_do_list.Data
{
    public class ApDbContext : DbContext
    {
        public ApDbContext(DbContextOptions<ApDbContext> options) : base(options)
        {
        }

        public DbSet<ListaModel> Lista { get; set; }
    }
}
