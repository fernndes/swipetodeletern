import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import ItemBox from './src/components/itemBox';

const data = [
  { id: 1, name: 'AB' },
  { id: 2, name: 'BB' },
  { id: 3, name: 'CB' },
  { id: 4, name: 'DB' },
  { id: 5, name: 'EB' },
  { id: 6, name: 'FB' },
  { id: 7, name: 'GB' },
  { id: 8, name: 'HB' },
  { id: 9, name: 'IB' },
];

export default function App() {
  const [lists, setLists] = useState([]);
  const deleteItem = (index) => {
    const arr = [...lists];
    arr.splice(index, 1);
    setLists(arr);
  };
  useEffect(() => {
    setLists(data);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={lists}
        renderItem={(item, index) => {
          return <ItemBox item={item} handleDelete={() => deleteItem(index)} />;
        }}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: 'black',
  },
});
