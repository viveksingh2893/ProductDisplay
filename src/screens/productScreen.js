import { useState } from 'react';
import {View, Text, SafeAreaView, Image, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');


const ProductScreen = ({route}) => {
    const [data, setData]= useState(route?.params);
    console.log("data", data)
  return (
    <View style={{flex:1, backgroundColor:"white", height:height, width:width}}> 
          {/* <View
            style={{
              height: height * 0.2,
              width: width * 0.4,
            }}> */}
                <Text>Product Screen</Text>
            {/* <Image
              style={{height: '100%', width: '100%'}}
              source={{uri: data?.image}}
            /> */}
          {/* </View> */}
    </View>
  );
};

export default ProductScreen;
