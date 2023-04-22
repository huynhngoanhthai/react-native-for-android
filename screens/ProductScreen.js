import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState, ActivityIndicator } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import { useSelector } from "react-redux";
import env from "../constants/env";
import { currencyFormat } from "../utils/format";
import { getProductById, postItemInCart } from "../utils/request";

const ProductScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const token = useSelector((state) => state.auth.token);

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState("1");

  const productId = route.params.id;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const productData = await getProductById(productId);
      setProduct(productData.product);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const addToCartHandler = async () => {
    if (!token) navigation.navigate("Account");
    await postItemInCart({ token, productId, quantity });
    navigation.navigate("Cart");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: `${env.IMAGE_URL}/products/${product.image}` }}
        />
      </View>
      <View>
        <Text style={styles.name}>{product.name}</Text>
      </View>
      <View>
        <Text style={styles.price}>{currencyFormat(product.price)}</Text>
      </View>
      <View style={styles.cartContainer}>
        <TextInput
          style={styles.quantity}
          keyboardType="numeric"
          onChangeText={setQuantity}
          value={quantity}
          maxLength={2} //setting limit of input
        />
        <Pressable onPress={addToCartHandler} style={styles.pressable}>
          <Text style={styles.cartButton}>Thêm vào giỏ hàng</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  imageContainer: {
    paddingVertical: 40,
  },
  image: {
    height: 300,
    resizeMode: "contain",
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
  },

  price: {
    fontSize: 20,
    fontWeight: "700",
  },
  cartButton: {
    textAlign: "center",
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#841584",
    textTransform: "uppercase",
    color: "white",
    fontWeight: "500",
    height: 40,
    verticalAlign: "middle",
  },

  cartContainer: {
    flexDirection: "row",
    backgroundColor: "#ccc",
    alignItems: "stretch",
    height: 40,
    marginTop: 16,
  },
  pressable: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
  },
  quantity: {
    width: 60,
    borderColor: "black",
    borderWidth: 1,
    marginRight: 16,
    textAlign: "center",
  },
});
