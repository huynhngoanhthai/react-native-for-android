import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, StyleSheet, Button,Image } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../stores/authSlice";
import { LinearGradient } from "expo-linear-gradient";
const AccountScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const infoAccountPressHandler = () => {
    navigation.navigate("InfoAccount");
  };

  const orderPressHandler = () => {
    navigation.navigate("OrderManager");
  };

  const logoutPressHandler = () => {
    dispatch(logout());
  };
  const resetPasswordPressHandler = () => {
    navigation.navigate("ResetPassword");
  };

  return (
    <LinearGradient colors={['#4AAAEC', 'rgba(169, 220, 255, 0)']} style={styles.container}>
    
      
       <Text style={styles.formTitle}>Wellcome Anna</Text>
       <Image
        source={require('../image/account/dd.png')}
        style={styles.logo}
      />
      
      <Pressable onPress={infoAccountPressHandler} style={styles.pressable}>
        <Text style={styles.button}>Thông tin tài khoản</Text>
      </Pressable>
      <Pressable onPress={resetPasswordPressHandler} style={styles.pressable}>
        <Text style={styles.button}>Thay đổi mật khẩu</Text>
      </Pressable>
      <Pressable onPress={orderPressHandler} style={styles.pressable}>
        <Text style={styles.button}>Hóa đơn</Text>
      </Pressable>
      <Pressable onPress={logoutPressHandler} style={styles.pressable}>
        <Text style={styles.button}>Đăng xuất</Text>
      </Pressable>
    
    </LinearGradient>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  logo:{

  },
  formTitle:{
    
    fontSize: 24,
    color:"#000000",
    textShadowColor: 'rgba(0, 0, 0, 0.25)', 
    textShadowOffset: {width: 0, height: 4}, 
    textShadowRadius: 4
  },
  pressable: {
    alignSelf: "stretch",
    
  },
  button: {
    alignSelf: "stretch",
    textAlign: "center",
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 15,
    backgroundColor: "#36A0EC",
    textTransform: "uppercase",
    color: "#FFFFFF",
    fontWeight: "500",
    borderRadius: 15,
  
  },
});
