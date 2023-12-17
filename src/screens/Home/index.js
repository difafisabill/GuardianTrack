import React,{useState, useEffect, useRef}  from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  TextInput,
  Animated,
  ActivityIndicator
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {fontType, colors} from '../../theme';
import {SearchNormal1} from 'iconsax-react-native';
import {
  guardian,

  profileavatar,
  qr,
  chat,
  doctor,
  report,
  skincare,
  booking,
  history,
} from '../../assets/image/index';

import {useNavigation} from '@react-navigation/native';
import {Notification} from 'iconsax-react-native';
import {ItemSmall} from '../../components';
import firestore from '@react-native-firebase/firestore';



const {width} = Dimensions.get('window');
const home = StyleSheet.create({
  container: {
    top: -55,
    flex: 1,
    marginBottom: -90,
    backgroundColor: colors.peach(),
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
  chat: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 11,
    color: colors.black(),
    top: 12,
    textAlign: 'center',
  },
  doctor: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 11,
    color: colors.black(),
    top: 12,
    left: 5,
    textAlign: 'center',
  },
  diagnosis: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 11,
    color: colors.black(),
    top: 12,
    textAlign: 'center',
  },
  skincare: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 11,
    color: colors.black(),
    top: 12,
    textAlign: 'center',
  },
  booking: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 11,
    color: colors.black(),
    top: 12,
    left: 3,
    textAlign: 'center',
  },
  histori: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 11,
    color: colors.black(),
    top: 12,
    textAlign: 'center',
  },
 

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  container_sc:{
    position: 'absolute',
    backgroundColor: colors.white(),
    zIndex: 999,
    top: 10,
    left: 0,
    right: 0,
    elevation: 1000,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#1d1d1d',
    margin: 15,
    marginTop: -165,
  },
  image: {
    width: width - 20,
    height: 220,
    marginLeft: 10,
    marginTop: 20,
    borderRadius: 20,
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
  profileImage: {
    borderRadius: 100,
    left: 290,
    top: -40,
    height: 50,
    width: 50,
    marginTop:-65
  },
  backadd: {
    position: 'absolute',
    left: 200,
    width: 450,
    height: 450,
    top: -50,
    zIndex: 1, 
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  card: {
    padding: 12,
    borderRadius: 24,
    marginBottom: 24,
    backgroundColor: '#fff',
  },




});

const code_qr = StyleSheet.create({
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




});

export default function Home() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 142);
const recentY = diffClampY.interpolate({
    inputRange: [0, 142],
    outputRange: [0, -142],
    extrapolate: 'clamp',
  });
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    const fetchBlogData = () => {
      try {
        const blogCollection = firestore().collection('blog');
        const unsubscribeBlog = blogCollection.onSnapshot(querySnapshot => {
          const blogs = querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
          }));
          setBlogData(blogs);
          setLoading(false);
        });

        return () => {
          unsubscribeBlog();
        };
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };
    fetchBlogData();
  }, []);
  const horizontalData = blogData.slice(0, 5);
  const verticalData = blogData.slice(5);
  return (
    <View style={styles.container}>
      {/* <View style={}> */}
      <Animated.View style={[styles.container_sc, styles.header,{transform: [{translateY: recentY}]}]}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: 'black',
            marginBottom: 10,
          }}>
          Hello Rose 👋
        </Text>
        <Text style={{fontSize: 12, color: 'black'}}>
          Let's track your skin and look how beautiful you are
        </Text>
        <View style={styles.iconContainer}>
          <SearchNormal1
            color={colors.black()}
            variant="Linear"
            size={20}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchbar}
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
          />
          <Image source={profileavatar} style={styles.profileImage} />
         
        </View>
      </Animated.View>
      {/* </View> */}
      <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: scrollY}}}],
        {useNativeDriver: true},
      )}
      contentContainerStyle={{paddingTop: 142}}>
        <Image source={guardian} style={styles.image} />
        <Text
          style={{
            marginLeft: 20,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 10,
            marginBottom: 10,
          }}>
          What do you need
        </Text>
        <Qr />
        <Main />
        <News />
      </Animated.ScrollView>
    </View>
  );
}

const Qr = () => {
  return (
    <View style={code_qr.container}>
      <Image
        source={qr}
        style={{
          width: 40,
          height: 40,
          alignSelf: 'center',
          left: 9,
        }}
      />
    </View>
  );
};

