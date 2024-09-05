import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {createMyNavigator} from './components/navigation';
import {menuList} from './utils/menuData';

// const Stack = createNativeStackNavigator();
// 自定义路由
// ？？？但是发现官方示例他会一次性渲染全部页面组件，不是点一个路由渲染一个页面组件
const My = createMyNavigator();

// 创建一个 client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App(): React.JSX.Element {
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator
  //       initialRouteName="Home"
  //       screenOptions={{
  //         // headerMode: 'screen',
  //         headerTintColor: 'white',
  //         headerStyle: {backgroundColor: 'tomato'},
  //       }}>
  //       <Stack.Screen
  //         name="Home"
  //         component={Home}
  //         options={{
  //           title: 'Home app',
  //         }}
  //       />
  //       <Stack.Screen
  //         name="Profile"
  //         component={About}
  //         options={{
  //           title: 'About profile',
  //         }}
  //       />
  //       <Stack.Screen name="Test" component={Test} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <My.Navigator initialRouteName={menuList[0].name}>
          {menuList.map(({element, name}, i) => (
            <My.Screen key={name} name={name} component={element} />
          ))}
        </My.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
