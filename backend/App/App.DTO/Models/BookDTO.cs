using System;

namespace App.DTO.Models
{
    /// <summary>
    /// Data Transfer Object (DTO) representing a book.
    /// </summary>
    public class BookDTO
    {
        /// <summary>
        /// Gets or sets the unique identifier for the book.
        /// </summary>
        public Guid Id { get; set; }

        /// <summary>
        /// Gets or sets the name of the book.
        /// </summary>
        public string Name { get; set; } = null!;

        /// <summary>
        /// Gets or sets the category or genre of the book.
        /// </summary>
        public string Category { get; set; } = null!;

        /// <summary>
        /// Gets or sets the author of the book.
        /// </summary>
        public string Author { get; set; } = null!;

        /// <summary>
        /// Gets or sets the year the book was published.
        /// </summary>
        public int PublishingYear { get; set; }

        /// <summary>
        /// Gets or sets the name of the publisher of the book.
        /// </summary>
        public string Publishing { get; set; } = null!;

        /// <summary>
        /// Gets or sets the price of the book.
        /// </summary>
        public decimal Price { get; set; }

        /// <summary>
        /// Gets or sets the title or description of the book.
        /// </summary>
        public string Titel { get; set; } = null!;

        /// <summary>
        /// Gets or sets the URL or path of the book's cover image.
        /// </summary>
        public string? Img { get; set; }

        /// <summary>
        /// Gets or sets the quantity of the book available in stock.
        /// </summary>
        public int Qty { get; set; }
    }
}
