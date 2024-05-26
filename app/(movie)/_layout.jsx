import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function MovieLayout() {
    const params = useLocalSearchParams();

    return (
        <>
            <Stack>
                <Stack.Screen
                    name={"moviescreen/test"}
                    options={{
                        headerShown: false,
                    }} />
            </Stack>
            <StatusBar backgroundColor='#18181B' style="light" />
        </>
    )
}