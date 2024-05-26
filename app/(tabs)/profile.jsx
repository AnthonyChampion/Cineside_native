import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Profile() {
    return (
        <SafeAreaView className="bg-zinc-900 h-full">
            <Text className="text-white">Profile</Text>
        </SafeAreaView>
    )
}
