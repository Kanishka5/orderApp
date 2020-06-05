/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Options from '../components/Options';
import NumberPick from '../components/numberPicker';
import Timeslot from '../components/timeslot';

const HomeScreen = ({navigation}) => {
  const [meal, setMeal] = React.useState(3);
  const [gender, setGender] = React.useState(1);
  const [member, setMember] = React.useState(1);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [lunchtime1, setlunchTime1] = React.useState(-1);
  const [lunchtime2, setlunchTime2] = React.useState(-1);
  const [dinnertime1, setdinnerTime1] = React.useState(-1);
  const [dinnertime2, setdinnerTime2] = React.useState(-1);
  const [mealTime, setmealTime] = React.useState('lunch');
  const mealName = ['breakfast & lunch', 'dinner', 'both'];
  const ChefGender = ['male', 'female', 'any'];

  const handleSubmit = () => {
    // axios({
    //   method: 'post',
    //   url: `server url`,
    //   data: {
    //     meal: mealName[meal],
    //     members: member,
    //     cookGender: ChefGender[gender],
    //     lunchstart: lunchtime1,
    //     lunchend: lunchtime2,
    //     dinnerstart: dinnertime1,
    //     dinnerend: dinnertime2,
    //   },
    //   auth: {
    //     username: 'username',
    //     password: 'password',
    //   },
    // });
  };

  return (
    <View>
      {/* hamburger */}
      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={{marginHorizontal: 20, marginVertical: 10}}>
        <Icon name="dehaze" style={{fontSize: 30}} />
      </TouchableOpacity>

      {/* Number of meals */}
      <View style={{marginHorizontal: 20, marginVertical: 10}}>
        <Text style={{fontSize: 20}}>How Many Meals?</Text>
        <Options
          setValue={setMeal}
          value={meal}
          opt1="Breakfast & Lunch"
          opt2="Dinner"
          opt3="Both"
        />
      </View>

      {/* number of members */}
      <View style={{marginHorizontal: 20, marginVertical: 10}}>
        <Text style={{fontSize: 20}}>How many members?</Text>
        <NumberPick member={member} setMember={setMember} />
      </View>

      {/* gender of cook */}
      <View style={{marginHorizontal: 20, marginVertical: 10}}>
        <Text style={{fontSize: 20}}>Preferred gender of cook</Text>
        <Options
          setValue={setGender}
          value={gender}
          opt1="Male"
          opt2="Female"
          opt3="Just an awesome cook"
        />
      </View>

      {/* prefered time slot */}
      {/* modal for time slot selection */}
      <Timeslot
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        time1={mealTime === 'lunch' ? lunchtime1 : dinnertime1}
        setTime1={mealTime === 'lunch' ? setlunchTime1 : setdinnerTime1}
        time2={mealTime === 'lunch' ? lunchtime2 : dinnertime2}
        setTime2={mealTime === 'lunch' ? setlunchTime2 : setdinnerTime2}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginHorizontal: 20,
          marginTop: 30,
          alignItems: 'center',
        }}>
        <View style={{flexGrow: 1, flexDirection: 'row'}}>
          {/* lunch button*/}
          {meal === 1 || meal === 3 ? (
            <View>
              <TouchableOpacity
                style={{
                  borderWidth: 2,
                  paddingHorizontal: 5,
                  paddingVertical: 2,
                  marginRight: 10,
                  elevation: 2,
                }}
                onPress={() => {
                  setmealTime('lunch');
                  setModalVisible(true);
                }}>
                <Text>Lunch</Text>
              </TouchableOpacity>
            </View>
          ) : null}
          {/* dinner button*/}
          {meal === 2 || meal === 3 ? (
            <View>
              <TouchableOpacity
                style={{
                  borderWidth: 2,
                  paddingHorizontal: 5,
                  paddingVertical: 2,
                  marginRight: 10,
                  elevation: 2,
                }}
                onPress={() => {
                  setmealTime('dinner');
                  setModalVisible(true);
                }}>
                <Text>Dinner</Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>

        <TouchableOpacity style={{marginRight: 30}} onPress={handleSubmit}>
          <Icon
            name="keyboard-arrow-right"
            style={{fontSize: 50, color: 'green'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
