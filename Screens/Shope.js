import React, {useState, useEffect} from 'react';
import { View, Text, FileList, TouchableOpacity, FlatList, Image} from 'react-native';
import axios from 'axios';
export default function Shope({navigation}){
  const [products, setProducts] = useState([]);
    useEffect(() => { 
        const fetchData = async () => {
            const data = await axios.get("https://fakestoreapi.com/products");
            console.log(data.data);
            setProducts(data.data);
        }
        fetchData();
    }, [])
    return (
      <View >
          <View style={{marginTop: 20}}></View>
          <View  >
              <FlatList 
              data = {products}
              keyExtractor = {(item) => item.id}
              renderItem= {({item}) => (
                  <TouchableOpacity onPress={() => navigation.navigate("ProductDetail", item)}>
                      <View style={{ backgroundColor:"grey", margin: 10, display: "flex", flexDirection: "row"}}>
                      <Image source={{uri: item.image}} style={{width: 100, height: 100}}/>
                      <View>
                      <Text style={{width: 300, padding: 10, fontSize: 15, color: "white"}}>{item.title}</Text>
                      <Text style={{width: 300, padding: 10, color: "white"}}> ${item.price}</Text>
                      </View>
                      
                      </View>
                  </TouchableOpacity>
              )}
              />
           
          </View>
      </View>
    );
}