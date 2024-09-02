import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardContent, Typography, Button, Box, Grid } from '@mui/material';
import { selectUserOrders, removeOrder, addOrder } from '../states/orderSlice';
import { getOrders, deleteOrder } from '../services/ordersService';
import { selectUserId } from '../states/userSlice';

/**
 * OrdersList component fetches and displays a list of user orders.
 * Allows the user to delete orders. Fetches orders from an API on mount
 * and updates the Redux store accordingly.
 *
 * @returns {JSX.Element} The rendered OrdersList component.
 */
const OrdersList = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const orders = useSelector((state) => selectUserOrders(state));

  useEffect(() => {
    const fetchOrders = async () => {
      if (!userId) return;

      try {
        const ordersData = await getOrders(userId);
        ordersData.forEach(order => {
          const existingOrder = orders.find(o => o.orderId === order.orderId);
          if (!existingOrder) {
            dispatch(addOrder(order));
          }
        });
      } catch (err) {
        console.error('Failed to fetch orders:', err);
      }
    };

    fetchOrders();
  }, [userId, dispatch, orders]);

  const handleDelete = async (orderId) => {
    try {
      await deleteOrder(orderId);
      dispatch(removeOrder(orderId));
    } catch (err) {
      console.error('Failed to delete order:', err);
    }
  };

  if (!orders.length) {
    return (
      <Typography
        variant="h6"
        sx={{
          textAlign: 'center',
          marginTop: 4,
          fontFamily: `'Times New Roman', Times, serif`,
          fontSize: '200%',
          color: '#f40606',
          textShadow: '4px 4px 10px #6e92b8'
        }}
      >
        No orders found
      </Typography>
    );
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Grid container spacing={3} justifyContent="flex-end">
        {orders.map(order => (
          <Grid item xs={12} sm={6} md={4} key={order.orderId}>
            <Card sx={{ 
              width: '100%', 
              maxWidth: 600,  // Set maximum card width
              boxShadow: 3, 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'flex-end'  // Align card content to the end
            }}>
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  Order ID: {order.orderId}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Amount: ${order.totalAmount.toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Payment Status: {order.paymentStatus ? 'Paid' : 'Pending'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Order Date: {new Date(order.orderDate).toLocaleDateString()}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Button variant="contained" color="error" onClick={() => handleDelete(order.orderId)}>
                    Delete
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OrdersList;
