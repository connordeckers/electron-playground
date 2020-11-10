import React, { Component } from 'react';
import { Grid, Paper, StylesProvider } from '@material-ui/core';
import styles from '@styles/container.scss';

export class Main extends Component {
	render() {
		return (
			<StylesProvider injectFirst>
				<div className={styles.root}>
					<h1>Hello world</h1>
				</div>
			</StylesProvider>
		);
	}
}
