import React from 'react';
import { View, Text , Button} from 'react-native';


export default function Home({navigation}) {


    const pressHandler = () => {
        navigation.navigate('ReviewDetails');
    }


    return (
        <View >
            <Text style={{fontSize: 20, fontWeight: "bold", color: "white"}}>Home screen</Text>
            <Button  title="show details" onPress={pressHandler}/>
        </View>
    );
}
 