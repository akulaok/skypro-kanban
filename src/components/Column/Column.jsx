import Card from "../Card/Card";

function Column({title}){
    return(
        <div className="main__column column">
        <div className="column__title">
          <p>{title}</p>
        </div>
        <div className="cards">
          <Card group={'Research'} title={'Название задачи'} date={'30.10.23'} color={'_green'}/>
          <Card group={'что-то другое'} title={'Название задачи'} date={'30.10.23'} color={'_orange'}/>
          <Card group={'что-то другое'} title={'Название задачи'} date={'30.10.23'} color={'_purple'}/>
          <Card group={'что-то другое'} title={'Название задачи'} date={'30.10.23'} color={'_gray'}/>
        </div>
      </div>
    )
    }
    export default Column;