import React from 'react';
import { StyleSheet, Image, View , SafeAreaView,StatusBar,Text,Pressable,Linking} from 'react-native';

const colorGithub = '#010409';
const colorfontGithub = '#C9D1D9';
const colorDarkfontGithub = '#4F565E';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/72845337?v=4';
const urlTomMyGithub = 'https://github.com/mayarapreta';

const App=()=>{
  const handleProcessGoToGithub = async()=>{
    console.log('Verificando link');
  const  res = await Linking.canOpenURL(urlTomMyGithub);
  
  if(res ){
    console.log('Link Aprovado');
    console.log('  Aprindo Link');
    await Linking.openURL(urlTomMyGithub);
  }}
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor={colorGithub} barStyle = "light-content"/>
    <View styles={styles.content}>
       <Image
       accessibilityLabel='maya com fundo rosa' 
       style ={styles.avata}source={{uri:imageProfileGithub}}/>
    
    <Text accessibilityLabel='Nome: mayara dorneles' style={[styles.defaultText, styles.name , {color:'pink'}]}> Mayara Doneles</Text>
        <Text 
        accessibilityLabel='nickname: mayara dorneles' style={[styles.defaultText, styles.nickname]}> mayarapreta </Text>
        <Text 
        accessibilityLabel='Descrição: Frond- End Developer Technology Student ' style={[styles.defaultText, styles.description]}>Frond- End Developer Technology Student 
          BR- University (🤓🧠)
          </Text>
            <Pressable onPress={handleProcessGoToGithub}>
            <View styles={styles.button}>
            <Text styles={[styles.defaultText, styles.textbutton]}> 
            Ope in Github 
            </Text>
          </View>
            </Pressable>
         </View>
    </SafeAreaView>
  );};
//o padrao do inicio
 export default App;
 //fontes de estilo
const styles = StyleSheet.create(
  {
  container: {
    flex:1, //pinta a tela toda
    //column
    backgroundColor: colorGithub, 
    alignItems:'center',
    justifyContent:'center',
    },

  content:{
   alignItems:'center',
   padding: 20,

  
  },
   avata: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 3,
   
    

   },
   defaultText: {
    color: colorfontGithub,
   },
   name: {
    marginTop: 20,
    fontSize: 20,
    fontWeight:'bold',
   },
   nickname: {
      fontSize: 20,
      color:colorDarkfontGithub,
   },
   description: {
    fontSize: 14,
    fontWeight:'bold',
   },
   button:{
      backgroundColor: colorDarkfontGithub,
      borderRadius: 10,
      padding: 20,
      marginTop: 20,
    },
     textbutton: {
      fontSize: 14,
      fontWeight:'bold',
      fontSize: 16,
    },
});
