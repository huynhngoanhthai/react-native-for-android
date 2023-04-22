import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { useSelector } from "react-redux";
import CartList from "../components/cart/CartList";
import { getItemsInCart } from "../utils/request";

const CartScreen = () => {
  const navigation = useNavigation();

  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const itemsData = await getItemsInCart({ token });
      setItems(itemsData.data.items);
    };

    fetchData();
  }, []);

  const purchaseHandler = () => {
    navigation.navigate("Purchase");
  };

  return (
    <View style={styles.container}>
      {items.length == 0 && (
        <Text style={styles.message}>Không có sản phẩm trong giỏ hàng</Text>
      )}
      {items.length > 0 && <CartList data={items} setItems={setItems} />}
      <Pressable onPress={purchaseHandler}>
        <Text style={styles.purchase}>Mua hàng</Text>
      </Pressable>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  message: {
    // flex: 1,
    textAlign: "center",
    alignSelf: "center",
    marginTop: 20,
    fontSize: 16,
  },
  purchase: {
    alignSelf: "stretch",
    backgroundColor: "#ff5a5f",
    paddingHorizontal: 16,
    paddingVertical: 12,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
