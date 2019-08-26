import React from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';
import axios from 'axios';
import QRCode from 'react-native-qrcode';
//import QrcodeDecoder from 'qrcode-decoder';


export default class QRCodeGenerator extends React.Component {
	constructor(props)
	{
		super(props);
		this.state={};
    }
    store=()=>{
		// var qr = new QrcodeDecoder();
		// var img=document.querySelector('img');
		// qr.decodeFromImage(img).then((res) => {
		// 	console.log(res);
		// });
    }
	render(){
		return (
			<View style={styles.container}>
				{/* <Text>QR Code Scanner</Text> */}
					<QRCode
						value={this.props.userId}
						size={200}
						bgColor='black'
						fgColor='white'
					/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
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
	}
});
