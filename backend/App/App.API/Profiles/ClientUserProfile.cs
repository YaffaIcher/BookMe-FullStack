using App.API.Models;
using App.DTO.Models;
using AutoMapper;

namespace App.API.Profiles
{
    /// <summary>
    /// AutoMapper profile for mapping between user-related DTOs and request models.
    /// </summary>
    public class ClientUserProfile : Profile
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ClientUserProfile"/> class.
        /// Configures the mappings for user-related data transfer objects and request models.
        /// </summary>
        public ClientUserProfile()
        {
            // Maps CreateUserRequest to UserDTO and vice versa
            CreateMap<CreateUserRequest, UserDTO>().ReverseMap();
        }
    }
}
