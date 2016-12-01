/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { FormattedRelative } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './City.css';
import Link from '../../components/Link';
import { Button } from 'react-bootstrap';

class City extends React.Component {
 /* static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      contentSnippet: PropTypes.string,
    })).isRequired,
  };*/

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
            <Button bsSize="large">
                <Link className={s.link} to="/cities">
                    Cities
                </Link>
            </Button>


        </div>
      </div>
    );
  }
}

export default withStyles(s)(City);
