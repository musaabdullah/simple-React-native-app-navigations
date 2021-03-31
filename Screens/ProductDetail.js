import React, {useState, useEffect} from 'react';
import { View, Text, Image } from 'react-native';

export default function ProductDetail({navigation}) {
    return (
        <View>
            <View style={{marginTop: 20}}></View>
            <View>
                 <Image style={{width: 400, height: 200, margin: 10}} source={{uri: navigation.getParam("image")}}/>
                 <Text style={{padding: 10, fontSize: 20, fontWeight: "bold",}}>{navigation.getParam("title")}</Text>
                 <Text style={{padding: 10, fontSize: 20, fontWeight: "bold"}}>{navigation.getParam("category")}</Text>
                 <Text style={{padding: 10, fontSize: 16, fontWeight: "bold"}}>{navigation.getParam("description")}</Text>
                 <Text style={{padding: 10, fontSize: 20, margin: 10, fontWeight: "bold"}}>$ { navigation.getParam("price")}</Text>
            </View>
        </View>
    );
}