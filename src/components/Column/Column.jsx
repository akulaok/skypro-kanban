import Card from "../Card/Card";

function Column({title, cardList}){
    return(
        <div className="main__column column">
        <div className="column__title">
          <p>{title}</p>
        </div>
        <div className="cards">
          {
            cardList.map((item) => <Card key={item.id} theme={item.theme} title={item.title} date={item.date} color={'_green'}/>)
          }
        </div>
      </div>
    )
    }
    export default Column;