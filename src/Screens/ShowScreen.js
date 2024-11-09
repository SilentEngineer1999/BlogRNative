import React, {useContext, useEffect} from 'react';
import { Context } from '../context/BlogContext';
import { View, Text, StyleSheet } from 'react-native';
import {EvilIcons} from "@expo/vector-icons";

export const ShowScreen = ({ route }) => {
    // Access the id parameter from route.params
    const { id } = route.params;
    const {state} = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === id);

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};
