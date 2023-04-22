import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

import Ionicons from "@expo/vector-icons/Ionicons";
import ProductScreen from "./screens/ProductScreen";
import RegisterScreen from "./screens/RegisterScreen";
import CartButton from "./components/cart/CartButton";
import CartScreen from "./screens/CartScreen";
import { Provider, useSelector } from "react-redux";
import { store } from "./stores";
import AccountScreen from "./screens/AccountScreen";
import InfoAccountScreen from "./screens/InfoAccountScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import PurchaseScreen from "./screens/PurchaseScreen";
import forgotPasswordScreen from "./screens/ForgotPasswordScreen";
import OrderManagerScreen from "./screens/OrderManagerScreen";
import OrderScreen from "./screens/OrderScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <Tab.Navigator
      screenOptions={{
        headerRight: () => <CartButton />,
        headerRightContainerStyle: { paddingRight: 16 },
      }}
    >
      <Tab.Screen
        name="Root"
        component={HomeScreen}
        options={{
          title: "Trang chủ",
          tabBarIcon: () => <Ionicons name="home" />,
        }}
      />

      {token ? (
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            title: "Tài khoản",
            tabBarIcon: () => <Ionicons name="person" />,
          }}
        />
      ) : (
        <Tab.Screen
          name="Account"
          component={LoginScreen}
          options={{
            title: "Đăng nhập",
            tabBarIcon: () => <Ionicons name="person" />,
          }}
        />
      )}
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => <CartButton />,
      }}
    >
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: "Đăng ký" }}
      />
      <Stack.Screen
        name="InfoAccount"
        component={InfoAccountScreen}
        options={{ title: "Thông tin tài khoản" }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
        options={{ title: "Thay đổi mật khẩu" }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={forgotPasswordScreen}
        options={{ title: "Quên Mật Khẩu" }}
      />
      <Stack.Screen
        name="Purchase"
        component={PurchaseScreen}
        options={{ title: "Mua hàng" }}
      />
      <Stack.Screen
        name="OrderManager"
        component={OrderManagerScreen}
        options={{ title: "Quản lý hóa đơn" }}
      />
      <Stack.Screen
        name="Order"
        component={OrderScreen}
        options={{ title: "Hóa đơn" }}
      />
      {token ? (
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ title: "Giỏ hàng" }}
        />
      ) : (
        <Stack.Screen
          name="Cart"
          component={LoginScreen}
          options={{ title: "Đăng nhập" }}
        />
      )}
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
