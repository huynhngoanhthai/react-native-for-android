import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import env from "../../constants/env";
import { currencyFormat } from "../../utils/format";

const ProductItem = ({ data }) => {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate("Product", {
      id: data._id,
      title: data.name,
    });
  };

  return (
    <Pressable style={styles.flex} onPress={pressHandler}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: `${env.IMAGE_URL}/products/${data.image}` }}
            style={styles.image}
          />
        </View>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.price}>{currencyFormat(data.price)}</Text>
      </View>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    margin: 16,
    padding: 12,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imageContainer: {
    flex: 1,
    // alignItems: "center",
  },
  image: {
    resizeMode: "contain",
    height: 100,
  },
  name: {
    marginTop: 16,
    flex: 1,
    fontSize: 12,
  },
  price: {
    marginTop: 4,
    flex: 1,
  },
});
