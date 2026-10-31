import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary p-4 text-white">Go to Onbording</Link>
      <Link href="/(auth)/sign_in" className="mt-4 rounded bg-primary p-4 text-white">Sign In</Link>
      <Link href="/(auth)/sign_up" className="mt-4 rounded bg-primary p-4 text-white">Sign Up</Link>
      
      {/* Subscriptions */}
      <Link href="/(subscriptions)/spotify">Spotify Subscription</Link>
      <Link href = {{
        pathname: "./(subscriptions)/[id]",
        params: {id:"claude"},
      }}>Claude Max Subscription</Link>
    </View>
  );
}