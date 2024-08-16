//background color//
import React from 'react';

const styles = {
  Screen: {
    backgroundColor: '#161616',
  },
};

const Screen = (props) => {
  return (
    <div style={styles.Screen}>
      {props.children}
    </div>
  );
};

export default Screen;
//replace with logo//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '40px',
    fontFamily: 'Roboto',
    letterSpacing: '-1px',
    lineHeight: '52px',
  },
};

const defaultProps = {
  text: 'Logo here',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//log in button//
import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '72px',
    left: '988px',
    width: '142px',
    height: '62px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#323232',
    color: '#ffffff',
    fontSize: '18px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 600,
    lineHeight: '28px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Log in',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;
//join now button//
import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '72px',
    left: '1146px',
    width: '150px',
    height: '62px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#323232',
    color: '#ffffff',
    fontSize: '18px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 600,
    lineHeight: '28px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Join now',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;
//place holder image//
import React from 'react';

const styles = {
  ImageContainer: {
    top: '260px',
    left: '144px',
    width: '192px',
    height: '192px',
    borderRadius: '24px',
    backgroundImage: 'url(./image.png)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/b79a562d-9443-41a1-9d1f-1ba44c270ffb.png',
}

const Image = (props) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default Image;
//text:dicover the best retro games collection//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '72px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 600,
    lineHeight: '92px',
    textAlign: 'center',
  },
};

const defaultProps = {
  text: 'Discover the best retro games collection',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//search bar//
import React from 'react';

const styles = {
  Input: {
    top: '560px',
    left: '390px',
    width: '500px',
    height: '60px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#323232',
    color: '#c0c0c0',
    fontSize: '18px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 500,
    lineHeight: '28px',
    outline: 'none',
  },
};

const defaultProps = {
  text: 'Search for games',
};

const InputField = (props) => {
  return (
    <input style={styles.Input} placeholder={props.text ?? defaultProps.text} />
  );
};

export default InputField;
//explore button//
import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '560px',
    left: '906px',
    width: '145px',
    height: '60px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#323232',
    color: '#ffffff',
    fontSize: '18px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 600,
    lineHeight: '28px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Explore',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;
//place holder image//
import React from 'react';

const styles = {
  ImageContainer: {
    top: '446px',
    left: '1111px',
    width: '176px',
    height: '176px',
    borderRadius: '24px',
    backgroundImage: 'url(./image.png)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/98140937-88ed-44c9-a366-a6a68eee4536.png',
}

const Image = (props) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default Image;
//bar//
import React from 'react';

const styles = {
  HorizontalDivider: {
    top: '862px',
    left: '144px',
    width: '1152px',
    height: '2px',
    backgroundColor: '#323232',
    borderRadius: '2px',
  },
};

const HorizontalDivider = (props) => {
  return (
    <div style={styles.HorizontalDivider} />
  );
};

export default HorizontalDivider;
//explore our section//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '32px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '48px',
  },
};

const defaultProps = {
  text: 'Explore our selection',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
// drop down arrow//
import React from 'react';

const styles = {
  Icon: {
    color: '#ffffff',
    fill: '#ffffff',
    fontSize: '24px',
    top: '908px',
    left: '1272px',
    width: '24px',
    height: '24px',
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 448 512">
    <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

const Icon = (props) => {
  return (
    props.IconComponent 
      ? <props.IconComponent style={styles.Icon} /> 
      : <defaultProps.IconComponent />
  );
};

export default Icon;
// grey bar//
import React from 'react';

const styles = {
  HorizontalDivider: {
    top: '976px',
    left: '144px',
    width: '1152px',
    height: '2px',
    backgroundColor: '#323232',
    borderRadius: '2px',
  },
};

const HorizontalDivider = (props) => {
  return (
    <div style={styles.HorizontalDivider} />
  );
};

export default HorizontalDivider;
//place holder image//
import React from 'react';

const styles = {
  ImageContainer: {
    top: '1024px',
    left: '144px',
    width: '320px',
    height: '320px',
    borderRadius: '24px',
    backgroundImage: 'url(./image.png)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/d69d7452-4001-4699-93ae-b0bb2c475fa1.png',
}

const Image = (props) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default Image;
//text:pick you console//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '32px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '48px',
  },
};

const defaultProps = {
  text: 'Pick your console',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//text:Enter your shipping address. Get your favorite retro games delivered hassle-free. //
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '20px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '30px',
  },
};

const defaultProps = {
  text: 'Enter your shipping address. Get your favorite retro games delivered hassle-free.',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//grey bar vert//
import React from 'react';

const styles = {
  VerticalDivider: {
    top: '976px',
    left: '512px',
    width: '2px',
    height: '610px',
    backgroundColor: '#323232',
    borderRadius: '2px',
  },
};

const VerticalDivider = (props) => {
  return (
    <div style={styles.VerticalDivider} />
  );
};

export default VerticalDivider;

//place holder image//
import React from 'react';

const styles = {
  ImageContainer: {
    top: '1024px',
    left: '561px',
    width: '320px',
    height: '320px',
    borderRadius: '24px',
    backgroundImage: 'url(./image.png)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/65691ff1-300b-48db-b4ff-7d3844e54189.png',
}

const Image = (props) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default Image;
//text: chose you game//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '32px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '48px',
  },
};

const defaultProps = {
  text: 'Choose your game',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//text:Select a game and console. Your next retro gaming adventure awaits.//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '20px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '30px',
  },
};

