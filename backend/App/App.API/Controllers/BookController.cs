using App.BusinessLogic.Interfaces;
using App.DTO.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace App.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private  IBookService _bookService;
        private  IMapper _mapper;

        public BookController(IBookService bookService, IMapper mapper)
        {
            _bookService = bookService;
            _mapper = mapper;
        }

        /// <summary>
        /// Retrieves all books asynchronously.
        /// </summary>
        /// <returns>A list of <see cref="BookDTO"/> objects.</returns>
        [HttpGet]
        public async Task<ActionResult<List<BookDTO>>> GetBooks()
        {
            try
            {
                var books = await _bookService.GetBooksAsync();
                return Ok(books);
            }
            catch (Exception ex)
            {
                // Log the error if needed
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

        /// <summary>
        /// Retrieves a book by its name asynchronously.
        /// </summary>
        /// <param name="name">The name of the book to retrieve.</param>
        /// <returns>A <see cref="BookDTO"/> object if found, otherwise NotFound.</returns>
        [HttpGet("{name}")]
        public async Task<ActionResult<BookDTO>> GetBookByName(string name)
        {
            try
            {
                var book = await _bookService.GetBookByNameAsync(name);
                if (book == null)
                {
                    return NotFound();
                }
                return Ok(book);
            }
            catch (Exception ex)
            {
                // Log the error if needed
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

        /// <summary>
        /// Updates a book asynchronously.
        /// </summary>
        /// <param name="book">The book data to update.</param>
        /// <returns>NoContent if successful, BadRequest if the input is invalid.</returns>
        [HttpPut]
        public async Task<IActionResult> UpdateBook([FromBody] BookDTO book)
        {
            try
            {
                if (book == null)
                {
                    return BadRequest("Invalid input.");
                }

                await _bookService.UpdateBookAsync(book);
                return NoContent();
            }
            catch (Exception ex)
            {
                // Log the error if needed
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

        /// <summary>
        /// Deletes a book by its name asynchronously.
        /// </summary>
        /// <param name="name">The name of the book to delete.</param>
        /// <returns>NoContent if successful, NotFound if the book is not found.</returns>
        [HttpDelete("{name}")]
        public async Task<IActionResult> DeleteBook(string name)
        {
            try
            {
                var book = await _bookService.GetBookByNameAsync(name);
                if (book == null)
                {
                    return NotFound();
                }

                await _bookService.DeleteBookAsync(name);
                return NoContent();
            }
            catch (Exception ex)
            {
                // Log the error if needed
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }
    }
}
