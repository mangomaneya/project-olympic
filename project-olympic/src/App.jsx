import { useState } from "react";
import "./App.css";

function App() {
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  const [medalList, setMedalList] = useState([
    // { id:country, gold : gold, silver : silver, bronze : bronze }
  ]);

  const submitHandler = (e) => {
    e.preventDefault(); //새로고침 막기

    const newMedalList = {
      id: new Date().getTime(),
      country: country,
      gold: Number(gold),
      silver: Number(silver),
      bronze: Number(bronze),
    };
    
    setMedalList([...medalList, newMedalList]);
    console.log("추가됨",medalList);
  };
  const countryInputChange = (e) => {
    setCountry(e.target.value);
  };
  const goldInputChange = (e) => {
    setGold(e.target.value);
  };
  const silverInputChange = (e) => {
    setSilver(e.target.value);
  };
  const bronzeInputChange = (e) => {
    setBronze(e.target.value);
  };


  // const updateMedalListHandler = () => {};
  const deleteListHandler = (countryToDelete)=>{
    const deletedMedalList = medalList.filter((medal)=>{
      console.log("삭제되야할 나라",countryToDelete);
      return medal.country !== countryToDelete;
    })
    console.log("삭제 후에 배열",deletedMedalList);
    setMedalList(deletedMedalList);
  }; 
  return (
    <>
      <header>
        <h1>2024 파리 올림픽</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={country}
            onChange={countryInputChange}
            name="country"
            placeholder="국가를 입력해주세요"
            required
          />
          <input
            type="number"
            value={gold}
            onChange={goldInputChange}
            name="gold"
            placeholder="0"
            required
          />
          <input
            type="number"
            value={silver}
            onChange={silverInputChange}
            name="silver"
            placeholder="0"
            required
          />
          <input
            type="number"
            value={bronze}
            onChange={bronzeInputChange}
            name="bronze"
            placeholder="0"
            required
          />

          <button type="submit">
            국가추가
          </button>
          <button type="submit">
            업데이트
          </button>
        </form>
      </header>
      <main>
        <ul>
          { 
            medalList.length === 0 ?
              <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>:
            medalList.map((medal)=>{ 
              const{ id, country, gold, silver, bronze } = medal;
              return <li key={id}>
                    <div className="medalListStyle">{country}</div>
                    <div className="medalListStyle">{gold}</div>
                    <div className="medalListStyle">{silver}</div>
                    <div className="medalListStyle">{bronze}</div>
                    <button onClick={()=>deleteListHandler(country)}>삭제</button> 
                    </li>
            })
          }
          
        </ul>
      </main>
    </>
  );
}
// const MedalList = (medal) => {
  
//   const{ country, gold, silver, bronze } = medal;
//   return (
//     <li>
//       <div className="medalListStyle">{country}</div>
//       <div className="medalListStyle">{gold}</div>
//       <div className="medalListStyle">{silver}</div>
//       <div className="medalListStyle">{bronze}</div>
//     </li>
//   );
// };

export default App;
