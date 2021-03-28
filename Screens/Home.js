import React,{ useState } from 'react';
import { View, Text , Button, FlatList, TouchableOpacity} from 'react-native';


export default function Home({navigation}) {

    const [reviews, setReviews] = useState([
        {title:'Zelda, Breath of Fresh Air', rating: 5, body:'Lorem', key: '1'},
        {title:'Gotta Catch Them All', rating: 4, body:'Lorem', key: '2'},
        {title:'Not So "Final" Fantsay', rating: 3, body:'Lorem', key: '3'},
    ])
   
    return (
        <View style={{padding: 10}}>
           <FlatList 
           data={reviews}
           renderItem={({item}) => (
               <TouchableOpacity style={{backgroundColor: "gray", padding: 10, margin: 3}} onPress={() => navigation.navigate('ReviewDetails', item)}>
                   <Text style={{color: "white"}}>{item.title}</Text>
               </TouchableOpacity>
           )}
           />
        </View>
    );
}
 