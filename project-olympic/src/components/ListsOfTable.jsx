const ListsOfTable = ({ medal, deleteListHandler }) => {
  const { country, gold, silver, bronze } = medal;
  
  return (
    <tr key={country}>
      <td>{country}</td>
      <td> {gold}</td>
      <td>{silver}</td>
      <td> {bronze}</td>
      <td>{gold + silver + bronze}</td>
      <td>
        <button onClick={() => deleteListHandler(country)}>삭제</button>
      </td>
    </tr>
  );
};

export default ListsOfTable;
