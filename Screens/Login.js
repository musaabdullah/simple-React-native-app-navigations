import React,{ useState, useEffect } from 'react';
import { View, Text , Button, FlatList, TouchableOpacity, SefeArea, Image, ImageBackground} from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

export default function Login({navigation}) {

      const languages = [{key:1, title:"Javascript"}
      , {key:2, title: "C sharp"}, {key:3, title: "Android"},
      {key: 4, title:"Java"},{key:5, title: "PHP"},{key: 6, title:"Python"}]
   
      const [list, setList] = useState([]);

      useEffect(() => {
          const fetchData = async () => {
              const { data } = await axios.get("https://reqres.in/api/users?page=2");
              const res = await data.data;
              console.log(res);
              setList(res);
          }
          fetchData();
      }, [])
    return (
        <View style={{padding: 10}}>
            <Text style={{marginTop: 30, fontSize: 20, fontWeight: "bold"}}>Top programming languages:</Text>
            <View style={{marginTop:10}}>
            <FlatList 
              data={languages}
              horizontal
              showsHorizontalScrollIndicator ={false}
              renderItem={({item}) => (
                  <TouchableOpacity>
                  <Text style={{fontWeight: "bold", textAlign:"center", backgroundColor: "black", color: "white", width: 90, margin: 5, padding: 10, borderRadius: 10}}>{item.title}</Text>
                  </TouchableOpacity>   
                  )}
                  />
            </View>
                <Text style={{marginTop: 30, fontSize: 20, fontWeight: "bold"}}>Top developers:</Text>
            <View style={{marginTop:10}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
                list.map((item) => {
                    return   <View key={item.id}>
                    <TouchableOpacity>
                     <ImageBackground source={{uri: item.avatar}}  style={{borderRadius: 20, width: 180, height: 170, margin: 10}}>
                      <Text style={{marginTop:130, padding:10, fontSize:15, fontWeight:"bold", color: "white"}}>{item.first_name} {item.last_name}</Text>
                     </ImageBackground>
                    </TouchableOpacity>
                 </View>
             })
            }
            </ScrollView>
            </View>
            <Text style={{marginTop: 30, fontSize: 20, fontWeight: "bold"}}>Top application:</Text>
        </View>
    );
}
 