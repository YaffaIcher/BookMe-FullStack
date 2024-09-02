using App.DTO.Models;
using System;
using System.Threading.Tasks;

namespace App.BusinessLogic.Interfaces
{
    /// <summary>
    /// Defines the contract for user-related business operations.
    /// </summary>
    public interface IUserService
    {
        /// <summary>
        /// Retrieves a user by their username asynchronously.
        /// </summary>
        /// <param name="userName">The username of the user to retrieve.</param>
        /// <returns>A task that represents the asynchronous operation. The task result contains a <see cref="UserDTO"/> object representing the user.</returns>
        Task<UserDTO> GetUserAsync(string userName);

        /// <summary>
        /// Updates an existing user asynchronously.
        /// </summary>
        /// <param name="user">The <see cref="UserDTO"/> object containing the updated user information.</param>
        /// <returns>A task that represents the asynchronous operation.</returns>
        Task UpdateUserAsync(UserDTO user);

        /// <summary>
        /// Creates a new user asynchronously.
        /// </summary>
        /// <param name="user">The <see cref="UserDTO"/> object containing the user information to be created.</param>
        /// <returns>A task that represents the asynchronous operation. The task result contains a <see cref="UserDTO"/> object representing the newly created user.</returns>
        Task<UserDTO> CreateUserAsync(UserDTO user);

        /// <summary>
        /// Retrieves a user by their unique identifier asynchronously.
        /// </summary>
        /// <param name="userId">The unique identifier of the user to retrieve.</param>
        /// <returns>A task that represents the asynchronous operation. The task result contains a <see cref="UserDTO"/> object representing the user.</returns>
        Task<UserDTO> GetUserByIdAsync(Guid userId);
    }
}
