using App.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace App.DataAccess.Interfaces
{
    /// <summary>
    /// Defines methods for interacting with order data in the repository.
    /// </summary>
    public interface IOrdersRepository
    {
        /// <summary>
        /// Retrieves all orders for a specified user asynchronously.
        /// </summary>
        /// <param name="userId">The unique identifier of the user.</param>
        /// <returns>A task representing the asynchronous operation, with a list of orders as its result.</returns>
        Task<List<Order>> GetOrdersAsync(Guid userId);

        /// <summary>
        /// Deletes a specific order asynchronously.
        /// </summary>
        /// <param name="orderId">The unique identifier of the order to be deleted.</param>
        /// <returns>A task representing the asynchronous operation.</returns>
        Task DeleteOrderAsync(Guid orderId);

        /// <summary>
        /// Creates a new order asynchronously.
        /// </summary>
        /// <param name="order">The order entity to be created.</param>
        /// <returns>A task representing the asynchronous operation, with the created order as its result.</returns>
        Task<Order> CreateOrderAsync(Order order);
    }
}
