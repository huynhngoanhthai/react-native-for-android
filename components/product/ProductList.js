import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import ProductItem from "./ProductItem";

const ProductList = ({ data }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ProductItem data={item} />}
        keyExtractor={(item) => item._id}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
});
