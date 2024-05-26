import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions } from "react-native"
import React from "react"
import { image185 } from "../api/moviedb";
import { router } from "expo-router";

var { width, height } = Dimensions.get("window");

export default function MovieList({ title, data }) {

    return (
        <View className=" mt-4 space-y-4">
            <View className="mx-4 flex-row justify-between items-center">
                <Text className="text-white text-lg font-pregular">{title}</Text>

                <TouchableOpacity>
                    <Text className="text-yellow-400 text-s font-pregular">Voir tout</Text>
                </TouchableOpacity>

            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 13 }}
            >
                {
                    data.map((movie) => {
                        return (
                            <TouchableWithoutFeedback
                                key={movie.id}
                                onPress={() => router.push("/moviescreen", movie_id)}
                            >
                                <View className="space-y-1 mr-4">
                                    <Image
                                        source={{ uri: image185(movie.poster_path) }}
                                        className="rounded-2xl"
                                        style={{ width: width * 0.33, height: height * 0.22 }}
                                    />
                                    <Text className="text-neutral-300 ml-1 text-center font-pregular">
                                        {movie.title.length > 14 ? movie.title.slice(0, 16) + "..." : movie.title}
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })
                }

            </ScrollView>
        </View>
    )
}