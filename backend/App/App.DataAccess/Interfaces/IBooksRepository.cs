using App.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace App.DataAccess.Interfaces
{
    /// <summary>
    /// Defines the contract for book-related data operations.
    /// </summary>
    public interface IBooksRepository
    {
        /// <summary>
        /// Retrieves all books from the repository asynchronously.
        /// </summary>
        /// <returns>A task representing the asynchronous operation, with a list of <see cref="Book"/> entities as its result.</returns>
        Task<List<Book>> GetBooksAsync();

        /// <summary>
        /// Retrieves a book by its name asynchronously.
        /// </summary>
        /// <param name="name">The name of the book to retrieve.</param>
        /// <returns>A task representing the asynchronous operation, with the <see cref="Book"/> entity as its result.</returns>
        Task<Book> GetBookByNameAsync(string name);

        /// <summary>
        /// Updates a book in the repository asynchronously.
        /// </summary>
        /// <param name="book">The <see cref="Book"/> entity with updated information.</param>
        /// <returns>A task representing the asynchronous operation.</returns>
        Task UpdateBookAsync(Book book);

        /// <summary>
        /// Deletes a book from the repository by its name asynchronously.
        /// </summary>
        /// <param name="name">The name of the book to delete.</param>
        /// <returns>A task representing the asynchronous operation.</returns>
        Task DeleteBookAsync(string name);
    }
}
