import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import Label from './label';

/**
 * @ignore
 */
export default class Slider extends React.Component {
  /**
   * Accepted propTypes of Slider
   * @override
   * @return {Object}
   * @property {Function} ariaLabelledby
   * @property {Function} ariaControls
   * @property {Function} className
   * @property {Function} formatLabel
   * @property {Function} maxValue
   * @property {Function} minValue
   * @property {Function} onSliderDrag
   * @property {Function} onSliderKeyDown
   * @property {Function} percentage
   * @property {Function} type
   * @property {Function} value
   */
  static get propTypes() {
    return {
      ariaLabelledby: PropTypes.string,
      ariaControls: PropTypes.string,
      classNames: PropTypes.objectOf(PropTypes.string).isRequired,
      formatLabel: PropTypes.func,
      maxValue: PropTypes.number,
      minValue: PropTypes.number,
      onSliderKeyDown: PropTypes.func.isRequired,
      onDragStart: PropTypes.func.isRequired,
      percentage: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      inset: PropTypes.bool,
      disabled: PropTypes.bool,
    };
  }

  /**
   * @param {Object} props
   * @param {string} [props.ariaLabelledby]
   * @param {string} [props.ariaControls]
   * @param {InputRangeClassNames} props.classNames
   * @param {Function} [props.formatLabel]
   * @param {number} [props.maxValue]
   * @param {number} [props.minValue]
   * @param {Function} props.onSliderKeyDown
   * @param {Function} props.onDragStart
   * @param {number} props.percentage
   * @param {number} props.type
   * @param {number} props.value
   */
  constructor(props) {
    super(props);

    /**
     * @private
     * @type {?Component}
     */
    this.node = null;
  }

  /**
   * @private
   * @return {Object}
   */
  getStyle() {
    const perc = (this.props.percentage || 0) * 100;
    const style = {
      position: 'absolute',
      left: `${perc}%`,
    };

    return style;
  }

  /**
   * @private
   * @param {SyntheticEvent} event
   * @return {void}
   */
  @autobind
  handleKeyDown(event) {
    this.props.onSliderKeyDown(event, this.props.type);
  }

  /**
   * @override
   * @return {JSX.Element}
   */
  render() {
    const style = this.getStyle();

    return (
      <span
        className={this.props.classNames.sliderContainer}
        ref={(node) => { this.node = node; }}
        style={style}>
        <Label
          inset={this.props.inset}
          classNames={this.props.classNames}
          formatLabel={this.props.formatLabel}
          type="value">
          {this.props.value}
        </Label>

        <div
          aria-labelledby={this.props.ariaLabelledby}
          aria-controls={this.props.ariaControls}
          aria-valuemax={this.props.maxValue}
          aria-valuemin={this.props.minValue}
          aria-valuenow={this.props.value}
          className={this.props.classNames.slider}
          draggable="false"
          onKeyDown={this.handleKeyDown}
          onMouseDown={this.props.onDragStart}
          onTouchStart={this.props.onDragStart}
          role="slider"
          tabIndex={this.props.disabled ? '-1' : '0'} />
      </span>
    );
  }
}
