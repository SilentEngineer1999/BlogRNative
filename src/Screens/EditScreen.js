import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const EditScreen = ({route}) => {
    const {id} = route.params;
    return (
        <View>
            <Text>Edit Screen - {id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})