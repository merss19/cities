/* eslint-disable import/prefer-default-export */

import {
    LOAD_CITY_START,
    LOAD_CITY_SUCCESS,
    LOAD_CITY_FAIL
} from '../constants';
import fetch from '../core/fetch';


export function loadCity(url) {
    return async (dispatch, getState) => {

        dispatch({
            type: LOAD_CITY_START
        });

        try {
            let response = await fetch(url)

            let data = await response.json();

            dispatch({
                type: LOAD_CITY_SUCCESS,
                payload: {
                    data
                }
            });

        } catch (error) {
            dispatch({
                type: LOAD_CITY_FAIL,
                payload: {
                    error
                }
            });
            return false;
        }

        return true;
    };
}