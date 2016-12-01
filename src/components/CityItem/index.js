/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CityItem.css';


import { Button,Col, Row, Panel } from 'react-bootstrap';

class CityItem extends Component {

    static propTypes = {
        cityObj: PropTypes.object.isRequired
    };


  render() {
      const { cityObj } = this.props
      const temp =Math.round(cityObj.main.temp -272.15) + ' C'
      return (
          <Panel className={s.item}>
              <div className={s.name}>{cityObj.name}</div>
              <div className={s.temp}>{ temp }</div>

          </Panel>
      )
  }
}



export default withStyles(s)(CityItem);
