/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes, Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Cities.css';

import { Panel, Col } from 'react-bootstrap';
import CityItem from '../../components/CityItem';


class Cities extends Component {

 static propTypes = {

    data: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      load: PropTypes.bool.isRequired,
      data: PropTypes.object.isRequired
    })
  };



  render() {
    const { data } = this.props

  const cities = data.data.list

    const list = cities.map((city) =>
         <Col xs={3} key={city.id}>
               <CityItem cityObj={city}/>
        </Col>
    )


    return (
        <div className = {s.container}>
            <Panel className = {s.cities}>
                <h1 className = {s.title}>Cities</h1>
                    {list}


            </Panel>
        </div>

    );
  }
}



export default withStyles(s)(Cities);
