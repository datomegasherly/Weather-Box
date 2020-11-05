import React, { Component } from 'react'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './Weather.css';
/**
 * countryflags.io api uses to show country flag
 */
class Weather extends Component {
    render() {
        const { selectedCities } = this.props;
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
                                        <div className="weather-box-inner">
                                            <div>{data.sys && data.sys.country && <img src={`https://www.countryflags.io/${data.sys.country}/shiny/32.png`} />} {r.name}</div>
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
    selectedCities: PropTypes.array.isRequired
}

const mapStateToProps = state => {
    const { selectedCities } = state;
    return { selectedCities };
}

export default connect(mapStateToProps)(Weather);