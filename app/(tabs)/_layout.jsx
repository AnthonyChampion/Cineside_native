import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router';

import { icons } from "../../constants";
import { StatusBar } from 'expo-status-bar';

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="flex items-center justify-center gap-2">
            <Image
                source={icon}
                resizeMode='contain'
                tintColor={color}
                className="w-7 h-7" />
            <Text className={`${focused ? "font-psemibold" : "font-pregular"} text-xs text-white`}>{name}</Text>
        </View>
    )
}

export default function TabsLayout() {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#FACC14",
                    tabBarInactiveTintColor: "#CDCDE0",
                    tabBarStyle: {
                        backgroundColor: "#18181B",
                        borderTopWidth: 1,
                        borderTopColor: "#232533",
                        height: 84,
                    }
                }}>
                <Tabs.Screen name="home"
                    options={{
                        title: "Accueil",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name="Menu"
                                focused={focused} />
                        )
                    }} />
                <Tabs.Screen name="favorites"
                    options={{
                        title: "Favoris",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.heart}
                                color={color}
                                name="Favoris"
                                focused={focused} />
                        )
                    }} />
                <Tabs.Screen name="movies"
                    options={{
                        title: "Films",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.movie}
                                color={color}
                                name="Films"
                                focused={focused}
                            />
                        )
                    }} />
                <Tabs.Screen name="profile"
                    options={{
                        title: "Profil",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.profile}
                                color={color}
                                name="Profil"
                                focused={focused} />
                        )
                    }} />
            </Tabs>
            <StatusBar backgroundColor="#18181B" style="light" />
        </>
    )
}
