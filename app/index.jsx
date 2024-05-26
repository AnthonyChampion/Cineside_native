import { Link, Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { images } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';

export default function App() {
    return (
        <SafeAreaView className="bg-zinc-900 h-full">
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <View className="w-full justify-center items-center min-h-[85vh]">
                    <Image source={images.logo} className="w-20 h-20" />
                    <Text className="text-3xl text-white font-pblack">Cineside</Text>
                    <Image source={images.moviecard} className="w-80 h-80" resizeMode='contain' />
                    <View>
                        <CustomButton
                            title="Connectez-vous !"
                            handlePress={() => router.push("/sign-in")}
                            containerStyles="w-64 mt-4" />
                    </View>
                    <View>
                        <Link href="/home" className="text-white text-xl font-psemibold mt-8">Page d'accueil</Link>
                    </View>
                </View>
            </ScrollView>
            <StatusBar backgroundColor='#18181B' style="light" />
        </SafeAreaView>
    );
}

