import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { messages } from '../utils/Service';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const MessageBubble = ({ text, isUser }) => (
  <View style={[styles.messageBubble, isUser ? styles.userBubble : styles.otherBubble]}>
    <Text style={[styles.messageText, isUser ? styles.userText : styles.otherText]}>
      {text}
    </Text>
  </View>
);

const Message = () => {
  const navigation=useNavigation()

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
        <Icon name='arrow-back' size={22} color='#979797' onPress={()=>{navigation.goBack()}} />
        </TouchableOpacity>
        
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/said.png')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Said Gherbi</Text>
        </View>
      </View>

      {/* Messages */}
      <ScrollView style={styles.messageContainer}>
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            text={message.text}
            isUser={message.isUser}
          />
        ))}
      </ScrollView>

      {/* Input Area */}
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.attachButton}>
          <Image
            source={require('../assets/camera.png')}
            style={styles.attachIcon}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.sendButton}>
          <Image
            source={require('../assets/send.png')}
            style={styles.sendIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'column',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    padding: 10,
  },
  backIcon: {
    fontSize: 24,
    color: '#000',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileName: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '700',
    color:'#13171B',
    lineHeight: 22, 

  },
  messageContainer: {
    flex: 1,
    padding: 15,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 20,
    marginBottom: 10,
  },
  userBubble: {
    backgroundColor: '#71A8E0',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 5,
  },
  otherBubble: {
    backgroundColor: '#f0f0f0',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 5,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
  },
  userText: {
    color: '#fff',
  },
  otherText: {
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  attachButton: {
    padding: 10,
  },
  attachIcon: {
    width: 24,
    height: 24,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    fontSize: 16,
  },
  sendButton: {
    padding: 10,
  },
  sendIcon: {
    width: 24,
    height: 24,
  },
});

export default Message;