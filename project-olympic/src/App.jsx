import { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import Table from "./components/Table";
import Title from "./components/Title";

function App() {
  // const [country, setCountry] = useState("");
  // const [gold, setGold] = useState(0);
  // const [silver, setSilver] = useState(0);
  // const [bronze, setBronze] = useState(0);
  const [medalList, setMedalList] = useState([
    // { country:country, gold : gold, silver : silver, bronze : bronze }
  ]);
  const [inputData, setInputData] = useState({
    country: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });

  //인풋 state
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: name === "country" ? value : Number(value),
    }));
  };

  //메달 집계 생성(create)
  const submitHandler = (e) => {
    e.preventDefault(); //새로고침 막기
    // console.log(e.target);
    const newMedalList = {
      country: inputData.country.trim(),
      gold: Number(inputData.gold),
      silver: Number(inputData.silver),
      bronze: Number(inputData.bronze),
    };
    if (!inputData.country.trim()) {
      alert("국가명을 올바르게 입력해주세요");
      return;
    }
    const listOfCountry = medalList.map((medal) => medal.country);
    // console.log(listOfCountry);
    if (listOfCountry.includes(inputData.country)) {
      alert(
        "이미 리스트에 존재하는 국가는 추가 할 수 없습니다. 업데이트를 눌러주세요."
      );
      return;
    } else {
      setMedalList([...medalList, newMedalList]);
    }

    console.log("추가됨", medalList);

    setInputData({
      country: "",
      gold: 0,
      silver: 0,
      bronze: 0,
    });
  };

  // 메달 집계업데이트
  const updateMedalListHandler = (e) => {
    e.preventDefault;
    const listOfCountry = medalList.map((medal) => medal.country);
    console.log(listOfCountry);
    if (listOfCountry.includes(inputData.country)) {
      const updatedList = medalList.map((medal) => {
        return medal.country === inputData.country ? inputData : medal;
      });
      setMedalList(updatedList);

      setInputData({
        country: "",
        gold: 0,
        silver: 0,
        bronze: 0,
      });
    } else if (!inputData.country.trim()) {
      alert("국가를 입력해야 업데이트 할 수 있습니다. 국가명을 입력해 주세요");
    } else {
      alert(
        "리스트에 존재하는 국가만 추가 할 수 있습니다. 국가명을 확인해 주세요."
      );
      return;
    }
  };

  // 메달집계 삭제기능
  const deleteListHandler = (countryToDelete) => {
    const deletedMedalList = medalList.filter((medal) => {
      console.log("삭제되야할 나라", countryToDelete);
      return medal.country !== countryToDelete;
    });
    console.log("삭제 후에 배열", deletedMedalList);
    setMedalList(deletedMedalList);
  };

  const [ sortBy, setSortBy ] = useState("sortByGold");
  const checkSortByHandler = (e)=>{
    setSortBy(e.target.value);
    console.log(sortBy);
  }

  const sortedMedalList = [...medalList].sort((a, b) => {
    if (sortBy === "sortByGold") {
      return b.gold - a.gold; // 금메달 순 정렬
    } else if (sortBy === "sortByMedalCount") {
      const totalA = a.gold + a.silver + a.bronze;
      const totalB = b.gold + b.silver + b.bronze;
      return totalB - totalA; // 메달 총합 순 정렬
    }
    return 0;
  });

  return (
    <>
      <header>
        <Title text="2024 파리 올림픽" isIng={false}></Title>
        <InputForm
          inputChangeHandler={inputChangeHandler}
          updateMedalListHandler={updateMedalListHandler}
          onSubmit={submitHandler}
          inputData={inputData}
        />
      </header>
      <main>
        <fieldset style={{ border: "none", width: "fit-content" }}>
          {/* <legend>정렬</legend> */}
          <p style={{ display: "inline", fontWeight: "800" }}> 정렬 : </p>
          <div style={{ display: "inline" }}>
            <input type="radio" value="sortByGold" id="sortByGold" onChange={checkSortByHandler} checked={sortBy === "sortByGold"}/>
            <label htmlFor="sortByGold">금메달 순 </label>
          </div>
          <div style={{ display: "inline" }}>
            <input type="radio" value="sortByMedalCount" id="sortByMedalCount" onChange={checkSortByHandler} checked={sortBy ==="sortByMedalCount"}/>
            <label htmlFor="sortByMedalCount">메달 총계 순</label>
          </div>
        </fieldset>
        {/* 메달 집계 리스트 출력 */}
        <Table
          deleteListHandler={deleteListHandler}
          medalList={sortedMedalList}
        ></Table>
      </main>
    </>
  );
}
export default App;
