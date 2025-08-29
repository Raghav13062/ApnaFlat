import React, { useEffect, useState } from "react";
import { Text, Image, Keyboard, Platform, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import _routes from "../routes/routes";
import { useTheme } from "../theme/ThemeProvider";

const Tab = createBottomTabNavigator();

export default function OwnerNavigator() {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const { theme }: any = useTheme();

  useEffect(() => {
    const show = Platform.OS === "android" ? "keyboardDidShow" : "keyboardWillShow";
    const hide = Platform.OS === "android" ? "keyboardDidHide" : "keyboardWillHide";

    const showListener = Keyboard.addListener(show, () => setKeyboardVisible(true));
    const hideListener = Keyboard.addListener(hide, () => setKeyboardVisible(false));

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          styles.tabBar,
          {
            display: isKeyboardVisible ? "none" : "flex",
            backgroundColor:  "#ffffff",
          },
        ],
      }}
    >
      {_routes().BOTTOMTAB_ROUTE1.map((screen) => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.Component}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.iconContainer}>
                <Image
                  source={focused ? screen.logo1 : screen.logo}
                  style={[
                    styles.icon,
                   
                  ]}
                />
                {/* Optional label */}
                {/* {screen.label && (
                  <Text
                    style={{
                      fontSize: 10,
                      color: focused ? theme?.primary : theme?.textSecondary,
                      marginTop: 2,
                      fontWeight: focused ? "bold" : "normal",
                    }}
                  >
                    {screen.label}
                  </Text>
                )} */}
              </View>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    borderTopWidth: 0.5,
    elevation: 8,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },
});