const defaultProps = {
  text: 'Select a game and console. Your next retro gaming adventure awaits.',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//grey bar vert//
import React from 'react';

const styles = {
  VerticalDivider: {
    top: '976px',
    left: '926px',
    width: '2px',
    height: '610px',
    backgroundColor: '#323232',
    borderRadius: '2px',
  },
};

const VerticalDivider = (props) => {
  return (
    <div style={styles.VerticalDivider} />
  );
};

export default VerticalDivider;
//place holder image//
import React from 'react';

const styles = {
  ImageContainer: {
    top: '1024px',
    left: '974px',
    width: '320px',
    height: '320px',
    borderRadius: '24px',
    backgroundImage: 'url(./image.png)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/3e7f2c26-d5f7-4ee3-97bc-aa87786fa6b1.png',
}

const Image = (props) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default Image;
//text:Place your order//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '32px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '48px',
  },
};

const defaultProps = {
  text: 'Place your order',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//text:Complete your purchase. Sit back and enjoy the nostalgia!
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '20px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '30px',
  },
};

const defaultProps = {
  text: 'Complete your purchase. Sit back and enjoy the nostalgia!',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//grey bar//
import React from 'react';

const styles = {
  HorizontalDivider: {
    top: '1586px',
    left: '144px',
    width: '1152px',
    height: '2px',
    backgroundColor: '#323232',
    borderRadius: '2px',
  },
};

const HorizontalDivider = (props) => {
  return (
    <div style={styles.HorizontalDivider} />
  );
};

export default HorizontalDivider;
//text: Join Continue//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '32px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '48px',
  },
};

const defaultProps = {
  text: 'Join Continue',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//drop dxown arrow//
import React from 'react';

const styles = {
  Icon: {
    color: '#ffffff',
    fill: '#ffffff',
    fontSize: '24px',
    top: '1632px',
    left: '1273px',
    width: '24px',
    height: '31px',
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 448 512">
    <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

const Icon = (props) => {
  return (
    props.IconComponent 
      ? <props.IconComponent style={styles.Icon} /> 
      : <defaultProps.IconComponent />
  );
};

export default Icon;
//grey bar//
import React from 'react';

const styles = {
  HorizontalDivider: {
    top: '1700px',
    left: '144px',
    width: '1152px',
    height: '2px',
    backgroundColor: '#323232',
    borderRadius: '2px',
  },
};

const HorizontalDivider = (props) => {
  return (
    <div style={styles.HorizontalDivider} />
  );
};

export default HorizontalDivider;
//place holder image//
import React from 'react';

const styles = {
  ImageContainer: {
    top: '1726px',
    left: '296px',
    width: '360px',
    height: '360px',
    borderRadius: '24px',
    backgroundImage: 'url(./image.png)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/c97ee079-9d1e-4597-836c-e2e8f8904c70.png',
}

const Image = (props) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default Image;
//text:as a player//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '32px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '48px',
  },
};

const defaultProps = {
  text: 'As a player',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//tex:Earn rewards by buying and selling retro games. Dive into the world of classic gaming.//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '20px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '30px',
  },
};

const defaultProps = {
  text: 'Earn rewards by buying and selling retro games. Dive into the world of classic gaming.',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//play now button//
import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '1968px',
    left: '984px',
    width: '192px',
    height: '62px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#323232',
    color: '#ffffff',
    fontSize: '18px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 600,
    lineHeight: '28px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Play now',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;
//grey bar//
import React from 'react';

const styles = {
  HorizontalDivider: {
    top: '2110px',
    left: '144px',
    width: '1152px',
    height: '2px',
    backgroundColor: '#323232',
    borderRadius: '2px',
  },
};

const HorizontalDivider = (props) => {
  return (
    <div style={styles.HorizontalDivider} />
  );
};

export default HorizontalDivider;
//place holder image//
import React from 'react';

const styles = {
  ImageContainer: {
    top: '2136px',
    left: '296px',
    width: '360px',
    height: '360px',
    borderRadius: '24px',
    backgroundImage: 'url(./image.png)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/6522fd5b-dbb6-46c6-aa87-6693660465f2.png',
}

const Image = (props) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default Image;
//text: as a seller//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '32px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '48px',
  },
};

const defaultProps = {
  text: 'As a seller',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//text:List your retro games for sale and reach a wide audience of gaming enthusiasts.//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '20px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '30px',
  },
};

