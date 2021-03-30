import React from 'react';
import { View, Text, Button } from 'react-native';


export default function ReviewDetails({ navigation }) {
    const pressHandler = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <View style={styles.card}>
           <Text style={{color: "white", fontSize: 20}}>{ navigation.getParam("title") }</Text>
           <Text style={{color: "white"}}>{ navigation.getParam("body")}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet = {
    container: {
        padding: 24
    },
    card : {
        backgroundColor: "gray",
        padding: 20,
        borderRadius: 10,
        
    }
}