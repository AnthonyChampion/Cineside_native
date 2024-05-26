import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function MovieLayout() {

    return (
        <>
            <Stack>
                <Stack.Screen
                    name={"personscreen"}
                    options={{
                        headerShown: false,
                    }} />
            </Stack>
            <StatusBar backgroundColor='#18181B' style="light" />
        </>
    )
}