using App.API.Models;
using App.DataAccess.Entities;
using App.DTO.Models;
using AutoMapper;

/// <summary>
/// AutoMapper profile for mapping between order-related DTOs and entities.
/// </summary>
public class ClientOrderProfile : Profile
{
    /// <summary>
    /// Initializes a new instance of the <see cref="ClientOrderProfile"/> class.
    /// Configures the mappings for order-related data transfer objects and entities.
    /// </summary>
    public ClientOrderProfile()
    {
        // Maps CreateOrderRequest to OrderDTO and vice versa
        CreateMap<CreateOrderRequest, OrderDTO>().ReverseMap();

        // Maps OrderDTO to Order and vice versa (uncomment to enable mapping)
        CreateMap<OrderDTO, Order>().ReverseMap();
    }
}
