import { useState } from "react";
import data from "./data";
import List from "./components/List";

const App = () => {
  const [bdays, setBdays] = useState(data);
  const today = new Date(Date.now()).toDateString();
  const clearBdays = () => setBdays(null);
  return (
    <main>
      <section className="container">
        <h2>Birthday Reminder</h2>
        <h5 className="spacer">Today is: {today}</h5>
        <List data={bdays} handleClick={clearBdays} />
      </section>
    </main>
  );
};
export default App;
