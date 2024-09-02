using App.DataAccess.Interfaces;
using App.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using App.DataAccess.DataContext;

namespace App.DataAccess.Repositories
{
    /// <summary>
    /// Implementation of the <see cref="IBooksRepository"/> interface for managing book data.
    /// </summary>
    public class BooksRepository : IBooksRepository
    {
        private  BookMeContext _db;

        /// <summary>
        /// Initializes a new instance of the <see cref="BooksRepository"/> class.
        /// </summary>
        /// <param name="bookMeContext">The database context for book operations.</param>
        public BooksRepository(BookMeContext bookMeContext)
        {
            _db = bookMeContext;
        }

        /// <summary>
        /// Retrieves all books from the database asynchronously.
        /// </summary>
        /// <returns>A task representing the asynchronous operation, with a list of <see cref="Book"/> entities as its result.</returns>
        public async Task<List<Book>> GetBooksAsync()
        {
            try
            {
                return await _db.Books.ToListAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching books: {ex.Message}");
                throw; // Propagate the exception to the caller
            }
        }

        /// <summary>
        /// Retrieves a book by its name from the database asynchronously.
        /// </summary>
        /// <param name="name">The name of the book to retrieve.</param>
        /// <returns>A task representing the asynchronous operation, with the <see cref="Book"/> entity as its result.</returns>
        public async Task<Book> GetBookByNameAsync(string name)
        {
            try
            {
                return await _db.Books.SingleOrDefaultAsync(b => b.Name == name);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching book by name: {ex.Message}");
                throw; // Propagate the exception to the caller
            }
        }

        /// <summary>
        /// Updates a book in the database asynchronously.
        /// </summary>
        /// <param name="book">The <see cref="Book"/> entity with updated information.</param>
        /// <returns>A task representing the asynchronous operation.</returns>
        public async Task UpdateBookAsync(Book book)
        {
            try
            {
                _db.Books.Entry(book).State = EntityState.Modified;
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
                Console.WriteLine($"Database update error: {ex.Message}");
                throw; // Propagate the exception to the caller
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error updating book: {ex.Message}");
                throw; // Propagate the exception to the caller
            }
        }

        /// <summary>
        /// Deletes a book by its name from the database asynchronously.
        /// </summary>
        /// <param name="name">The name of the book to delete.</param>
        /// <returns>A task representing the asynchronous operation.</returns>
        public async Task DeleteBookAsync(string name)
        {
            try
            {
                var bookToDelete = await _db.Books.SingleOrDefaultAsync(b => b.Name == name);
                if (bookToDelete != null)
                {
                    _db.Books.Remove(bookToDelete);
                    await _db.SaveChangesAsync();
                }
            }
            catch (DbUpdateException ex)
            {
                Console.WriteLine($"Database update error: {ex.Message}");
                throw; // Propagate the exception to the caller
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error deleting book: {ex.Message}");
                throw; // Propagate the exception to the caller
            }
        }
    }
}
