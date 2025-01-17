

"use client"
import React from "react";
import './ImageFade.css';
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Image from "next/image";

class ImageFade extends React.Component {
  state = {
    index: 0,
    imageHeight: 760
  };

  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  imageRef = React.createRef();

  componentDidMount() {

    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        index: (prevState.index + 1) % this.props.images.length,
      }));
    }, 4000);

    const imageElement = this.imageRef.current;
    imageElement.onload = () => {
      const fragment = window.location.hash;

      if (fragment) {
        const element = document.getElementById(fragment.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      
      const height = imageElement.offsetHeight;

      if(height===0) {
        this.setState({ imageHeight: 760 });
      } else {
        this.setState({ imageHeight: height });
      }
    };
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { images } = this.props;
    const { index, imageHeight } = this.state;

    return (
      <div className="image-container w-full" style={{ height: `${imageHeight}px` }}>
        <TransitionGroup>
          <CSSTransition key={index} timeout={1000} classNames="fade">
            <Image
              width={100}
              height={100}
              unoptimized
              ref={this.imageRef}
              src={images[index]}
              alt=""
              className="image w-full"
            />
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

ImageFade.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ImageFade;