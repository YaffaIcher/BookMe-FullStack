using App.DataAccess.Entities;
using App.DTO.Models;
using AutoMapper;

/// <summary>
/// AutoMapper profile for mapping between <see cref="Order"/> and <see cref="OrderDTO"/>.
/// </summary>
public class OrderProfile : Profile
{
    /// <summary>
    /// Initializes a new instance of the <see cref="OrderProfile"/> class.
    /// Configures mapping between <see cref="Order"/> and <see cref="OrderDTO"/>.
    /// </summary>
    public OrderProfile()
    {
        // Create a bidirectional mapping between Order and OrderDTO
        CreateMap<Order, OrderDTO>().ReverseMap();
    }
}
