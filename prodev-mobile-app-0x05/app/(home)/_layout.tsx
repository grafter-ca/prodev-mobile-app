// app/(home)/_layout.tsx
import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Hide headers if you want a custom design
      }}
    />
  );
}
