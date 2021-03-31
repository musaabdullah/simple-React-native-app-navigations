import React, {useState, useEffect} from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
export default function ProductDetail({navigation}) {
    return (
        <View style={{padding: 15}}>
            <View style={{marginTop: 20}}></View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Card>
                     <Card.Cover style={{height: 600}} source={{uri: navigation.getParam("image")}} />
                     <Card.Content >
                         <Title>{navigation.getParam("title")}</Title>
                         <Paragraph>{navigation.getParam("description")}</Paragraph>
                     </Card.Content>
                     <Card.Actions>
                         <Button uppercase={false} mode="contained" >Add Card</Button>
                         
                     </Card.Actions>
                 {/* <Image style={{width: 400, height: 400, margin: 10}} source={{uri: navigation.getParam("image")}}/>
                 <Text style={{padding: 10, fontSize: 20, fontWeight: "bold",}}>{navigation.getParam("title")}</Text>
                 <Text style={{padding: 10, fontSize: 20, fontWeight: "bold"}}>{navigation.getParam("category")}</Text>
                 <Text style={{padding: 10, fontSize: 16, fontWeight: "bold"}}>{navigation.getParam("description")}</Text>
                 <Text style={{padding: 10, fontSize: 20, margin: 10, fontWeight: "bold"}}>$ { navigation.getParam("price")}</Text> */}
                </Card>
             </ScrollView>
        </View>
    );
}