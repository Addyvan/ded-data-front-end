import React from 'react';
import PropTypes from "prop-types";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import { history } from "../redux/store";
import routes from "../routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/styles/aurora.css";
import "../assets/styles/globalNav.css";
import "../assets/styles/custom.css";

// GLOBAL NAV IMPORTS
import { connect } from 'react-redux';
import GlobalNav from '@gctools-components/global-nav';
import Login from '@gctools-components/gc-login';
import { loginAction, logoutAction, clearErrorAction } from '../redux/actions/actions';
import oidcConfig from '../oidcConfig.dev';
import { Translation } from "react-i18next";
import i18n from "../localization/i18n";

import {
  Button
} from "reactstrap";

// Temp
import directoryIcon from '../assets/imgs/directory_icon.png';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: false,
      user: null,
      sidebar: false,
      t: null // token
    }
  }

  // Stores the state of the sidebar
  componentWillMount() {
    const cookies = decodeURIComponent(document.cookie).split(';');
    cookies
      .filter(c => c.trim().indexOf('lang=') === 0)
      .forEach((c) => {
        const lang = c.split('=', 2)[1];
        if (i18n) {
          console.log(lang);
          i18n.changeLanguage(lang);
        }
      });
    if (cookies.filter(item => item.includes('oadw-gn-min=false')).length) {
      this.setState({
        sidebar: true,
      });
    }
  }

  render() {

    

    const {
      onLogin,
      onLogout,
    } = this.props;

    const doLogin = (user) => {
      this.setState({ name: user.profile.name });
      this.setState({ user: user.profile });
      this.setState({ t: user.access_token });
      onLogin(user);
    };

    const doLogout = () => {
      this.setState({ name: false });
      onLogout();
    };

    return (
      <Router>
        <Login
          oidcConfig={oidcConfig}
          onUserLoaded={doLogin}
          onUserFetched={doLogin}
          onLogoutClick={(e, oidc) => {
            oidc.logout();
            doLogout();
          }}
        >
          {
            ({ onClick }) => (
              <Button
                id="login-btn"
                className="sr-only"
                tabIndex="-1"
                onClick={(e) => {
                  e.stopPropagation();
                  onClick(e);
                }}
              >
                {this.state.name || 'Login'}
              </Button>
            )
          }
        </Login>
        <Translation ns={["translation"]}>
          {
            (t, { i18n }) => (
              <GlobalNav
                minimized={this.state.sidebar}
                currentLang={i18n.language}
                currentUser={this.state.user}
                accessToken={this.state.t}
                hamburgerMenu={false}
                onLanguageResultClick={e => {
                  console.log(e);
                  i18n.changeLanguage(e);
                }}
                onToggleResultClick={() => {
                  this.setState({ sidebar: !this.state.sidebar });
                  document.cookie = `oadw-gn-min=${this.state.sidebar};`;
                }}
                currentApp={
                  {
                    id: '5',
                    name: 'DataApp',
                    home: '/',
                    logo: directoryIcon,
                  }
                }
              />
            )
          }
        </Translation>
        <main
          id="gn-main"
          className={(this.state.sidebar) ?
          'directory-container-min' : 'directory-container'
          }
        >
          <ConnectedRouter history={history}>
            <div className="flex-grow-1" style={{height:"100%"}}>
              {
                routes.map((route, index) => {
                  return(
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      component={props => {
                        return (
                          <route.layout {...props}>
                            <route.component {...props} />
                          </route.layout>
                        );
                      }}
                    />
                  );
                })
              }
            </div>
          </ConnectedRouter>
        </main>
      </Router>
    );
  }
}

App.defaultProps = {
  onLogin: () => {},
  onLogout: () => {},
};

App.propTypes = {
  /** Login event callback  */
  onLogin: PropTypes.func,
  /** Logout event callback */
  onLogout: PropTypes.func,
};

const mapStToProps = ({ showError }) => ({ showError: showError || [] });

const mapDispToProps = dispatch => ({
  onLogin: profile => dispatch(loginAction(profile)),
  onLogout: () => dispatch(logoutAction()),
  onErrorClose: () => dispatch(clearErrorAction()),
});

export default connect(mapStToProps, mapDispToProps)(App);