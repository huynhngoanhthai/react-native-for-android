import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";
import { postOrder } from "../utils/request";

const PurchaseScreen = () => {
  const navigation = useNavigation();
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const token = useSelector((state) => state.auth.token);

  const pressHandler = async () => {
    if (address && phone) {
      await postOrder({ address, phone, token });
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Thông tin mua hàng</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Địa chỉ"
          style={styles.input}
          value={address}
          onChangeText={setAddress}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Điện thoại"
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
        />
      </View>
      <Button onPress={pressHandler} title="Hoàn thành" color="#841584" />
    </View>
  );
};

export default PurchaseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  formTitle: {
    // width: "100%",
    textAlign: "center",
    marginBottom: 24,
    fontSize: 24,
    fontWeight: "500",
  },
  inputContainer: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "black",
  },
  input: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});
