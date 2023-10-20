import React,{Component} from 'react'
import {View,Text,StyleSheet,Dimensions, Image} from 'react-native'

const{width}=Dimensions.get('window')
const styles = StyleSheet.create({
    wrapper:{
          marginTop:45,
        backgroundColor:'white',
            elevation:4,
            borderRadius:8,
            width:width-40, 
            marginRight:18,
            marginBottom:18

    },
    artikelimage:{
        height:width-320/2-5,
        width:width-40,
        borderTopLeftRadius : 8,
        borderTopRightRadius:8,
    },
    textartikel:{
        marginLeft:10,
        marginVertical:10
    }
})
const RecomDoctorlSub=(props)=>{
    
    return(
        <View style={styles.wrapper}>
            <Image source={props.image} style={styles.artikelimage}/>
            <View style={styles.textartikel}>
                <Text>{props.text}</Text>
            </View>
        </View>

    )
}
export default RecomDoctorlSub