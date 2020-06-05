/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  Text,
  Modal,
  Alert,
  TouchableHighlight,
  Picker,
} from 'react-native';

const Timeslot = (props) => {
  return (
    <View>
      {/* prefered time slot */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              margin: 10,
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 35,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Picker
                selectedValue={props.time1}
                style={{height: 50, width: 110}}
                onValueChange={(itemValue, itemIndex) =>
                  props.setTime1(itemValue)
                }>
                <Picker.Item label="07:00" value="7" />
                <Picker.Item label="08:00" value="8" />
                <Picker.Item label="09:00" value="9" />
                <Picker.Item label="10:00" value="10" />
                <Picker.Item label="11:00" value="11" />
                <Picker.Item label="12:00" value="12" />
                <Picker.Item label="13:00" value="13" />
                <Picker.Item label="14:00" value="14" />
                <Picker.Item label="15:00" value="15" />
                <Picker.Item label="16:00" value="16" />
              </Picker>
              <Text>Hours</Text>
            </View>

            <Text> To</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Picker
                selectedValue={props.time2}
                style={{height: 50, width: 110}}
                onValueChange={(itemValue, itemIndex) =>
                  props.setTime2(itemValue)
                }>
                <Picker.Item label="08:00" value="8" />
                <Picker.Item label="09:00" value="9" />
                <Picker.Item label="10:00" value="10" />
                <Picker.Item label="11:00" value="11" />
                <Picker.Item label="12:00" value="12" />
                <Picker.Item label="13:00" value="13" />
                <Picker.Item label="14:00" value="14" />
                <Picker.Item label="15:00" value="15" />
                <Picker.Item label="16:00" value="16" />
                <Picker.Item label="17:00" value="17" />
              </Picker>
              <Text>Hours</Text>
            </View>

            <TouchableHighlight
              style={{
                backgroundColor: 'green',
                borderRadius: 10,
                padding: 10,
                elevation: 2,
              }}
              onPress={() => {
                props.setModalVisible(!props.modalVisible);
              }}>
              <Text style={{color: 'white'}}>Confirm</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Timeslot;
