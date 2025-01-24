import ListsOfTable from "./listsOfTable";

const Table = ({ deleteListHandler, medalList }) => {
  return (
    <table>
      {medalList.length === 0 ? (
        <thead>
          <tr>아직 추가된 국가가 없습니다. 메달을 추적하세요!</tr>
        </thead>
      ) : (
        <>
          <thead>
            <tr>
              <th>국가명</th>
              <th>🥇 금메달</th>
              <th>🥈 은메달</th>
              <th>🥉 동메달</th>
              <th>합계</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>

            {medalList.map((medal) => {
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
  );
};

export default Table;
