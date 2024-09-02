using App.BusinessLogic.Interfaces;
using App.DataAccess.Interfaces;
using App.DataAccess.Entities;
using App.DTO.Models;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace App.BusinessLogic.Services
{
    /// <summary>
    /// Service class for managing books, implementing the <see cref="IBookService"/> interface.
    /// Provides methods for book retrieval, updating, and deletion.
    /// </summary>
    public class BookService : IBookService
    {
        private  IBooksRepository _booksRepository;
        private  IMapper _mapper;

        /// <summary>
        /// Initializes a new instance of the <see cref="BookService"/> class.
        /// </summary>
        /// <param name="booksRepository">The repository for accessing book data.</param>
        /// <param name="mapper">The AutoMapper instance for mapping between entities and DTOs.</param>
        public BookService(IBooksRepository booksRepository, IMapper mapper)
        {
            _booksRepository = booksRepository;
            _mapper = mapper;
        }

        /// <summary>
        /// Retrieves all books asynchronously.
        /// </summary>
        /// <returns>A list of <see cref="BookDTO"/> objects representing all books.</returns>
        /// <exception cref="Exception">Thrown if an error occurs while fetching the books.</exception>
        public async Task<List<BookDTO>> GetBooksAsync()
        {
            try
            {
                var booksList = await _booksRepository.GetBooksAsync();
                return _mapper.Map<List<BookDTO>>(booksList);
            }
            catch (Exception ex)
            {
                // Log general errors
                Console.WriteLine($"Error fetching books: {ex.Message}");
                throw; // Rethrow the exception to propagate it
            }
        }

        /// <summary>
        /// Retrieves a book by its name asynchronously.
        /// </summary>
        /// <param name="name">The name of the book to retrieve.</param>
        /// <returns>A <see cref="BookDTO"/> object representing the book.</returns>
        /// <exception cref="Exception">Thrown if an error occurs while fetching the book.</exception>
        public async Task<BookDTO> GetBookByNameAsync(string name)
        {
            try
            {
                var book = await _booksRepository.GetBookByNameAsync(name);
                return _mapper.Map<BookDTO>(book);
            }
            catch (Exception ex)
            {
                // Log general errors
                Console.WriteLine($"Error fetching book by name: {ex.Message}");
                throw; // Rethrow the exception to propagate it
            }
        }

        /// <summary>
        /// Updates a book asynchronously.
        /// </summary>
        /// <param name="bookDto">The <see cref="BookDTO"/> object containing the updated book data.</param>
        /// <exception cref="Exception">Thrown if an error occurs while updating the book.</exception>
        public async Task UpdateBookAsync(BookDTO bookDto)
        {
            try
            {
                var book = _mapper.Map<Book>(bookDto);
                await _booksRepository.UpdateBookAsync(book);
            }
            catch (Exception ex)
            {
                // Log general errors
                Console.WriteLine($"Error updating book: {ex.Message}");
                throw; // Rethrow the exception to propagate it
            }
        }

        /// <summary>
        /// Deletes a book by its name asynchronously.
        /// </summary>
        /// <param name="name">The name of the book to delete.</param>
        /// <exception cref="Exception">Thrown if an error occurs while deleting the book.</exception>
        public async Task DeleteBookAsync(string name)
        {
            try
            {
                await _booksRepository.DeleteBookAsync(name);
            }
            catch (Exception ex)
            {
                // Log general errors
                Console.WriteLine($"Error deleting book: {ex.Message}");
                throw; // Rethrow the exception to propagate it
            }
        }
    }
}
