import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCity } from '../actions';

class City extends Component {
    addCity = (ev) => {
        const { selectCity } = this.props;
        if(ev.keyCode && ev.keyCode == 13){
            let value = ev.target.value;
            selectCity(value);
        }
    }
    render() {
        const { selectedCities } = this.props;
        return (
            <div data-test="city-component">
                <input type="text" onKeyUp={this.addCity} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { selectedCities } = state;
    return { selectedCities };
};

export default connect(mapStateToProps, { selectCity })(City);