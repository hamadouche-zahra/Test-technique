import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView,FlatList, StyleSheet } from 'react-native';
import { services } from '../utils/Service';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';


const Services = () => {
  const navigation=useNavigation()
  const ServiceCard = ({ id,image, totalReviews, title, provider, providerImage }) => (
    <View style={styles.card}>
      <Image source={image } style={styles.serviceImage} />
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Icon  key={star} name="star" size={20} color="#FFEA30" style={styles.icon} />
  
        ))}
        <Text style={styles.ratingText}>{totalReviews}</Text>
      </View>
      <Text style={styles.serviceTitle}>{title}</Text>
      <View style={styles.providerContainer}>
        <Image source={ providerImage } style={styles.providerImage} />
        <Text style={styles.providerName}
         onPress={() =>  navigation.navigate('Profile', {
          id: id, 
        })}
        >{provider}
        </Text>
        <TouchableOpacity style={styles.contactButton} onPress={()=>{navigation.navigate('Message')}}>
          <Text style={styles.contactButtonText}>Contacter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.searchIcon}>
         <Icon name="search" size={24} color="#13171B"  />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Services</Text>
   
      </View>

      <ScrollView 
      style={styles.scrollView}
      showsVerticalScrollIndicator={false}
      >
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </ScrollView>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    display:"flex",
    flexDirection: 'row',
    alignItems: 'center',
    textAlign:'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  headerTitle: {
    color:"#13171B",
    fontSize: 18,
    fontWeight: 700, 
    lineHeight: 24, 
  },
  searchIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal:10
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  star: {
    fontSize: 16,
    marginRight: 2,
  },
  ratingText: {
    color: '#13171B',
    fontWeight:300,
    marginLeft: 5,
    fontSize: 12,
    lineHeight: 15, 

  },
  serviceTitle: {
    color:"#13171B",
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 24, 
    marginVertical: 8,
  },
  providerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  providerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  providerName: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color:"#13171B",
    fontWeight:700,
    lineHeight: 22, 

  },
  contactButton: {
    backgroundColor: '#71A8E0',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  contactButtonText: {
    color: 'white',
    fontSize: 14,
  },
 
});

export default Services;

