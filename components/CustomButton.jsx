import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CustomButton({ title, handlePress, containerStyles, textStyles, isLoading }) {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-[#08d474] h-20 justify-center items-center 
            ${containerStyles} ${isLoading ? "opacity-50" : ""}`}
            disabled={isLoading}
        >
            <Text className={`text-black font-psemibold text-lg ${textStyles}`}>{title}</Text>
        </TouchableOpacity>
    )
}
