import './App.css';
import React, {useState, useEffect, useMemo} from 'react';

const useAnyKeyToRender = () => {
  const [_, forceRender] = useState();

  useEffect(()=>{
    window.addEventListener("keydown", forceRender);
    console.log(`AnyKeyToRender `);
    return () => window.removeEventListener("keydown", forceRender);
  }, []);

};

function WordCount ({children = ""}) {
  //랜더링 강제화
  useAnyKeyToRender();
  const words = useMemo(()=>{
    console.log(`children.split 재 계산 `);

    return children.split(" ");
  }, []);

  useEffect(()=>{
    //반복적으로 구동되는 군!!! 노리는 효과가 아님...
    console.log(`refresh render`);
  }, [words]);
  
  return (
    <>
      <p>children</p>
      <p><strong>{words.length} : 단어들</strong></p>
    </>
  );

}
//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
async function requestGithubUser(loginId) {
  try {
    const response = await fetch(`https://api.github.com/users/${loginId}`);
    const userData = await response.json();
    console.log(userData);
  } catch (err) {
    console.error(err);
  }
}

function App() {
  requestGithubUser("ivarbae");
  return (
    <WordCount>
      Favorite phrase
    </WordCount>
  );
}
//기억해 놓은. cache. 성능향상.
export default App;
