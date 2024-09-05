import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import './gesture-handler.js';
import {menuList} from './utils/menuData';
import {Image} from 'react-native';

// react-native-reanimated 3.15.1最新版本貌似有问题，降级3.10目前能运行
const Drawer = createDrawerNavigator();

// 创建一个 client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Drawer.Navigator>
          {menuList.map(({element, name, icon}, i) => (
            <Drawer.Screen
              options={{
                drawerIcon: ({color, size, focused}) => (
                  <Image source={{uri: icon}} className="w-8 h-8" />
                ),
              }}
              key={name}
              name={name}
              component={element}
            />
          ))}
        </Drawer.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
