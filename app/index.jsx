import { Link, Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { images } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import { LinearGradient } from 'expo-linear-gradient';

var { width, height } = Dimensions.get("window");

export default function App() {

    return (
        <SafeAreaView className="bg-zinc-900 h-full">
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                {/* <ImageBackground source={images.background} className="h-full w-auto"> */}
                {/* <LinearGradient
                    colors={["transparent", "#02061F", "#4659AF", "#1F1F1F",]}
                    style={{ width, height: height * 1 }}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    className="absolute"
                /> */}

                <View className="w-full justify-center items-center h-full z-50">
                    <Image source={images.cinelogo} className="w-20 h-20 mb-6 -mt-20" resizeMode='contain' />
                    <Text className="text-3xl text-white font-pregular">Bienvenue sur Cineside</Text>
                    <Text className="text-s text-white font-pregular mt-2">alimenté par The Movie Data Base</Text>
                    <Link href="/home" className="absolute bottom-0 mb-24 text-white text-lg font-pregular">Continuez en tant qu'invité</Link>
                    <View className="absolute bottom-2 flex-row">
                        <CustomButton
                            title="Connectez-vous !"
                            handlePress={() => router.push("/sign-in")}
                            containerStyles="w-30 mt-10 mr-1 px-2" />
                        <CustomButton
                            title="Enregistrez-vous !"
                            handlePress={() => router.push("/sign-up")}
                            containerStyles="w-30 mt-10 ml-1 px-2 bg-[#059edf]" />
                    </View>

                </View>
                {/* </ImageBackground> */}
            </ScrollView>
            <StatusBar backgroundColor='#18181B' style="light" />
        </SafeAreaView>
    );
}


