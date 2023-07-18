import React from 'react';
import{View, Text, StyleSheets, TouchableOpacity, Image} from React-native
import{ Header, airbnb, rating, icon} from React - native
import{rfvalue} from React - native - responsive - "font size"
import{access} from axios;

export default class  HomeScreen extends component{
    constructor(){
        super();
        this.state = {
            moviedetails:{}
        };
    }

    componentDidMount(){
        
        this.getMovie();
    } 

    timeConvert(num){
        var hours = math.floor(num/60);
        var minutes = num  %60;
        return `${hours}`
    }
}








