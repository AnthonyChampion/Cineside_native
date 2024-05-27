import { View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity, Dimensions } from "react-native"
import React, { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient";
import { fetchMovieCredits, fetchMovieDetails, fetchSimilarMovies, image500 } from "../../api/moviedb";
import Cast from "../../components/Cast";
import MovieList from "../../components/MovieList";
import { useLocalSearchParams } from "expo-router";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";

var { width, height } = Dimensions.get("window");

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
                <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4 py-2"}>
                    <TouchableOpacity onPress={() => navigation.goBack()} className="rounded-xl p-1 mt-12" >
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)} className="mt-12">
                        <HeartIcon size="35" color={isFavourite ? "#08d474" : "white"} />
                    </TouchableOpacity>
                </SafeAreaView>

                <View>
                    <Image
                        source={{ uri: image500(movie?.poster_path) }}
                        style={{ width, height: height * 0.70 }}
                    />
                    <LinearGradient
                        colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23, 1)"]}
                        style={{ width, height: height * 0.40 }}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        className="absolute bottom-0"
                    />
                </View>

            </View>
            <View style={{ margintTop: -(height * 0.09) }} className="space-y-3">
                <Text className="text-white text-center text-2xl font-pregular tracking-wider">
                    {
                        movie?.title
                    }
                </Text>
                {
                    movie?.id ? (
                        <Text className="text-white font-pregular text-base text-center">
                            {movie?.status} • {movie?.release_date?.split("-")[0]} • {movie.runtime} min
                        </Text>
                    ) : null
                }
                <View className="flex-row justify-center mx-4 space-x-2">
                    {
                        movie?.genres?.map((genre, index) => {
                            let showDot = index + 1 != movie.genres.length;
                            return (
                                <Text key={index} className="text-white font-pregular text-base text-center"  >
                                    {genre?.name} {showDot ? " •" : null}
                                </Text>
                            )
                        })
                    }
                </View>
                <Text className="text-neutral-400 font-pregular mx-4 tracking-wide">
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
