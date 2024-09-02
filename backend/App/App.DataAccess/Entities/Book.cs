using System;
using System.Collections.Generic;

namespace App.DataAccess.Entities;

public partial class Book
{
    public Guid Id { get; set; }

    public string Name { get; set; } = null!;

    public string Category { get; set; } = null!;

    public string Author { get; set; } = null!;

    public int PublishingYear { get; set; }

    public string Publishing { get; set; } = null!;

    public decimal Price { get; set; }

    public string Titel { get; set; } = null!;

    public string? Img { get; set; }

    public int Qty { get; set; }
}
