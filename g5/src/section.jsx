import React from 'react'
import './section.css'

class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
    }
    dec() {
        this.setState({ count: this.state.count + 1 });
    }
    inc() {
        this.setState({ count: this.state.count - 1 })
    }
    render() {
        return (
            <div>
                <div className='sectionDiv' >
                    <img src={this.props.img} alt="" />
                    <h1>{this.props.title}</h1>
                    <h1>{this.props.price}$</h1>
                    <div className={'buttonWrap'}>
                        <button onClick={this.dec}>+</button>
                        {<h1>{this.state.count}</h1>}
                        {this.state.count > 0 ? <button onClick={this.inc}>-</button> : <button onClick={this.inc} disabled>-</button>}
                    </div>
                    {this.state.count > 0 && this.state.count ? <h1>{this.props.price * this.state.count}$</h1> : <h1>0$</h1>}
                </div>
            </div>
        )
    }
}
export default Section;




