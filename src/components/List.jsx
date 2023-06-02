import Person from "./Person";
const List = ({ data, handleClick }) => {
  return (
    <section>
      {data ? (
        <h4 className="spacer">{data.length} birthdays today</h4>
      ) : (
        <h4 className="spacer">No birthdays today!</h4>
      )}
      {data && data.map((item) => <Person key={item.id} {...item}></Person>)}
      {data && (
        <button
          className="btn btn-block"
          type="button"
          onClick={() => handleClick()}
        >
          Clear All
        </button>
      )}
    </section>
  );
};
export default List;
