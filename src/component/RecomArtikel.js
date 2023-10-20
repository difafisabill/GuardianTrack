import React,{Component} from 'react'
import {View,Text,StyleSheet,} from 'react-native'
import RecomArtikelSub from './RecomArtikelSub'

const styles = StyleSheet.create({
    textartikel: {
      fontWeight: 'bold',
      marginHorizontal: 12,
      marginTop: 5,
      color: 'white',
      position: 'absolute',
      top: 0, 
      width: '100%', 
      textAlign: 'left', 
      fontSize: 20
    },
});
const RecomArtikel=()=>{
    return(
        <View style={{marginHorizontal:18, height:200,width:'100%', flexWrap:'wrap', flexDirection:'column'}}>
            <Text style={styles.textartikel}>Article Recommendations</Text>
            <RecomArtikelSub
            image={{uri: "https://images.pexels.com/photos/3059398/pexels-photo-3059398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}
            text="Ketahui Jenis Kulitmu"
            />
            <RecomArtikelSub
            image={{uri: "https://images.pexels.com/photos/6635922/pexels-photo-6635922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}
            text="Ketahui Jenis Kulitmu"
            />
        </View>

    )
}
export default RecomArtikel