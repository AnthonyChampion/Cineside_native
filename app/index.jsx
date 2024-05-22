import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
    return (
        <View className="flex-1 justify-center items-center bg-zinc-900">
            <Text className="text-3xl text-white">Cineside</Text>
            <StatusBar style="auto" />
            <Link className="text-white" href="/profile">Go to Profile</Link>
        </View>
    );
}