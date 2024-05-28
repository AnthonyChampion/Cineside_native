import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { image500, searchMovies } from '../../api/moviedb';
import { icons } from '../../constants';
import { StarIcon } from 'react-native-heroicons/solid';

const { width, height } = Dimensions.get("window");

export default function Movies() {
    const navigation = useNavigation();
    const [results, setResults] = useState([]);

    const { movie_id } = useLocalSearchParams();

    const router = useRouter();

    const handleSearch = value => {
        if (value && value.length > 2) {
            searchMovies({
                query: value,
                include_adult: "false",
                language: "fr-FR",
                page: "1"
            }).then(data => {
                if (data && data.results)
                    setResults(data.results);
            })
        } else {
            setResults([])
        }

    }

    return (
        <SafeAreaView className="bg-zinc-900 h-full">
            <ScrollView className="my-6 pl-4 ">
                <Text className="text-white text-center text-lg font-pregular pb-4">Films</Text>
                <View className="mx-4 mb-3 flex-row justify-between items-center border border-black-100 bg-white rounded-full">
                    <TextInput
                        onChangeText={handleSearch}
                        placeholder="Recherchez un film"
                        placeholderTextColor={"black"}
                        className="pl-6 flex-1 text-base font-pregular text-black trancking-wider" />
                    <TouchableOpacity
                        onPress={() => navigation.navigate("moviesreen")}
                        className="rounded-full p-3 m-1">
                        <Image
                            source={icons.search}
                            className="w-5 h-5"
                            resizeMode='contain'
                            tintColor={"black"}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 15 }}
                    className="space-y-3">
                    <Text className="text-white text-center font-pregular ml-1">Resultats ({results.length})</Text>
                    <View className="flex-col justify-between flex-wrap">
                        {
                            results.map((movie) => {
                                return (
                                    <TouchableWithoutFeedback
                                        key={movie.id}
                                        onPress={() => {
                                            router.push({
                                                pathname: 'moviescreen',
                                                params: { movie_id: movie.id }
                                            })
                                        }}>

                                        <View className="space-y-2 mb-4 flex-row w-[55vw] ">
                                            <Image className="rounded-3xl"
                                                source={{ uri: image500(movie.poster_path) }}
                                                style={{ width: width * 0.30, height: height * 0.20 }}
                                                resizeMode='cover'
                                            />
                                            <View className="flex-col ml-4 justify-center space-y-2">
                                                <Text className="text-white font-pregular text-lg ">
                                                    {
                                                        movie.title
                                                    }
                                                </Text>
                                                <Text className="text-neutral-400 font-pregular ml-1 ">
                                                    {movie?.release_date?.split("-")[0]}
                                                </Text>
                                                <View className=" flex-row ">
                                                    <StarIcon size="20" color="white" />
                                                    <Text className="text-[#08d474] font-pregular ml-1">
                                                        {Math.round((movie?.vote_average) * 100) / 100} / 10
                                                    </Text>
                                                </View>
                                            </View>

                                        </View>
                                    </TouchableWithoutFeedback>
                                )
                            })
                        }
                    </View>
                </ScrollView>

            </ScrollView>
        </SafeAreaView>
    )
}

