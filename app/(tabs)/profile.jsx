import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'

export default function Profile() {
    return (
        <SafeAreaView className="bg-zinc-900 h-full">
            <ScrollView className="my-6 pl-4">
                <Text className="text-white text-center text-lg font-pregular">Profil</Text>
            </ScrollView>
        </SafeAreaView>
    )
}
