import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableWithoutFeedback
} from 'react-native';
import { Button, Container, ContainerItem, Input } from './templates';
import Database from '../firebase/database';
import CryptoJS from 'crypto-js';

class PhotoUpload extends Component {
	constructor(props) {
		super(props);
		this.state = {url: "", latitude: "", longitude: ""};
	}

	savePhotoInfo(uri) {
		let timestamp = (Date.now() / 1000 | 0).toString();
		let api_key = '146822358129321';
		let api_secret = 'bkQSxoG-g_OJyGHGyh6KOLEQiNI';
		let cloud = 'ourmap';
		let hash_string = 'timestamp=' + timestamp + api_secret;
		let signature = CryptoJS.SHA1(hash_string).toString();
		let upload_url = 'https://api.cloudinary.com/v1_1/' + cloud + '/image/upload';

		let xhr = new XMLHttpRequest();
		xhr.open('POST', upload_url);
		xhr.onload = () => {
			console.log(xhr);
		};
		let formdata = new FormData();
		formdata.append('file', {uri: uri, type: 'image/png', name: 'upload.png'});
		formdata.append('timestamp', timestamp);
		formdata.append('api_key', api_key);
		formdata.append('signature', signature);
		xhr.send(formdata);
	}

	render() {

		return (
			<Container>	
				<ContainerItem>
					<Input
					placeholder="put photo url here"
					label="URL"
					value={this.state.url}
					onChangeText={url => this.setState({url})} />
				</ContainerItem>

				<ContainerItem>
					<Input
					placeholder="put photo latitude here"
					label="latitude"
					value={this.state.latitude}
					onChangeText={latitude => this.setState({latitude})} />
				</ContainerItem>

				<ContainerItem>
					<Input
					placeholder="put photo longitude here"
					label="longitude"
					value={this.state.longitude}
					onChangeText={longitude => this.setState({longitude})} />
				</ContainerItem>

				<ContainerItem>
				<Button onPress={this.savePhotoInfo.bind(this, 'hello')}>
					Submit URL
				</Button>
				</ContainerItem>
			</Container>

		);
	}
}

export default PhotoUpload;