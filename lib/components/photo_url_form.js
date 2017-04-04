import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableWithoutFeedback
} from 'react-native';
import { Button, Container, ContainerItem, Input } from './templates';
import Database from '../firebase/database';


class PhotoURLForm extends Component {
	constructor(props) {
		super(props);
		this.state = {url: ""};
	}

	saveURL() {
		Database.setURL(this.state.url);
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
				<Button onPress={this.saveURL.bind(this)}>
					Submit URL
				</Button>
				</ContainerItem>
			</Container>

		);
	}
}

export default PhotoURLForm;