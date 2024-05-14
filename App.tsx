import { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  Image,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';

interface Product {
  id: number;
  name: string;
  price: number;
  photo: string;
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const products = [
      {
        id: 1,
        name: 'boneka',
        price: 100,
        photo:
          'https://tse3.mm.bing.net/th?id=OIP.dzF_KrdAxlQD6eeu6iGRRgHaHa&pid=Api&P=0&h=180',
      },
      {
        id: 2,
        name: 'boneka',
        price: 117,
        photo:
          'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/1/11/24787431/24787431_8298918b-dd17-4250-be71-055a23876259_700_700.jpg',
      },
      {
        id: 3,
        name: 'boneka',
        price: 190,
        photo:
          'https://i.pinimg.com/736x/39/25/ad/3925ad1b33f5330ff0db7232c6e1c3ca.jpg',
      },
      {
        id: 4,
        name: 'boneka',
        price: 199,
        photo:
          'https://i.pinimg.com/originals/80/10/63/8010632676f9634246cedef6dd43113a.jpg',
      },
      {
        id: 5,
        name: 'boneka',
        price: 100,
        photo:
          'https://i.pinimg.com/originals/80/10/63/8010632676f9634246cedef6dd43113a.jpg',
      },
      {
        id: 6,
        name: 'boneka',
        price: 140,
        photo:
          'https://4.bp.blogspot.com/-iMeNYNDuZ6k/UuG1-iHZHDI/AAAAAAAAAIs/I9mcp1L1Z4A/s1600/boneka-hello-kitty-jumbo-bantal.jpg',
      },
      {
        id: 7,
        name: 'boneka',
        price: 150,
        photo:
          'https://4.bp.blogspot.com/-iMeNYNDuZ6k/UuG1-iHZHDI/AAAAAAAAAIs/I9mcp1L1Z4A/s1600/boneka-hello-kitty-jumbo-bantal.jpg',
      },
      {
        id: 8,
        name: 'boneka',
        price: 150,
        photo:
          'https://4.bp.blogspot.com/-iMeNYNDuZ6k/UuG1-iHZHDI/AAAAAAAAAIs/I9mcp1L1Z4A/s1600/boneka-hello-kitty-jumbo-bantal.jpg',
      },
      
    ];
    setProducts(products);
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={{ padding: 10 }}>
        <FlatList
          data={products}
          numColumns={2}
          ListHeaderComponent={() => (
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                marginTop: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Boneka Lucu
            </Text>
          )}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: 'white',
                maxWidth: '50%',
                maxHeight: 400,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 20,
                padding: 20,
                borderRadius: 10,
                borderWidth: 2,
                shadowRadius: 5,
              }}>
              <Image
                source={{ uri: item.photo }}
                style={{ width: 90, height: 100, borderRadius: 5 }}
              />
              <Text style={{ paddingVertical: 20 }}>{item.name}</Text>
              <Text style={{ paddingBottom: 20 }}>Price: ${item.price}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;