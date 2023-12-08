import React, {useState,useCallback} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {
  profileavatar,
  arrow,
} from '../../assets/image/index';
import {colors, fontType} from '../../theme';
import {StyleSheet} from 'react-native';
import { Edit} from 'iconsax-react-native';
// import FastImage from 'react-native-fast-image';  
import {useNavigation,useFocusEffect} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {ItemSmall} from '../../component';


import axios from 'axios';


// export default function Profile()  {
const Profile = () => {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const [blogData, setBlogData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const getDataBlog = async () => {
    try {
      const response = await axios.get(
        'https://656d20a9bcc5618d3c22db06.mockapi.io/guardiantrack/blog/',
      );
      setBlogData(response.data);
      setLoading(false)
    } catch (error) {
        console.error(error);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      getDataBlog()
      setRefreshing(false);
    }, 1500);
  }, []);

  useFocusEffect(
    useCallback(() => {
      getDataBlog();
    }, [])
  );
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalcrollIndicator={false} refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={arrow} style={styles.arrow} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.profileInfo}>
          <Image source={profileavatar} style={styles.profileImage} />
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1, backgroundColor: '#FBFCFF'}}>
          <View style={styles.container_profile}>
            <Text style={styles.title}>Madrona Rose</Text>
            <Text style={styles.profileEmail}>rose.fox@mail.com</Text>

            <View style={styles.stats}>
              {[
                {label: 'Age', value: '25'},
                {label: 'Job Type', value: 'Arts'},
                {label: 'Location', value: 'Malang'},
              ].map(({label, value}, index) => (
                <View
                  key={index}
                  style={[
                    styles.statsItem,
                    index === 0 && {borderLeftWidth: 0},
                  ]}>
                  <Text style={styles.statsItemText}>{label}</Text>
                  <Text style={styles.statsItemValue}>{value}</Text>
                </View>
              ))}
            </View>
            <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.profileAction}>
              <Text style={styles.profileActionText}>Edit Profile</Text>
              <FeatherIcon color="#fff" name="edit" size={16} />
            </View>
          </TouchableOpacity>
          </View>
        </TouchableOpacity>
        
        <View style={{paddingVertical: 10, gap: 10}}>
          {loading ? (
            <ActivityIndicator size={'large'} color={colors.Purple()} />
          ) : (
            blogData.map((item, index) => <ItemSmall item={item} key={index} />)
          )}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('AddBlog')}>
        <Edit color={colors.white()} variant="Linear" size={20} />
      </TouchableOpacity>
    </View>
  );
};
export default Profile;


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white(),
    flex: 1,
  },
  container_profile: {
    padding: 24,
  },
  header: {
    padding: 10,
    width: '100%',
    backgroundColor: '#A5C0DD',
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
  profilename: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    color: colors.black(),
    top: 12,
    textAlign: 'center',
  },
  bio: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 16,
    color: colors.grey(),
    top: 12,
    padding: 10,
    marginTop: -15,
    textAlign: 'center',
  },

  options: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '90%',
    padding: 20,
    paddingBottom: 22,
    borderRadius: 10,
    shadowOpacity: 70,
    elevation: 15,
    marginTop: 20,
  },
  iconoptions: {
    width: 20,
    height: 20,
  },
  textoptions: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 15,
    color: '#818181',
    fontWeight: 'bold',
    marginLeft: 10,
    top: 12,
    marginTop: -15,
    textAlign: 'center',
  },
  floatingButton: {
    backgroundColor: '#173153',
    padding: 15,
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 50,
    shadowColor: '#173153',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
    textAlign: 'center',
  },
  stats: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#90a0ca',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 1,
  },
  statsItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    borderLeftWidth: 1,
    borderColor: 'rgba(189, 189, 189, 0.32)',
  },
  statsItemText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    color: '#778599',
    marginBottom: 5,
  },
  statsItemValue: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: '#121a26',
  },
  profileName: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: '600',
    color: '#090909',
  },
  profileEmail: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '400',
    color: '#848484',
    textAlign: 'center',
  },
  profileAction: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#173153',
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
});


