/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Cities from './Cities';
import { loadCity } from '../../actions/cities';


const title = 'Cities';

export default
    {

        path: '/cities',

        async action({ store }) {
            try {
                await store.dispatch(loadCity('http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743,2950159,504341,2988507&units=metric&appid=b1c0b967a2eae065899828eab3a7ae46'));

                const state = store.getState();
                         return {
                    title,
                    component: <Layout><Cities data = {state.cities}/></Layout>
                };
            } catch (e) {
                throw new Error(e);
            }
        },

    }
