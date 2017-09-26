/* eslint-disable class-methods-use-this, no-console */

import React from 'react';
import InputRange from '../../src/js';

export default class ExampleApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 5,
      value2: 10,
      value3: 10,
      value4: {
        min: 5,
        max: 10,
      },
      value5: {
        min: 3,
        max: 7,
      },

      // this will be clamped to the upper step (12)
      value6: 7,

      // this will be clamped to the upper step (11)
      value7: 11,

      value8: {
        min: 2,
        max: 7,
      },

      value9: 0,
    };
  }

  render() {
    return (
      <form className="form">
        <InputRange
          maxValue={20}
          minValue={0}
          value={this.state.value}
          onChange={value => this.setState({ value })}
          onChangeComplete={value => console.log(value)} />

        <InputRange
          maxValue={20}
          minValue={0}
          disabled
          value={this.state.value2}
          onChange={value => this.setState({ value })}
          onChangeComplete={value => console.log(value)} />

        <InputRange
          maxValue={20}
          minValue={0}
          formatLabel={value => value.toFixed(2)}
          value={this.state.value3}
          onChange={value => this.setState({ value3: value })}
          onChangeStart={value => console.log('onChangeStart with value =', value)}
          onChangeComplete={value => console.log(value)} />

        <InputRange
          maxValue={20}
          minValue={0}
          formatLabel={value => `${value}kg`}
          value={this.state.value4}
          onChange={value => this.setState({ value4: value })}
          onChangeComplete={value => console.log(value)} />

        <InputRange
          draggableTrack
          maxValue={20}
          minValue={0}
          onChange={value => this.setState({ value5: value })}
          onChangeComplete={value => console.log(value)}
          value={this.state.value5} />

        <InputRange
          maxValue={20}
          minValue={0}
          step={6}
          value={this.state.value6}
          onChange={value => this.setState({ value6: value })}
          onChangeComplete={value => console.log(value)} />

        <InputRange
          maxValue={20}
          minValue={5}
          step={6}
          value={this.state.value7}
          onChange={value => this.setState({ value7: value })}
          onChangeComplete={value => console.log(value)} />

        <InputRange
          draggableTrack
          maxValue={20}
          minValue={1}
          step={3}
          value={this.state.value8}
          onChange={value => this.setState({ value8: value })}
          onChangeComplete={value => console.log(value)} />

        <InputRange
          inset
          maxValue={200}
          minValue={0}
          value={this.state.value9}
          formatLabel={value => `${value} minutes`}
          onChange={value => this.setState({ value9: value })}
          onChangeComplete={value => console.log(value)} />

        <InputRange
          maxValue={200}
          minValue={0}
          value={this.state.value9}
          formatLabel={value => `${value} minutes`}
          onChange={value => this.setState({ value9: value })}
          onChangeComplete={value => console.log(value)} />
      </form>
    );
  }
}
