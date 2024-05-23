import { View, Text, FlatList, Dimensions, Image } from 'react-native'
import React from 'react'
import { image185 } from '../api/moviedb';

var { width, height } = Dimensions.get("window");

export default function UpcomingMovies({ data }) {


    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.$id}
            renderItem={({ item }) => (
                <Image
                    source={{ uri: image185(item.poster_path) }}
                    style={{
                        width: width * 0.33,
                        height: height * 0.22
                    }}
                    className="rounded-3xl mx-2"
                />
            )}
            horizontal
        />
    )
}

