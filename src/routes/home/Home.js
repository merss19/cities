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
import s from './Home.css';
import Link from '../../components/Link';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
class Home extends React.Component {
 /* static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      contentSnippet: PropTypes.string,
    })).isRequired,
  };*/

  render() {

      const loading = this.props.cities.loading ? <h3 className={s.loading}>Loading</h3> : null

    return (
      <div className={s.root}>
        <div className={s.container}>
            <div className={s.btns}>
                <Button bsSize="large" className={s.button}>
                    <Link className={s.link} to="/cities">
                        Cities
                    </Link>
                </Button>

                <Button bsSize="large" className={s.button}>
                    <Link className={s.link} to="/city">
                        City
                    </Link>
                </Button>
            </div>
            {loading}



        </div>
      </div>
    );
  }
}

//export default withStyles(s)(Home);

const mapState = (state) => ({
    cities: state.cities
});
const EnhancedHome = connect(mapState)(Home)

export default withStyles(s)(EnhancedHome);
