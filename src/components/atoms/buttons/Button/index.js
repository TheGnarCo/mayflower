import React from 'react';
import PropTypes from 'prop-types';

// import button default data from pattern json
import data from './button.json';

const Button = (props) => {
  const button = props;
  const buttonSize = button.size ? ` ma__button--${button.size}` : '';
  const buttonStyle = button.outline ? ' ma__button--minor' : '';
  const buttonTheme = button.theme ? ` ma__button--${button.theme}` : '';
  const classNames = `ma__button${buttonSize}${buttonStyle}${buttonTheme}`;
  const Element = button.href ? 'a' : 'button';

  return(
    <Element
      className={classNames}
      type={button.type}
      href={button.href}
      title={button.info}
      aria-label={button.info}
      onClick={button.onClick}
    >
      {button.text}
    </Element>
  );
};

Button.propTypes = {
  /** Custom click handler function. */
  onClick: PropTypes.func,
  /** When populated with a url, this component renders a <a> vs a <button> */
  href: PropTypes.string,
  /** The text which renders in the standard browser tooltip on hover */
  info: PropTypes.string,
  /** Button or link text */
  text: PropTypes.string,
  /** HTML <button> 'type' attribute  */
  type: PropTypes.oneOf(['submit', 'reset', 'button', '']),
  /** Create a smaller button */
  size: PropTypes.oneOf(['', 'small']),
  /** Themes correspond to site color scheme i.e. sass variables */
  theme: PropTypes.oneOf(['', 'secondary', 'quaternary']),
  /** Whether or not to make a ghost button */
  outline: PropTypes.bool
};

// Use data from the pattern json file as default
Button.defaultProps = data.button;

export default Button;
