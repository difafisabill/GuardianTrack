import React, {Component} from 'react';
import {View, Text,Image,Dimensions,StyleSheet,StatusBar, ScrollView} from 'react-native';
import imgBanner from './src/assets/image/beauty3.png';
import FeatureComponent from './src/component/FeatureComponent';
import RecomArtikel from './src/component/RecomArtikel'
import RecomDoctor from './src/component/RecomDoctor';



const {heigh, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  imageBanner: {
    height: 170,
    width: width,
  },

  searching: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginTop:-280,
    width: 250,
    height: 35,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    elevation: 4,
    borderRadius: 20,
    position: 'absolute',
    left: '25%',
    top: '50%',
    transform: 'translate(-50px, -50px)',
    zIndex: 1,
  },

  wrapperKeep: {
    marginHorizontal: 18,
    height: 135,
    marginTop: -30,
    backgroundColor: '#E6DF44',
    elevation: 4,
    borderRadius: 10,
  },
  textKeep: {
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginTop: 10,
    color: 'black',
  },
  textSearch: {
    marginHorizontal: 10,
    marginTop: -5,
    color: 'white',
    justifyContent: 'center',
  },
  garisDiKeep: {
    height: 0.8,
    backgroundColor: '#adadad',
    marginTop: 10,
  },

  doctor:{
    width:width,
    height:12,
    backgroundColor: 'rgba(164,135, 133, 0.3)',
    marginVertical:10,
    
  },

  artikel:{
    width:width,
    height:12,
    backgroundColor: 'rgba(164,135, 133, 0.3)',
    marginVertical:10,
    
  }
});
class Home extends React.Component {
  render() {
    return (
      <ScrollView style={{flex:1}}>
        <StatusBar
          barStyle="default"
          translucent
          backgroundColor="rgba(0,0,0,0)"
        />
        <Image style={styles.imageBanner} source={imgBanner} />

        <View style={styles.searching}>
          <View style={styles.textSearch}>
            <Text> Apa yang kamu cari ?</Text>
          </View>
        </View>

        <View style={styles.wrapperKeep}>
          <View style={styles.textKeep}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              Keep Me With YOu
            </Text>
          </View>
          <View style={styles.garisDiKeep}></View>
          <FeatureComponent />
        </View>
        <View style={styles.doctor}>
        
        </View>
        <RecomDoctor/>
        <View style={styles.artikel}>
        
        </View>
        <RecomArtikel/> 
      </ScrollView>
    );
  }
}

export default Home;
