import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";

const OrderItem = ({ data }) => {
  const navigation = useNavigation();
  const dateObject = new Date(data.createdAt);

  const pressHandler = () => {
    navigation.navigate("Order", { id: data._id });
  };

  return (
    <Pressable style={styles.container} onPress={pressHandler}>
      {/* <Text>{`#${data._id}`}</Text> */}
      <Text style={styles.textInforms}>{`Ngày tạo: ${dateObject.getHours()}:${dateObject.getMinutes()} ${dateObject.getDate()}/${dateObject.getMonth()}/${dateObject.getFullYear()}`}</Text>
      <Text style={styles.textInforms}>{`Địa chỉ: ${data.address}`}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.textInforms}>Tổng tiền: </Text>
        <Text style={styles.textRed}>{`${data.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ`}</Text>
      </View>
      <Text style={styles.textInforms}>{`Trạng thái: ${data.status}`}</Text>
    </Pressable>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  
  },
  textRed:{
    color:"#B90606",
    fontSize:20,
  },
  textInforms:{
    fontSize:20,
  }
});
