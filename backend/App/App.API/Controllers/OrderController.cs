using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using App.API.Models;
using App.BusinessLogic.Interfaces;
using App.DTO.Models;

namespace App.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private  IOrderService _orderService;
        private  IMapper _mapper;

        /// <summary>
        /// Initializes a new instance of the <see cref="OrderController"/> class.
        /// </summary>
        /// <param name="orderService">The service for managing orders.</param>
        /// <param name="mapper">The AutoMapper instance for mapping DTOs.</param>
        public OrderController(IOrderService orderService, IMapper mapper)
        {
            _orderService = orderService;
            _mapper = mapper;
        }

        /// <summary>
        /// Retrieves all orders for a specific user asynchronously.
        /// </summary>
        /// <param name="userId">The unique identifier of the user.</param>
        /// <returns>A list of orders for the specified user.</returns>
        [HttpGet("{userId}")]
        public async Task<ActionResult<List<OrderDTO>>> GetOrders(Guid userId)
        {
            try
            {
                var orders = await _orderService.GetOrdersAsync(userId);
                return Ok(orders);
            }
            catch (Exception ex)
            {
                // Log the error here if needed
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

        /// <summary>
        /// Deletes a specific order asynchronously.
        /// </summary>
        /// <param name="orderId">The unique identifier of the order to be deleted.</param>
        /// <returns>An IActionResult indicating the result of the operation.</returns>
        [HttpDelete("{orderId}")]
        public async Task<IActionResult> DeleteOrder(Guid orderId)
        {
            try
            {
                await _orderService.DeleteOrderAsync(orderId);
                return NoContent();
            }
            catch (Exception ex)
            {
                // Log the error here if needed
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

        /// <summary>
        /// Creates a new order asynchronously.
        /// </summary>
        /// <param name="createOrderRequest">The request body containing order details.</param>
        /// <returns>The created order and its location.</returns>
        [HttpPost]
        public async Task<ActionResult<OrderDTO>> CreateOrder([FromBody] CreateOrderRequest createOrderRequest)
        {
            try
            {
                if (createOrderRequest == null)
                {
                    return BadRequest("Invalid input.");
                }

                var orderDto = _mapper.Map<OrderDTO>(createOrderRequest);
                var createdOrder = await _orderService.CreateOrderAsync(orderDto);

                return CreatedAtAction(nameof(GetOrders), new { userId = createdOrder.UserId }, createdOrder);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }
    }
}
