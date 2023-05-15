import PropTypes from 'prop-types';
import css from './Section.module.css';

export default function Section ({title, children}) {
  return (
    <section className={css.container}>
        <h2>{title}</h2>
        {children}
    </section>
  )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
}