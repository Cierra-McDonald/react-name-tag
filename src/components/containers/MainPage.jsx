import React, { Component } from 'react'
import styles from './MainPage.module.css'
import Top from '../diplays/Top'
import Middle from '../diplays/Middle'
import Bottom from '../diplays/Bottom'

export default class MainPage extends Component {

    state = {
        name: '',
        greeting: 'Hi! My Name is...',
        color: 'Blue'
    }

    handleGreetingChange = (e) => { 
        this.setState({
            greeting: e.target.value
        })
    }

    handleNameChange = (e) => {
        console.log(e.target.value) 
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
            <div className={styles.outershell} aria-label="main-page">
                <Top
                    greeting={this.state.greeting}/>
                <Middle
                    name={this.handleNameChange}
                    />
                <Bottom/> 
            </div>
        )
    }
}
