import { View, Text, FlatList, Image, TouchableWithoutFeedback, Dimensions } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from "react-native-animatable"
import { image500 } from '../api/moviedb';

const zoomIn = {
    0: {
        scale: 0.9
    },
    1: {
        scale: 1,
    }
}
const zoomOut = {
    0: {
        scale: 1
    },
    1: {
        scale: 0.9,
    }
}

const TrendingItem = ({ activeItem, item }) => {
    return (
        <Animatable.View
            className="mr-5"
            animation={activeItem === item?.poster_path ? zoomIn : zoomOut}
            duration={500}>

        </Animatable.View>
    )
}

var { width, height } = Dimensions.get("window");

export default function TrendindMovies({ data }) {
    const [activeItem, setActiveItem] = useState(data[0])

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.$id}
            renderItem={({ item }) => (
                <Image
                    source={{ uri: image500(item.poster_path) }}
                    style={{
                        width: width * 0.6,
                        height: height * 0.4
                    }}
                    className="rounded-3xl mx-2"
                />
            )}
            horizontal
        />
    )
}
