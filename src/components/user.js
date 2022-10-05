import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button } from "react-native";
import AboutBook from "./fitback";

const Stack = createStackNavigator();

const UserScreen = (props) => {
  function goToAboutBook() {
    //перейти к отзывам
    props.navigation.navigate("AboutBook");
  }
  function goToLogin() {
    //выйти
    props.navigation.navigate("Login");
  }

  return (
    <View>
      <Text>{props.route.params.name}</Text>

      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="AboutBook"
            component={AboutBook}
            options={{ title: "о книге" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Button title="о книге" onPress={goToAboutBook} />
      <Button title="выйти" onPress={goToLogin} />
    </View>
  );
};

export default UserScreen;
