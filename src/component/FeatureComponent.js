import React from 'react'
import {Image,Text, View,StyleSheet} from 'react-native'
const styles =  StyleSheet.create({

    wrapperfeature:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    FeatureIcon:{
      height:45,
      width:45,
      marginTop:12,
      marginHorizontal:17,
      
  
    }
  })
const FeatureComponent=() => {
    return(
        <View style={styles.wrapperfeature}>
            <View>
             <Image style={styles.FeatureIcon} source={require('../assets/icon/vaccination.png')} />
             <Text style={{alignSelf:'center', color:'black'}}>Shelter</Text>
            </View>

            <View>
             <Image style={[styles.FeatureIcon, { height:47, width:47 }]} source={require('../assets/icon/plastic.png')} />
             <Text style={{alignSelf:'center', color:'black'}}>Check</Text>
            </View>

            <View>
             <Image style={styles.FeatureIcon} source={require('../assets/icon/herb.png')} />
             <Text style={{alignSelf:'center', color:'black'}}>Treat it</Text>
            </View>

            <View>
             <Image style={[styles.FeatureIcon, { height:44, width:44 }]} source={require('../assets/icon/alarm.png')} />
             <Text style={{alignSelf:'center', color:'black'}}>Track</Text>
            </View>
        
        </View>
    )

}

export default FeatureComponent