import { useLocalSearchParams, useNavigation } from 'expo-router'
import React, { useState } from 'react'
import { Dimensions, Image, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native'
import { Text } from 'react-native-animatable'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcommingMovies, image500 } from '../../api/moviedb'

var { width, height } = Dimensions.get("window");

export default function AllMovieScreen() {

    const navigation = useNavigation();

    const { from } = useLocalSearchParams();
    const [data, setData] = useState([]);

    const getTrendingMovies = async () => {
        const data = await fetchTrendingMovies();
        if (data && data.results) setData(data.results);
    }
    const getUpcomingMovies = async () => {
        const data = await fetchUpcommingMovies();
        if (data && data.results) setData(data.results);
    }
    const getTopRatedMovies = async () => {
        const data = await fetchTopRatedMovies();
        if (data && data.results) setData(data.results);
    }

    switch (from) {
        case "TrendingMovies":
            getTrendingMovies();
            break;
        case "Upcoming":
            getUpcomingMovies();
            break;
        case "TopRated":
            getTopRatedMovies();
            break;
        default:
            getTrendingMovies();
            break;
    }



    return (
        <SafeAreaView className="bg-zinc-900 h-full">
            <ScrollView className="my-6 pl-4">
                <Text className="text-white text-center text-lg font-pregular">Tous les films</Text>
                <TouchableOpacity onPress={() => navigation.goBack()} className="rounded-xl p-1 mt-2" >
                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                </TouchableOpacity>

                {data.map((movie) => {
                    return (
                        <View>
                            <Image
                                source={{ uri: image500(movie.poster_path) }}
                                className="rounded-3xl mx-2"
                                style={{ width: width * 0.6, height: height * 0.4 }} />
                            <Text>
                                {movie.title}
                            </Text>
                        </View>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}
