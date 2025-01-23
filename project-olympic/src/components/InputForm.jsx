import Button from "./Button";
import Input from "./Input";

const InputForm = ({
  onSubmit,
  inputData,
  inputChangeHandler,
  updateMedalListHandler,
}) => {
  const styleFlexColumn = {
    display: "flex",
    flexDirection : "column",
    alignItems: "center",
    gap: "4px",
  };
  const styleFlexRow_alignItems_flexEnd = {
    display :"flex",
    flexDirection:"row",
    alignItems : "flex-end"
  }
  return (
    <form onSubmit={onSubmit} style={styleFlexRow_alignItems_flexEnd}>
      
      <Input value={inputData.country} onChange={inputChangeHandler} type="text" name="country" placeholder="국가를 입력하세요" isRequired={true} id="country" htmlFor="country" text="국가명" style={styleFlexColumn}/>

      <Input value={inputData.country} onChange={inputChangeHandler} type="number" name="gold" placeholder="0" isRequired={true} id="gold" htmlFor="gold" text="🥇 금메달" style={styleFlexColumn}/>

      <Input value={inputData.country} onChange={inputChangeHandler} type="number" name="silver" placeholder="0" isRequired={true} id="silver" htmlFor="silver" text="🥈 은메달" style={styleFlexColumn}/>

      <Input value={inputData.country} onChange={inputChangeHandler} type="number" name="bronze" placeholder="0" isRequired={true} id="bronze" htmlFor="bronze" text="🥉 동메달" style={styleFlexColumn}/>
      
      <div className="inline-block">
        <Button text="국가 추가"></Button>
        <Button type="button" onClick ={updateMedalListHandler} text="업데이트"></Button>
        
      </div>
    </form>
  );
};

export default InputForm;
