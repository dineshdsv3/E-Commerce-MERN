import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ rating, text, color }) => {
	return (
		<div className="rating my-3">
			<span>
				<i
					style={{ color: color }}
					className={rating >= 1 ? 'fas fa-star' : rating >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'}
				></i>
			</span>
			<span>
				<i
					style={{ color: color }}
					className={rating >= 2 ? 'fas fa-star' : rating >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'}
				></i>
			</span>
			<span>
				<i
					style={{ color: color }}
					className={rating >= 3 ? 'fas fa-star' : rating >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'}
				></i>
			</span>
			<span>
				<i
					style={{ color: color }}
					className={rating >= 4 ? 'fas fa-star' : rating >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'}
				></i>
			</span>
			<span>
				<i
					style={{ color: color }}
					className={rating >= 5 ? 'fas fa-star' : rating >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'}
				></i>
			</span>
			<span>
				<small>{text && text}</small>
			</span>
		</div>
	);
};

Rating.defaultProps = {
	color: '#f8e825',
};

Rating.propTypes = {
	rating: PropTypes.number,
	text: PropTypes.string.isRequired,
	color: PropTypes.string,
};

export default Rating;
