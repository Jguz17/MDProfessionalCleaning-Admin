import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import theme from '../themes/theme'
import { ThemeProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logoutUser } from '../actions/user';
import '../styles/main.css'

const useStyles = ({
    typographyStyles: {
        flex: 1,
        color: 'white'
    },
    buttonColor: {
        color: 'white'
    }
})

export class Nav extends Component {
    render() {
        const { classes } = this.props
        return (
            <ThemeProvider theme={theme}>
                <AppBar position='static'>
                    <Toolbar>
                        <Typography variant='h4' className={classes.typographyStyles}><a href='#'>Recipeme</a></Typography>
                        <Button onClick={this.props.logout} className={classes.buttonColor}>Logout</Button>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutUser()),
    };
};
    
export default connect(null, mapDispatchToProps)(withStyles(useStyles)(Nav));