const defaultProps = {
  text: 'List your retro games for sale and reach a wide audience of gaming enthusiasts.',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//sell with us buttom//
import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '2378px',
    left: '984px',
    width: '222px',
    height: '62px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#323232',
    color: '#ffffff',
    fontSize: '18px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 600,
    lineHeight: '28px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Sell with us',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;
//grey bar//
import React from 'react';

const styles = {
  HorizontalDivider: {
    top: '2520px',
    left: '144px',
    width: '1152px',
    height: '2px',
    backgroundColor: '#323232',
    borderRadius: '2px',
  },
};

const HorizontalDivider = (props) => {
  return (
    <div style={styles.HorizontalDivider} />
  );
};

export default HorizontalDivider;
//place holder image//
import React from 'react';

const styles = {
  ImageContainer: {
    top: '2546px',
    left: '296px',
    width: '360px',
    height: '360px',
    borderRadius: '24px',
    backgroundImage: 'url(./image.png)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/0ace9234-b7d0-4b75-b6f5-69bfdc67c2b8.png',
}

const Image = (props) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default Image;
//text:As a team member//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '32px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '48px',
  },
};

const defaultProps = {
  text: 'As a team member',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//text:Join a community passionate about preserving gaming history.//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '20px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '30px',
  },
};

const defaultProps = {
  text: 'Join a community passionate about preserving gaming history.',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//join our team button//
import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '2788px',
    left: '984px',
    width: '212px',
    height: '62px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#323232',
    color: '#ffffff',
    fontSize: '18px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 600,
    lineHeight: '28px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Join our team',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;
//grey bar//
import React from 'react';

const styles = {
  HorizontalDivider: {
    top: '2930px',
    left: '144px',
    width: '1152px',
    height: '2px',
    backgroundColor: '#323232',
    borderRadius: '2px',
  },
};

const HorizontalDivider = (props) => {
  return (
    <div style={styles.HorizontalDivider} />
  );
};

export default HorizontalDivider;
//text:get our app now//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '32px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '48px',
  },
};

const defaultProps = {
  text: 'Get our app now',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//drop down arrow//
import React from 'react';

const styles = {
  Icon: {
    color: '#ffffff',
    fill: '#ffffff',
    fontSize: '24px',
    top: '2976px',
    left: '1273px',
    width: '24px',
    height: '24px',
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 448 512">
    <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

const Icon = (props) => {
  return (
    props.IconComponent 
      ? <props.IconComponent style={styles.Icon} /> 
      : <defaultProps.IconComponent />
  );
};

export default Icon;
//text: order with ease//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '32px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '48px',
  },
};

const defaultProps = {
  text: 'Order with ease!',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//text:Enjoy a blast from the past with Continue. Find your favorite retro games and consoles with our easy-to-use platform.//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '20px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '30px',
  },
};

