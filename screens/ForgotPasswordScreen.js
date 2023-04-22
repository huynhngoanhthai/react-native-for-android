import { useNavigation } from "@react-navigation/native";
import { useEffect, useState  } from "react";
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
import { useDispatch, useSelector } from "react-redux";

import { postForgotPassword } from "../utils/request";


const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("user@gmail.com");
  const [password, setPassword] = useState("123123123");
  // const token = useSelector((state) => state.auth.token);

  // useEffect(() => {
  //   if (token) {
  //     navigation.navigate("Account");
  //   }
  // }, [token]);

  const loginPressHandler = async () => {
    navigation.navigate("Account");
  };

  const registerPressHandler = () => {
    navigation.navigate("Register");
  };
  const forgotPasswordPressHandler = () =>{
    postForgotPassword({email});
    navigation.navigate("Account");
  };
  return (
    
    <LinearGradient  colors={['#4AAAEC', 'rgba(169, 220, 255, 0)']} style={styles.container}>
     
      <Text style={styles.formTitle}>Điền Email của bạn và đợi vài giây, Meow sẽ cố gắng giúp bạn.</Text>
      <Image
        source={require('../image/logo.png')}
        style={styles.logo}
      />
       <View style={{ flex: 1.3 }}></View>
      <View style={styles.inputContainer}>
        <Image 
          style={styles.iconMail}
          source={require('../image/login/mail.png')}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      

      <View
        style={styles.buttonContainer}
      >
        <Pressable onPress={forgotPasswordPressHandler}>
          <Text style={styles.buttonText}>Gửi SMS</Text>
        </Pressable>
      </View>
      
      <View style={{ flex: 0.5 }}></View>
      <View style={styles.optionContainer}>
        <Pressable onPress={loginPressHandler} >
          <Text style={styles.buttonRegisterText}>Đăng Nhập.</Text>
        </Pressable>
      </View>

      <View style={{ flex: 0.5 }}></View>
      <View style={styles.optionContainer}>
        
        <Pressable onPress={registerPressHandler} >
          <Text style={styles.buttonRegisterText}>Người dùng mới? đăng ký</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    backgroundColor: "#4AAAEC",
    height: "100%",
    zIndex: -1,
    backgroundColor: "rgba(169, 220, 255, 0)",
    // background: linear-gradient(180deg, #4AAAEC 27.66%, rgba(169, 220, 255, 0) 100%);
  },
  
  logo:{
    position: 'absolute',
    top: 10,
    right: 10,
    width: 150,
    height: 150,
   
  },
  formTitle: {
    position: 'absolute',
    width: 200,
    height: 122,
    left: 15,
    top: 50,
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
    paddingVertical: 15,
    fontSize: 24,
    
    
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
    
  },
  buttonRegisterText:{
    color: "#0B68EF",
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    fontSize: 24,
    textShadowColor: 'rgba(0, 0, 0, 0.25)', 
    textShadowOffset: {width: 0, height: 4}, 
    textShadowRadius: 4
    
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: '#29A1F8',
    borderRadius: 15,
    paddingVertical: 15,
  
    
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },

  iconMail:{
    position: 'absolute',
    top: 25,
    left: 5,
    width: 20,
    height: 15,
  },
  iconLock:{
    position: 'absolute',
    top: 18,
    left: 5,
    width: 20,
    height: 25,
  }
});
