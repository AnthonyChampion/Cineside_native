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

                <View className="w-full justify-center items-center h-full z-50">
                    <Image source={images.cinelogo} className="w-20 h-20 mb-6 -mt-20" resizeMode='contain' />
                    <Text className="text-3xl text-white font-pregular">Bienvenue sur Cineside</Text>
                    <Text className="text-s text-white font-pregular mt-2">alimenté par The Movie Data Base</Text>
                    <Link href="/home" className="text-white text-lg font-pregular mt-6 border border-zinc-500 p-4 rounded-xl">Accueil</Link>
                    <View className="absolute bottom-2 flex-row">
                        <CustomButton
                            title="Connection"
                            handlePress={() => router.push("/sign-in")}
                            containerStyles="w-40 mt-10 mr-1 px-2" />
                        <CustomButton
                            title="Inscription"
                            handlePress={() => router.push("/sign-up")}
                            containerStyles="w-40 mt-10 ml-1 px-2 bg-[#059edf]" />
                    </View>

                </View>
                {/* </ImageBackground> */}
            </ScrollView>
            <StatusBar backgroundColor='#18181B' style="light" />
        </SafeAreaView>
    );
}


