import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import OrderItem from "./OrderItem";

const OrderList = ({ data }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <OrderItem data={item} />}
        keyExtractor={(item) => item._id}
      />
    </SafeAreaView>
  );
};

export default OrderList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
});
