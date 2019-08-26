import React from 'react';
import { StyleSheet, Text, View,Button,TextInput,ScrollView,Dimensions } from 'react-native';
//import axios from 'axios';
import QRCodeGenerator from './QRCodeGenerator';
import QRCodeScanner from './QRCodeScanner';

export default class App extends React.Component {
	constructor(props)
	{
		super(props);
		this.state={userId:"",showCode:false,showScanner:false,screenHeight:0,hide:"block"};
  }
    
  generateCode=()=>{
    this.setState({showCode:true})
  }
  onContentSizeChange=(contentWidth,contentHeight)=>{
    this.setState({screenHeight:contentHeight})
  }
  showScanner=async()=>{
    await this.setState({showScanner:true,hide:"none"});
  }
	render(){
    const scrollEnabled=this.state.screenHeight>Dimensions.get('window');
		return (
			<View style={styles.container}>
      <ScrollView
        style={{flex:1}}
        contentContainerStyle={styles.scroll}
        scrollEnabled={scrollEnabled}
        onContentSizeChange={this.onContentSizeChange}
      >
				<Text style={{marginBottom:20}}>QR Code Generator</Text>
        <TextInput
					name="userId"
					style={styles.input}
					onChangeText={(userId)=>this.setState({userId})}
				/>
        {this.state.showCode &&
          <QRCodeGenerator
            userId={this.state.userId}
          />
        }
				<Button onPress={this.generateCode} title="Generate QR Code"/> 
        <View>
        <View style={{margin:20}}>
          <Button onPress={this.showScanner} title="Scan QR Code"/>
        </View>
        {this.state.showScanner &&
        <QRCodeScanner/>
        }
        </View>
      </ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  button:{
    marginBottom:40,
    marginTop:30
  },
	container: {
		// backgroundColor: 'green',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	input:{
		borderColor:"black",
		borderWidth:1,
		width:250,
		height:30,
		marginBottom:20
  },
  scroll:{
    flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
  }
});
