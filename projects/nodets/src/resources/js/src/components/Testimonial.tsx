import React from 'react';
import { Itestimonial } from './interface'
import { maritalStatusOptions } from '../utils';

const Testimonial: React.FunctionComponent<{ testimonial: Itestimonial }> = (props) => {
    const { testimonial } = props;
    return (
        <div className="testimonials__item">
            <img className="testimonials__item_img" src={testimonial.url} alt={testimonial.name}></img>
            <p>{maritalStatusOptions(testimonial.maritalStatus)}</p>
            {
                maritalStatusOptions(testimonial.maritalStatus) === '-' ? <div className='testimonials__item_disable'></div> : null
            }

        </div>
    );
};

export default Testimonial;
