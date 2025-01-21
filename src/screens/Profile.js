import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import {reviews,services} from '../utils/Service'

const ReviewCard = ({ user, date, rating, comment }) => (
  <View style={styles.reviewCard}>
    <View style={styles.reviewHeader}>
      <Image source={user.image} style={styles.reviewerImage} />
      <View style={styles.reviewInfo}>
        <Text style={styles.reviewerName}>{user.name}</Text>
        <Text style={styles.reviewDate}>{date}</Text>
       
      </View>
      <View style={styles.ratingContainer}>
        {[...Array(rating)].map((_, i) => (
          <Icon  key={i}name="star" size={18} color="#0054A5" style={styles.icon} />
          
        ))}
      </View>
     
    </View>
    <Text style={styles.reviewText}>{comment}</Text>
  </View>
);

const Profile = ({route}) => {
  const navigation = useNavigation();
  const { id } = route.params;
  const providerData = services.find(p => p.id === id);



  

  return (
    

      <ScrollView style={styles.scrollView}
      showsVerticalScrollIndicator={false}
      >

          {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={22} color="#979797" />
        </TouchableOpacity>
      </View>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.imageContainer}>
          <Image source={providerData.profileImage} style={styles.profileImage} />
          </View>
           <View style={styles.profileContainer}>
            <View style={styles.ProfileInfo}>
            <Text style={styles.name}>{providerData.provider}</Text>
            <Text style={styles.service}>{providerData.title}</Text>
            </View>
            <TouchableOpacity style={styles.favoriteButton}>
           <Icon name="heart-outline" size={32} color="#E07173" />
         </TouchableOpacity>
           </View>
        

          {/* Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{providerData.rating}</Text>
              <Text style={styles.statLabel}>Rating</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{providerData.ordersCompleted}</Text>
              <Text style={styles.statLabel}>Orders Completed</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{providerData.experience}</Text>
              <Text style={styles.statLabel}>Experience</Text>
            </View>
          </View>
        </View>

        {/* Bio Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bio</Text>
          <Text style={styles.bioText}>
          {providerData.bio}
          </Text>
        </View>

        {/* Reviews Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reviews</Text>
          {reviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </View>
         {/* Reserve Button */}
      <TouchableOpacity style={styles.reserveButton}>
        <Text style={styles.reserveButtonText}>Réserver</Text>
      </TouchableOpacity>
      </ScrollView>

     
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  backButton: {
    padding: 10,
  },
  scrollView: {
    flex: 1,
  },
  profileSection: {
    padding: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 60,
    marginBottom: 15,
  },
  favoriteButton: {
    width: 50,
    height: 50,
    backgroundColor: '#A500000F', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 25,
    shadowColor: '#A500000F',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  
  
  name: {
    fontSize: 24,
    fontWeight: '600',
    color:"#565656",
    lineHeight: 36, 
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 15,
    backgroundColor:"#fff",
    padding:15,
    borderRadius:8
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#565656',
    lineHeight: 24, 

  },
  statLabel: {
    fontSize: 10,
    color: '#565656',
    lineHeight: 15, 
    fontWeight: '500',

  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color:'#565656',
    lineHeight: 24, 
    marginBottom: 15,

  },
  bioText: {
    fontSize: 12,
    fontWeight:'500',
    color: '#565656',
    lineHeight: 18,
  },
  reviewCard: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  reviewerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  reviewInfo: {
    flex: 1,
    marginLeft: 10,
  },
  reviewerName: {
    fontSize: 14,
    fontWeight: '600',
    color:'#565656',
    lineHeight: 21, 

  },
  reviewDate: {
    fontSize: 14,
    color: '#666',
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 16,
    marginLeft: 2,
  },
  reviewText: {
    fontSize: 12,
    fontWeight:500,
    color: '#565656',
    lineHeight: 18,
  },
  reserveButton: {
    backgroundColor: '#71A8E0',
    margin: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  reserveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,

  },
  profileContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    paddingHorizontal: 10, 
    marginVertical: 10,
  },
  ProfileInfo:{
    flexDirection: 'column',
    marginBottom: 15,
  },
  service:{
  color:"#565656",
  fontSize:18,
  fontWeight:500,
  lineHeight:27
  },
  imageContainer:{
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  }
});

export default Profile;
