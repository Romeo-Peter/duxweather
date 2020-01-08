import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { search: null };
        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onInputChange(e) {
        this.setState({search: e.target.value});
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.fetchWeather(this.state.search);
        this.setState({search: ''});
    }

    render() {
        return (

            <form onSubmit={this.onFormSubmit} className="input-group mt-p5">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="search wheather forcast"
                    value={ this.state.value }
                    onChange={ this.onInputChange }
                    autoComplete="on" 
                />
                <span type="submit" className="input-group-btn">
                    <button type="submit" className="btn btn-md btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

// Bind action creator to container
function mapDispatchToProps(dispatch) {
    // Action flows to reducer and middleware
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)