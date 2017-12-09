using Microsoft.EntityFrameworkCore;

namespace TodoApi.Models
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options)
        : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TodoItem>().ToTable("messages");            
            modelBuilder.Entity<TodoItem>().Property(m => m.id).HasColumnName("message_id");
            modelBuilder.Entity<TodoItem>().HasKey(m => m.id);

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<TodoItem> messages { get; set; }
    }
}