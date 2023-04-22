import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button,Image,Pressable } from "react-native";
import { useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { patchUpdateMe, patchUpdateMyPassword } from "../utils/request";

const InfoAccountScreen = () => {
  const navigation = useNavigation();

  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const updatePressHandler = async () => {
    await patchUpdateMe({ name, email });
    navigation.navigate("Account");
  };

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
        
        
      <View>    
      <Text style={styles.formTitle}>Thông tin tài khoản</Text>
        <View style={styles.inputContainer}>
        <Image 
          style={styles.iconFullName}
          source={require('../image/register/fullname.png')}
        />
          <TextInput style={styles.input}  
          placeholder="Tên" 
          value={name} 
          onChangeText={setName} />
        </View>
        <View style={styles.inputContainer}>
        <Image 
          style={styles.iconMail}
          source={require('../image/register/mail.png')}
        />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View
        style={styles.buttonContainer}
      >
        <Pressable onPress={updatePressHandler}>
          <Text style={styles.buttonText}>CẬP NHẬT</Text>
        </Pressable>
      </View>

      </View>

      
    </LinearGradient>
  );
};

export default InfoAccountScreen;

const styles = StyleSheet.create({
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
  iconFullName:{
    position: 'absolute',
    top: 15,
    left: 5,
    width: 20,
    height: 20,
},
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  formTitle: {
    position: 'absolute',
    width: 400,
    height: 122,
    left: 80,
    top: -50,
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
