import { useState } from "react";
import "./App.css";
import ListsOfTable from "./components/listsOfTable";
import InputForm from "./components/InputForm";

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
      country: country,
      gold: Number(gold),
      silver: Number(silver),
      bronze: Number(bronze),
    };

    console.log(country);
    const listOfCountry = [];
    medalList.forEach((medal) => {
      listOfCountry.push(medal.country);
    });
    console.log(listOfCountry);
    listOfCountry.includes(country)
      ? alert(
          "이미 리스트에 존재하는 나라는 추가 할 수 없습니다. 업데이트를 눌러주세요."
        )
      : setMedalList([...medalList, newMedalList]);
    console.log("추가됨", medalList);

    setCountry("");
    setGold(0);
    setSilver(0);
    setBronze(0);
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
  const deleteListHandler = (countryToDelete) => {
    const deletedMedalList = medalList.filter((medal) => {
      console.log("삭제되야할 나라", countryToDelete);
      return medal.country !== countryToDelete;
    });
    console.log("삭제 후에 배열", deletedMedalList);
    setMedalList(deletedMedalList);
  };
  return (
    <>
      <header>
        <h1>2024 파리 올림픽</h1>
        <InputForm countryInput={countryInputChange} goldInput={goldInputChange} silverInput={silverInputChange} bronzeInput={bronzeInputChange} onSubmit={submitHandler}/>
      </header>
      <main>
        <table>
          {medalList.length === 0 ? (
            <thead>
              <tr>아직 추가된 국가가 없습니다. 메달을 추적하세요!</tr>
            </thead>
          ) : (
            <>
              <thead>
                <tr>
                  <th>나라</th>
                  <th>🥇 금메달</th>
                  <th>🥈 은메달</th>
                  <th>🥉 동메달</th>
                  <th>액션</th>
                </tr>
              </thead>
              <tbody>
                {medalList
                  .sort((a, b) => b.gold - a.gold)
                  .map((medal) => {
                    return (
                      <ListsOfTable
                        key={medal.country}
                        medal={medal}
                        deleteListHandler={deleteListHandler}
                      />
                    );
                  })}
              </tbody>
            </>
          )}
        </table>
      </main>
    </>
  );
}
export default App;
