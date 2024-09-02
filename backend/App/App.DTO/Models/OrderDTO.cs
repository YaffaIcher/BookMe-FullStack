namespace App.DTO.Models
{
    /// <summary>
    /// Data Transfer Object (DTO) representing an order.
    /// </summary>
    public class OrderDTO
    {
        /// <summary>
        /// Gets or sets the unique identifier of the order.
        /// </summary>
        public Guid OrderId { get; set; }

        /// <summary>
        /// Gets or sets the unique identifier of the user associated with the order.
        /// </summary>
        public Guid UserId { get; set; }

        /// <summary>
        /// Gets or sets the total amount of the order.
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
