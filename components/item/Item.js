import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import env from "../../constants/env";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { deleteItemInCart, patchItemInCart } from "../../utils/request";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Item = ({ data }) => {
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
        <Text style={styles.quantity}>{`Số lượng: ${data.quantity}`}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>{`Giá: `}</Text>
        <Text style={styles.textRed}>{`${data.product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ`}</Text>
        </View>
        
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 5,
    alignItems: "center",
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  textRed:{
    color:"#B90606",
    fontSize:17,
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
  },
});
