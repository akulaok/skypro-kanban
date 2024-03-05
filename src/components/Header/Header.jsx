import React, { useState } from 'react';
import { Сontainer } from "../Common/Common.styled";
import { HeaderWrapper, HeaderBlock, HeaderLogo, HeaderNav, HeaderBtnMainNew, HeaderUser, Checkbox, HeaderBtnExit } from "./Header.styled"

function Header({onCardAdd}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prevState) => !prevState);
  return (
    <HeaderWrapper>
      <Сontainer>
        <HeaderBlock>
          <HeaderLogo>
            <a href="" target="_self">
              <img src="public/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderLogo>
            <a href="" target="_self">
              <img src="public/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <HeaderBtnMainNew onClick={onCardAdd} >
              Создать новую задачу
            </HeaderBtnMainNew>
            <HeaderUser onClick={toggleDropdown}>
              Ivan Ivanov
            </HeaderUser>
            {isOpen && <div
              className="header__pop-user-set pop-user-set"
              id="user-set-target"
            >
              {/* <a href="">x</a> */}
              <p className="pop-user-set__name">Ivan Ivanov</p>
              <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
              <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <Checkbox/>
              </div>
              <HeaderBtnExit>
                <a href="#popExit">Выйти</a>
              </HeaderBtnExit>
            </div>}
          </HeaderNav>
        </HeaderBlock>
      </Сontainer>
    </HeaderWrapper>
  );
}

export default Header;