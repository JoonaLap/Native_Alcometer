import { StatusBar } from 'expo-status-bar';
import { Button, Text, TextInput, View, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import StyleSheet from './Styles';
import Styles from './Styles';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [gender, setGender] = useState('male');
  const [time, setTime] = useState(0);
  const [alcohol, setAlcohol] = useState(0);

  const genders = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}
  ];



  function calculate() {
    let result= 0;
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - burning * time;

    if (gender === 'male') {
      result = gramsLeft / (weight * 0.7);
    }
    else {
      result = gramsLeft / (weight * 0.6);
    }

    if (weight < 0) {
      result = 0;
    }

    if (result < 0) {
      result = 0;
    }

    setAlcohol(result);
  }

  const bottleAmount = Array(); 
  bottleAmount.push({label: '1 bottle', value: 1});
  bottleAmount.push({label: '2 bottles', value: 2});
  bottleAmount.push({label: '3 bottles', value: 3});
  bottleAmount.push({label: '4 bottles', value: 4});
  bottleAmount.push({label: '5 bottles', value: 5});
  bottleAmount.push({label: '6 bottles', value: 6});
  bottleAmount.push({label: '7 bottles', value: 7});
  bottleAmount.push({label: '8 bottles', value: 8});
  bottleAmount.push({label: '9 bottles', value: 9});
  bottleAmount.push({label: '10 bottles', value: 10});

  const timeSince = Array(); 
  timeSince.push({label: '1 hour', value: 1});
  timeSince.push({label: '2 hours', value: 2});
  timeSince.push({label: '3 hours', value: 3});
  timeSince.push({label: '4 hours', value: 4});
  timeSince.push({label: '5 hours', value: 5});
  timeSince.push({label: '6 hours', value: 6});
  timeSince.push({label: '7 hours', value: 7});
  timeSince.push({label: '8 hours', value: 8});
  timeSince.push({label: '9 hours', value: 9});
  timeSince.push({label: '10 hours', value: 10});
  timeSince.push({label: '11 hours', value: 11});
  timeSince.push({label: '12 hours', value: 12});
  timeSince.push({label: '13 hours', value: 13});
  timeSince.push({label: '14 hours', value: 14});
  timeSince.push({label: '15 hours', value: 15});
  timeSince.push({label: '16 hours', value: 16});
  timeSince.push({label: '17 hours', value: 17});
  timeSince.push({label: '18 hours', value: 18});
  timeSince.push({label: '19 hours', value: 19});
  timeSince.push({label: '20 hours', value: 20});

  return (
    <View style={StyleSheet.container}>
      <Text style={StyleSheet.header}>Alcometer</Text>
      <View>
        <View><Text style={StyleSheet.font}>Weight</Text></View>
          <TextInput
            style={StyleSheet.input}
            onChangeText={text => setWeight(text)}
            //placeholder='in kilograms'
            keyboardType='numeric'></TextInput>
      </View>

      <View style={StyleSheet.field}>
        <View><Text style={StyleSheet.font}>Bottles</Text></View>
          <Picker style={StyleSheet.bottles}
              onValueChange={(itemValue) => setBottles(itemValue)}
              selectedValue={bottles}>
              {bottleAmount.map((bottles,index) => (
                <Picker.Item key={index} label={bottles.label} value={bottles.value}/>
              ))}
          </Picker>
      </View>

      <View style={StyleSheet.field}>
        <View><Text style={StyleSheet.font}>Time</Text></View>
          <Picker style={StyleSheet.time}
              onValueChange={(itemValue) => setTime(itemValue)}
              selectedValue={time}>
              {timeSince.map((time,index) => (
                <Picker.Item key={index} label={time.label} value={time.value}/>
              ))}
          </Picker>
      </View>

        <View style={StyleSheet.field}>
          <Text style={StyleSheet.font}>Gender</Text>
          <RadioForm
              style={StyleSheet.radio}
              buttonSize = {10}
              radio_props={genders}
              initial={0}
              onPress={(value) => {setGender(value)}}
            />
        </View>
        <Text style={[StyleSheet.result, alcohol < 0.42 ? StyleSheet.green : StyleSheet.yellow]}
        >{alcohol.toFixed(2)}</Text>
          {/* <Button color={"#1E90FF"} onPress={calculate} title='Calculate'></Button> */}
          <Pressable style={StyleSheet.button}
            onPress={() => calculate()}>
                <Text style={StyleSheet.buttonText}>
                    CALCULATE
                </Text>
          </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}