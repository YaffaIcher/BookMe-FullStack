using App.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.DataAccess.Interfaces
{
    /// <summary>
    /// Provides methods for performing CRUD operations on user data.
    /// </summary>
    public interface IUsersRepository
    {
        /// <summary>
        /// Asynchronously retrieves a user by their username.
        /// </summary>
        /// <param name="userName">The unique username of the user to be retrieved.</param>
        /// <returns>A task that represents the asynchronous operation, containing the <see cref="User"/> object.</returns>
        Task<User> GetUserAsync(string userName);

        /// <summary>
        /// Asynchronously updates an existing user.
        /// </summary>
        /// <param name="user">The <see cref="User"/> object with updated information.</param>
        /// <returns>A task that represents the asynchronous operation.</returns>
        Task UpdateUserAsync(User user);

        /// <summary>
        /// Asynchronously creates a new user.
        /// </summary>
        /// <param name="user">The <see cref="User"/> object to be created.</param>
        /// <returns>A task that represents the asynchronous operation, containing the created <see cref="User"/> object.</returns>
        Task<User> CreateUserAsync(User user);

        /// <summary>
        /// Asynchronously retrieves a user by their unique identifier.
        /// </summary>
        /// <param name="userId">The unique identifier of the user to be retrieved.</param>
        /// <returns>A task that represents the asynchronous operation, containing the <see cref="User"/> object.</returns>
        Task<User> GetUserByIdAsync(Guid userId);
    }
}
