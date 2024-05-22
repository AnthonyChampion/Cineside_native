import { Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { images } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';

export default function App() {
    return (
        <SafeAreaView className="bg-zinc-900 h-full">
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <View className="w-full justify-center items-center min-h-full">
                    <Image source={images.logo} className="w-28 h-28" />
                    <Text className="text-3xl text-white font-pblack">Cineside</Text>
                    <View>
                        <CustomButton
                            title="Continue with Email"
                            handlePress={() => router.push("/sign-in")}
                            containerStyles="w-64 mt-24" />
                    </View>
                </View>
            </ScrollView>
            <StatusBar backgroundColor='#18181B' style="light" />
        </SafeAreaView>
    );
}

