import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router';

import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image
                source={icon}
                resizeMode='containe'
                tintColor={color}
                className="w-7 h-7" />
            <Text className={`${focused ? "font-psemibold" : "font-pregular"} text-xs text-white`}>{name}</Text>
        </View>
    )
}

const TabsLayout = () => {
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
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name="Home"
                                focused={focused} />
                        )
                    }} />
                <Tabs.Screen name="favorites"
                    options={{
                        title: "Favorites",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.heart}
                                color={color}
                                name="Favorites"
                                focused={focused} />
                        )
                    }} />
                <Tabs.Screen name="movies"
                    options={{
                        title: "Movies",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.movie}
                                color={color}
                                name="Movies"
                                focused={focused}
                            />
                        )
                    }} />
                <Tabs.Screen name="profile"
                    options={{
                        title: "Profile",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.profile}
                                color={color}
                                name="Profile"
                                focused={focused} />
                        )
                    }} />
            </Tabs>
        </>
    )
}

export default TabsLayout