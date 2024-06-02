import { View, Image, TouchableWithoutFeedback, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { image500 } from '../api/moviedb';
import { useRouter } from 'expo-router';


var { width, height } = Dimensions.get("window");

export default function TrendingMovies({ data }) {
    const router = useRouter();
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 5 }}
        >
            {
                data.map((movie) => {
                    return (
                        <TouchableWithoutFeedback
                            key={movie.id}
                            onPress={() => router.push({
                                pathname: 'moviescreen',
                                params: { from: "TrendingMovies" }
                            })}
                        >
                            <View className="space-y-1 mr-4">
                                <Image
                                    source={{ uri: image500(movie.poster_path) }}
                                    className="rounded-3xl mx-2"
                                    style={{ width: width * 0.6, height: height * 0.4 }}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })
            }

        </ScrollView>
    )
}

