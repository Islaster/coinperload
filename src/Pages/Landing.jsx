import { useState } from "react";
import "./Landing.css";

export default function Landing() {
  const [wash, setWash] = useState(0);
  const [dry, setDry] = useState(0);
  const [total, setTotal] = useState(0);
  const [cash, setCash] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    const load = parseInt(wash) + parseInt(dry);
    setTotal(Math.floor(cash / load));
  }
  return (
    <section>
      <h1>Load Calculator</h1>
      {total > 0 ? <h4 className="total">You can do {total} loads</h4> : <></>}
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3 center">
          <input
            className="form-control input"
            id="floatingWash"
            placeholder="ex. 1.75"
            type="number"
            step=".01"
            onChange={(e) => setWash(e.target.value)}
          />
          <label htmlFor="floatingWash">Wash</label>
        </div>
        <div className="form-floating mb-3 center">
          <input
            type="number"
            className="form-control input"
            id="floatingDry"
            step=".01"
            placeholder="ex. 1.25"
            onChange={(e) => setDry(e.target.value)}
          />
          <label htmlFor="floatingDry">Dry</label>
        </div>
        <div className="form-floating mb- center bottom">
          <input
            type="number"
            className="form-control input"
            id="floatingCash"
            step=".01"
            placeholder="20"
            onChange={(e) => setCash(e.target.value)}
          />
          <label htmlFor="floatingCash">Cash</label>
        </div>
        <button className="btn btn-success" type="submit">
          Calculate
        </button>
      </form>
    </section>
  );
}
