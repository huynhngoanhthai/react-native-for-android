import { useEffect, useState, ActivityIndicator } from "react";
import { View, Text } from "react-native";
import ProductList from "../components/product/ProductList";
import { getProducts } from "../utils/request";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const productData = await getProducts();
      setProducts(productData.data.products);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <View>
      <ProductList data={products} />
    </View>
  );
};

export default HomeScreen;
