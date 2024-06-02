import { View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity } from "react-native"
import React, { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { backdrop, fetchMovieCredits, fetchMovieDetails, fetchSimilarMovies } from "../../api/moviedb";
import Cast from "../../components/Cast";
import MovieList from "../../components/MovieList";
import { useLocalSearchParams } from "expo-router";
import { ChevronLeftIcon, FilmIcon } from "react-native-heroicons/outline";
import { HeartIcon, StarIcon } from "react-native-heroicons/solid";


export default function MovieScreen() {

    const [isFavourite, toggleFavourite] = useState(false);
    const navigation = useNavigation();
    const [cast, setCast] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [movie, setMovie] = useState({});

    const { movie_id } = useLocalSearchParams();

    useEffect(() => {
        getMovieDetails(movie_id);
        getMovieCredits(movie_id);
        getSimilarMovies(movie_id);
    }, []);

    const getMovieDetails = async id => {
        const data = await fetchMovieDetails(id);
        if (data) setMovie(data);
    }

    const getMovieCredits = async id => {
        const data = await fetchMovieCredits(id);
        if (data && data.cast) setCast(data.cast);
    }

    const getSimilarMovies = async id => {
        const data = await fetchSimilarMovies(id);
        if (data && data.results) setSimilarMovies(data.results);
    }
    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 38 }}
            className="flex-1 bg-zinc-900"
        >
            <View className="w-full">
                <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4"}>
                    <TouchableOpacity onPress={() => navigation.goBack()} className="rounded-xl p-1 mt-12" >
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                    </TouchableOpacity>

                </SafeAreaView>
                <View>
                    <Image
                        source={{ uri: backdrop(movie?.backdrop_path) }}
                        resizeMode="contain"
                        className="w-auto h-[36vh]"
                    />
                </View>
            </View>
            <View className="space-y-3">
                <Text className="text-white text-2xl font-pregular tracking-wider pl-4 -mt-6">
                    {
                        movie?.title
                    }
                </Text>
                {
                    movie?.id ? (
                        <Text className="text-neutral-400 font-pregular text-s pl-4">
                            {movie?.release_date?.split("-")[0]}  •  {movie.runtime} min
                        </Text>
                    ) : null
                }
                <View className="flex-row mx-4 space-x-2 items-center mb-2">
                    {
                        movie?.genres?.map((genre, index) => {
                            let showDot = index + 1 != movie.genres.length;
                            return (
                                <Text key={index} className="text-white font-pregular text-[12px] text-center"  >
                                    {genre?.name} {showDot ? " •" : null}
                                </Text>
                            )
                        })
                    }
                </View>
                <View className="flex-row justify-around mb-2">
                    <View className="flex-col items-center">
                        <StarIcon size="30" color="white" />
                        <Text className="text-[#08d474] text-s font-pregular">{Math.round((movie?.vote_average) * 100) / 100} / 10</Text>
                    </View >
                    <View className="flex-col items-center">
                        <FilmIcon size="30" color="white" />
                        <Text className="text-neutral-400 text-s font-pregular">Bande annonce</Text>
                    </View>
                    <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)} className="pl-4 ">
                        <View className="flex-col items-center">
                            <HeartIcon size="30" color={isFavourite ? "#08d474" : "white"} />
                            <Text className="text-neutral-400 text-s font-pregular">Favoris</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text className="text-white font-pregular pl-4">Synopsis : </Text>
                <Text className="text-neutral-400 text-justify font-pregular mx-4 tracking-wider">
                    {
                        movie?.overview
                    }
                </Text>
            </View>
            {cast.length > 0 && <Cast navigation={navigation} cast={cast} />}
            {similarMovies.length > 0 && <MovieList title="Films similaires" data={similarMovies} />}
        </ScrollView>
    )
}

