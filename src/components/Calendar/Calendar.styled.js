import styled from "styled-components";
import { breakpoints } from "..//..//lib/breakpoints";

export const CalendarWrapper = styled.div`
  width: 182px;
  margin-bottom: 20px;
  @media (max-width: ${breakpoints.md}) {
    width: 100%;
 }
 @media (max-width: ${breakpoints.lg}) {
    width: 100%;
    max-width: 340px;
    p {
      font-size: 14px;
    }
 }

`;

export const CalendarTtl = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  @media (max-width: ${breakpoints.lg}) {
    padding: 0; 
 }
`;

const CalendarParagraph = styled.p`
  color: #94A6BE;
  font-size: 10px;
  line-height: 1;

  span {
    color: #000000;
  }
`;

const CalendarBlock = styled.div`
  display: block;
`;

const CalendarMonth = styled.div`
  color: #94A6BE;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

const CalendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

const CalendarDayName = styled.div`
  color: #94A6BE;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
  
  @media (max-width: ${breakpoints.lg}) {
    font-size: 14px;
 }
`;

const CalendarCells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${breakpoints.lg}) {
    width: 344px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
 }
`;

const CalendarCell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94A6BE;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;


  &:hover {
  color: #94A6BE;
  background-color: #EAEEF6;
}

@media (max-width: ${breakpoints.lg}) {
  width: 42px;
    height: 42px;
    font-size: 14px;
 }
`;

const OtherMonth = styled(CalendarCell)`
    opacity: 0;
`;

const Current = styled(CalendarCell)`
    font-weight: 700;
`;

const Active = styled(CalendarCell)`
    background-color: #94A6BE;
  color: #FFFFFF;
`;

const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
  @media (max-width: ${breakpoints.lg}) {
    padding: 0; 
 }
`;

const CalendarPeriod = styled.div`
  padding: 0 7px;
  @media (max-width: ${breakpoints.lg}) {
    padding: 0; 
 }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: #94A6BE;
  }
`;

export {
  Active,
  Current,
  OtherMonth,
  CalendarParagraph,
  CalendarBlock,
  CalendarMonth,
  CalendarContent,
  CalendarDaysNames,
  CalendarDayName,
  CalendarCells,
  CalendarCell,
  CalendarNav,
  CalendarPeriod,
  NavActions,
  NavAction,
};