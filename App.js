import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.item1}></View>
      <View style={styles.item2}></View>
      <View style={styles.item3}>
        <View style={styles.content1}></View>
        <View style={styles.content2}></View>
        <View style={styles.content3}></View>
        <View style={styles.content4}></View>
      </View>
      <View style={styles.item4}></View>
      <View style={styles.item5}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  item1: {
    flex: 1,
    backgroundColor: 'blue',
    borderColor: 'red',
    borderWidth: 10,
  },
  item2: {
    flex: 2,
    backgroundColor: 'green',
  },
  item3: {
    flexDirection: 'row',
    flex: 3,
    backgroundColor: 'gray',
    gap: 10,
  },
  item4: {
    flex: 2,
    backgroundColor: 'purple',
  },
  item5: {
    flex: 1,
    backgroundColor: 'olive',
  },
  content1: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  content2: {
    flex: 2,
    backgroundColor: 'springgreen',
  },
  content3: {
    flex: 2,
    backgroundColor: 'peru',
  },
  content4: {
    flex: 1,
    backgroundColor: 'olive',
  },
});
