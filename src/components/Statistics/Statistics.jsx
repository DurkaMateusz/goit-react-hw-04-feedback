import PropTypes from 'prop-types';

export default function Statistics({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) 

{
return (       
            <div>
                <h3>Statistics</h3>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total Opinions: {total}</p>
                <p>Positive Feedback Percentage: {positivePercentage}%</p>
            </div> 
);
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  };