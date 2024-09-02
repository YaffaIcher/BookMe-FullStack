using System;
using System.Collections.Generic;

namespace App.DataAccess.Entities;

public partial class Order
{
    public Guid OrderId { get; set; }

    public Guid UserId { get; set; }

    public decimal TotalAmount { get; set; }

    public bool PaymentStatus { get; set; }

    public DateTime OrderDate { get; set; }

    public virtual User User { get; set; } = null!;
}
