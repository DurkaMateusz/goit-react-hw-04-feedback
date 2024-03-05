import PropTypes from 'prop-types';

export default function SectionTitle({ title})   {
  return <h2>{title}</h2>;  
}

SectionTitle.propTypes = {
  title: PropTypes.string,
};