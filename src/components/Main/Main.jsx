import Column from "../Column/Column";
import { statusList } from "../../data.jsx";
import { MainBlock, MainContent, MainWrapper } from "./Main.styled.js";
import { Сontainer} from "../Common/Common.styled.js"

function Main({ cards, isLoading }) {
  return (
    <MainWrapper>
      <Сontainer>
        <MainBlock>
          <MainContent>
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
          </MainContent>
        </MainBlock>
      </Сontainer>
    </MainWrapper>
  );
}

export default Main;