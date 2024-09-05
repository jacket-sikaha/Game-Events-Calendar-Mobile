import * as React from 'react';
import {
  Text,
  Pressable,
  View,
  StyleSheet,
  Button,
  ScrollView,
} from 'react-native';
import {
  NavigationHelpersContext,
  useNavigationBuilder,
  TabRouter,
  TabActions,
  createNavigatorFactory,
} from '@react-navigation/native';

function TabNavigator({
  initialRouteName,
  children,
  screenOptions,
  tabBarStyle,
  contentStyle,
}) {
  const {state, navigation, descriptors, NavigationContent} =
    useNavigationBuilder(TabRouter, {
      children,
      screenOptions,
      initialRouteName,
    });

  return (
    <NavigationContent>
      <ScrollView
        horizontal
        contentContainerStyle={[
          {flexDirection: 'row', alignItems: 'center', height: 50},
          tabBarStyle,
        ]}
        className="flex-none">
        {state.routes.map((route, index) => (
          <Pressable
            key={route.key}
            className="px-3 flex-none border"
            onPress={() => {
              const isFocused = state.index === index;
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.data) {
                navigation.dispatch({
                  ...TabActions.jumpTo(route.name, route.params),
                  target: state.key,
                });
              }
            }}>
            <Text>{descriptors[route.key].options.title ?? route.name}</Text>
          </Pressable>
        ))}
      </ScrollView>
      <View style={[contentStyle]} className="flex flex-col flex-1">
        {state.routes.map((route, i) => {
          return (
            <View
              key={route.key}
              style={[
                StyleSheet.absoluteFill,
                {display: i === state.index ? 'flex' : 'none'},
              ]}
              className="p-3">
              {descriptors[route.key].render()}
            </View>
          );
        })}
      </View>
    </NavigationContent>
  );
}

export const createMyNavigator = createNavigatorFactory(TabNavigator);
