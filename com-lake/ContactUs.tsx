
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ContactUs({ navigation }) {
  const phoneNumber = '+92 347 096 35';
  const email = 'contact@hellomate.services';

  const handlePhonePress = () => {
    Linking.openURL(`tel:${phoneNumber.replace(/\s/g, '')}`);
  };

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${email}`);
  };

  const handleSocialPress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={24} color="#000" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.subtitle}>
          If you have any question{'\n'}we are happy to help
        </Text>

        <TouchableOpacity style={styles.contactItem} onPress={handlePhonePress}>
          <View style={styles.iconContainer}>
            <Ionicons name="call" size={20} color="#fff" />
          </View>
          <Text style={styles.contactText}>{phoneNumber}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactItem} onPress={handleEmailPress}>
          <View style={styles.iconContainer}>
            <Ionicons name="mail" size={20} color="#fff" />
          </View>
          <Text style={styles.contactText}>{email}</Text>
        </TouchableOpacity>

        <View style={styles.socialSection}>
          <Text style={styles.socialTitle}>Get Connected</Text>
          <View style={styles.socialIcons}>
            <TouchableOpacity 
              style={styles.socialIcon}
              onPress={() => handleSocialPress('https://linkedin.com')}
            >
              <Ionicons name="logo-linkedin" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.socialIcon}
              onPress={() => handleSocialPress('https://facebook.com')}
            >
              <Ionicons name="logo-facebook" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.socialIcon}
              onPress={() => handleSocialPress('https://twitter.com')}
            >
              <Ionicons name="logo-twitter" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.socialIcon}
              onPress={() => handleSocialPress('https://instagram.com')}
            >
              <Ionicons name="logo-instagram" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.socialIcon}
              onPress={() => handleSocialPress('https://whatsapp.com')}
            >
              <Ionicons name="logo-whatsapp" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 16,
    marginTop: Platform.OS === 'ios' ? 50 : 0,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 150 : 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    marginBottom: 24,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#64B5F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  contactText: {
    fontSize: 16,
    color: '#333',
  },
  socialSection: {
    marginTop: 40,
    alignItems: 'center',
  },
  socialTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 16,
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 16,
  },
  socialIcon: {
    padding: 8,
  },
});

