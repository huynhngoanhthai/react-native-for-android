import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View,Image } from "react-native";
import { useSelector } from "react-redux";
import ItemList from "../components/item/ItemList";
import { getOrder } from "../utils/request";
import { LinearGradient } from "expo-linear-gradient";


const OrderScreen = () => {
  const route = useRoute();

  const token = useSelector((state) => state.auth.token);

  const [order, setOrder] = useState("");
  const dateObject = new Date(order.createdAt);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getOrder({ token, id: route.params.id });
      setOrder(response.data.order);
    };

    fetchData();
  }, []);

  // const total =  order.total.replace(/\B(?=(\d{3})+(?!\d))/g, ".");


  return (
    <LinearGradient colors={['#4AAAEC', 'rgba(169, 220, 255, 0)']} style={styles.container}>
      <View tyle={{ textAlign: "center" }}>
      <Text style={styles.formTitle}>Chi tiết hóa đơn </Text>
      </View>
      <Text style={styles.formOrder}>{`mã hóa đơn: #${order._id}`}</Text>
      {/* <Text>{`#${order._id}`}</Text>
      <Text>{`Ngày tạo: ${dateObject.getHours()}:${dateObject.getMinutes()} ${dateObject.getDate()}/${dateObject.getMonth()}/${dateObject.getFullYear()}`}</Text>
      <Text>{`Số điện thoại: ${order.phone}`}</Text>
      <Text>{`Trạng thái: ${order.status}`}</Text> */}
      <ItemList data={order.items} />
      <View style={{ flex: 0.75  }}></View>
      <View style={styles.inputContainer}>
      <Image 
          style={styles.iconConfirmAddress}
          source={require('../image/order/address.png')}
        />
      <Text style={styles.addressstyles}>{order.address}</Text>
      </View>
      <View style={styles.inputContainer}>
      <Image 
          style={styles.iconConfirmPhone}
          source={require('../image/order/phone.png')}
        />
      <Text style={styles.addressstyles}>{order.phone}</Text>
      </View>
      <Text style={styles.totalstyles}>{`Tổng Tiền: ${order.total}đ`} </Text>

    </LinearGradient>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex:1,
  },
  totalstyles:{
    position: 'absolute',
    bottom: 10, // thay đổi giá trị số để chỉnh vị trí
    left: 0,
    right: 0,
    height:60,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    backgroundColor:"#3D98EC",
    borderRadius: 10,
    flexDirection: "row",
    paddingVertical: 15,
  },
  addressstyles:{
    paddingHorizontal: 35,
    paddingVertical: 10,
    fontSize: 20,
  },
  iconConfirmAddress:{
    position: 'absolute',
    top: 12,
    left: 5,
    width: 24,
    height: 24,
  },
  inputContainer: {
    
    marginBottom: 16,
    borderWidth: 3,
    borderColor: "#29A1F8",
    borderRadius: 15,
    backgroundColor:"#FFFCFC",

    
  },
  iconConfirmPhone:{
    position: 'absolute',
    top: 12,
    left: 5,
    width: 22,
    height: 21,
  },
  formTitle:{
    fontSize: 24,
    color:"#FFFFFF",
    textShadowColor: 'rgba(0, 0, 0, 0.25)', 
    textShadowOffset: {width: 0, height: 4}, 
    textShadowRadius: 4
  },
  formOrder:{
    color:"#045F93",
    fontSize: 20,

  }
});
