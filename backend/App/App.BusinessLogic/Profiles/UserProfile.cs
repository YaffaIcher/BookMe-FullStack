using App.DataAccess.Entities;
using App.DTO.Models;
using AutoMapper;

namespace App.BusinessLogic.Profiles
{
    /// <summary>
    /// AutoMapper profile for mapping between <see cref="UserDTO"/> and <see cref="User"/>.
    /// </summary>
    public class UserProfile : Profile
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UserProfile"/> class.
        /// Configures mapping between <see cref="UserDTO"/> and <see cref="User"/>.
        /// </summary>
        public UserProfile()
        {
            // Create a bidirectional mapping between UserDTO and User
            CreateMap<UserDTO, User>().ReverseMap();
        }
    }
}
