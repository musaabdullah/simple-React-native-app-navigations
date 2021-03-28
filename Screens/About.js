import React from 'react';
import { View, Text } from 'react-native';


export default function About() {
    return (
        <View style={styles.container}>
            <Text>About screen</Text>
        </View>
    );
}

const styles = StyleSheet({
    container: {
        padding: 24
    }
})