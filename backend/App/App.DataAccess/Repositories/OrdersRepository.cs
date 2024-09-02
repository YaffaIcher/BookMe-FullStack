using App.DataAccess.DataContext;
using App.DataAccess.Entities;
using App.DataAccess.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.DataAccess.Repositories
{
    /// <summary>
    /// Implementation of the <see cref="IOrdersRepository"/> interface for interacting with order data.
    /// </summary>
    public class OrdersRepository : IOrdersRepository
    {
        private  BookMeContext db;

        /// <summary>
        /// Initializes a new instance of the <see cref="OrdersRepository"/> class.
        /// </summary>
        /// <param name="bookContext">The <see cref="BookMeContext"/> instance used to interact with the database.</param>
        public OrdersRepository(BookMeContext bookContext)
        {
            db = bookContext;
        }

        /// <summary>
        /// Asynchronously retrieves all orders for a specified user.
        /// </summary>
        /// <param name="userId">The unique identifier of the user whose orders are to be retrieved.</param>
        /// <returns>A task representing the asynchronous operation, containing a list of <see cref="Order"/> objects.</returns>
        public async Task<List<Order>> GetOrdersAsync(Guid userId)
        {
            try
            {
                return await db.Orders.Where(o => o.UserId == userId).ToListAsync();
            }
            catch (Exception ex)
            {
                // General error handling
                Console.WriteLine($"Error fetching orders: {ex.Message}");
                throw; // Re-throwing the exception to notify the calling function of the issue
            }
        }

        /// <summary>
        /// Asynchronously deletes a specific order.
        /// </summary>
        /// <param name="orderId">The unique identifier of the order to be deleted.</param>
        /// <returns>A task representing the asynchronous operation.</returns>
        public async Task DeleteOrderAsync(Guid orderId)
        {
            try
            {
                var orderToDelete = await db.Orders.SingleOrDefaultAsync(o => o.OrderId == orderId);
                if (orderToDelete != null)
                {
                    db.Orders.Remove(orderToDelete);
                    await db.SaveChangesAsync();
                }
            }
            catch (DbUpdateException ex)
            {
                // Database update error handling
                Console.WriteLine($"Database update error: {ex.Message}");
                throw; // Re-throwing the exception to notify the calling function of the issue
            }
            catch (Exception ex)
            {
                // General error handling
                Console.WriteLine($"Error deleting order: {ex.Message}");
                throw; // Re-throwing the exception to notify the calling function of the issue
            }
        }

        /// <summary>
        /// Asynchronously creates a new order.
        /// </summary>
        /// <param name="order">The <see cref="Order"/> entity to be created.</param>
        /// <returns>A task representing the asynchronous operation, containing the created <see cref="Order"/> entity.</returns>
        public async Task<Order> CreateOrderAsync(Order order)
        {
            try
            {
                var createdOrder = db.Orders.Add(order).Entity;
                await db.SaveChangesAsync();
                return createdOrder;
            }
            catch (DbUpdateException ex)
            {
                // Database update error handling
                Console.WriteLine($"Database update error: {ex.Message}");
                throw new Exception("Database update error", ex);
            }
            catch (Exception ex)
            {
                // General error handling
                Console.WriteLine($"Error creating order: {ex.Message}");
                throw new Exception("Error creating order", ex);
            }
        }
    }
}
