import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import Item from "./Item";

const ItemList = ({ data }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item data={item} />}
        keyExtractor={(item) => item._id}
      />
    </SafeAreaView>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  container: { marginVertical: 16 },
});
