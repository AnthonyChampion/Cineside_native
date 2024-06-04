import { router, useLocalSearchParams, useNavigation } from 'expo-router'
import React, { useState } from 'react'
import { Dimensions, Image, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native'
import { Text } from 'react-native-animatable'
import { ChevronLeftIcon, StarIcon } from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcommingMovies, image500 } from '../../api/moviedb'
import { TouchableWithoutFeedback } from 'react-native'
import { images } from '../../constants'

var { width, height } = Dimensions.get("window");

export default function AllMovieScreen() {

    const navigation = useNavigation();

    const { from } = useLocalSearchParams();
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    const getTrendingMovies = async () => {
        const data = await fetchTrendingMovies(page);
        if (data && data.results) setData(data.results);
    }
    const getUpcomingMovies = async () => {
        const data = await fetchUpcommingMovies(page);
        if (data && data.results) setData(data.results);
    }
    const getTopRatedMovies = async () => {
        const data = await fetchTopRatedMovies(page);
        if (data && data.results) setData(data.results);
    }

    switch (from) {
        case "TrendingMovies":
            getTrendingMovies(page);
            break;
        case "Upcoming":
            getUpcomingMovies(page);
            break;
        case "TopRated":
            getTopRatedMovies(page);
            break;
        default:
            getTrendingMovies(page);
            break;
    }

    function nextPage() {
        setPage(page + 1);
    }

    function previousPage() {
        if (page > 1) {
            setPage(page - 1);
        }
    }


    return (
        <SafeAreaView className="bg-zinc-900 h-full">
            <ScrollView className="my-6 pl-5">
                <Text className="text-white text-center text-lg font-pregular pb-8">Tous les films</Text>
                <TouchableOpacity onPress={() => navigation.goBack()} className="absolute -pl-1 -mt-1" >
                    <Image source={images.cinelogo} className="w-9 h-9" resizeMode='contain' />
                </TouchableOpacity>
                <View className="w-full flex flex-row justify-between pb-8 pt-2">
                    {page > 1 && (
                        <TouchableOpacity className="rounded-xl border border-zinc-500"
                            onPress={previousPage}>
                            <Text className="text-white p-2 w-24 text-center text-s font-plight">Précédent</Text>
                        </TouchableOpacity>
                    )}
                    <TouchableOpacity className="rounded-xl border border-zinc-500 mr-5"
                        onPress={nextPage}>
                        <Text className="text-white p-2 w-24 text-center text-s font-plight">Suivant</Text>
                    </TouchableOpacity>
                </View>

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

                            <View className="mb-4 mt-2 flex-row w-[90vw] h-44 justify-center ">
                                <Image className="rounded-3xl"
                                    source={{ uri: image500(movie.poster_path) }}
                                    style={{ width: width * 0.30, height: height * 0.20 }}
                                    resizeMode='cover'
                                />
                                <View className="w-[65%] h-28 flex-col pl-3 pt-1">
                                    <Text className="text-white font-pregular text-sm ">
                                        {
                                            movie.title
                                        }
                                    </Text>
                                    <Text className="text-neutral-400 font-pregular ml-1 ">
                                        {movie?.release_date?.split("-")[0]}
                                    </Text>

                                    <Text className="text-white text-xs font-plight"
                                        numberOfLines={6}>
                                        {movie.overview ? movie.overview : "N/A"}

                                    </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}
