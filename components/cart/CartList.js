import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import CartItem from "./CartItem";

const CartList = ({ data, setItems }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <CartItem data={item} setItems={setItems} />}
        keyExtractor={(item) => item._id}
      />
    </SafeAreaView>
  );
};

export default CartList;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 16,
    paddingVertical: 20,
  },
});
