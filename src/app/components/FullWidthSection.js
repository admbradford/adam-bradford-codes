import React, {createClass, PropTypes} from 'react';
import ClearFix from 'material-ui/internal/ClearFix';
import spacing from 'material-ui/styles/spacing';
import styleResizable from 'material-ui/utils/styleResizable';
const desktopGutter = spacing.desktopGutter;

const FullWidthSection = createClass({

  propTypes: {
    children: PropTypes.node,
    contentStyle: PropTypes.object,
    contentType: PropTypes.string,
    style: PropTypes.object,
    useContent: PropTypes.bool,
  },

  mixins: [
    styleResizable,
  ],

  getDefaultProps() {
    return {
      useContent: false,
      contentType: 'div',
    };
  },

  getStyles() {
    return {
      root: {
        padding: desktopGutter,
        boxSizing: 'border-box',
      },
      content: {
        maxWidth: 1080,
        margin: '0 auto',
        fontFamily: 'Droid Serif, serif',
      },
      rootWhenSmall: {
        paddingTop: desktopGutter * 2,
        paddingBottom: desktopGutter * 2,
      },
      rootWhenLarge: {
        paddingTop: desktopGutter * 3,
        paddingBottom: desktopGutter * 3,
      },
    };
  },

  render() {
    const {
      style,
      useContent,
      contentType,
      contentStyle,
      ...other,
    } = this.props;

    const styles = this.getStyles();

    let content;
    if (useContent) {
      content =
        React.createElement(
          contentType,
          {style: Object.assign(styles.content, contentStyle)},
          this.props.children
        );
    } else {
      content = this.props.children;
    }

    return (
      <ClearFix
        {...other}
        style={Object.assign(
          styles.root,
          style,
          this.isDeviceSize(styleResizable.statics.Sizes.SMALL) && styles.rootWhenSmall,
          this.isDeviceSize(styleResizable.statics.Sizes.LARGE) && styles.rootWhenLarge)}
      >
        {content}
      </ClearFix>
    );
  },
});

export default FullWidthSection;
