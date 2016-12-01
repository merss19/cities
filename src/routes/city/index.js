/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import City from './City';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import CityItem from '../../components/CityItem';

export default {

  path: '/city',

  async action() {
    let response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=b1c0b967a2eae065899828eab3a7ae46')

    let data = await response.json();
      if (!data) throw new Error('Failed to load');
      console.log('city')
      console.log(data )


    return {
      title: 'City',
      component: <Layout><CityItem cityObj = {data}/></Layout>,
    };
  },

};
