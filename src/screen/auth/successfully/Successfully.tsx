import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatusBarComponent from '../../../compoent/StatusBarCompoent';
import imageIndex from '../../../assets/imageIndex';
import BackButton from '../../../compoent/BackButton';
import styles from './style';
import ScreenNameEnum from '../../../routes/screenName.enum';
import { useNavigation } from '@react-navigation/native';

const Successfully: React.FC = () => {
  const Navigation = useNavigation()



  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBarComponent
       
       />
     
       <View style={{
        flex:1,
        justifyContent:"center" ,
        alignItems:"center"
       }}>
      <Image
        source={imageIndex.susfuly}
        style={{
          height:122,
          width:122 ,

        }}
        resizeMode="cover"
      >
        </Image>
           <Text              allowFontScaling={false}
style={styles.title}>Your Visit request has {'\n'} been sent successfully </Text>



 <Text              allowFontScaling={false}
style={{
lineHeight:30,
  marginTop:20,
  color:"#686868",
  fontSize:20,
  textAlign:"center"

}}>Our Executive will contact {'\n'} you 
soon</Text>
 
 
          </View>
 <View style={{marginBottom:20}}>
  <BackButton  
  title={"Finish"}
  onPress={()=>{
   Navigation.navigate(ScreenNameEnum.OwnerNavigator)
  }}/>
  </View>
    </SafeAreaView>
  );
};

export default Successfully;
