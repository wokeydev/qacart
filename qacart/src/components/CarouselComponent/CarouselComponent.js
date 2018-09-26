import React, { Component } from 'react';
import ReactDom from 'react-dom';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption
} from 'reactstrap';

import './CarouselComponent.css';

const items = [];
const phoneItems = [];
const desktopItems = [];
var itemLength;

class CrouselComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeIndex: 0,
      winWidth: 1920,
      winHeight: 1080
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
    this.loadImageList = this.loadImageList.bind(this);
    this.updateDimesions = this.updateDimesions.bind(this);
  }

  loadImageList () {
    fetch('http://localhost:4000/api/images')
      .then(res => res.json())
      .then((result) => {
        result.map((image, index) => {
          phoneItems.push({
            src: image.phone_img,
            alt: image.alt_text,
            caption: ''
          });
          desktopItems.push({
            src: image.desktop_img,
            alt: image.alt_text,
            caption: ''
          });
        })
      })
  }

  updateDimesions() {
      this.setState({
          winHeight: window.innerHeight,
          winWidth: window.innerWidth,
      });
  }

  componentDidMount() {
    this.updateDimesions();
    this.loadImageList();
    window.addEventListener("resize", this.updateDimesions);
  }

  componentWillMount() {
      window.removeEventListener("resize", this.updateDimesions);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  scrollTo  (e) {
    e.preventDefault();
    const domNode = ReactDom.findDOMNode(this.props.domRef.current);

    window.scrollTo({
      top: domNode.offsetTop,
      behavior: "smooth"
    });

  }

  render() {
    const { activeIndex } = this.state;
    this.length = this.state.winWidth > 768 ? desktopItems.length : phoneItems.length;

    const slides = this.state.winWidth < 768 ? (
      phoneItems.map((item) => {
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.src}>
            <img src={item.src} alt={item.alt} />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      })
    ) : (
      desktopItems.map((item) => {
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.src}>
            <img src={item.src} alt={item.alt} />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      })
    )  
    return (
      <div className="carousel-section">
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
        <div className="btn-scroll">
            <a href="#banner-section" onClick={this.scrollTo}><span></span><span></span><span></span></a>
        </div>
      </div>
    );
  }
}


export default CrouselComponent;