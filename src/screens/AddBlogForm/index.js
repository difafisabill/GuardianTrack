import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated,
} from 'react-native';
import {ArrowLeft} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {fontType, colors} from '../../theme';
import FeatherIcon from 'react-native-vector-icons/Feather';

const AddBlogForm = () => {
  const dataCategory = [
    {id: 1, name: 'Scincare'},
    {id: 2, name: 'Vitamin'},
    {id: 3, name: 'Pola hidup'},
    {id: 4, name: 'Penyakit'},
    {id: 5, name: 'Perawatan'},
    {id: 6, name: 'Tips'},
    {id: 7, name: 'Kulit'},
  ];
  const [blogData, setBlogData] = useState({
    title: '',
    content: '',
    category: {},
    totalLikes: 0,
    totalComments: 0,
  });
  const handleChange = (key, value) => {
    setBlogData({
      ...blogData,
      [key]: value,
    });
  };
  const [image, setImage] = useState(null);
  const navigation = useNavigation();

  const scrollY = useRef(new Animated.Value(0)).current;

  const translateHeader = scrollY.interpolate({
    inputRange: [0, 80],
    outputRange: [0, -80],
    extrapolate: 'clamp',
  });
  const opacityTitle = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  const translateTitle = scrollY.interpolate({
    inputRange: [0, 80],
    outputRange: [0, 40],
    extrapolate: 'clamp',
  });

  return (
    <View style={{backgroundColor: '#05141c'}}>
      {/* <SafeAreaView style={{ flex: 1, backgroundColor: '#F8E2F7' }}> */}

      <Animated.View
        style={[styles.header, {transform: [{translateY: translateHeader}]}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color={colors.white()} variant="Linear" size={24} />
        </TouchableOpacity>
        <Animated.Text
          style={[
            styles.headerTitle,
            {opacity: opacityTitle},
            ,
            {transform: [{translateY: translateTitle}]},
          ]}>
          Write Your Own Blog{'\n'}to Public
        </Animated.Text>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Do you want to find another blog?"
            placeholderTextColor="#05141c"
            style={styles.input}
          />

          <View style={styles.inputIcon}>
            <FeatherIcon color="#05141c" name="search" size={16} />
          </View>
        </View>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={styles.content}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: true,
          },
        )}
        scrollEventThrottle={1}>
        <View style={styles.container}>
          <View style={styles.header_blog}></View>
          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: 24,
              paddingVertical: 10,
              gap: 10,
            }}>
            <View style={[textInput.borderDashed]}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: fontType['Pjs-Regular'],
                  color: colors.grey(0.6),
                }}>
                Category
              </Text>
              <View style={category.container}>
                {dataCategory.map((item, index) => {
                  const bgColor =
                    item.id === blogData.category.id
                      ? colors.old_purple()
                      : colors.grey(0.08);
                  const color =
                    item.id === blogData.category.id
                      ? colors.white()
                      : colors.grey();
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() =>
                        handleChange('category', {id: item.id, name: item.name})
                      }
                      style={[category.item, {backgroundColor: bgColor}]}>
                      <Text style={[category.name, {color: color}]}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
            <View style={textInput.borderDashed}>
              <TextInput
                placeholder="Title"
                value={blogData.title}
                onChangeText={text => handleChange('title', text)}
                placeholderTextColor={colors.grey(0.6)}
                multiline
                style={textInput.title}
              />
            </View>
            <View style={[textInput.borderDashed, {minHeight: 250}]}>
              <TextInput
                placeholder="Content"
                value={blogData.content}
                onChangeText={text => handleChange('content', text)}
                placeholderTextColor={colors.grey(0.6)}
                multiline
                style={textInput.content}
              />
            </View>
            <View style={[textInput.borderDashed]}>
              <TextInput
                placeholder="Image"
                value={image}
                onChangeText={text => setImage(text)}
                placeholderTextColor={colors.grey(0.6)}
                style={textInput.content}
              />
            </View>
          </ScrollView>
          <View style={styles.bottomBar}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonLabel}>Upload</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.ScrollView>
      {/* </SafeAreaView>  */}
    </View>
  );
};

export default AddBlogForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    paddingHorizontal: 24,
    paddingVertical: 12,
    height: 200,
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    backgroundColor: '#05141c',
  },
  headerTitle: {
    fontSize: 26,
    lineHeight: 34,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
  },
  input: {
    height: 44,
    backgroundColor: '#fff',
    paddingLeft: 44,
    paddingRight: 24,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
  },
  inputIcon: {
    position: 'absolute',
    width: 44,
    height: 44,
    top: 0,
    left: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_blog: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 200,
    paddingBottom: 4,
  },
  title: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 16,
    color: colors.black(),
  },
  bottomBar: {
    backgroundColor: colors.white(),
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    paddingVertical: 10,
    shadowColor: colors.black(),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 140,
    borderWidth: 1,
    backgroundColor: '#9400FF',
    borderColor: '#9400FF',
    height: 52,
  },
  buttonLabel: {
    fontSize: 14,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.white(),
  },
});
const textInput = StyleSheet.create({
  borderDashed: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: colors.grey(0.4),
  },
  title: {
    fontSize: 16,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
    padding: 0,
  },
  content: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.black(),
    padding: 0,
  },
});
const category = StyleSheet.create({
  title: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(0.6),
  },
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
  },
  name: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
  },
});
