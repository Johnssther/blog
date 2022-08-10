import React, { useState } from 'react'
import Testimonial from './Testimonial'
import { Itestimonial } from './interface'
import testimonialsdata from '../__mocs/testimonials'

const App: React.FunctionComponent = () => {
    const [testimonials] = useState<Itestimonial[]>(testimonialsdata)
    return (
        <div className="testimonials">
            {
                testimonials.map((testimonial: Itestimonial, index: number) => {
                    return (
                        <Testimonial
                            key={index}
                            testimonial={testimonial}
                        />
                    );
                })
            }
        </div>
    )
}
export default App