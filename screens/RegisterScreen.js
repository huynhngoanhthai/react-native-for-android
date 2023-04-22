import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  Image
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { postSignUp } from "../utils/request";

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerPressHandler = async () => {
    const registerData = await postSignUp({
      name,
      email,
      password,
      confirmPassword,
    });
    navigation.navigate("Account");
  };

  const loginPressHandler = () => {
    navigation.navigate("Account");
  };

  return (
    <LinearGradient colors={['#4AAAEC', 'rgba(169, 220, 255, 0)']} style={styles.container}>
    <View style={styles.container}>
    <Image
        source={require('../image/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.formTitle}>Chào bạn! Chúc bạn một ngày tốt lành!!!</Text>
      
      <View style={styles.inputContainer}>
      <Image 
          style={styles.iconFullName}
          source={require('../image/register/fullname.png')}
        />
        <TextInput
          placeholder="Tên"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.inputContainer}>
      <Image 
          style={styles.iconMail}
          source={require('../image/register/mail.png')}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
      <Image 
          style={styles.iconLock}
          source={require('../image/register/lock.png')}
        />
        <TextInput
          placeholder="Mật khẩu"
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
        <Pressable onPress={registerPressHandler}>
          <Text style={styles.buttonText}>Đăng Ký</Text>
        </Pressable>
      </View>
      <View style={styles.optionContainer}>
        <Pressable onPress={loginPressHandler}>
          <Text style={styles.buttonLoginText}>Đăng nhập</Text>
        </Pressable>
      </View>
    </View>
    </LinearGradient>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  logo:{
    position: 'absolute',
    top: 0,
    right: 0,
    width: 150,
    height: 150,
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    
  },
  formTitle: {
    position: 'absolute',
    width: 200,
    height: 122,
    left: 15,
    top: 25,
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
  optionContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  buttonContainer:{
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: '#29A1F8',
    borderRadius: 15,
    paddingVertical: 15,
  },
  buttonText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  iconMail:{
    position: 'absolute',
    top: 17,
    left: 5,
    width: 20,
    height: 15,
  },
  iconLock:{
    position: 'absolute',
    top: 10,
    left: 5,
    width: 20,
    height: 25,
  },
  iconFullName:{
    position: 'absolute',
    top: 15,
    left: 5,
    width: 20,
    height: 20,
},
  iconConfirmPassword:{
    position: 'absolute',
    top: 17,
    left: 5,
    width: 20,
    height: 15,
},
buttonLoginText:{
  color: "#0B68EF",
  textShadowColor: 'rgba(0, 0, 0, 0.25)',
  textShadowOffset: { width: 0, height: 4 },
  fontSize: 24,
  textShadowColor: 'rgba(0, 0, 0, 0.25)', 
  textShadowOffset: {width: 0, height: 4}, 
  textShadowRadius: 4
  
},
  
});