const defaultProps = {
  text: 'Enjoy a blast from the past with Continue. Find your favorite retro games and consoles with our easy-to-use platform.',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//get app button//
import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '3326px',
    left: '144px',
    width: '177px',
    height: '62px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#323232',
    color: '#ffffff',
    fontSize: '18px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 600,
    lineHeight: '28px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Get app',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;
//place holder image//
import React from 'react';

const styles = {
  ImageContainer: {
    top: '3069px',
    left: '783px',
    width: '360px',
    height: '360px',
    borderRadius: '24px',
    backgroundImage: 'url(./image.png)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/c050fc14-d36a-4c4c-868b-f40492bf2ff9.png',
}

const Image = (props) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default Image;
//grey bar//
import React from 'react';

const styles = {
  HorizontalDivider: {
    top: '3453px',
    left: '144px',
    width: '1152px',
    height: '2px',
    backgroundColor: '#323232',
    borderRadius: '2px',
  },
};

const HorizontalDivider = (props) => {
  return (
    <div style={styles.HorizontalDivider} />
  );
};

export default HorizontalDivider;
//footer background//
import React from 'react';

const styles = {
  Footer: {
    top: '3694px',
    left: '1px',
    width: '1440px',
    height: '267px',
    backgroundColor: '#323232',
  },
};

const Footer = (props) => {
  return (
    <div style={styles.Footer}>
      {props.children}
    </div>
  );
};

export default Footer;
//text:Discover more retro treasures! Join our mailing list for exclusive offers!//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 600,
    lineHeight: '18px',
  },
};

const defaultProps = {
  text: 'Discover more retro treasures! Join our mailing list for exclusive offers!',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//enter your email//
import React from 'react';

const styles = {
  Input: {
    top: '3715px',
    left: '957px',
    width: '343px',
    height: '39px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    boxShadow: '2px 2px 4px rgba(255,255,255,0.1)',
    backgroundColor: '#323232',
    color: '#c0c0c0',
    fontSize: '14px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '19px',
    outline: 'none',
  },
};

const defaultProps = {
  text: ' Enter your email',
};

const InputField = (props) => {
  return (
    <input style={styles.Input} placeholder={props.text ?? defaultProps.text} />
  );
};

export default InputField;
//sign up button//
import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '3715px',
    left: '1310px',
    width: '82px',
    height: '39px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#000000',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '18px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Sign up',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;
//text:continue gaming//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '24px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '31px',
  },
};

