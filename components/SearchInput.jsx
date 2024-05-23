import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import { icons } from '../constants'

export default function SearchInput({ title, value, placeholder, handleChangeText, otherStyles }) {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className={`space-y-2 items-center mt-2 ${otherStyles}`}>
            <View className="border-2 border-black-200 w-[85vw] h-14 px-4 bg-zinc-700 rounded-xl focus:border-yellow-400 items-center flex-row justify-center">
                <TextInput className="flex-1 text-white font-psemibold"
                    value={value}
                    placeholder="Search for a movie"
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === "Password" && !showPassword}
                />
                <TouchableOpacity>
                    <Image
                        source={icons.search}
                        className="w-5 h-5"
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
