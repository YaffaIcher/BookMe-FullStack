using App.DataAccess.Entities;
using App.DTO.Models;
using AutoMapper;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace App.BusinessLogic.Profiles
{
    /// <summary>
    /// AutoMapper profile for configuring mappings between <see cref="BookDTO"/> and <see cref="Book"/> entities.
    /// </summary>
    public class BookProfile : Profile
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="BookProfile"/> class and sets up the mapping configuration.
        /// </summary>
        public BookProfile()
        {
            // Creates a bidirectional mapping between BookDTO and Book
            CreateMap<BookDTO, Book>().ReverseMap();
        }
    }
}
