import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', 'borderTop': '1px solid #0ccac4', 'marginTop': '30px', 'paddingTop': '30px', height: '700px'}}>
			{props.children}
		</div>)
};

export default Scroll;