import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../../../compoent/CustomHeader';
import imageIndex from '../../../../assets/imageIndex';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatusBarComponent from '../../../../compoent/StatusBarCompoent';

const notificationsToday = [
  {
    id: 1,
    userImage: 'https://i.pravatar.cc/150?img=1',
    text: 'Just added new listing at your favourite',
    highlight: 'Fairview Apartment',
    time: '40 mins ago',
    rightImage: 'https://via.placeholder.com/60',
  },
  {
    id: 2,
    userImage: 'https://i.pravatar.cc/150?img=2',
    text: 'Just added new listing to',
    highlight: 'App',
    time: '4 hours ago',
    rightImage: 'https://via.placeholder.com/60',
  },
];

const olderNotifications = [
  {
    id: 3,
    userImage: 'https://i.pravatar.cc/150?img=3',
    text: 'Just added new listing to',
    highlight: 'App',
    time: '4 hours ago',
    rightImage: 'https://via.placeholder.com/60',
  },
];

const NotificationScreen = () => {
  return (
    <SafeAreaView style={{
      flex:1,
      backgroundColor:"white"
    }}>
      <StatusBarComponent/>
                    <CustomHeader imageSource={imageIndex.backImg} label={"Notification"}/>

    <View style={styles.container}>
 

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Today</Text>
        {notificationsToday.map((item) => (
          <NotificationCard key={item.id} data={item} />
        ))}

        <Text style={styles.sectionTitle}>Older notifications</Text>
        {olderNotifications.map((item) => (
          <NotificationCard key={item.id} data={item} />
        ))}
      </ScrollView>
    </View>
    </SafeAreaView>
  );
};

const NotificationCard = ({ data }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: data.userImage }} style={styles.avatar} />
      <View style={{ flex: 1, marginHorizontal: 10 }}>
        <Text style={styles.text}>
          {data.text}{' '}
          <Text style={styles.highlight}>{data.highlight}</Text>
        </Text>
        <Text style={styles.time}>{data.time}</Text>
      </View>
      <Image source={{ uri: data.rightImage }} style={styles.rightImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 11,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backArrow: {
    fontSize: 24,
    color: '#333',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00BCC9', // teal-blue color
  },
  scrollContent: {
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#F7F8FA',
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#00BCC9',
  },
  time: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  rightImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});

export default NotificationScreen;
