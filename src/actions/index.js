import actionTypes from '../actionTypes';
import PropTypes from 'prop-types';
/**
 * @function selectCity will add a city to selectedCity reducer
 * @param {string} city 
 * @returns {object}
 */
const selectCity = city => {
    return {
        type: actionTypes.SET_CITY,
        payload: city
    }
}

selectCity.propTypes = {
    city: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    })
}

export {
    selectCity
};