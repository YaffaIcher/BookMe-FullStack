using System;
using System.Collections.Generic;
using App.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace App.DataAccess.DataContext;

public partial class BookMeContext : DbContext
{
   

    public BookMeContext(DbContextOptions<BookMeContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Book> Books { get; set; }

    public virtual DbSet<Order> Orders { get; set; }

    public virtual DbSet<User> Users { get; set; }

   
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Book>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK_AllBooks");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.Author)
                .HasMaxLength(35)
                .HasColumnName("author");
            entity.Property(e => e.Category)
                .HasMaxLength(30)
                .HasColumnName("category");
            entity.Property(e => e.Img)
                .HasMaxLength(300)
                .HasColumnName("img");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .HasColumnName("name");
            entity.Property(e => e.Price)
                .HasColumnType("money")
                .HasColumnName("price");
            entity.Property(e => e.Publishing)
                .HasMaxLength(30)
                .HasColumnName("publishing");
            entity.Property(e => e.PublishingYear).HasColumnName("publishingYear");
            entity.Property(e => e.Qty)
                .HasDefaultValue(1)
                .HasColumnName("qty");
            entity.Property(e => e.Titel)
                .HasMaxLength(1000)
                .HasColumnName("titel");
        });

        modelBuilder.Entity<Order>(entity =>
        {
            entity.Property(e => e.OrderId).ValueGeneratedNever();
            entity.Property(e => e.OrderDate).HasColumnType("datetime");
            entity.Property(e => e.TotalAmount).HasColumnType("money");

            entity.HasOne(d => d.User).WithMany(p => p.Orders)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Orders_Users");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.Property(e => e.UserId)
                .ValueGeneratedNever()
                .HasColumnName("userId");
            entity.Property(e => e.Email)
                .HasMaxLength(40)
                .HasColumnName("email");
            entity.Property(e => e.FullName)
                .HasMaxLength(40)
                .HasColumnName("fullName");
            entity.Property(e => e.Password)
                .HasMaxLength(30)
                .HasColumnName("password");
            entity.Property(e => e.UserName)
                .HasMaxLength(30)
                .HasColumnName("userName");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
