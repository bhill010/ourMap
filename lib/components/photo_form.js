import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableWithoutFeedback
} from 'react-native';
import { Button, Container, ContainerItem, Input } from './templates';
import Database from '../firebase/database';
import { getPhotoURLs } from '../utils/photo_utils';

class PhotoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {url: "", latitude: "", longitude: ""};
	}

	savePhotoInfo() {
		// Database.setPhotoInformation(this.state.url, this.state.latitude, this.state.longitude);
		getPhotoURLs(37.785834,37.786634,-122.406417,-122.405417);
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
				<Button onPress={this.savePhotoInfo.bind(this)}>
					Submit URL
				</Button>
				</ContainerItem>
			</Container>

		);
	}
}

export default PhotoForm;
