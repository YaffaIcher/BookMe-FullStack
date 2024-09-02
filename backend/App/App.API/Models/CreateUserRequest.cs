using App.DataAccess.Entities;

namespace App.API.Models
{
    /// <summary>
    /// Represents the request body required to create a new user.
    /// </summary>
    public class CreateUserRequest
    {
        /// <summary>
        /// Gets or sets the full name of the user.
        /// </summary>
        public string FullName { get; set; } = null!;

        /// <summary>
        /// Gets or sets the username for the user.
        /// </summary>
        public string UserName { get; set; } = null!;

        /// <summary>
        /// Gets or sets the email address of the user.
        /// </summary>
        public string Email { get; set; } = null!;

        /// <summary>
        /// Gets or sets the password for the user account.
        /// </summary>
        public string Password { get; set; } = null!;
    }
}
