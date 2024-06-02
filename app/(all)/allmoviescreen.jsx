import { useLocalSearchParams, useNavigation } from 'expo-router'
import React, { useState } from 'react'
import { Dimensions, Image, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native'
import { Text } from 'react-native-animatable'
import { ChevronLeftIcon, StarIcon } from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcommingMovies, image500 } from '../../api/moviedb'
import { TouchableWithoutFeedback } from 'react-native'

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
                <Text className="text-white text-center text-lg font-pregular pb-8">Tous les films</Text>
                <TouchableOpacity onPress={() => navigation.goBack()} className="absolute p-1" >
                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                </TouchableOpacity>

                {data.map((movie) => {
                    return (
                        <TouchableWithoutFeedback
                            key={movie.id}
                            onPress={() => {
                                router.push({
                                    pathname: 'moviescreen',
                                    params: { movie_id: movie.id }
                                })
                            }}>

                            <View className="space-y-2 mb-4 mt-2 flex-row w-[55vw] ">
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
                })}
            </ScrollView>
        </SafeAreaView>
    )
}
