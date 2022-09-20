import React from 'react'
import Section from './section.jsx'
import { Data } from './mock/mock.jsx'

class Root extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            datacha: Data,
            sum: 0,
        }
    }
    render() {
        return (
            <div className='Wrapper'>
                {this.state.datacha.map((value, index) => (
                    <div>
                        <Section img={value.img} title={value.title} price={value.price} quantity={value.quantity} />
                    </div>
                ))}
                <div className='resDiv'>
                    <h1>{typeof this.state.price}</h1>
                </div>
            </div>
        )
    }
}
export default Root;




