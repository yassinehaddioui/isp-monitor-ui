require('normalize.css/normalize.css');
require('styles/App.scss');
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ApiService from '../../actions/actions';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import React from 'react';


var HomeComponent = React.createClass({
    getInitialState(){
        return {
            apiKey: ''
        };
    },
    loadApiKey(){
        this.apiService = this.apiService || new ApiService();
        if (this.apiService.getApiKey())
            this.setState({apiKey: this.apiService.getApiKey()});
    },
    componentWillMount() {
        this.loadApiKey();
        injectTapEventPlugin();
    },

    _handleTextFieldChange(e) {
        this.setState({
            apiKey: e.target.value
        });
    },

    _handleFormSubmit(e) {
        console.log('click');
        this.apiService.verifyKey(this.state.apiKey, (err, response) => {
            if (response){
                this.apiService.setApiKey(this.state.apiKey);
                console.log('Saved');
            }
        });

    },
    render() {
        return (
            <MuiThemeProvider>
                <div className="index">
                    <AppBar
                        title="API Key Settings"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    <div className="container">
                        <Card><CardText>
                            <h1>Enter API Key</h1>
                            <TextField
                                hintText="Please enter key."
                                onChange={this._handleTextFieldChange}
                                value={this.state.apiKey}
                            />
                            <RaisedButton label="Save" primary={true} onClick={this._handleFormSubmit}/>
                        </CardText>
                        </Card>

                    </div>

                </div>
            </MuiThemeProvider>

        );
    }
});

HomeComponent
    .defaultProps = {
    textField: 'Cool'
};


export
default
HomeComponent;
