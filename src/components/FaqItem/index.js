// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isPlus: true}

  plusOrMinusClicked = () => {
    this.setState(prevState => ({
      isPlus: !prevState.isPlus,
    }))
  }

  render() {
    const {isPlus} = this.state
    const {eachObject} = this.props
    const {questionText, answerText} = eachObject
    const imageDetails = isPlus
      ? {
          url:
            'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png',
          alt: 'plus',
        }
      : {
          url:
            'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png',
          alt: 'minus',
        }
    const {url, alt} = imageDetails

    const renderAnswer = () => {
      if (!isPlus) {
        return (
          <>
            <hr />
            <p className="answerText">{answerText}</p>
          </>
        )
      }
      return null
    }

    return (
      <li className="liContainer">
        <div className="questionContainer">
          <h1 className="questionPara">{questionText}</h1>
          <button
            type="button"
            className="btnPlusOrMinus"
            onClick={this.plusOrMinusClicked}
          >
            <img src={url} alt={alt} />
          </button>
        </div>

        {renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
