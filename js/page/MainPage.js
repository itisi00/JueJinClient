/**
 * Created by wangdi on 4/11/16.
 */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import TabBar from '../component/TabBar'

export default class MainScene extends Component{

    render(){
        return(
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <TabBar/>
            </View>
        );
    }
}