import React, {createClass, PropTypes} from 'react';
import Title from 'react-title-component';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import spacing from 'material-ui/styles/spacing';
import styleResizable from 'material-ui/utils/styleResizable';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {darkWhite, lightWhite, grey900} from 'material-ui/styles/colors';
import AppNavDrawer from './AppNavDrawer';
import FullWidthSection from './FullWidthSection';

const Master = createClass({

  propTypes: {
    children: PropTypes.node,
    location: PropTypes.object,
  },

  contextTypes: {
    router: PropTypes.object.isRequired,
  },

  childContextTypes: {
    muiTheme: PropTypes.object,
  },

  mixins: [
    styleResizable,
  ],

  getInitialState() {
    return {
      muiTheme: getMuiTheme(baseTheme),
      navDrawerOpen: false,
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  componentWillMount() {
    this.setState({
      muiTheme: this.state.muiTheme,
    });
  },

  componentWillReceiveProps(nextProps, nextContext) {
    const newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.setState({
      muiTheme: newMuiTheme,
    });
  },

  getStyles() {
    const styles = {
      appBar: {
        position: 'fixed',
        // Needed to overlap the examples
        zIndex: this.state.muiTheme.zIndex.appBar + 1,
        top: 0,
        backgroundColor: 'transparent',
      },
      root: {
        paddingTop: spacing.desktopKeylineIncrement,
        minHeight: 400,
      },
      content: {
        margin: spacing.desktopGutter,
        fontFamily: 'Droid Serif, serif',
      },
      contentWhenMedium: {
        margin: `${spacing.desktopGutter * 2}px ${spacing.desktopGutter * 3}px`,
      },
      footer: {
        backgroundColor: grey900,
        textAlign: 'center',
      },
      a: {
        color: darkWhite,
      },
      p: {
        margin: '0 auto',
        padding: 0,
        color: grey900,
        maxWidth: 356,
      },
      iconButton: {
        color: grey900,
        fill: grey900,
      },
    };

    if (this.isDeviceSize(styleResizable.statics.Sizes.MEDIUM) ||
        this.isDeviceSize(styleResizable.statics.Sizes.LARGE)) {
      styles.content = Object.assign(styles.content, styles.contentWhenMedium);
    }

    return styles;
  },

  handleTouchTapLeftIconButton() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen,
    });
  },

  handleChangeRequestNavDrawer(open) {
    this.setState({
      navDrawerOpen: open,
    });
  },

  handleChangeList(event, value) {
    this.context.router.push(value);
    this.setState({
      navDrawerOpen: false,
    });
  },

  handleChangeMuiTheme(muiTheme) {
    this.setState({
      muiTheme: muiTheme,
    });
  },

  render() {
    const {
      location,
      children,
    } = this.props;

    let {
      navDrawerOpen,
    } = this.state;

    const {
      prepareStyles,
    } = this.state.muiTheme;

    const router = this.context.router;
    const styles = this.getStyles();
    const title = '';

    let docked = false;
    let showMenuIconButton = true;

    if (this.isDeviceSize(styleResizable.statics.Sizes.LARGE) && title !== '') {
      docked = true;
      navDrawerOpen = true;
      showMenuIconButton = false;

      styles.navDrawer = {
        zIndex: styles.appBar.zIndex - 1,
      };
      styles.root.paddingLeft = 256;
      styles.footer.paddingLeft = 256;
    }

    return (
      <div>
        <Title render="Adam Bradford Codes" />
        <AppBar
          onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
          title={title}
          zDepth={0}
          style={styles.appBar}
          showMenuIconButton={showMenuIconButton}
        />
        {title !== '' ?
          <div style={prepareStyles(styles.root)}>
            <div style={prepareStyles(styles.content)}>
              {React.cloneElement(children, {
                onChangeMuiTheme: this.handleChangeMuiTheme,
              })}
            </div>
          </div> :
          children
        }
        <AppNavDrawer
          style={styles.navDrawer}
          location={location}
          docked={docked}
          onRequestChangeNavDrawer={this.handleChangeRequestNavDrawer}
          onChangeList={this.handleChangeList}
          open={navDrawerOpen}
        />
      </div>
    );
  },
});

export default Master;
