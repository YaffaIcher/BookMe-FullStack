using System;
using System.Collections.Generic;

namespace App.DataAccess.Entities;

public partial class User
{
    public string UserName { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Password { get; set; } = null!;

    public Guid UserId { get; set; }

    public string FullName { get; set; } = null!;

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();
}
