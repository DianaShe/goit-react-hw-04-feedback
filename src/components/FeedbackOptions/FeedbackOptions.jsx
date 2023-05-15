import PropTypes from 'prop-types';
import css from './FeedbackOption.module.css';

export default function FeedbackOptions({options, onLeaveFeedback}) {
  return (options.map(option => (
    <button
      className={css.button}
      type="button"
      key={option}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  )))
}

FeedbackOptions.propTypes ={
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}