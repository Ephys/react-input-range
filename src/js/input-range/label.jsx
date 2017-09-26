import React from 'react';
import PropTypes from 'prop-types';
import bind from 'autobind-decorator';

/**
 * @ignore
 * @param {Object} props
 * @param {InputRangeClassNames} props.classNames
 * @param {Function} props.formatLabel
 * @param {string} props.type
 */
export default class Label extends React.Component {

  getLabelOffset() {
    if (!this.props.inset) {
      return '';
    }

    if (!this.state || !this.state.label || this.props.type !== 'value') {
      return '';
    }

    const label = this.state.label;
    const labelContainer = label.parentNode;
    const slider = labelContainer.parentNode;

    const labelWidth = label.offsetWidth;

    // ignore padding on this one.
    const containerWidth = slider.clientWidth;

    const labelPosStart = ((Number.parseInt(labelContainer.style.left, 10) / 100) * containerWidth) - (labelWidth / 2);
    const labelPosEnd = labelPosStart + labelWidth;

    const endOverflow = -Math.max(0, labelPosEnd - containerWidth);
    const startOverflow = -Math.min(0, labelPosStart);

    return `translateX(calc(-50% + ${endOverflow + startOverflow}px))`;
  }

  getClassName() {
    return `${this.props.classNames.label} ${this.props.classNames[`${this.props.type}Label`]}`;
  }

  @bind
  bindLabel(label) {
    this.setState({ label });
  }

  render() {
    const labelValue = this.props.formatLabel ? this.props.formatLabel(this.props.children, this.props.type) : this.props.children;

    return (
      <span
        className={this.getClassName()}
        ref={this.bindLabel}
        style={{
          transform: this.getLabelOffset(),
        }}>
        {labelValue}
      </span>
    );
  }
}

/**
 * @type {Object}
 * @property {Function} children
 * @property {Function} classNames
 * @property {Function} formatLabel
 * @property {Function} type
 */
Label.propTypes = {
  inset: PropTypes.bool,
  children: PropTypes.node.isRequired,
  classNames: PropTypes.objectOf(PropTypes.string).isRequired,
  formatLabel: PropTypes.func,
  type: PropTypes.string.isRequired,
};
