import React, { Component } from 'react'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import actionTypes from '../actionTypes';
import { removeCity } from '../actions';
import './Weather.css';
/**
 * countryflags.io api uses to show country flag
 */
class Weather extends Component {
    render() {
        const { selectedCities, removeCity } = this.props;
        return (
            <div className="container-fluid mt-3" data-test="weather-component">
                {
                    selectedCities && selectedCities.length ? 
                        <div data-test="weather-box" className="row weather-box">
                            {
                                selectedCities.map(r => {
                                    let { data } = r;
                                    return (
                                        <div key={r.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                            <div className="float-right mr-2 ml-2 mt-1 close-button" data-test="close-button" onClick={() => removeCity(r)}>
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                                </svg>
                                            </div>
                                            <div className="weather-box-inner">
                                                <div>
                                                    {data.sys && data.sys.country && <img src={`https://www.countryflags.io/${data.sys.country}/shiny/32.png`} />} {r.name}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    : ''
                }
            </div>
        )
    }
}

Weather.propTypes = {
    removeCity: PropTypes.func,
    selectedCities: PropTypes.array.isRequired
}

const mapStateToProps = state => {
    const { selectedCities } = state;
    return { selectedCities };
}

export default connect(mapStateToProps,{ removeCity })(Weather);