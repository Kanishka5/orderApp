/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const NumberPick = (props) => {
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
      <TouchableOpacity
        style={{paddingHorizontal: 9, borderColor: 'red', borderWidth: 1}}
        onPress={() => {
          if (props.member > 1) {
            props.setMember(props.member - 1);
          }
        }}>
        <Text style={{fontSize: 15, color: 'red'}}>-</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 15, paddingHorizontal: 10}}>{props.member}</Text>
      <TouchableOpacity
        style={{paddingHorizontal: 7, borderColor: 'green', borderWidth: 1}}
        onPress={() => {
          props.setMember(props.member + 1);
        }}>
        <Text style={{fontSize: 15, color: 'green'}}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NumberPick;
