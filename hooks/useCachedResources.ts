import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'Neue-Haas-Grotesk-Regular': require('../assets/fonts/NHaasGroteskTXPro-55Rg.ttf'),
          'Neue-Haas-Grotesk-Medium': require('../assets/fonts/NHaasGroteskTXPro-65Md.ttf'),
          'Neue-Haas-Grotesk-Bold': require('../assets/fonts/NHaasGroteskTXPro-75Bd.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        console.log("done");
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
