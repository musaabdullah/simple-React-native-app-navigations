import React from 'react';
import { View, Text, Button } from 'react-native';


export default function ReviewDetails({ navigation }) {
    const pressHandler = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <Text>ReviewDetails screen</Text>
            <Button title="Go back" onPress={pressHandler} />
        </View>
    );
}

const styles = StyleSheet = {
    container: {
        padding: 24
    }
}