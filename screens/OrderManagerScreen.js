import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import OrderList from "../components/order/OrderList";
import { getOrders } from "../utils/request";
import { LinearGradient } from "expo-linear-gradient";
const OrderManager = () => {
  const token = useSelector((state) => state.auth.token);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getOrders({ token });
      setOrders(response.data.orders);
    };

    fetchData();
  }, []);

  if (orders.length === 0) {
    return (
      <LinearGradient colors={['#4AAAEC', 'rgba(169, 220, 255, 0)']} style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Bạn chưa có đơn hàng nào</Text>
      </LinearGradient>
    );
  }
  
  return (
    <LinearGradient colors={['#4AAAEC', 'rgba(169, 220, 255, 0)']}>
      <OrderList data={orders}/>
    </LinearGradient>
  );
};

export default OrderManager;
