import React, { useState } from 'react'
import { connect } from 'react-redux'

function AnswerCard(props) {

    const { answer, index } = props;
    const optionNum = ['A', 'B', 'C', 'D']
    const num = parseInt(answer['answer'])
    const [optionClass, setOptionClass] = useState(['option', 'option', 'option', 'option'])
    const [isChoose, setIsChoose] = useState(false)
    const selectOption = (answer, index) => {
        if (isChoose) {
          return
        }
        if (index + 1 === num) {
            optionClass.forEach((item, index, arr) => {
                arr[index] = 'option'
            })
            optionClass[index] = 'option correct';
            setOptionClass([...optionClass])
            setIsChoose(true)
            props.addScore(10)
        } else {
            optionClass.forEach((item, index, arr) => {
                arr[index] = 'option'
            })
            // optionClass[num-1]='option correct'
            optionClass[index] = 'option error'
            setOptionClass([...optionClass])
            setIsChoose(true)
            props.addScore(0)
        }
    }
    return (
        <div className="box">
      <h2 className="question">{answer.id}. {answer.question}{' '+ optionNum[num-1]}</h2>
            {
              answer.option.map((o,index)=>{
                return (
                  <p 
                    key={index} 
                    className={optionClass[index]}
                    onClick={()=>{selectOption(answer,index)}}>
                    {optionNum[index]+'. '+o}
                  </p>
                )
              })
            }
    </div>
    )
}
export default connect(res => res)(AnswerCard)