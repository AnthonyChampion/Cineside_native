import { useNavigation } from 'expo-router'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'
import { Text } from 'react-native-animatable'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function AllMovieScreen() {

    const navigation = useNavigation();

    return (
        <SafeAreaView className="bg-zinc-900 h-full">
            <ScrollView className="my-6 pl-4">
                <Text className="text-white text-center text-lg font-pregular pb-4">Tous les films</Text>
                <TouchableOpacity onPress={() => navigation.goBack()} className="rounded-xl p-1 mt-12" >
                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}
