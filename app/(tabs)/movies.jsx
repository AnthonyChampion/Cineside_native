import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router, useNavigation } from 'expo-router';
import { image500, searchMovies } from '../../api/moviedb';
import { icons } from '../../constants';

const { width, height } = Dimensions.get("window");

export default function Movies() {
    const navigation = useNavigation();
    const [results, setResults] = useState([]);
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
                <View className="mx-4 mb-3 flex-row justify-between items-center border border-black-100 bg-zinc-800 rounded-full">
                    <TextInput
                        onChangeText={handleSearch}
                        placeholder="Recherchez un film"
                        placeholderTextColor={"lightgray"}
                        className="pl-6 flex-1 text-base font-pregular text-white trancking-wider" />
                    <TouchableOpacity
                        onPress={() => navigation.navigate("moviesreen")}
                        className="rounded-full p-3 m-1">
                        <Image
                            source={icons.search}
                            className="w-5 h-5"
                            resizeMode='contain'
                            tintColor={"lightgray"}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 15 }}
                    className="space-y-3">
                    <Text className="text-white text-center font-pregular ml-1">Resultats ({results.length})</Text>
                    <View className="flex-row justify-between flex-wrap">
                        {
                            results.map((item, index) => {
                                return (
                                    <TouchableWithoutFeedback
                                        key={index}
                                        onPress={() => router.push("/moviescreen", item)}>

                                        <View className="space-y-2 mb-4">
                                            <Image className="rounded-3xl"
                                                source={{ uri: image500(item?.poster_path) }}
                                                style={{ width: width * 0.44, height: height * 0.3 }}
                                            />
                                            <Text className="text-white font-pregular ml-1 text-center">
                                                {
                                                    item?.title.length > 22 ? item?.title.slice(0, 22) + "..." : item?.title
                                                }
                                            </Text>
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

