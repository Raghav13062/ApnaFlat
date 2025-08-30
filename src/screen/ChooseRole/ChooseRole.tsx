// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   ScrollView,
//   Dimensions,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';

// import imageIndex from '../../assets/imageIndex';
// import StatusBarComponent from '../../compoent/StatusBarCompoent';
// import CustomButton from '../../compoent/CustomButton';
// import ScreenNameEnum from '../../routes/screenName.enum';

// const { width } = Dimensions.get('window');

// const ChooseRole = () => {
//   const navigation = useNavigation();

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBarComponent />
//       <ScrollView
//         contentContainerStyle={styles.scrollBox}
//         showsVerticalScrollIndicator={false}
//       >
//         <Image
//           source={imageIndex.images}
//           style={styles.image}
//           resizeMode="cover"
//         />

//         <Text style={styles.title}>Let’s explore now!</Text>
//         <Text style={styles.subtitle}>
//           Filter, explore, and find the perfect property fast.
//         </Text>

//         <View style={styles.buttonWrapper}>
//           <CustomButton
//             title={'🏠 Rent your Property'}
//             onPress={() => navigation.navigate(ScreenNameEnum.LoginScreen)}
//           />
//         </View>

//         <View style={styles.buttonWrapper}>
//           <CustomButton
//             title={'🧍‍♂️ Looking for Property'}
//             onPress={() => navigation.navigate(ScreenNameEnum.LoginScreen)}
//           />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default ChooseRole;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   scrollBox: {
//     padding: 20,
//     alignItems: 'center',
//   },
//   image: {
//     width: width - 100,
//     height: 500,
//     borderRadius: 40,
//     marginBottom: 30,
//     marginTop: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#00B8C4',
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#808080',
//     textAlign: 'center',
//     marginTop: 8,
//     marginBottom: 30,
//   },
//   buttonWrapper: {
//     width: '100%',
//     marginBottom: 16,
//   },
// });
// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   ScrollView,
//   Dimensions,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import imageIndex from '../../assets/imageIndex';
// import StatusBarComponent from '../../compoent/StatusBarCompoent';
// import CustomButton from '../../compoent/CustomButton';
// import ScreenNameEnum from '../../routes/screenName.enum';

// const { width } = Dimensions.get('window');

// const ChooseRole = () => {
//   const navigation = useNavigation();

//   const handleRoleSelect = async (role: string) => {
//     try {
//        await AsyncStorage.setItem('user_role', role);

//       if (role === 'renter') {
//         navigation.navigate(ScreenNameEnum.PropertyDetailsForm); // Renter ke liye
//       } else {
//         navigation.navigate(ScreenNameEnum.LoginScreen); // Seeker ke liye
//       }
//     } catch (error) {
//       console.log('Error saving role to AsyncStorage:', error);
//     }
//   };
  
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBarComponent />
//       <ScrollView
//         contentContainerStyle={styles.scrollBox}
//         showsVerticalScrollIndicator={false}
//       >
//         <Image
//           source={imageIndex.ImageProperty}
//           style={styles.image}
//           resizeMode="cover"
//         />

//         <Text             allowFontScaling={false}
//  style={styles.title}>Let’s explore now!</Text>
//         <Text              allowFontScaling={false}
// style={styles.subtitle}>
//           Filter, explore, and find the perfect property fast.
//         </Text>

//         <View style={styles.buttonWrapper}>
//           <CustomButton
//             title={'🏠 Rent your Property'}
//             onPress={() => handleRoleSelect('renter')}
//           />
//         </View>

//         <View style={styles.buttonWrapper}>
//           <CustomButton
//             title={'🧍‍♂️ Looking for Property'}
//             onPress={() => handleRoleSelect('seeker')}
//           />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default ChooseRole;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   scrollBox: {
//     padding: 20,
//     alignItems: 'center',
//   },
//   image: {
//     width: width - 100,
//     height: 500,
//     borderRadius: 30,
//     marginBottom: 30,
//     marginTop: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#00B8C4',
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#808080',
//     textAlign: 'center',
//     marginTop: 8,
//     marginBottom: 30,
//   },
//   buttonWrapper: {
//     width: '100%',
//     marginBottom: 16,
//   },
// });
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import imageIndex from '../../assets/imageIndex';
import StatusBarComponent from '../../compoent/StatusBarCompoent';
import ScreenNameEnum from '../../routes/screenName.enum';

const { width } = Dimensions.get('window');

const ChooseRole = () => {
  const navigation = useNavigation();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleRoleSelect = async (role: string) => {
    try {
      setSelectedRole(role);
      await AsyncStorage.setItem('user_role', role);

      if (role === 'renter') {
        navigation.navigate(ScreenNameEnum.LoginScreen);
      } else {
        navigation.navigate(ScreenNameEnum.LoginScreen);
      }
    } catch (error) {
      console.log('Error saving role to AsyncStorage:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarComponent />
      <ScrollView
        contentContainerStyle={styles.scrollBox}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={imageIndex.ImageProperty}
          style={styles.image}
          resizeMode="cover"
        />

        <Text allowFontScaling={false} style={styles.title}>
          Let’s explore now!
        </Text>
        <Text allowFontScaling={false} style={styles.subtitle}>
          Filter, explore, and find the perfect property fast.
        </Text>

        {/* Renter Option */}
       

        {/* Seeker Option */}
        <TouchableOpacity
          style={[
            styles.optionBox,
            selectedRole === 'seeker' && styles.selectedBox,
          ]}
          onPress={() => handleRoleSelect('seeker')}
        >
          <Text
            style={[
              styles.optionText,
              selectedRole === 'seeker' && styles.selectedText,
            ]}
          >
            🧍‍♂️ Looking for Property
          </Text>
        </TouchableOpacity>
         <TouchableOpacity
          style={[
            styles.optionBox,
            selectedRole === 'renter' && styles.selectedBox,
          ]}
          onPress={() => handleRoleSelect('renter')}
        >
          <Text
            style={[
              styles.optionText,
              selectedRole === 'renter' && styles.selectedText,
            ]}
          >
            🏠 Rent your Property
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChooseRole;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollBox: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: width - 100,
    height: 500,
    borderRadius: 30,
    marginBottom: 30,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#00B8C4',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#808080',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 30,
  },
  optionBox: {
    width: '100%',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
  },
  selectedBox: {
    borderColor: '#00B8C4',
    backgroundColor: '#E6F7F8',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  selectedText: {
    color: '#00B8C4',
    fontWeight: '700',
  },
});
