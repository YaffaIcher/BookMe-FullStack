using App.DataAccess.Entities;

namespace App.API.Models
{
    /// <summary>
    /// Represents the request body required to create a new order.
    /// </summary>
    public class CreateOrderRequest
    {
        /// <summary>
        /// Gets or sets the unique identifier of the user placing the order.
        /// </summary>
        public Guid UserId { get; set; }

        /// <summary>
        /// Gets or sets the total amount for the order.
        /// </summary>
        public decimal TotalAmount { get; set; }

        /// <summary>
        /// Gets or sets the payment status of the order.
        /// </summary>
        public bool PaymentStatus { get; set; }

        /// <summary>
        /// Gets or sets the date and time when the order was placed.
        /// </summary>
        public DateTime OrderDate { get; set; }
    }
}
