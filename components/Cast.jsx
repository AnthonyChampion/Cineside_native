import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native"
import React from "react"
import { image500 } from "../api/moviedb";
import { useRouter } from "expo-router";

export default function Cast({ cast }) {

    const router = useRouter();

    return (
        <View className="my-6">
            <Text className="text-white text-lg font-pregular mx-4 mb-5">
                Casting
            </Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}>
                {
                    cast && cast.map((person) => {
                        return (
                            <TouchableOpacity
                                key={person.id}
                                onPress={() => {
                                    router.push({
                                        pathname: 'personscreen',
                                        params: { person_id: person.id }
                                    })
                                }}
                            >
                                <View className="overflow-hidden rounded-full h-30 w-30 items-center border border-neutral-500 mr-2">
                                    <Image
                                        className="rounded-2xl h-24 w-20"
                                        source={{ uri: image500(person?.profile_path) }}
                                    />
                                </View>

                                <Text className="text-white font-pregular text-xs mt-1">
                                    {
                                        person?.character.length > 10 ? person?.character.slice(0, 10) + "..." : person?.character
                                    }
                                </Text>
                                <Text className="text-neutral-400 font-pregular text-xs mt-1">
                                    {
                                        person?.original_name.length > 10 ? person?.original_name.slice(0, 10) + "..." : person?.original_name
                                    }
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}