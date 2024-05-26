import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from "../../constants";
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcommingMovies } from '../../api/moviedb';
import TrendingMovies from '../../components/TrendingMovies';
import MovieList from '../../components/MovieList';

export default function Home() {

    const [trending, setTrending] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [topRated, setTopRated] = useState([]);

    useEffect(() => {
        getTrendingMovies();
        getUpcomingMovies();
        getTopRatedMovies();
    }, [])

    const getTrendingMovies = async () => {
        const data = await fetchTrendingMovies();
        if (data && data.results) setTrending(data.results);
    }
    const getUpcomingMovies = async () => {
        const data = await fetchUpcommingMovies();
        if (data && data.results) setUpcoming(data.results);
    }
    const getTopRatedMovies = async () => {
        const data = await fetchTopRatedMovies();
        if (data && data.results) setTopRated(data.results);
    }

    return (
        <SafeAreaView className="bg-zinc-900 h-full">
            <ScrollView>
                <View className="my-6">
                    <View className="justify-between items-start flex-row mb-6">
                        <View>
                            <Text className="text-white font-pmedium text-sm pl-4">
                                Bienvenue sur
                            </Text>
                            <Text className="text-white font-psemibold text-2xl text-yellow-400 pl-4">
                                Cineside
                            </Text>
                        </View>
                        <View className="mt-1.5 pr-2">
                            <Image
                                source={images.logo}
                                className="w-14 h-12"
                                resizeMode='contain' />
                        </View>
                    </View>
                    <View className="w-full flex-1 pt-5 pb-8">
                        <View className="flex-row justify-between items-center">
                            <Text className="text-white text-lg font-pregular mb-3 pl-4">
                                Sorties récentes
                            </Text>
                            <Text className="text-yellow-400 text-s font-pregular mb-3 pr-4">
                                Voir tout
                            </Text>
                        </View>
                        <TrendingMovies data={trending} />
                    </View>
                    <View className="w-full flex-1 pt-5 pb-8">
                        <MovieList title="Films en tendance" data={upcoming} />
                    </View>
                    <View className="w-full flex-1 pt-5 pb-8">
                        <MovieList title="Top TMDb" data={topRated} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

