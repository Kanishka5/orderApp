/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Options = (props) => {
  return (
    <View>
      {/* option 1 */}
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 5,
        }}
        onPress={() => {
          props.setValue(1);
        }}>
        <View
          style={{
            height: 15,
            width: 15,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: '#000',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {props.value === 1 ? (
            <View
              style={{
                height: 8,
                width: 8,
                borderRadius: 6,
                backgroundColor: '#000',
              }}
            />
          ) : null}
        </View>
        <Text style={{marginLeft: 5}}>{props.opt1}</Text>
      </TouchableOpacity>
      {/* option 2 */}
      <TouchableOpacity
        style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}
        onPress={() => {
          props.setValue(2);
        }}>
        <View
          style={{
            height: 15,
            width: 15,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: '#000',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {props.value === 2 ? (
            <View
              style={{
                height: 8,
                width: 8,
                borderRadius: 6,
                backgroundColor: '#000',
              }}
            />
          ) : null}
        </View>
        <Text style={{marginLeft: 5}}>{props.opt2}</Text>
      </TouchableOpacity>
      {/* option 3 */}
      <TouchableOpacity
        style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}
        onPress={() => {
          props.setValue(3);
        }}>
        <View
          style={{
            height: 15,
            width: 15,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: '#000',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {props.value === 3 ? (
            <View
              style={{
                height: 8,
                width: 8,
                borderRadius: 6,
                backgroundColor: '#000',
              }}
            />
          ) : null}
        </View>
        <Text style={{marginLeft: 5}}>{props.opt3}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Options;
