using App.API.Models;
using App.BusinessLogic.Interfaces;
using App.DTO.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace App.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private  IUserService _userService;
        private  IMapper _mapper;

        /// <summary>
        /// Initializes a new instance of the <see cref="UserController"/> class.
        /// </summary>
        /// <param name="userService">The service for managing user operations.</param>
        /// <param name="mapper">The AutoMapper instance for mapping between DTOs and entities.</param>
        public UserController(IUserService userService, IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }

        /// <summary>
        /// Retrieves a user by username asynchronously.
        /// </summary>
        /// <param name="userName">The username of the user to retrieve.</param>
        /// <returns>A <see cref="UserDTO"/> representing the user, or a 404 Not Found if not found.</returns>
        [HttpGet("{userName}")]
        public async Task<ActionResult<UserDTO>> GetUser(string userName)
        {
            try
            {
                var user = await _userService.GetUserAsync(userName);
                if (user == null)
                {
                    return NotFound(); // User not found
                }
                return Ok(user); // User found
            }
            catch (Exception ex)
            {
                // Log the exception details if necessary
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

        /// <summary>
        /// Updates an existing user asynchronously.
        /// </summary>
        /// <param name="userDto">The <see cref="UserDTO"/> object containing the updated user information.</param>
        /// <returns>An <see cref="IActionResult"/> indicating the result of the update operation.</returns>
        [HttpPut]
        public async Task<IActionResult> UpdateUser([FromBody] UserDTO userDto)
        {
            if (userDto == null)
            {
                return BadRequest("User data cannot be null."); // User data cannot be null
            }

            try
            {
                await _userService.UpdateUserAsync(userDto);
                return NoContent(); // Update succeeded
            }
            catch (Exception ex)
            {
                // Log the exception details if necessary
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

        /// <summary>
        /// Creates a new user asynchronously.
        /// </summary>
        /// <param name="createUserRequest">The request body containing details of the user to create.</param>
        /// <returns>A response containing the created user and its URI.</returns>
        [HttpPost]
        public async Task<ActionResult<UserDTO>> CreateUser([FromBody] CreateUserRequest createUserRequest)
        {
            if (createUserRequest == null)
            {
                return BadRequest("User data cannot be null."); // User data cannot be null
            }

            try
            {
                var userDto = _mapper.Map<UserDTO>(createUserRequest);
                var createdUser = await _userService.CreateUserAsync(userDto);

                // Return response with 201 Created status code
                return CreatedAtAction(nameof(GetUser), new { userName = createdUser.UserName }, createdUser);
            }
            catch (Exception ex)
            {
                // Log the exception details if necessary
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

        /// <summary>
        /// Retrieves a user by their unique ID asynchronously.
        /// </summary>
        /// <param name="userId">The unique identifier of the user to retrieve.</param>
        /// <returns>A <see cref="UserDTO"/> representing the user, or a 404 Not Found if not found.</returns>
        [HttpGet("id/{userId}")]
        public async Task<ActionResult<UserDTO>> GetUserById(Guid userId)
        {
            try
            {
                var user = await _userService.GetUserByIdAsync(userId);
                if (user == null)
                {
                    return NotFound(); // User not found
                }
                return Ok(user); // User found
            }
            catch (Exception ex)
            {
                // Log the exception details if necessary
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }
    }
}
