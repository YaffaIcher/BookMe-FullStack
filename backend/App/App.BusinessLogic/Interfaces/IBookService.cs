using App.DTO.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace App.BusinessLogic.Interfaces
{
    /// <summary>
    /// Defines methods for book-related operations in the business logic layer.
    /// </summary>
    public interface IBookService
    {
        /// <summary>
        /// Retrieves a book by its name asynchronously.
        /// </summary>
        /// <param name="name">The name of the book to retrieve.</param>
        /// <returns>A <see cref="BookDTO"/> object representing the book if found.</returns>
        Task<BookDTO> GetBookByNameAsync(string name);

        /// <summary>
        /// Retrieves all books asynchronously.
        /// </summary>
        /// <returns>A list of <see cref="BookDTO"/> objects representing all books.</returns>
        Task<List<BookDTO>> GetBooksAsync();

        /// <summary>
        /// Updates a book asynchronously.
        /// </summary>
        /// <param name="book">The <see cref="BookDTO"/> object containing updated book information.</param>
        /// <returns>A task representing the asynchronous operation.</returns>
        Task UpdateBookAsync(BookDTO book);

        /// <summary>
        /// Deletes a book by its name asynchronously.
        /// </summary>
        /// <param name="name">The name of the book to delete.</param>
        /// <returns>A task representing the asynchronous operation.</returns>
        Task DeleteBookAsync(string name);
    }
}