const items = [
  {
    img: 'https://i.pinimg.com/564x/2a/fd/6e/2afd6ece9a1536dee5cef915882ef304.jpg',
    name: 'Chemical Peels',
    open: '2023-10-10T00:30:00Z', 
    close: '2023-04-01T15:45:00Z', 
    price: 500000,
  },
  {
    img: 'https://i.pinimg.com/564x/16/9e/de/169eded8cf56bfca721a4722f70990eb.jpg',
    name: 'Acne Treatment',
    open: '2023-10-10T00:00:00Z',
    close: '2023-04-01T14:00:00Z',
    price: 750000,
  },
  {
    img: 'https://i.pinimg.com/564x/b8/23/71/b8237160ebc3e40f27d5177aad5f2cb0.jpg',
    name: 'Glowing Skin',
   
    open: '2023-10-10T02:00:00Z',
    close: '2023-10-10T15:00:00Z',
    price: 600000,
  },
  {
    img: 'https://i.pinimg.com/564x/9a/56/87/9a5687e57e39b89ada61497484658e5d.jpg',
    name: 'Anti-Anging',
   
    open: '2023-10-10T01:15:00Z',
    close: '2023-10-10T14:00:00Z',
    price: 855000,
  },
];

const News = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor: '#ffff'}}>
      <ScrollView contentContainerStyle={itemVertical.container}>
        <Text style={itemVertical.title}>Skin Care</Text>

        {items.map(({img, name, open, close, price}, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => {}}>
              <View style={itemVertical.card}>
                <Image
                  alt=""
                  resizeMode="cover"
                  source={{uri: img}}
                  style={itemVertical.cardImg}
                />

                <View style={itemVertical.cardBody}>
                  <Text>
                    <Text style={itemVertical.cardTitle}>{name}</Text>{' '}
                   
                  </Text>

                  <View style={itemVertical.cardRow}>
                    <View style={itemVertical.cardRowItem}>
                      <FontAwesome
                        color="#6f61c4"
                        name="eye"
                        size={10}
                      />

<Text style={itemVertical.cardRowItemText}>
                        {new Date(open).toLocaleTimeString('id-ID', {
                          hour: 'numeric',
                          minute: 'numeric',
                          hour12: false,
                        })}
                      </Text>
                     
                    </View>

                    <View style={itemVertical.cardRowItem}>
                      <FontAwesome
                        color="#6f61c4"
                        name="coffee"
                        size={10}
                      />

                      <Text style={itemVertical.cardRowItemText}>
                        {new Date(close).toLocaleTimeString('id-ID', {
                          hour: 'numeric',
                          minute: 'numeric',
                          hour12: false,
                        })}
                      </Text>
                    </View>
                  </View>

                  <Text style={itemVertical.cardPrice}>
                    <Text>from </Text>

                    <Text style={itemVertical.cardPriceValue}>
                      Rp. {price.toLocaleString('id-ID')}{' '}
                    </Text>
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Booking'); 
                    }}>
                    <View style={itemVertical.btn}>
                      <Text style={itemVertical.btnText}>Book now</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
const itemVertical = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'stretch',
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  cardImg: {
    width: 120,
    height: 154,
    borderRadius: 12,
  },
  cardBody: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#173153',
    marginRight: 8,
  },
  cardAirport: {
    fontSize: 13,
    fontWeight: '600',
    color: '#5f697d',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: -8,
    flexWrap: 'wrap',
  },
  cardRowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  cardRowItemText: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: '500',
    color: '#5f697d',
  },
  cardPrice: {
    fontSize: 13,
    fontWeight: '500',
    color: '#5f697d',
  },
  cardPriceValue: {
    fontSize: 21,
    fontWeight: '700',
    color: '#173153',
  },
  cardPriceCurrency: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6f61c4',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderWidth: 1,
    backgroundColor: '#173153',
    borderColor: '#173153',
  },
  btnText: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
    color: '#fff',
  },
});

const Main = () => {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal={true} style={home.container}>
      <View style={home.rowContainer}>
        <View style={home.background}>
          <Image source={chat} style={home.icon} />
          <Text style={home.chat}>Chat</Text>
        </View>
        <View style={home.background}>
          <Image source={doctor} style={home.icon} />
          <Text style={home.doctor}>Doctor</Text>
        </View>
        <View style={home.background}>
          <Image source={report} style={home.icon} />
          <Text style={home.diagnosis}>Diagnosis</Text>
        </View>
        <View style={home.background}>
          <Image source={skincare} style={home.icon} />
          <Text style={home.skincare}>Skincare</Text>
        </View>
      </View>
      <View style={home.rowContainer}>
        <View style={home.background}>
          <Image source={booking} style={home.icon} />
          <Text style={home.booking}>Booking</Text>
        </View>
        <View style={home.background}>
          <Image source={history} style={home.icon} />
          <Text style={home.histori}>History</Text>
        </View>
      </View>

      <View style={home.textartikel}>
        <Text></Text>
      </View>

     
    </ScrollView>
  );
};
