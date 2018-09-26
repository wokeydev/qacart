import React from 'react';
import ReactScrollToElement from 'react-scroll-to-element';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselCaption
  } from 'reactstrap';

import './ClientsComponent.css';

export default class ClientsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            activeIndex: 0,
            winWidth: 1920,
            winHeight: 1080,
            aspecratio: 1.7777778,
            clients: []
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    updateDimensions() {
        this.setState({
            winHeight: window.innerHeight,
            winWidth: window.innerWidth,
            aspecratio: window.innerWidth / window.innerHeight
        });
    }
    
    componentDidMount() {
        fetch('http://localhost:4000/api/clients')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    clients: [...this.state.clients, ...result]
                })
            })   
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }
    
    componentWillMount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.state.clients.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.state.clients.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }
    
    render() {
        const { activeIndex } = this.state;

        const slides = this.state.clients.map((item) => {
          return (
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}>
              <a href="#"><img src={item.icon_img} alt={item.name} /></a>
              <CarouselCaption captionText={item.name} captionHeader={item.name} />
            </CarouselItem>
          );
        });

        let component;
        if (this.state.winWidth > 0) {
            component = (

                        <div className="client-icons">
                            <div className="row icon-row">
                                {
                                    this.state.clients.map((item, index) => {
                                        return (
                                            <div className="col-md-3 col-xs-5 icon">
                                                <img src={item.icon_img} alt={item.name} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
            )
        } else {
            component = (
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}>
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            )
        }
        return(
            <div className="container-fluid clients-div">
                <div className="clients-title">
                    <h1>We've Been Honored to Work with Great Clients</h1>
                </div>
                {component}
                <ReactScrollToElement type="class" element="office-div">
                    <div className="btn-scroll">
                        <a href="#banner-section"><span></span><span></span><span></span></a>
                    </div>
                </ReactScrollToElement>
            </div>
        );
    }
}