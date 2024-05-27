import { View, Text, Dimensions, ScrollView, TouchableOpacity, Image } from "react-native"
import React, { useState, useEffect } from "react"
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { fetchPersonDetails, fetchPersonMovies, image500 } from "../../api/moviedb";
import MovieList from "../../components/MovieList";
import { useLocalSearchParams } from "expo-router";

var { width, height } = Dimensions.get("window");

export default function PersonScreen() {

    const navigation = useNavigation();
    const [isFavourite, toggleFavourite] = useState(false);
    const [personMovies, setPersonMovies] = useState([]);
    const [person, setPerson] = useState({});

    const { person_id } = useLocalSearchParams();

    useEffect(() => {
        getPersonDetails(person_id);
        getPersonMovies(person_id);
    }, []);

    const getPersonDetails = async id => {
        const data = await fetchPersonDetails(id);
        if (data) setPerson(data);
    }

    const getPersonMovies = async id => {
        const data = await fetchPersonMovies(id);
        if (data && data.cast) setPersonMovies(data.cast);
    }

    return (
        <ScrollView className="flex-1 bg-neutral-900" contentContainerStyle={{ paddingBottom: 20 }}>

            <SafeAreaView className={"z-20 w-full flex-row justify-between items-center px-4"}>
                <TouchableOpacity onPress={() => navigation.goBack()} className="rounded-xl p-1 mt-4" >
                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)} className="mt-4">
                    <HeartIcon size="35" color={isFavourite ? "#08d474" : "white"} />
                </TouchableOpacity>
            </SafeAreaView>


            <View>
                <View className="flex-row justify-center mt-5"
                    style={{
                        shadowColor: "gray",
                        shadowRadius: 40,
                        shadowOffset: { width: 0, height: 5 },
                        shadowOpacity: 1
                    }}
                >
                    <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500">
                        <Image
                            source={{ uri: image500(person?.profile_path) }}
                            style={{
                                height: height * 0.43, width: width * 0.74
                            }}
                        />
                    </View>
                </View>
                <View className="mt-6">
                    <Text className="text-3xl text-white font-pregular text-center">
                        {
                            person?.name
                        }
                    </Text>
                    <Text className="text-base text-neutral-500 font-pregular text-center">
                        {
                            person?.place_of_birth
                        }
                    </Text>
                </View>
                <View className="mx-6 p-4 mt-6 flex-row justify-center items-center bg-neutral-500 rounded-full">
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-psemibold">Date de naissance</Text>
                        <Text className="text-neutral-300 font-pregular text-sm">
                            {
                                person?.birthday
                            }
                        </Text>
                    </View>
                    <View className="px-2 items-center">
                        <Text className="text-white font-psemibold">Popularité</Text>
                        <Text className="text-neutral-300 font-pregular text-sm">
                            {
                                person?.popularity?.toFixed(2)
                            } %
                        </Text>
                    </View>
                </View>
                <View className="my-6 mx-4 space-y-2">
                    <Text className="text-white text-lg">Biographie</Text>
                    <Text className="text-neutral-400 font-pregular tracking-wide">
                        {
                            person?.biography || "N/A"
                        }
                    </Text>
                </View>

                <MovieList title={"Autres films"} data={personMovies} />
            </View>
        </ScrollView>
    )
}