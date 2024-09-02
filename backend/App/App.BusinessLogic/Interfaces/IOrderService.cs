using App.DataAccess.Entities;
using App.DTO.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace App.BusinessLogic.Interfaces
{
    /// <summary>
    /// Defines the contract for order-related business operations.
    /// </summary>
    public interface IOrderService
    {
        /// <summary>
        /// Retrieves all orders for a specific user asynchronously.
        /// </summary>
        /// <param name="userId">The unique identifier of the user.</param>
        /// <returns>A task that represents the asynchronous operation. The task result contains a list of <see cref="OrderDTO"/> objects.</returns>
        Task<List<OrderDTO>> GetOrdersAsync(Guid userId);

        /// <summary>
        /// Deletes a specific order asynchronously.
        /// </summary>
        /// <param name="orderId">The unique identifier of the order to be deleted.</param>
        /// <returns>A task that represents the asynchronous operation.</returns>
        Task DeleteOrderAsync(Guid orderId);

        /// <summary>
        /// Creates a new order asynchronously.
        /// </summary>
        /// <param name="order">The <see cref="OrderDTO"/> object representing the order to be created.</param>
        /// <returns>A task that represents the asynchronous operation. The task result contains the created <see cref="OrderDTO"/> object.</returns>
        Task<OrderDTO> CreateOrderAsync(OrderDTO order);
    }
}
