import {
  FETCH_CONTENT_START,
  FETCH_CONTENT_SUCCESS,
  FETCH_CONTENT_ERROR,
} from '../constants';

export const LOAD_CITY = 'LOAD_CITY'
export const START = '_START'
export const SUCCESS = '_SUCCESS'
export const FAIL = '_FAIL'

const defaultState = {
    loading:false,
    load:false,
    data:[],
    error:''
};


import {
    LOAD_CITY_START,
    LOAD_CITY_SUCCESS,
    LOAD_CITY_FAIL
} from '../constants';


// reducer
export default function cities(state = defaultState, action) {
  switch (action.type) {
    case LOAD_CITY_START: {
      return {
        ...state,
        loading:true
      };
    }

      case LOAD_CITY_SUCCESS: {
          return {
              ...state,
              loading:false,
              load:true,
              data:action.payload.data
          };
      }

      case LOAD_CITY_FAIL: {
          return {
              ...state,
              loading:false,
              load:false,
              error:action.payload
          };
      }


    default: {
      return state;
    }
  }
}
