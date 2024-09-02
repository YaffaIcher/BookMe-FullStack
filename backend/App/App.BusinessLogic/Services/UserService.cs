using AutoMapper;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using App.BusinessLogic.Interfaces;
using App.DataAccess.Entities;
using App.DTO.Models;
using App.DataAccess.Interfaces;

namespace App.BusinessLogic.Services
{
    /// <summary>
    /// Provides business logic for managing users.
    /// </summary>
    public class UserService : IUserService
    {
        private  IUsersRepository _usersRepository;
        private  IMapper _mapper;

        /// <summary>
        /// Initializes a new instance of the <see cref="UserService"/> class.
        /// </summary>
        /// <param name="usersRepository">The repository used to access user data.</param>
        /// <param name="mapper">The AutoMapper instance for mapping between entities and DTOs.</param>
        public UserService(IUsersRepository usersRepository, IMapper mapper)
        {
            _usersRepository = usersRepository;
            _mapper = mapper;
        }

        /// <summary>
        /// Retrieves a user by their username asynchronously.
        /// </summary>
        /// <param name="userName">The username of the user.</param>
        /// <returns>A <see cref="UserDTO"/> object representing the user.</returns>
        public async Task<UserDTO> GetUserAsync(string userName)
        {
            try
            {
                var user = await _usersRepository.GetUserAsync(userName);
                return _mapper.Map<UserDTO>(user);
            }
            catch (Exception ex)
            {
                // Log the error (if a logging system is in place)
                Console.WriteLine($"Error fetching user: {ex.Message}");
                throw; // Re-throw the exception to propagate it
            }
        }

        /// <summary>
        /// Updates a user asynchronously.
        /// </summary>
        /// <param name="userDto">The <see cref="UserDTO"/> object containing updated user details.</param>
        public async Task UpdateUserAsync(UserDTO userDto)
        {
            try
            {
                var user = _mapper.Map<User>(userDto);
                await _usersRepository.UpdateUserAsync(user);
            }
            catch (Exception ex)
            {
                // Log the error (if a logging system is in place)
                Console.WriteLine($"Error updating user: {ex.Message}");
                throw; // Re-throw the exception to propagate it
            }
        }

        /// <summary>
        /// Creates a new user asynchronously.
        /// </summary>
        /// <param name="userDto">The <see cref="UserDTO"/> object containing new user details.</param>
        /// <returns>The created <see cref="UserDTO"/> object.</returns>
        public async Task<UserDTO> CreateUserAsync(UserDTO userDto)
        {
            try
            {
                // Generate a new UserId
                userDto.UserId = Guid.NewGuid();

                var userEntity = _mapper.Map<User>(userDto);
                var createdUser = await _usersRepository.CreateUserAsync(userEntity);
                return _mapper.Map<UserDTO>(createdUser);
            }
            catch (Exception ex)
            {
                // Log the error (if a logging system is in place)
                Console.WriteLine($"Error creating user: {ex.Message}");
                throw; // Re-throw the exception to propagate it
            }
        }

        /// <summary>
        /// Retrieves a user by their unique identifier asynchronously.
        /// </summary>
        /// <param name="userId">The unique identifier of the user.</param>
        /// <returns>A <see cref="UserDTO"/> object representing the user.</returns>
        public async Task<UserDTO> GetUserByIdAsync(Guid userId)
        {
            try
            {
                var user = await _usersRepository.GetUserByIdAsync(userId);
                return _mapper.Map<UserDTO>(user);
            }
            catch (Exception ex)
            {
                // Log the error (if a logging system is in place)
                Console.WriteLine($"Error fetching user by ID: {ex.Message}");
                throw; // Re-throw the exception to propagate it
            }
        }
    }
}
