using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace AgileFoodOrderApp.Models
{
    public partial class FoodOrderContext : DbContext
    {
        public FoodOrderContext()
        {
        }

        public FoodOrderContext(DbContextOptions<FoodOrderContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Food> Food { get; set; }
        public virtual DbSet<Order> Order { get; set; }
        public virtual DbSet<OrderDetail> OrderDetail { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity<Food>(entity =>
            {
                entity.Property(e => e.FoodId).HasColumnName("FoodID");

                entity.Property(e => e.FoodImage)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.FoodName)
                    .IsRequired()
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.ToTable("_Order");

                entity.Property(e => e.OrderId).HasColumnName("OrderID");

                entity.Property(e => e.CusAddress)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.CusName)
                    .IsRequired()
                    .HasMaxLength(60);

                entity.Property(e => e.CusPhone)
                    .IsRequired()
                    .HasMaxLength(20);

                entity.Property(e => e.OrderAt).HasColumnType("datetime");
            });

            modelBuilder.Entity<OrderDetail>(entity =>
            {
                entity.HasKey(e => e.DetailId)
                    .HasName("PK__OrderDet__135C314D07F6335A");

                entity.Property(e => e.DetailId).HasColumnName("DetailID");

                entity.Property(e => e.FoodId).HasColumnName("FoodID");

                entity.Property(e => e.OrderId).HasColumnName("OrderID");

                entity.HasOne(d => d.Food)
                    .WithMany(p => p.OrderDetail)
                    .HasForeignKey(d => d.FoodId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_FoodID");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.OrderDetail)
                    .HasForeignKey(d => d.OrderId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_OrderID");
            });
        }
    }
}
