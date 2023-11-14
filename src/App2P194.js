import './App.css';
import React, {useState, useEffect} from 'react';

const useAnyKeyToRender = () => {
  const [_, forceRender] = useState();

  useEffect(()=>{
    window.addEventListener("keydown", forceRender);
    console.log(`AnyKeyToRender `);
    return () => window.removeEventListener("keydown", forceRender);
  }, []);

};

function App() {
  //App가 랜더링될때... 
  useAnyKeyToRender();
  //기본형 변수의 동등 비교는 같다. 변화가 없기에 효과 발생 안됨.
  const word = "bkujjgh";
  //참조 객체가 다시 만들어 질 경우 주소가 다르니 변화되었다고 인식한다. 효과 발생함.
  const words = ["bkujjgh", "ujhgv"];
  useEffect(()=>{
    //PWD 대 소 특 숫자 8글자 이상. 패턴 매칭..
    console.log(`refresh render`);
    //console.log(useAnyKeyToRender);
  }, [words]);
  return (
    <div className="App">
      Favorite phrase
    </div>
  );
}

export default App;
