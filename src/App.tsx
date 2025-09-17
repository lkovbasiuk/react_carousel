import React from 'react';
import './App.scss';
import Carousel from './components/Carousel';

interface State {
  images: string[];
}

class App extends React.Component<{}, State> {
  state = {
    images: [
      './img/1.png',
      './img/2.png',
      './img/3.png',
      './img/4.png',
      './img/5.png',
      './img/6.png',
      './img/7.png',
      './img/8.png',
      './img/9.png',
      './img/10.png',
    ],
    step: 3,
    frameSize: 3,
    itemWidth: 130,
    animationDuration: 1000,
    infinite: false,
  };

  render() {
    const { images, step, frameSize, itemWidth, animationDuration, infinite } =
      this.state;

    return (
      <div className="App">
        {/* eslint-disable-next-line */}
        <h1 data-cy="title">Carousel with {images.length} images</h1>

        <label>
          Step:
          <input
            type="number"
            value={step}
            onChange={e => this.setState({ step: +e.target.value })}
          />
        </label>

        <label>
          Frame Size:
          <input
            type="number"
            value={frameSize}
            onChange={e => this.setState({ frameSize: +e.target.value })}
          />
        </label>

        <label>
          Item Width:
          <input
            type="number"
            value={itemWidth}
            onChange={e => this.setState({ itemWidth: +e.target.value })}
          />
        </label>

        <label>
          Animation Duration:
          <input
            type="number"
            value={animationDuration}
            onChange={e =>
              this.setState({ animationDuration: +e.target.value })
            }
          />
        </label>

        <label>
          Infinite:
          <input
            type="checkbox"
            checked={infinite}
            onChange={e => this.setState({ infinite: e.target.checked })}
          />
        </label>

        <Carousel
          images={images}
          step={step}
          frameSize={frameSize}
          itemWidth={itemWidth}
          animationDuration={animationDuration}
          infinite={infinite}
        />
      </div>
    );
  }
}

export default App;
