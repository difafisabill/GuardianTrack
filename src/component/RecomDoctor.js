import React,{Component} from 'react'
import {View,Text,StyleSheet, ScrollView,} from 'react-native'
import RecomDoctorSub from './RecomDoctorSub'

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
const RecomDoctor=()=>{
    return(
        <ScrollView horizontal={true} style={{marginHorizontal:18, height:290,width:'100%', flexWrap:'wrap', flexDirection:'row'}}>
            <Text style={styles.textartikel}>Doctor Recommendations</Text>
            <RecomDoctorSub
            image={{uri: "https://img.freepik.com/free-photo/medical-doctor-showing-thumbs-up-sign-gray-wall_231208-13101.jpg?w=996&t=st=1697417699~exp=1697418299~hmac=e7d616084adde3669cb29b613edad80840bdf03aee4caf5d9e73db7a998e3ab5"}}
            text="Ketahui Jenis Kulitmu"
            />
            <RecomDoctorSub
            image={{uri: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}
            text="Ketahui Jenis Kulitmu"
            />
            <RecomDoctorSub
            image={{uri: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}}
            text="Ketahui Jenis Kulitmu"
            />
        </ScrollView>

    )
}
export default RecomDoctor