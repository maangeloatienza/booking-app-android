import React from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPersonWalking } from '@fortawesome/free-solid-svg-icons/faPersonWalking'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons/faCalendarDays'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'


export const RatedCard = ({data}) => {
  return (
    <View style={styles.container}>
      <Image
        src={'https://source.unsplash.com/random/?restaurant'}
        style={styles.cardImage}
        // alt={data.alt}
      />
      <View style={styles.cardContentContainer}>
        <Text style={styles.cardTitle}>{data.title}</Text>
        <View style={styles.cardContent}>
          <FontAwesomeIcon 
            style={styles.icons} 
            icon={faPersonWalking}/> 
            <Text style={styles.cardContentText}>{data.travelTime}</Text>
          <FontAwesomeIcon 
            style={{
              color: '#FFF',
              marginHorizontal: 2,
            }}
            icon={faEllipsisVertical}/>
          <FontAwesomeIcon 
            style={styles.icons} 
            icon={faCalendarDays}/> 
            <Text style={styles.cardContentText}>{data.operatingHours}</Text>
        </View>
        <View style={styles.ratingsContainer}>
          <Text style={{
            color: '#FFF',
            fontSize: 12,
          }}>Ratings: </Text>
          <FontAwesomeIcon 
            color='#ffe234'
            size={12}
            icon={faStar}
          />
          <FontAwesomeIcon 
            color='#ffe234'
            size={12}
            icon={faStar}
          />
          <FontAwesomeIcon 
            color='#ffe234'
            size={12}
            icon={faStar}
          />
          <FontAwesomeIcon 
            color='#ffe234'
            size={12}
            icon={faStar}
          />
          <FontAwesomeIcon 
            color='#ffe234'
            size={12}
            icon={faStar}
          />

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  cardImage: {
    height: 80,
    width: 83,
    borderRadius: 5
  },
  cardContentContainer : {
    paddingLeft: 10,
    justifyContent: 'center'
  },
  cardTitle: {
    color : '#FFF',
    marginBottom: 10
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  cardContentText : {
    paddingHorizontal: 4,
    color: '#FFF',
    fontSize: 12,
  },
  icons: {
    color : '#FFF',
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
