import {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
const {height, width} = Dimensions.get('screen');

const ProductScreen = ({route}) => {
  const [data, setData] = useState(route?.params?.item);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.productCard}>
        <View style={styles.titleContainer}>
          <Text style={styles.category}>{data?.category}</Text>
          <Image
            style={{height: '50%', width: '20%'}}
            source={require('../assets/print.png')}
          />
        </View>
        <Text style={styles.name}>{data?.name}</Text>
        <Text style={{...styles.category, marginTop: 30}}>PRICE</Text>
        <Text style={styles.category}>${data?.price}</Text>
        <Text style={{...styles.category, marginTop: 30}}>SIZE</Text>
        <Text style={styles.category}>{data?.size}</Text>
        <View style={styles.smallcontainer}>
          <Image
            style={{height: '50%', width: '30%'}}
            source={require('../assets/cart.png')}
          />
          <Image
            style={{height: '50%', width: '30%'}}
            source={require('../assets/heart.png')}
          />
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          height: height * 0.39,
          width: width * 0.6,
          top: height * 0.05,
          right: 10,
        }}>
        <Image
          style={{height: '100%', width: '100%'}}
          source={{uri: data?.image}}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.plantTitle}>Overview</Text>
        <View style={{flexDirection:"row", width:"100%",marginBottom:20, justifyContent:"space-between"}}>
        <Text style={styles.overviewDescription}>{data?.water}</Text>
        <Text style={styles.overviewDescription}>{data?.light}</Text>
        <Text style={styles.overviewDescription}>{data?.fertilizer}</Text>
        </View>
        <Text style={styles.plantTitle}>Plant Bio</Text>
        <Text style={styles.plantDescription}>{data?.bio}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
    height: height,
    width: width,
  },
  productCard: {
    width: width,
    borderBottomLeftRadius: width * 0.2,
    borderBottomRightRadius: width * 0.6,
    height: height * 0.35,
    backgroundColor: '#9CE5CB',
    padding: 10,
    paddingLeft: 30,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: height * 0.04,
    width: width * 0.25,
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
    position: 'absolute',
    top: height * 0.3,
    left: width * 0.1,
    flexDirection: 'row',
    height: height * 0.1,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: width * 0.4,
  },
  contentContainer: {
    flex: 1,
    marginTop: height * 0.1,
    paddingLeft: 30,
    paddingRight: 30,
  },
  plantTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#002140',
  },
  plantDescription: {
    fontSize: 15,
    fontWeight: '400',
    color: '#002140',
    marginBottom:20,
  },
  overviewDescription:{
    fontSize: 13,
    fontWeight: '600',
    color: "#0D986A",
  }
});

export default ProductScreen;
