import React from 'react';
import PropTypes from 'prop-types';


const Section = ({children, title}) => {
    return(
        <section>
            <h1>{title}</h1>

            {children}
        </section>
    );
}

export default Section; 

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}