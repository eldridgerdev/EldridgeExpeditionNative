// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

// import useCachedResources from './hooks/useCachedResources';
// import useColorScheme from './hooks/useColorScheme';
// import Navigation from './navigation';

// export default function App() {
//   const isLoadingComplete = useCachedResources();
//   const colorScheme = useColorScheme();

//   if (!isLoadingComplete) {
//     return null;
//   } else {
//     return (
//       <SafeAreaProvider>
//         <Navigation colorScheme={colorScheme} />
//         <StatusBar />
//       </SafeAreaProvider>
//     );
//   }
// }

import React from 'react'
import { ApolloProvider } from '@apollo/client'

import client from './apolloClient'
import Navigator from './navigation/TabNavigator'
import { NavigationContainer } from '@react-navigation/native'

const App = () => (
    <ApolloProvider client={client}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
    </ApolloProvider>
)

export default App