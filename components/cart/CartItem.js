import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import env from "../../constants/env";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { deleteItemInCart, patchItemInCart } from "../../utils/request";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const CartItem = ({ data, setItems }) => {
  const navigation = useNavigation();
  const token = useSelector((state) => state.auth.token);

  const deleteHandler = async () => {
    await deleteItemInCart({ token, id: data._id });
    setItems((items) => items.filter((item) => item._id !== data._id));
  };

  const increaseItemHandler = async () => {
    await patchItemInCart({ id: data._id, quantity: data.quantity + 1, token });
    setItems((items) => {
      const index = items.findIndex((item) => item._id === data._id);
      items[index].quantity += 1;
      return [...items];
    });
  };

  const decreaseItemHandler = async () => {
    if (data.quantity > 1) {
      await patchItemInCart({
        id: data._id,
        quantity: data.quantity - 1,
        token,
      });
      setItems((items) => {
        const index = items.findIndex((item) => item._id === data._id);
        items[index].quantity -= 1;
        return [...items];
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: `${env.IMAGE_URL}/products/${data.product.image}` }}
          style={styles.image}
        />
      </View>

      <View>
        <Text style={styles.name}>{data.product.name}</Text>
        <Text>{`Giá: ${data.product.price}`}</Text>
        <View style={styles.quantityContainer}>
          <Pressable onPress={decreaseItemHandler}>
            <AntDesign name="minuscircleo" size={18} color="black" />
          </Pressable>
          <Text style={styles.quantity}>{data.quantity}</Text>
          <Pressable onPress={increaseItemHandler}>
            <AntDesign name="pluscircleo" size={18} color="black" />
          </Pressable>
        </View>
      </View>
      <View style={styles.deleteButtonContainer}>
        <Pressable onPress={deleteHandler} style={styles.deleteButton}>
          <Ionicons name="close" size={32} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    padding: 8,
  },
  image: {
    padding: 16,
    resizeMode: "contain",
    width: 50,
    height: 50,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  deleteButtonContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  deleteButton: {
    padding: 8,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
