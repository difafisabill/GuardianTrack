import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import { profileavatar, arrow, report, location , share} from '../../assets/image/index';
import { colors , fontType} from '../../theme';
import { StyleSheet } from 'react-native';

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalcrollIndicator={false}>
          <View style={styles.header}>
            <TouchableOpacity>
              <Image source={arrow} style={styles.arrow} />
             
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.profileInfo}>
            <Image source={profileavatar} style={styles.profileImage} />
            <Text style={styles.profilename}>Madrona Rose</Text>
            <Text style={styles.bio}>25, Female</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.options}>
          <Image source={report} style={styles.iconoptions}></Image>
            <Text style={styles.textoptions}>Diagnosis</Text>

          </TouchableOpacity>
          <TouchableOpacity style={styles.options}>
          <Image source={location} style={styles.iconoptions}>
              
            </Image>
            <Text style={styles.textoptions}>Malang, Jawa Timur Indonesia</Text>

          </TouchableOpacity>
          <TouchableOpacity style={[styles.options]}>
            <Image source={share} style={styles.iconoptions}>
              
            </Image>
            <Text style={styles.textoptions}>share</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.options, { marginBottom: 40, backgroundColor:'#fab507', color:'#faf6ed'}]}>
            <Text style={styles.textoptions}>Log Out</Text>
          </TouchableOpacity>
          
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: colors.white(), 
    flex: 1,
  },
  header: {
    padding: 10,
    width: '100%',
    backgroundColor: colors.Purple(), // Menggunakan warna putih dari theme
    height: 150,
  },
  arrow: {
    width: 25,
    height: 25,
    marginLeft: 5,
    marginTop: 10,

  },
  profileInfo: {
    alignItems: 'center',
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 100,
    marginTop: -70,
  },
  profilename:{
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 20,
    fontWeight:'bold',
    padding:10,
    color: colors.black(),
    top: 12,
    textAlign:'center'
  },
  bio:{
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 16,
    color: colors.grey(),
    top: 12,
    padding:10,
    marginTop:-15,
    textAlign:'center'
  }, 
  
  options:{
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#fff',
    width:'90%',
    padding:20,
    paddingBottom:22,
    borderRadius:10,
    shadowOpacity:70,
    elevation:15,
    marginTop:20,
   
  }, 
  iconoptions:{
    width:20,
    height:20,
    
  },
  textoptions:{
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 15,
    color: '#818181',
    fontWeight:'bold',
    marginLeft:10,
    top: 12,
    marginTop:-15,
    textAlign:'center'
  }
});

export default Profile;
