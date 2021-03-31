import React, {useState, useEffect} from 'react';
import { View, Text, FileList, TouchableOpacity, FlatList, Image} from 'react-native';
import axios from 'axios';
import { Searchbar } from 'react-native-paper';

export default function Shope({navigation}){
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
      const data = await axios.get("https://fakestoreapi.com/products");
      console.log(data.data);
      setProducts(data.data);
  }
    useEffect(() => { 
        fetchData();
    }, [])

    const onChangeSearch = (query) => {
        setSearchQuery(query);
        console.log(query);
        if(query){
            setProducts(products.filter((item) => item.title.match(query)));
        }else {
            fetchData();
        }
    }


    return (
      <View >
         
          <View style={{marginTop: 20}}></View>
          <View style={{padding: 10}}>
          <Searchbar placeholder="Search" value={searchQuery} onChangeText={onChangeSearch} /> 
          </View>
          <View  >
              <FlatList 
              data = {products}
              keyExtractor = {(item) => item.id}
              renderItem= {({item}) => (
                  <TouchableOpacity onPress={() => navigation.navigate("ProductDetail", item)}>
                      <View style={{ backgroundColor:"grey", margin: 10, display: "flex", flexDirection: "row", borderRadius: 10}}>
                      <Image source={{uri: item.image}} style={{width: 100, height: 100,}}/>
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