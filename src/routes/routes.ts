import imageIndex from "../assets/imageIndex";
import TabNavigator from "../navigators/TabNavigator";
 import AddInformationScreen from "../screen/auth/addInformation/AddInformation";
import CreateNewPassword from "../screen/auth/createNewPassword/CreateNewPassword";
 import Login from "../screen/auth/login/Login";
import LoginSuccess from "../screen/auth/loginSuccess/LoginSuccess";
import OnboardingScreen from "../screen/auth/onboarding/Onboarding";
import OtpScreen from "../screen/auth/otp/OtpScreen";
import PasswordReset from "../screen/auth/passwordReset/PasswordReset";
import PropertySelect from "../screen/auth/propertySelect/PropertySelect";
import SignUp from "../screen/auth/signUp/SignUp";
import Splash from "../screen/auth/splash/Splash";
import Successfully from "../screen/auth/successfully/Successfully";
import Home from "../screen/bottom/home/Home";
import PropertyDetailScreen from "../screen/bottom/home/propertyDetis/PropertyDetis";
import ScheduleVisit from "../screen/bottom/home/scheduleVisit/ScheduleVisit";
import EditProfile from "../screen/bottom/profile/profileScreen/editProfile/EditProfile";
import SaveFavorite from "../screen/bottom/saveFavorite/SaveFavorite";
  import ChooseRole from "../screen/ChooseRole/ChooseRole";
import LocationsScreen from "../screen/locationsScreen/LocationsScreen";
import HelpSupportScreen from "../screen/privay/HelpSupport"; 
import ScreenNameEnum from "./screenName.enum";
import { useSelector } from "react-redux";
import ProfileSetting from "../screen/bottom/profileSetting/ProfileSetting";
import LanguageSelectionScreen from "../screen/languageSelectionScreen/LanguageSelectionScreen";
import Notification from "../screen/bottom/profile/notification/Notification";
import PropertyDetailsForm from "../screen/property/PropertyDetailsForm/PropertyDetailsForm";
import AddProperty from "../screen/property/addProperty /AddProperty ";
import OwnerNavigator from "../navigators/OwnerNavigator";
import OwnerHome from "../screen/OwnerTab/OwnerTabHome/OwnerHome";
import PropertyFormScreen from "../screen/OwnerTab/OwnerTabHome/PropertyForm/PropertyFormScreen";
import AccountRemoveSuccess from "../screen/OwnerTab/OwnerTabHome/AccountRemoveSuccess/AccountRemoveSuccess";
import ProfileSettingOwner from "../screen/OwnerTab/OwnerTabHome/ProfileSettingOwner/ProfileSettingOwner";
import PropertyDetailOwner from "../screen/OwnerTab/OwnerTabHome/PropertyDetailOwner/PropertyDetailOwner";
import CalendarScreen from "../screen/CalendarScreen";

const useAuth = () => {
  return useSelector((state: any) => state?.auth);
};  

const _routes = () => {
  const isLogin = useAuth();

  return {
    REGISTRATION_ROUTE: [
      { name: ScreenNameEnum.SPLASH_SCREEN, Component: Splash },
      { name: ScreenNameEnum.SignUpScreen, Component: SignUp },
      { name: ScreenNameEnum.LoginScreen, Component: Login },
      { name: ScreenNameEnum.OnboardingScreen, Component: OnboardingScreen },
      { name: ScreenNameEnum.PasswordReset, Component: PasswordReset },
      { name: ScreenNameEnum.OtpScreen, Component: OtpScreen },
      { name: ScreenNameEnum.AddInformationScreen, Component: AddInformationScreen },
      { name: ScreenNameEnum.Successfully, Component: Successfully },
      { name: ScreenNameEnum.CreatePassword, Component: CreateNewPassword },
      { name: ScreenNameEnum.TabNavigator, Component: TabNavigator },
      { name: ScreenNameEnum.HelpSupport, Component: HelpSupportScreen },
      { name: ScreenNameEnum.LoginSuccess, Component: LoginSuccess },
      { name: ScreenNameEnum.PropertyDetailsForm, Component: PropertyDetailsForm },
      // { name: ScreenNameEnum.PrivacyPolicy, Component: PrivacyPolicy },
       { name: ScreenNameEnum.ChooseRole, Component: ChooseRole },
       { name: ScreenNameEnum.PropertySelect, Component: PropertySelect },
       { name: ScreenNameEnum.LocationsScreen, Component: LocationsScreen },
       { name: ScreenNameEnum.PropertyDetailScreen, Component: PropertyDetailScreen },
       { name: ScreenNameEnum.LanguageSelectionScreen, Component: LanguageSelectionScreen },
       { name: ScreenNameEnum.ScheduleVisit, Component: ScheduleVisit },
      { name: ScreenNameEnum.editProfile, Component: EditProfile },
      { name: ScreenNameEnum.Notification, Component: Notification },
      { name: ScreenNameEnum.AddProperty , Component: AddProperty  },
      { name: ScreenNameEnum.AccountRemoveSuccess , Component: AccountRemoveSuccess  },
      { name: ScreenNameEnum.ProfileSettingOwner , Component: ProfileSettingOwner  },
      { name: ScreenNameEnum.OwnerNavigator , Component: OwnerNavigator  },
      { name: ScreenNameEnum.PropertyFormScreen , Component: PropertyFormScreen  },
            { name: ScreenNameEnum.CalendarScreen , Component: CalendarScreen  },

            { name: ScreenNameEnum.PropertyDetailOwner , Component: PropertyDetailOwner  },

    ],

    BOTTOMTAB_ROUTE: [
      {
        name: ScreenNameEnum.HOME_SCREEN,
        Component: Home,
         logo: imageIndex.home2,
        logo1: imageIndex.home,
      },
    
      
      {
        name: ScreenNameEnum.SaveFavorite,
        Component: SaveFavorite,
         logo: imageIndex.setting1,
        logo1: imageIndex.bookMarK,
        
      },
      {
        name: ScreenNameEnum.Setting,
        Component: ProfileSetting,
         logo: imageIndex.Uer,
         
        logo1: imageIndex.user11,
        
      },
    ],
    BOTTOMTAB_ROUTE1: [
      {
        name: ScreenNameEnum.HOME_SCREEN,
        Component: OwnerHome,
         logo: imageIndex.home2,
        logo1: imageIndex.home,
      },
    
      
       
      {
        name: ScreenNameEnum.ProfileSettingOwner,
        Component: ProfileSettingOwner,
         logo: imageIndex.Uer,
         
        logo1: imageIndex.user11,
        
      },
    ],
  };
};

export default _routes;
