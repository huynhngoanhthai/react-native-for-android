import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button,Image,Pressable } from "react-native";
import { useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { patchUpdateMe, patchUpdateMyPassword } from "../utils/request";

const ResetPasswordScreen = () => {
  const navigation = useNavigation();

  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

 

  const changePasswordHandler = async () => {
    await patchUpdateMyPassword({
      token,
      currentPassword,
      password,
      confirmPassword,
    });

    navigation.navigate("Account");
  };

  return (
    <LinearGradient colors={['#4AAAEC', 'rgba(169, 220, 255, 0)']} style={styles.container}>
       <Image 
          style={styles.logo}
          source={require('../image/logo.png')}
        />
    <Text style={styles.formTitle}>Cập nhật Tài Khoản</Text>
    <View style={styles.inputContainer}>
      <Image 
          style={styles.iconLock}
          source={require('../image/register/lock.png')}
        />
        <TextInput
          placeholder="Mật khẩu cũ"
          style={styles.input}
          secureTextEntry={true}
          value={currentPassword}
          onChangeText={setCurrentPassword}
        />
      </View>
    <View style={styles.inputContainer}>
      <Image 
          style={styles.iconLock}
          source={require('../image/register/lock.png')}
        />
        <TextInput
          placeholder="Mật khẩu mới"
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
    <View style={styles.inputContainer}>
      <Image 
          style={styles.iconConfirmPassword}
          source={require('../image/register/confirm.png')}
        />
        <TextInput
          placeholder="Nhập lại mật khẩu"
          style={styles.input}
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
    </View>
    <View
        style={styles.buttonContainer}
      >
        <Pressable onPress={changePasswordHandler}>
          <Text style={styles.buttonText}>Đổi mật khẩu</Text>
        </Pressable>
      </View>
     
    </LinearGradient>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
      },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  iconLock:{
    position: 'absolute',
    top: 10,
    left: 5,
    width: 20,
    height: 25,
  },
  buttonContainer:{
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: '#29A1F8',
    borderRadius: 15,
    paddingVertical: 15
  },
  iconConfirmPassword:{
    position: 'absolute',
    top: 17,
    left: 5,
    width: 20,
    height: 15,
  },
  formTitle: {
    position: 'absolute',
    width: 400,
    height: 122,
    left: 80,
    top: 180,
    fontSize: 24,
    color:"#FFFFFF",
    textShadowColor: 'rgba(0, 0, 0, 0.25)', 
    textShadowOffset: {width: 0, height: 4}, 
    textShadowRadius: 4
  },
  inputContainer: {
    marginBottom: 16,
    borderWidth: 3,
    borderColor: "#29A1F8",
    borderRadius: 15,
    backgroundColor:"#FFFCFC"
  },
  input: {
     paddingHorizontal: 30,
    paddingVertical: 10,
    fontSize: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  logo:{
    position: 'absolute',
    top: 10,
    right: 10,
    width: 150,
    height: 150,
  },
});
