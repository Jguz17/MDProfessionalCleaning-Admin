import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import Nav from './Nav'
import Message from './Message'

export class Main extends Component {

    state = {
        messages: []
    }

    componentDidMount = () => {
        fetch('http://localhost:3000/api/v1/messages')
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                messages: data
            })
        })
    }

    removeMessage = (id) => {
        fetch(`http://localhost:3000/api/v1/messages/${id}`, { method: 'DELETE'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                messages: this.state.messages.filter(message => message.id !== id)
            })
        })
    }

    render() {

        return (
            <Grid container direction='column'>
                <Grid container item>
                    <Nav/>
                </Grid>
                <Grid container item>
                    <Grid style={{'textAlign': '-webkit-center'}} item container xs={12}>
                        {this.state.messages.map(message => {
                            return <Grid item xs={12} sm={6} lg={4}>
                                <Message message={message} removeMessage={this.removeMessage}/>
                            </Grid>
                        })}
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Main
