import React,{ useState, useEffect } from 'react';
import { View, Text , Button, FlatList, TouchableOpacity, SefeArea} from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

export default function Home({navigation}) {

    const [show, setShow] = useState(13);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const { data }  = await axios.get("https://jsonplaceholder.typicode.com/posts")
            console.log(data);
            setReviews(data);
        }
        fetchData();
    },[])
     
   
    return (
        <View style={{padding: 10}}>
            <ScrollView>
           <FlatList 
           data={reviews.slice(1,show)}
           renderItem={({item}) => (
               <TouchableOpacity style={{backgroundColor: "gray", padding: 10, margin: 3}} onPress={() => navigation.navigate('ReviewDetails', item)}>
                   <Text style={{color: "white"}}>{item.title}</Text>
               </TouchableOpacity>
           )}
           />
           <Button title="View More" onPress={() => setShow(show => show + 13)} />
           </ScrollView>
           {/* <ScrollView>
           {
               reviews.map((item) => {   
                <TouchableOpacity key={item.id} style={{backgroundColor: "gray", padding: 10, margin: 3}} onPress={() => navigation.navigate('ReviewDetails', item)}>
                    <View>
                    <Text style={{color: "white"}}>{item.title}</Text>
                    </View>  
                </TouchableOpacity>
               })
            }
            </ScrollView> */}
        </View>
    );
}
 