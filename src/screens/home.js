import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {useEffect, useState} from 'react';

const {height, width} = Dimensions.get('screen');

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  console.log('data', data);

  const fetchData = async () => {
    const response = await axios.get(
      'https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q',
    );
    if (response) {
      console.log('response', response?.data);
      setData(response?.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView
        style={{height: height, padding: 10}}
        >
        {data?.map(item => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Product Screen', {item: item});
              }}
              key={item?.id}
              style={styles.container}>
              <View style={styles.productCard}>
                <View style={styles.titleContainer}>
                <Text style={styles.category}>{item?.category}</Text>
                <Image
                    style={{height: '50%', width: '10%'}}
                    source={require('../assets/print.png')}
                  />
                  </View>
                   <Text style={styles.name}>{item?.name}</Text>
                <View style={styles.smallcontainer}>
                  <Text style={styles.category}>${item?.price}</Text>
                  <Image
                    style={{height: '23%', width: '10%'}}
                    source={require('../assets/heart.png')}
                  />
                  <Image
                    style={{height: '60%', width: '20%'}}
                    source={require('../assets/cart.png')}
                  />
                </View>
              </View>
              <View
                style={{
                  position: 'absolute',
                  top: -10,
                  right: 0,
                  height: height * 0.2,
                  width: width * 0.4,
                }}>
                <Image
                  style={{height: '100%', width: '100%'}}
                  source={{uri: item?.image}}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.25,
    width: width,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center',
    position: 'relative',
    marginTop:20,
  },
  titleContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    height:height*.04,
    width:width*.5
  },
  productCard: {
    width: width * 0.8,
    borderRadius: 20,
    height: height * 0.2,
    backgroundColor: '#9CE5CB',
    padding: 10,
  
  },
  category: {
    fontSize: 14,
    fontWeight: '600',
    color: '#002140',
  },
  name: {
    fontSize: 32,
    fontWeight: '700',
    color: '#002140',
  },
  smallcontainer: {
    flexDirection: 'row',
    height: height * 0.1,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: width * 0.6,
  },
});

export default Home;
