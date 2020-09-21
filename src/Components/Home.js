import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Radio} from 'antd';
const Home = ({ Questions }) => {
  const [index, setIndex] = useState(0);
  const [arrRandom, setRandomArr] = useState([]);
  const [value, setValue] = useState(1)
  const [grad, setGrad] = useState(0)
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };
  let displayedQuestion = Questions[index];

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(
       e.target.value);
       console.log("valuestate", value)
  
  };

  useEffect(() => {
    let array = [];
    for (let j = 0; j < Questions.length; j++) {
      array.push(j);
    }
    array.sort(() => Math.random() - 0.5);
    setRandomArr(array);
  }, []);

  const handleNext = (e) => {
    if( value === Questions[arrRandom[index]].rightAnswer){
      
      setGrad(grad => grad +2)
      console.log("ur right",value)
    }else{
      setGrad(grad )
      console.log("ur not right",value)

    }
    console.log("grad",grad)
    console.log(Questions[index].rightAnswer)

    if (index < Questions.length - 1) {
      setIndex(index + 1);
    } else {
      alert("Thank You" + "  ur Gard is" + grad);
    }
  };

  const question =
    arrRandom.length == 0 ? null : (
      <div>
        <span>
          {Questions[arrRandom[index]].id}-
          {Questions[arrRandom[index]].question}
        </span>   
      <Radio.Group onChange={onChange} value={value}>
        <Radio style={radioStyle} value={1}>
        {Questions[arrRandom[index]].answer1}
        </Radio>
        <Radio style={radioStyle} value={2}>
        {Questions[arrRandom[index]].answer2}
        </Radio>
        <Radio style={radioStyle} value={3}>
        {Questions[arrRandom[index]].answer3}
        </Radio>
      </Radio.Group>

        <button onClick={handleNext}>next</button>
      </div>
    );
  return (
    <div>
      <p> New exams </p>
      <h1>displayedQuestion</h1>
      {question}
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  const Questions = state.Questions;
  return {
    Questions: Questions,
  };
};

export default connect(mapStateToProps)(Home);
