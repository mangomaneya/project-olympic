const InputForm = ({
  countryInput,
  goldInput,
  silverInput,
  bronzeInput,
  onSubmit,
}) => {
//   const [country, setCountry] = useState("");
//   const [gold, setGold] = useState(0);
//   const [silver, setSilver] = useState(0);
//   const [bronze, setBronze] = useState(0);

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={countryInput}
        name="country"
        placeholder="국가를 입력해주세요"
        required
      />
      <input
        type="number"
        onChange={goldInput}
        name="gold"
        placeholder="0"
        required
      />
      <input
        type="number"
        onChange={silverInput}
        name="silver"
        placeholder="0"
        required
      />
      <input
        type="number"
        onChange={bronzeInput}
        name="bronze"
        placeholder="0"
        required
      />

      <button>국가추가</button>
      <button>업데이트</button>
    </form>
  );
};

export default InputForm;
