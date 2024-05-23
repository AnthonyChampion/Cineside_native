import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from "../../constants";
import SearchInput from '../../components/SearchInput';
import UpcomingMovies from '../../components/UpcomingMovies';
import { fetchTrendingMovies, fetchUpcommingMovies } from '../../api/moviedb';
import TrendindMovies from '../../components/TrendingMovies';

export default function Home() {

    const [trending, setTrending] = useState([]);
    const [upcoming, setUpcoming] = useState([]);

    useEffect(() => {
        getTrendindMovies();
        getUpcomingMovies();
    }, [])

    const getTrendindMovies = async () => {
        const data = await fetchTrendingMovies();
        if (data && data.results) setTrending(data.results);
    }
    const getUpcomingMovies = async () => {
        const data = await fetchUpcommingMovies();
        if (data && data.results) setUpcoming(data.results);
    }

    return (
        <SafeAreaView className="bg-zinc-900 h-full">
            <ScrollView>
                <View className="my-6 px-4 space-y-6">
                    <View className="justify-between items-start flex-row mb-6">
                        <View>
                            <Text className="text-white font-pmedium text-sm">
                                Welcome to
                            </Text>
                            <Text className="text-white font-psemibold text-2xl text-yellow-400">
                                Cineside
                            </Text>
                        </View>
                        <View className="mt-1.5">
                            <Image
                                source={images.logo}
                                className="w-9 h-10"
                                resizeMode='contain' />
                        </View>
                    </View>
                    <SearchInput />
                    <View className="w-full flex-1 pt-5 pb-8">
                        <Text className="text-white text-lg font-pregular mb-3">
                            Trending Movies
                        </Text>
                        <TrendindMovies data={trending} />
                    </View>
                    <View className="w-full flex-1 pt-5 pb-8">
                        <Text className="text-white text-lg font-pregular mb-3">
                            Upcoming Movies
                        </Text>
                        <UpcomingMovies data={upcoming} />
                    </View>
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}

