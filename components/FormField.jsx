import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import { icons } from '../constants'

export default function FormField({ title, value, placeholder, handleChangeText, otherStyles }) {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-gray-100 font-pmedium">{title}</Text>
            <View className="border-2 border-black-200 w-full h-16 px-4 bg-zinc-700 rounded-xl focus:border-[#08d474] items-center flex-row">
                <TextInput className="flex-1 text-white font-psemibold"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#08d474"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === "Password" && !showPassword}
                />

                {
                    title === "Password" && (
                        <TouchableOpacity onPress={() =>
                            setShowPassword(!showPassword)
                        }>
                            <Image source={!showPassword ? icons.eye : icons.eyehide}
                                className="w-6 h-6"
                                resizeMode='contain' />
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    )
}
