import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectCity } from '../actions';
import './City.css';

class City extends Component {
    /**
     * @param isFocus - It shows that select city input is focus or blur to show or hide city-box
     */
    state = {
        isFocus: false
    }
    /**
     * @function addCity add City to redux state "selectedCities"
     * @param {Object} ev - Javascript Event ( KeyUp event )
     */
    updateCityBox = (ev) => {
        const { selectCity } = this.props;
        if(ev.keyCode && ev.keyCode == 13){ // check if keyup is enter ( code : 13 )
            let value = ev.target.value;
            selectCity(value);
        }
    }

    render() {
        let { isFocus } = this.state;
        return (
            <div className="container mt-4" data-test="city-component">
                <div 
                    className="text-center col-xs-12 col-sm-8 col-md-6 col-lg-4 col-xl-4 offset-sm-2 offset-md-3 offset-lg-4 offset-xl-4 row"
                >
                    <label 
                        className="col-5 mt-1"
                        htmlFor="cityInput"
                    >Select Cities</label>
                    <input 
                        className="col-7 form-control"
                        id="cityInput"
                        data-test="select-city-input"
                        type="text"
                        placeholder="type City then Enter"
                        onKeyUp={this.updateCityBox}
                        onFocus={() => this.setState({isFocus: true})}
                        onBlur={() => setTimeout(() => this.setState({isFocus: false}), 50)} // use setTimeout to let user click on a city from city-box to select before hide city-box
                    />
                    {
                        isFocus ? 
                        <div className="city-box">
                            
                        </div>
                        : ''
                    }
                </div>
            </div>
        )
    }
}

City.propTypes = {
    selectCity: PropTypes.func,
    selectedCities: PropTypes.array
};

const mapStateToProps = state => {
    const { cities, selectedCities } = state;
    return { cities, selectedCities };
};

export default connect(mapStateToProps, { selectCity })(City);