import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, SafeAreaView, ScrollView, Pressable, Dimensions, Modal } from 'react-native';
import { WebView } from "react-native-webview";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const fondo = { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAzyflXmgj-6Tm4IUoH7ex1HNaykIMze0NMyLh2qO6Em6c4L-aYGAHLyL8rIrFGQEGVnI&usqp=CAU' };
const image = { uri: 'https://oceanvodka.com/uploads/2019/04/HP-Hero-Header@2x.jpg' };

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function Changes() {

  const [dimensions, setDimensions] = useState({ window, screen });
  const [mode, setMode] = useState("portrait");

  const [modalVisible, setModalVisible] = useState(false);
  const [playing, setPlaying] = useState(false);

  const modeMaker = () => {
    if (dimensions.screen.width > dimensions.screen.height) {
      setMode("landscape")  
    } else {
      setMode("portrait")   
    }
   }

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange)
    return () => {
      Dimensions.removeEventListener("change", onChange),
     modeMaker();
    };

  });

  return (
    <SafeAreaView style={styles.container}>

      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        supportedOrientations={['landscape']} 
        onRequestClose={() => {
          Alert.alert("Modal closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <WebView
    source={{html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/cqyziA30whE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}
 />
 <Pressable
          style={[styles.button, styles.buttonP]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.closeText}>Hide Modal</Text>
        </Pressable>
  </Modal>

      <ImageBackground source={fondo} style={styles.fondo} imageStyle={{
              resizeMode: 'stretch'
            }}>
        <View style={styles.nav}>  
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={mode === "portrait" ? styles.navButton : styles.navHorizontal}>
              <Text style={mode === "portrait" ? styles.navText : styles.navHtext}>Home</Text>
            </View>
            <Pressable onPress={() => setModalVisible(true)} style={mode === "portrait" ? styles.navButton : styles.navHorizontal}>
              <Text style={mode === "portrait" ? styles.navText  : styles.navHtext}>Video</Text>
            </Pressable>
            <View style={mode === "portrait" ? styles.navButton : styles.navHorizontal}>
              <Text style={mode === "portrait" ? styles.navText : styles.navHtext}>Portfolio</Text>
            </View>
            <View style={mode === "portrait" ? styles.navButton : styles.navHorizontal}>
              <Text style={mode === "portrait" ? styles.navText  : styles.navHtext}>Services</Text>
            </View>
            <View style={mode === "portrait" ? styles.navButton : styles.navHorizontal}>
              <Text style={mode === "portrait" ? styles.navText : styles.navHtext}>Contact</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.contentWrapper}>
          <ScrollView>
            {mode === "portrait"
            ?
                <View style={styles.headerBorder}>
                    <ImageBackground source={image} style={styles.image}>
                    <View style={styles.header}>
                        <Text style={styles.title}>An Ocean Sunset</Text>
                        <Text style={styles.subtitle}>Welcome to the beach:)</Text>
                        <View style={styles.playButton}>
                          <View style={styles.playVideo}>
                            <Icon name="play"  size={40} color="#ff993e"  onPress={() => setModalVisible(true)} />
                            <Text style={styles.playV}>Play Video</Text>
                          </View>
                        </View>
                    </View>
                    </ImageBackground>
                </View>
            :
                <View style={styles.headerBorder}>
                    <View style={styles.header}>
                        <Text style={styles.titleH}>An Ocean Sunset</Text>
                        <Text style={styles.subtitleH}>Welcome to the beach:)</Text>
                    </View>
                </View>
            }
            <View style={styles.textBorder}>
              <View style={mode === "portrait" ? styles.textContent : styles.textContentH}>
                <View style={styles.paragraph}>
                  <Text style={styles.pTitle}>The Title of an Article</Text>
                  <Text style={styles.pText}>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :) </Text>

                 <Text style={styles.pText}> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.</Text>

                  <Text style={styles.pText}>Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.</Text>
                </View>

                <View style={styles.paragraph}>
                  <Text style={styles.pTitle}>So Many Titles, So Little Time.</Text>
                  <Text style={styles.pText}>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :) </Text>

                 <Text style={styles.pText}> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.</Text>

                  <Text style={styles.pText}>Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.</Text>
            
                </View>

                <View style={styles.paragraph}>
                  <Text style={styles.pTitle}>Yet Another One!</Text>
                  <Text style={styles.pText}>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :) </Text>

                 <Text style={styles.pText}> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.</Text>

                  <Text style={styles.pText}>Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20
  },
  fondo: {
    flex: 1,
    resizeMode: 'cover',
    bottom: 0,
    width: '100%'
  },
  navButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    height: 80
  },
  navHorizontal: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 40,
    paddingRight: 40,
    height: 80
  },
  navText : {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14
  },
  navHtext: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18
  },
  contentWrapper: {
    flex: 0.9,
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: '#ffff'
  },
  headerBorder: {
    backgroundColor: '#fffc',
    padding: 15
  },
  image: {
    height: 300
  },
  header: {
    padding: 10
  },
  title: {
    color: '#ff993e',
    fontSize: 50
  },
  titleH: {
    color: '#ff993e',
    fontSize: 70,
    fontWeight: '700'
  },
  subtitle: {
      color: '#fffc',
      fontSize: 20

  },
  subtitleH: {
    color: 'black',
    fontSize: 20
  },
  textBorder: {
    backgroundColor: '#fffc',
    padding: 15,
    marginTop: 20
  },
  textContent: {
   backgroundColor: '#f7ecd3',
    padding: 10
  },
  textContentH: {
    //backgroundColor: '#f7ecd3',
    padding: 60
  },
  pTitle: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 10
  },
  pText: {
    lineHeight: 20,
    marginBottom: 20
  },
  playButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '70%'
  },
  playVideo: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playV: {
    color: '#ff993e',
    paddingRight: 15
  },
  buttonP: {
    backgroundColor: "orange",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom:20,
    width: '15%',
    position: 'absolute',
    right: '10%',
    bottom: '5%'
  },
  closeText: {
    textAlign: 'center',
    color: '#fff'
  }
});
