// Write your code here.

import {Component} from 'react'

import FaqItem from '../FaqItem/index'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    console.log(faqsList)
    return (
      <div className="bg">
        <div className="innerBg">
          <h1 className="heading">FAQs</h1>
          <ul className="ulContainer">
            {faqsList.map(eachObject => (
              <FaqItem eachObject={eachObject} key={eachObject.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
