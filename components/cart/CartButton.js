import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, View } from "react-native";

const CartButton = () => {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate("Cart");
  };

  return (
    <Pressable onPress={pressHandler}>
      <View>
        <Ionicons name="ios-cart" size={32} color="black" />
      </View>
    </Pressable>
  );
};

export default CartButton;
