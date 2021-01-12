import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Audio} from 'expo-av';
import {AntDesign} from '@expo/vector-icons';

export default function App() {

  const[audio, setarAudio] = useState(null);
  const[musica, setarMusica] = useState([
    {
      nome:'In my mind',
      artista: "Gigi D'Agostino, Dynoro",
      playing:true,
      file:'',
    },
    {
      nome:'Lose Your Self',
      artista: "Eminem",
      playing:false,
      file:'',
    },
    {
      nome:'Dark Horse',
      artista: " Katy Perry & Juicy J",
      playing:false,
      file:'',
    },
  ]);

  const changeMusic = (id) =>{
    let newMusics = musica.filter((val, k) =>{
      if(id == k){
        musica[k].playing = true;
      }else{
        musica[k].playing = false;
      }
      return musica[k]
    });

    setarMusica(newMusics);
  }
  return (
    <ScrollView style={styles.container}>

      <StatusBar backgroundColor='rgb(20, 20, 20) ' style='light'/>

      <View style={styles.header}>
        <Text style={{color:'white', fontSize:20, textAlign:'center'}}>MUSIC SOUND</Text>
      </View>

      <View style={styles.table}>
        <Text style={{width:'50%', color:'white', fontSize:17}}>Música</Text>
        <Text style={{width:'50%', color:'white', fontSize:17}}>Artista</Text>
      </View>

      {
        musica.map((val, k)=>{
          if(val.playing){
            return(
              <View style={styles.tableClick}>
                <TouchableOpacity style={{width:'100%', flexDirection:'row'}} onPress={()=>changeMusic(k)}>
                  <Text style={{width:'50%', color:'white', fontSize:15}}><AntDesign name="play" size={15} color="white"/>  {val.nome}</Text>
                  <Text style={{width:'50%', color:'white', fontSize:15}}>{val.artista}</Text>
                </TouchableOpacity>
              </View>
            );
          }else{
            return(
              <View style={styles.table}>
                <TouchableOpacity style={{width:'100%', flexDirection:'row'}} onPress={()=>changeMusic(k)}>
                  <Text style={{width:'50%', color:'white', fontSize:15}}><AntDesign name="play" size={15} color="black"/>  {val.nome}</Text>
                  <Text style={{width:'50%', color:'white', fontSize:15}}>{val.artista}</Text>
                </TouchableOpacity>
              </View>
            );
          }
        })
      }

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    flex: 1,
    backgroundColor: '#585efc',
  },
  header:{
    width:"100%",
    backgroundColor:'#40008f',
    padding:25
  },
  table:{
    flexDirection:'row',
    padding:20,
    borderBottomColor:'black',
    borderBottomWidth:3,
  },
  tableClick:{
    flexDirection:'row',
    padding:20,
    borderBottomColor:'black',
    borderBottomWidth:3,
    backgroundColor:'#5902c4'
  }
});
