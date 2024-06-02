import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

export default function AllLayout() {
    return (
        <>
            <Stack>
                <Stack.Screen
                    name={"allmoviescreen"}
                    options={{
                        headerShown: false,
                    }} />
            </Stack>
            <StatusBar backgroundColor='#18181B' style="light" />
        </>
    )
}

