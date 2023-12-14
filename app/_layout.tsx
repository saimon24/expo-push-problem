import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      {/* Once we comment in the next line, "inifinite" stack isn't working */}
      {/* It only updates the [id] page */}
      {/* Even the getId solution proposed on GH does not change this (https://github.com/expo/router/discussions/731) */}
      {/* <Stack.Screen name="[id]" getId={() => `${Date.now()}`} options={{ title: 'ID Page' }} /> */}
    </Stack>
  );
};

export default RootLayout;