const defaultProps = {
  text: ' Continue Gaming ',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//indeed logo//
import React from 'react';

const styles = {
  Icon: {
    color: '#ffffff',
    fill: '#ffffff',
    fontSize: '24px',
    top: '3853px',
    left: '48px',
    width: '24px',
    height: '24px',
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 448 512">
    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

const Icon = (props) => {
  return (
    props.IconComponent 
      ? <props.IconComponent style={styles.Icon} /> 
      : <defaultProps.IconComponent />
  );
};

export default Icon;
//twitter logo//
import React from 'react';

const styles = {
  Icon: {
    color: '#ffffff',
    fill: '#ffffff',
    fontSize: '24px',
    top: '3853px',
    left: '84px',
    width: '24px',
    height: '24px',
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 512 512">
    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

const Icon = (props) => {
  return (
    props.IconComponent 
      ? <props.IconComponent style={styles.Icon} /> 
      : <defaultProps.IconComponent />
  );
};

export default Icon;
//instagram logo//
import React from 'react';

const styles = {
  Icon: {
    color: '#ffffff',
    fill: '#ffffff',
    fontSize: '24px',
    top: '3853px',
    left: '120px',
    width: '24px',
    height: '24px',
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 512 512">
    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

const Icon = (props) => {
  return (
    props.IconComponent 
      ? <props.IconComponent style={styles.Icon} /> 
      : <defaultProps.IconComponent />
  );
};

export default Icon;
//text:help center//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '18px',
  },
};

const defaultProps = {
  text: 'Help Center',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//FAQ button*//
import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '3837px',
    left: '777px',
    width: '149px',
    height: '18px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#323232',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '18px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'FAQ',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;
//customer support button//
import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '3855px',
    left: '779px',
    width: '149px',
    height: '36px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#323232',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '18px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Customer Support',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;
//how to play button//
import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '3897px',
    left: '777px',
    width: '149px',
    height: '18px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#323232',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '18px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'How-to Play Guides',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;
//title faqs//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '18px',
  },
};

const defaultProps = {
  text: 'FAQs',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//privacy policy//
import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '3837px',
    left: '994px',
    width: '149px',
    height: '18px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#323232',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '18px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Privacy Policy',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;
//site map button//
import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '3863px',
    left: '977px',
    width: '149px',
    height: '21px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#323232',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '18px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Site Map',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;
//sub button//
import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '3894px',
    left: '994px',
    width: '149px',
    height: '18px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#323232',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Roboto',
    lineHeight: '20px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Subscriptions',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;
//text:contact us//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '18px',
  },
};

const defaultProps = {
  text: 'Contact Us',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//text: (phone number)//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '18px',
  },
};

const defaultProps = {
  text: '+123 456 7890',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//page 2//

//grey border//
import React from 'react';

const styles = {
  Header: {
    top: '0px',
    left: '0px',
    width: '1440px',
    height: '147px',
    backgroundColor: '#323232',
  },
};

const Header = (props) => {
  return (
    <div style={styles.Header}>
      {props.children}
    </div>
  );
};

export default Header;
//text: continue gaming//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '28px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '36px',
  },
};

const defaultProps = {
  text: '
        Continue Gaming
    ',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//search bar//
import React from 'react';

const styles = {
  Input: {
    top: '26px',
    left: '503px',
    width: '383px',
    height: '43px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    boxShadow: '2px 2px 4px rgba(255,255,255,0.1)',
    backgroundColor: '#323232',
    color: '#c0c0c0',
    fontSize: '14px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '19px',
    outline: 'none',
  },
};

const defaultProps = {
  text: ' Search retro games',
};

const InputField = (props) => {
  return (
    <input style={styles.Input} placeholder={props.text ?? defaultProps.text} />
  );
};

export default InputField;
//search button//
import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '26px',
    left: '894px',
    width: '43px',
    height: '43px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    color: '#ffffff',
    backgroundColor: '#000000',
    outline: 'none',
  },
  Icon: {
    color: '#ffffff',
    fill: '#ffffff',
    width: '14px',
    height: '14px',
    fontSize: '14px',
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path d="M0 0h24v24H0V0z" fill="none">
    </path>
    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

const IconButton = (props) => {
  return (
    <button style={styles.Button}>
      {
        props.IconComponent 
          ? <props.IconComponent style={styles.Icon} /> 
          : <defaultProps.IconComponent />
      }
    </button>
  );
};

export default IconButton;
//buy now button//
import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '20px',
    left: '1268px',
    width: '124px',
    height: '54px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#000000',
    color: '#ffffff',
    fontSize: '16px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 600,
    lineHeight: '21px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Buy now',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;
//home icon//
import React from 'react';

const styles = {
  Icon: {
    color: '#ffffff',
    fill: '#ffffff',
    fontSize: '20px',
    top: '111px',
    left: '48px',
    width: '20px',
    height: '20px',
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none">
    </path>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

const Icon = (props) => {
  return (
    props.IconComponent 
      ? <props.IconComponent style={styles.Icon} /> 
      : <defaultProps.IconComponent />
  );
};

export default Icon;
//text:home//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '18px',
    textAlign: 'center',
  },
};

const defaultProps = {
  text: 'Home',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//video game icon//
import React from 'react';

const styles = {
  Icon: {
    color: '#ffffff',
    fill: '#ffffff',
    fontSize: '20px',
    top: '111px',
    left: '176px',
    width: '20px',
    height: '20px',
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path d="M0 0v24h24V0H0zm23 16c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h18c1.1 0 2 .9 2 2v8z" fill="none">
    </path>
    <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

const Icon = (props) => {
  return (
    props.IconComponent 
      ? <props.IconComponent style={styles.Icon} /> 
      : <defaultProps.IconComponent />
  );
};

export default Icon;
// tex:games//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '18px',
  },
};

const defaultProps = {
  text: 'Games',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//drop down arrow//
import React from 'react';

const styles = {
  Icon: {
    color: '#ffffff',
    fill: '#ffffff',
    fontSize: '16px',
    top: '113px',
    left: '259px',
    width: '16px',
    height: '16px',
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none">
    </path>
    <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

const Icon = (props) => {
  return (
    props.IconComponent 
      ? <props.IconComponent style={styles.Icon} /> 
      : <defaultProps.IconComponent />
  );
};

export default Icon;
//console icon//
import React from 'react';

const styles = {
  Icon: {
    color: '#ffffff',
    fill: '#ffffff',
    fontSize: '20px',
    top: '111px',
    left: '308px',
    width: '20px',
    height: '20px',
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none">
    </path>
    <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

const Icon = (props) => {
  return (
    props.IconComponent 
      ? <props.IconComponent style={styles.Icon} /> 
      : <defaultProps.IconComponent />
  );
};

export default Icon;
//text:console//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '18px',
  },
};

const defaultProps = {
  text: 'Consoles',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//drop down arrow//
import React from 'react';

const styles = {
  Icon: {
    color: '#ffffff',
    fill: '#ffffff',
    fontSize: '16px',
    top: '113px',
    left: '393px',
    width: '16px',
    height: '16px',
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none">
    </path>
    <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

const Icon = (props) => {
  return (
    props.IconComponent 
      ? <props.IconComponent style={styles.Icon} /> 
      : <defaultProps.IconComponent />
  );
};

export default Icon;
//tag logo//
import React from 'react';

const styles = {
  Icon: {
    color: '#ffffff',
    fill: '#ffffff',
    fontSize: '20px',
    top: '111px',
    left: '1332px',
    width: '20px',
    height: '20px',
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none">
    </path>
    <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

const Icon = (props) => {
  return (
    props.IconComponent 
      ? <props.IconComponent style={styles.Icon} /> 
      : <defaultProps.IconComponent />
  );
};

export default Icon;
//text:discount//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '18px',
  },
};

const defaultProps = {
  text: 'Discount',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//search icon//
import React from 'react';

const styles = {
  Icon: {
    color: '#ffffff',
    fill: '#ffffff',
    fontSize: '20px',
    top: '179px',
    left: '48px',
    width: '20px',
    height: '20px',
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path d="M0 0h24v24H0V0z" fill="none">
    </path>
    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

const Icon = (props) => {
  return (
    props.IconComponent 
      ? <props.IconComponent style={styles.Icon} /> 
      : <defaultProps.IconComponent />
  );
};

export default Icon;
//text: Results for "customer input"//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '32px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '42px',
  },
};

const defaultProps = {
  text: 'Results for " ",
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//grey bar//
import React from 'react';

const styles = {
  HorizontalDivider: {
    top: '281px',
    left: '0px',
    width: '1440px',
    height: '1px',
    backgroundColor: '#323232',
    borderRadius: '2px',
  },
};

const HorizontalDivider = (props) => {
  return (
    <div style={styles.HorizontalDivider} />
  );
};

export default HorizontalDivider;
//text: game condition//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '16px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 700,
    lineHeight: '22px',
  },
};

const defaultProps = {
  text: 'Game condition',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
//drop down arrow//
import React from 'react';

const styles = {
  Icon: {
    color: '#ffffff',
    fill: '#ffffff',
    fontSize: '20px',
    top: '303px',
    left: '281px',
    width: '20px',
    height: '20px',
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none">
    </path>
    <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

const Icon = (props) => {
  return (
    props.IconComponent 
      ? <props.IconComponent style={styles.Icon} /> 
      : <defaultProps.IconComponent />
  );
};

export default Icon;
//check box//
import React from 'react';

const styles = {
  Container: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    width: '20px',
    height: '20px',
    pointerEvents: 'auto',
    color: 'rgba(22, 22, 22, 1)',
    backgroundColor: 'rgba(50, 50, 50, 1)',
    borderRadius: '5px',
    boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.08)',
    border: 0,
  },
  Check: {
    display: 'none',
    transition: 'left 0.3s ease',
    zIndex: 1,
  },
  Input: {
    position: 'absolute',
    opacity: 0,
    visibility: 'hidden',
    width: '1px',
    height: '1px',
    pointerEvents: 'none',
  },
};

const Checkbox = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  const onClick = () => {
    setIsChecked(!isChecked);
  }

  return (
    <div style={styles.Container} onClick={onClick}>
      <div style={{
        ...styles.Check,
        display: isChecked ? 'block' : 'none',
      }}>
        ✓
      </div>
      <input type="checkbox" style={styles.Input} />
    </div>
  );
};

export default Checkbox;
//text:new//
import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '16px',
    fontFamily: 'Source Sans Pro',
    lineHeight: '20px',
  },
};

const defaultProps = {
  text: 'New',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;