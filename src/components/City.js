import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectCity } from '../actions';

class City extends Component {
    /**
     * @function addCity add City to redux state "selectedCities"
     * @param {Object} ev - Javascript Event ( KeyUp event )
     */
    addCity = (ev) => {
        const { selectCity } = this.props;
        if(ev.keyCode && ev.keyCode == 13){ // check if keyup is enter ( code : 13 )
            let value = ev.target.value;
            selectCity(value);
        }
    }
    render() {
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
                        onKeyUp={this.addCity}
                    />
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
    const { selectedCities } = state;
    return { selectedCities };
};

export default connect(mapStateToProps, { selectCity })(City);