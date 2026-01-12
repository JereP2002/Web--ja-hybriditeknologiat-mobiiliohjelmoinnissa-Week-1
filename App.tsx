import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [age, setAge] = useState<string>('');
  const ageAsNumber = !isNaN(Number(age)) === true ? Number(age) : 0;
  const ageValue = (220 - ageAsNumber) * 0.65;
  const ageValue2 = (220 - ageAsNumber) * 0.85;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart rate calculator</Text> 
      <TextInput
        placeholder="Enter your age"
        keyboardType='number-pad'
        value={age}
        onChangeText={setAge}
      />
      <Text> Your lower heart rate is {ageValue.toFixed(0)}  bpm</Text>
      <Text> Your upper heart rate is {ageValue2.toFixed(0)}  bpm</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   padding: 8,

  },
  heading:{
    fontSize: 24,
    marginTop: 32,
  }
});
 