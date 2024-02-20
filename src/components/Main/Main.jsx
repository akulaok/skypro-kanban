import Column from "../Column/Column";
import { statusList } from "../../data.jsx";

function Main({ cards, isLoading }) {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {
              isLoading ?
                "Loading" :
                statusList.map((status) => (
                  <Column
                    key={status}
                    title={status}
                    cardList={cards.filter((card) => card.status === status)}
                  />
                ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;