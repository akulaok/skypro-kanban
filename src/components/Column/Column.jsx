import Card from "../Card/Card";
import { Cards, ColumnTitle, ColumnTitleP, MainColumn } from "./Column.styled";

function Column({title, cardList}){
    return(
        <MainColumn>
        <ColumnTitle>
          <ColumnTitleP>{title}</ColumnTitleP>
        </ColumnTitle>
        <Cards>
          {
            cardList.map((item) => <Card key={item.id} theme={item.theme} title={item.title} date={item.date}/>)
          }
        </Cards>
      </MainColumn>
    )
    }
    export default Column;