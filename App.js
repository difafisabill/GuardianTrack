import React, {Component} from 'react';
import {View, Text,Image,Dimensions,StyleSheet,StatusBar, ScrollView, ImageBackground, TextInput} from 'react-native';
// import {Element3, Receipt21, Clock, Message} from 'iconsax-react-native';

import { fontType, colors } from './src/theme';
// import imgBanner from './src/assets/image/beauty3.png';
// import FeatureComponent from './src/component/FeatureComponent';
// import RecomArtikel from './src/component/RecomArtikel'
// import RecomDoctor from './src/component/RecomDoctor';
import { Clock, SearchNormal1, ProfileCircle, Wallet3, CardSend, MoreCircle, Home } from 'iconsax-react-native';
import { guardian, circle, profile, qr,chat, doctor,report, skincare, booking, history} from './src/assets/image/index';

// const {heigh, width} = Dimensions.get('window');
// const styles = StyleSheet.create({
//   imageBanner: {
//     height: 170,
//     width: width,
//   },

//   searching: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginHorizontal: 12,
//     marginTop:-280,
//     width: 250,
//     height: 35,
//     backgroundColor: 'rgba(255, 255, 255, 0.3)',
//     elevation: 4,
//     borderRadius: 20,
//     position: 'absolute',
//     left: '25%',
//     top: '50%',
//     transform: 'translate(-50px, -50px)',
//     zIndex: 1,
//   },

//   wrapperKeep: {
//     marginHorizontal: 18,
//     height: 135,
//     marginTop: -30,
//     backgroundColor: '#E6DF44',
//     elevation: 4,
//     borderRadius: 10,
//   },
//   textKeep: {
//     fontWeight: 'bold',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginHorizontal: 12,
//     marginTop: 10,
//     color: 'black',
//   },
//   textSearch: {
//     marginHorizontal: 10,
//     marginTop: -5,
//     color: 'white',
//     justifyContent: 'center',
//   },
//   garisDiKeep: {
//     height: 0.8,
//     backgroundColor: '#adadad',
//     marginTop: 10,
//   },

//   doctor:{
//     width:width,
//     height:12,
//     backgroundColor: 'rgba(164,135, 133, 0.3)',
//     marginVertical:10,
    
//   },

//   artikel:{
//     width:width,
//     height:12,
//     backgroundColor: 'rgba(164,135, 133, 0.3)',
//     marginVertical:10,
    
//   }
// });
// class Home extends React.Component {
//   render() {
//     return (
//       <ScrollView style={{flex:1}}>
//         <StatusBar
//           barStyle="default"
//           translucent
//           backgroundColor="rgba(0,0,0,0)"
//         />
//         <Image style={styles.imageBanner} source={imgBanner} />

//         <View style={styles.searching}>
//           <View style={styles.textSearch}>
//             <Text> Apa yang kamu cari ?</Text>
//           </View>
//         </View>

//         <View style={styles.wrapperKeep}>
//           <View style={styles.textKeep}>
//             <Text style={{fontWeight: 'bold', color: 'black'}}>
//               Keep Me With YOu
//             </Text>
//           </View>
//           <View style={styles.garisDiKeep}></View>
//           <FeatureComponent />
//         </View>
//         <View style={styles.doctor}>
        
//         </View>
//         <RecomDoctor/>
//         <View style={styles.artikel}>
        
//         </View>
//         <RecomArtikel/> 
//       </ScrollView>
//     );
//   }
// }

