import {StyleSheet}from 'react-native';
import React from 'react';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    field: {
      margin: 10,
      fontSize: 18,
    },
    font: {
      fontSize: 18,
      fontWeight: 'bold',
      marginRight: 200,
    },
    result: {
      margin: 18,
      fontSize: 30,
      fontWeight: '600'
    },
    header: {
        color: '#1260CC',
        marginBottom: 30,
        fontSize: 50,
        justifyContent: 'center',
        fontWeight: 'bold',
    },  
    time:  {
        margin: 10,
        borderRadius: 5,
        borderWidth: 2,
        paddingLeft: 80,
        paddingRight: 80,
        padding: 5,
        fontSize: 15,
      },
    bottles: {
        margin: 10,
        borderRadius: 5,
        borderWidth: 2,
        paddingLeft: 80,
        paddingRight: 80,
        padding: 5,
        fontSize: 15,
        textAlign: 'left',
        display: 'flex',
        
    },
    input: {
        display: 'flex',
        color: '#000000',
        // paddingLeft: 50,
        // paddingRight: 40,
        padding: 5,
        height: 40,
        margin: 10,
        borderWidth: 2,
        borderRadius: 5,
        //width: '100%',
        
      },
    radio: {
        marginTop: 10,
        // marginBottom: 10,
        // nyt näyttää puhelimella hyvältä
        fontSize: 20,
        marginRight: 30,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'flex-start',
        // width: '100%',
        
      },
      button: {
        //margin: 30,
        flexDirection: "row",
        padding: 10,
        backgroundColor: "#0096FF",
        width: 200,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
      },
      buttonText: {
        color:"#F0FFFF",
        fontSize: 20
      },
    green: {
        color: '#00ff00'
      },
    yellow: {
        color: '#ffff00'
    },
    red: {
        color: '#ff0000'
      }
});
