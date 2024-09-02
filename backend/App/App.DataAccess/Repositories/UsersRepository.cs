using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using App.DataAccess.Entities;
using App.DataAccess.Interfaces;
using App.DataAccess.DataContext;

namespace App.DataAccess.Repositories
{
    /// <summary>
    /// Implementation of the <see cref="IUsersRepository"/> interface for interacting with user data.
    /// </summary>
    public class UsersRepository : IUsersRepository
    {
        private  BookMeContext db;

        /// <summary>
        /// Initializes a new instance of the <see cref="UsersRepository"/> class.
        /// </summary>
        /// <param name="bookMeContext">The <see cref="BookMeContext"/> instance used to interact with the database.</param>
        public UsersRepository(BookMeContext bookMeContext)
        {
            db = bookMeContext;
        }

        /// <summary>
        /// Asynchronously retrieves a user by their username.
        /// </summary>
        /// <param name="userName">The username of the user to retrieve.</param>
        /// <returns>A task representing the asynchronous operation, containing the <see cref="User"/> entity if found; otherwise, null.</returns>
        public async Task<User> GetUserAsync(string userName)
        {
            try
            {
                return await db.Users.SingleOrDefaultAsync(u => u.UserName == userName);
            }
            catch (Exception ex)
            {
                // Error handling
                Console.WriteLine($"Error fetching user: {ex.Message}");
                throw; // Important to re-throw the exception to indicate the issue
            }
        }

        /// <summary>
        /// Asynchronously updates a user.
        /// </summary>
        /// <param name="user">The <see cref="User"/> entity to be updated.</param>
        /// <returns>A task representing the asynchronous operation.</returns>
        public async Task UpdateUserAsync(User user)
        {
            try
            {
                db.Users.Entry(user).State = EntityState.Modified;
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
                // Database update error handling
                Console.WriteLine($"Database update error: {ex.Message}");
                throw;
            }
            catch (Exception ex)
            {
                // General error handling
                Console.WriteLine($"Error updating user: {ex.Message}");
                throw;
            }
        }

        /// <summary>
        /// Asynchronously creates a new user.
        /// </summary>
        /// <param name="user">The <see cref="User"/> entity to be created.</param>
        /// <returns>A task representing the asynchronous operation, containing the created <see cref="User"/> entity.</returns>
        public async Task<User> CreateUserAsync(User user)
        {
            try
            {
                var createdUser = db.Users.Add(user).Entity;
                await db.SaveChangesAsync();
                return createdUser;
            }
            catch (DbUpdateException ex)
            {
                // Database update error handling
                Console.WriteLine($"Database update error: {ex.Message}");
                throw;
            }
            catch (Exception ex)
            {
                // General error handling
                Console.WriteLine($"Error creating user: {ex.Message}");
                throw;
            }
        }

        /// <summary>
        /// Asynchronously retrieves a user by their unique identifier.
        /// </summary>
        /// <param name="userId">The unique identifier of the user to retrieve.</param>
        /// <returns>A task representing the asynchronous operation, containing the <see cref="User"/> entity if found; otherwise, null.</returns>
        public async Task<User> GetUserByIdAsync(Guid userId)
        {
            try
            {
                return await db.Users.SingleOrDefaultAsync(u => u.UserId == userId);
            }
            catch (Exception ex)
            {
                // Error handling
                Console.WriteLine($"Error fetching user by ID: {ex.Message}");
                throw; // Important to re-throw the exception to indicate the issue
            }
        }
    }
}
