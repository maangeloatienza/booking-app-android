import React from 'react'
import { useSelector } from 'react-redux'
import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native'
import { RatedCard } from '../../components/RatedCard'

const restaurantLists = [
  {
    title: "Big Belly's",
    travelTime: "12 mins",
    operatingHours: 'Opens Mon - Sun 9:00 AM'
  },
  {
    title: "Selena's",
    travelTime: "10 mins",
    operatingHours: 'Opens Mon - Sun 10:00 AM'
  },
  {
    title: "Parducho",
    travelTime: "15 mins",
    operatingHours: 'Opens 24 hours'
  },
  {
    title: "Spice Jar",
    travelTime: "15 mins",
    operatingHours: 'Opens Mon - Sun 09:00 AM'
  },
  {
    title: "Seoul Kitchen",
    travelTime: "20 mins",
    operatingHours: 'Opens Mon - Sun 11:00 AM'
  },
  {
    title: "Dalcielo",
    travelTime: "10 mins",
    operatingHours: 'Opens Mon - Sun 11:00 AM'
  },
  {
    title: "Coffee Grind",
    travelTime: "10 mins",
    operatingHours: 'Opens Mon - Sun 9:00 AM'
  },
  {
    title: "Bonito's",
    travelTime: "10 mins",
    operatingHours: 'Opens Mon - Sun 9:00 AM'
  }
]


export const Restaurants = ({navigation})=> {
  const user = useSelector(state=>state.user)
  return (
    <View style={styles.container}>
      <Text>{user.username}</Text>
      <ScrollView 
        contentContainerStyle={styles.contentContainer}
      >
        {
          restaurantLists.map((item,index)=>(
            <RatedCard
              data={{
                title: item.title,
                travelTime: item.travelTime,
                operatingHours: item.operatingHours
              }}
              key={index}
            />
          ))
        }

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'start',
    backgroundColor: '#26292B',
    padding: 40
  },
  contentContainer: {
    rowGap: 15
  }
})