import { Text, View, FlatList, Button, StyleSheet, TouchableOpacity } from "react-native"
import { Context } from "../context/BlogContext"
import React, {useContext, useEffect} from 'react';
import {Feather} from "@expo/vector-icons";

export const HomeScreen = ({ navigation }) => {
    const {state, deleteBlogPost} = useContext(Context);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                    <Feather name="plus" size={30} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <View>
           <FlatList
           
           data= {state}
           keyExtractor={(item, index) => index.toString()}
           renderItem={({item}) => {
            return (
            <TouchableOpacity onPress={() => navigation.navigate("ShowBlogs", {id: item.id})}>
                <View style={styles.row}>
                    <Text style={styles.title}>{item.title} - {item.id}</Text>
                    <TouchableOpacity onPress={()=>{deleteBlogPost(item.id)}}>
                        <Feather style={styles.icon} name="trash"/>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
           )
        }
    }
           />
        </View>
    )
}



const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        BorderBottomWidth: 1,
        borderColor: 'gray'
    },
    title : {
        fontSize: 18,
        marginHorizontal:20
    },
    icon: {
        fontSize: 24,
        marginHorizontal:20
    }
})