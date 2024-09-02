using AutoMapper;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using App.BusinessLogic.Interfaces;
using App.DataAccess.Entities;
using App.DataAccess.Interfaces;
using App.DTO.Models;

namespace App.BusinessLogic.Services
{
    /// <summary>
    /// Provides business logic for managing orders.
    /// </summary>
    public class OrderService : IOrderService
    {
        private  IOrdersRepository _ordersRepository;
        private  IMapper _mapper;

        /// <summary>
        /// Initializes a new instance of the <see cref="OrderService"/> class.
        /// </summary>
        /// <param name="ordersRepository">The repository used to access orders data.</param>
        /// <param name="mapper">The AutoMapper instance for mapping between entities and DTOs.</param>
        public OrderService(IOrdersRepository ordersRepository, IMapper mapper)
        {
            _ordersRepository = ordersRepository;
            _mapper = mapper;
        }

        /// <summary>
        /// Retrieves all orders for a specific user asynchronously.
        /// </summary>
        /// <param name="userId">The unique identifier of the user.</param>
        /// <returns>A list of <see cref="OrderDTO"/> objects representing the user's orders.</returns>
        public async Task<List<OrderDTO>> GetOrdersAsync(Guid userId)
        {
            try
            {
                var ordersList = await _ordersRepository.GetOrdersAsync(userId);
                return _mapper.Map<List<OrderDTO>>(ordersList);
            }
            catch (Exception ex)
            {
                // Log the error (if a logging system is in place)
                Console.WriteLine($"Error fetching orders: {ex.Message}");
                throw; // Re-throw the exception to propagate it
            }
        }

        /// <summary>
        /// Deletes a specific order asynchronously.
        /// </summary>
        /// <param name="orderId">The unique identifier of the order to be deleted.</param>
        public async Task DeleteOrderAsync(Guid orderId)
        {
            try
            {
                await _ordersRepository.DeleteOrderAsync(orderId);
            }
            catch (Exception ex)
            {
                // Log the error (if a logging system is in place)
                Console.WriteLine($"Error deleting order: {ex.Message}");
                throw; // Re-throw the exception to propagate it
            }
        }

        /// <summary>
        /// Creates a new order asynchronously.
        /// </summary>
        /// <param name="order">The <see cref="OrderDTO"/> object containing the order details.</param>
        /// <returns>The created <see cref="OrderDTO"/> object.</returns>
        public async Task<OrderDTO> CreateOrderAsync(OrderDTO order)
        {
            try
            {
                // Generate a new OrderId
                order.OrderId = Guid.NewGuid();

                // Map the DTO to the entity
                var orderEntity = _mapper.Map<Order>(order);

                // Create the order in the repository
                var createdOrder = await _ordersRepository.CreateOrderAsync(orderEntity);

                // Map the created order back to DTO
                return _mapper.Map<OrderDTO>(createdOrder);
            }
            catch (Exception ex)
            {
                // Log the error (if a logging system is in place)
                Console.WriteLine($"Error creating order: {ex.Message}");
                throw; // Re-throw the exception to propagate it
            }
        }
    }
}