// export default Home;
const {heigh, width} = Dimensions.get('window');
const home = StyleSheet.create({
  container: {
    top:-55,
    flex: 1,
    backgroundColor: colors.white(),
    paddingHorizontal: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 45, 
  },
  background: {
    width: 70,
    height: 100,
    backgroundColor: colors.Purple(),
    borderRadius: 15,
    marginHorizontal: 10,
  },
  icon: {
    top: 6,
    left: 7,
    width: 55,
    height: 55,
    justifyContent: 'center',
    
  },
  goRideText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 11,
    color: colors.black(),
    top: 12,
    textAlign:'center'
  },
  goCarText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 11,
    color: colors.black(),
    top: 12,
    left: 5,
    textAlign:'center'
  },
  goFoodText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 11,
    color: colors.black(),
    top: 12,
    textAlign:'center'
  },
  goSendText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 11,
    color: colors.black(),
    top: 12,
    textAlign:'center'
  },
  goMartText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 11,
    color: colors.black(),
    top: 12,
    left: 3,
    textAlign:'center'
  },
  goBillText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 11,
    color: colors.black(),
    top: 12,
    textAlign:'center'
  
  },
  goTransitText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 11,
    color: colors.black(),
    top: 12,
    textAlign:'center'
  },
  goMoreText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 11,
    color: colors.black(),
    top: 12,
    textAlign:'center'
  },

  drivers:{
    top:10,
    marginHorizontal: 15,
    width: 'auto',
    height: 170,
    marginBottom:50,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#bbc3c3',
    shadowColor: 'gray',
    listCard: {
      paddingHorizontal: 24,
      paddingVertical: 10,
      gap: 15,
    },
    textartikel: {
      fontWeight: 'bold',
      marginHorizontal: 12,
      marginTop: 5,
      color: 'black',
      position: 'absolute',
      top: 0, 
      width: '100%', 
      textAlign: 'left', 
      fontSize: 20
    },
    cardItem: {
      backgroundColor: colors.blue(0.03),
      flexDirection: 'row',
      borderRadius: 10,
    },
    cardCategory: {
      color: colors.blue(),
      fontSize: 10,
      fontFamily: fontType['Pjs-SemiBold'],
    },
    cardTitle: {
      fontSize: 14,
      fontFamily: fontType['Pjs-Bold'],
      color: colors.black(),
    },
    cardText: {
      fontSize: 10,
      fontFamily: fontType['Pjs-Medium'],
      color: colors.blue(0.6),
    },
    cardImage: {
      width: 200,
      height: 2000,
      borderRadius: 10,
      resizeMode: 'cover',
    },
    cardInfo: {
      flexDirection: 'row',
      gap: 5,
      alignItems: 'center',
    },
    cardContent: {
      gap: 10,
      justifyContent: 'space-between',
      paddingRight: 10,
      paddingLeft: 15,
      flex: 1,
      paddingVertical: 10,
    },
    }
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  image: {
    width:width-20 ,
    height:220,
    marginLeft:10,
    marginTop:20,
    borderRadius: 20,
    // objectFit: 'cover',
  },
  header: {
    padding: 20,
  },
  searchbar: {
    width: '80%',
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 40,
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 15,
    marginTop: 10,
  },
  iconContainer: {
    paddingRight: 10,
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    top: 15,
    left: 10,
    
  },
  profileIcon: {
    position: 'absolute',
    left: 280,
    top:-60,
    height:50,
    width:50
  },
  backadd: {
    position: 'absolute',
    left: 200,
    width:450,
    height:450,
    top:-50
  },
})

const payment = StyleSheet.create({
  container: {
    top: -280,
    left: 140,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 60, 
    height: 60, 
    backgroundColor: colors.Purple(),
    borderRadius: 25, 
    flexDirection: 'row',
    alignItems: 'center', 
    borderWidth: 1,
    borderColor: '#5800FF',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
  wallet: {
    width: 20,
    height: 20,
    top: 15, 
    marginLeft: 'auto',
    marginRight: 'auto',
  },

});



export default function App() {
  return (
    
    <View style={styles.container}>
      
      <View style={styles.header}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black', marginBottom: 10 }}>
    Hello Difa 👋
  </Text>
  <Text style={{ fontSize: 12, color: 'black' }}>
    Let's track your skin and look how beautiful you are
  </Text>
        <View style={styles.iconContainer}>
          <SearchNormal1 color={colors.black()} variant="Linear" size={20} style={styles.searchIcon} />
          <TextInput
            style={styles.searchbar}
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
          />
          <Image
          source={profile}
          style={styles.profileIcon}
        />
          <Image
          source={circle}
          style={styles.backadd}
        />
          {/* <ProfileCircle color='green' variant='Bold' size={40} style={styles.profileIcon} /> */}
        </View>
      </View>
      <ScrollView>
        <Image
          source={guardian}
          style={styles.image}
          
        />
         <Text style={{ marginLeft:20,fontSize: 20, fontWeight: 'bold', color: 'black',marginTop:10, marginBottom: 10 }}>
    What do you need
  </Text>
        <Payment />
        
        <Main />
      </ScrollView>
    </View>
  )
}

const Payment = () => {
  return (
    <View style={payment.container}>
  <Image
  source={qr}
  style={{
    width: 40, 
    height: 40, 
    alignSelf: 'center',
    left:9
  }}
/>
    </View>
  )
}

const Main = () => {
  return (
    
    <ScrollView horizontal={true} style={home.container}>
     
      <View style={home.rowContainer}>
        <View style={home.background}>
          <Image
            source={chat}
            style={home.icon}
          />
          <Text style={home.goRideText}>Chat</Text>
        </View>
        <View style={home.background}>
          <Image
            source={doctor}
            style={home.icon}
          />
          <Text style={home.goCarText}>Doctor</Text>
        </View>
        <View style={home.background}>
          <Image
            source={report}
            style={home.icon}
          />
          <Text style={home.goFoodText}>Diagnosis</Text>
        </View>
        <View style={home.background}>
          <Image
            source={skincare}
            style={home.icon}
          />
          <Text style={home.goSendText}>Skincare</Text>
        </View>
      </View>
      <View style={home.rowContainer}>
        <View style={home.background}>
          <Image
            source={booking}
            style={home.icon}
          />
          <Text style={home.goMartText}>Booking</Text>
        </View>
        <View style={home.background}>
          <Image
            source={history}
            style={home.icon}
          />
          <Text style={home.goBillText}>History</Text>
        </View>
      </View>

      <View style={home.textartikel}>
      <Text></Text>
      </View>
      
      
      <View style={home.drivers}>
       <View style={home.cardImage}>
          {/* <Image source={person}style={home.cardImage}/> */}
      </View>
      </View>
       
    </ScrollView>
  );

  
}




