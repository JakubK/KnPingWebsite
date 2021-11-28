import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = props => {
  const [isToggled, setToggled] = useState(false);
  const toggle = () => {
    setToggled(!isToggled);
  }
  const path = props.path();
  const isLogoVisible = (path !== "/");

  const getSubdomain = (name) => {
    return `${name}.${window.location.host}`;
  }

  return (
    <nav className={"navbar " + (isToggled ? 'navbar--active' : '')}>
      <div className={"navbar__wrapper " + (isLogoVisible ? '' : 'navbar__wrapper--moved')}>
        <div onClick={toggle} className={"burger navbar__burger " + (isToggled ? 'burger--active' : '')}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <svg
          className={"navbar__logo " + (isLogoVisible ? "" : 'navbar__logo--hidden')}
          width="99"
          height="28"
          viewBox="0 0 99 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_2:88)">
            <path
              d="M13.896 0.479706C19.9998 0.479706 22.6095 4.24685 22.6095 8.57194C22.6095 12.6572 20.2402 17.0648 13.896 17.0648H5.46169C5.02041 17.0648 4.77995 17.2651 4.77995 17.7448V27.5203H0.0396461V16.8258C0.0396461 13.7825 1.3247 12.5403 4.29644 12.5403H14.0554C16.7453 12.5403 17.8296 10.6954 17.8296 8.81179C17.8296 6.84999 16.6669 5.21142 14.0968 5.21142H0V0.483145L13.896 0.479706Z"
              fill="white"
            />
            <path
              d="M32.1005 0.479706V27.5203H27.3602V0.479706H32.1005Z"
              fill="white"
            />
            <path
              d="M43.3523 27.5203H38.612V5.89057C38.612 2.36586 40.6201 0 44.8355 0C48.6131 0 50.2998 1.92226 51.4228 5.01025L59.3348 22.2702C59.6563 22.9115 60.1786 23.3955 61.0586 23.3955C62.0618 23.3955 62.6651 22.7937 62.6651 21.8739V0.479704H67.4451V22.0699C67.4451 25.6367 65.3947 28.0017 61.2206 28.0017C57.4439 28.0017 55.7176 26.0786 54.5945 22.9966L46.6825 5.73067C46.3197 4.92858 45.8388 4.57096 44.995 4.57096C43.9116 4.57096 43.3497 5.16844 43.3497 6.13214L43.3523 27.5203Z"
              fill="white"
            />
            <path
              d="M89.6581 13.4653C89.6582 13.004 89.533 12.5513 89.2959 12.1553C89.0588 11.7593 88.7186 11.4347 88.3114 11.2161C87.9042 10.9974 87.4453 10.8928 86.9833 10.9134C86.5213 10.9339 86.0735 11.0789 85.6875 11.3329C85.3015 11.5869 84.9917 11.9404 84.7909 12.356C84.5901 12.7715 84.5058 13.2335 84.5471 13.6929C84.5884 14.1523 84.7536 14.592 85.0253 14.9653C85.2969 15.3386 85.6648 15.6316 86.09 15.8131V18.8383H88.1585V15.7838C88.605 15.5815 88.9839 15.2554 89.2498 14.8443C89.5156 14.4332 89.6574 13.9545 89.6581 13.4653Z"
              fill="white"
            />
            <path
              d="M92.3231 11.4192H91.7422C92.1184 12.0438 92.3134 12.7602 92.3055 13.4888C92.2975 14.2174 92.087 14.9295 91.6974 15.5457H91.8421C94.0494 15.5457 94.6553 17.0725 94.6613 18.9905C94.6691 21.1922 93.5357 22.7963 90.8872 22.7963H86.3891C81.1316 22.7963 78.8804 20.1941 78.8804 14.0275C78.8804 7.81886 81.1678 5.21659 86.3891 5.21659H97.5529V0.488312H86.3891C78.5167 0.488312 74.1393 4.93547 74.1393 14.0301C74.1393 23.0817 78.4779 27.5272 86.3891 27.5272H90.5657C96.6281 27.5272 99 23.8039 99 19.073C99 14.7376 97.1453 11.4192 92.3231 11.4192Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2:88">
              <rect width="99" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <ul className="navbar__nav">
        <li onClick={() => toggle()}>
          <Link to="/">strona główna</Link>
        </li>
        <li onClick={() => toggle()}>
          <Link to="/management">zarząd</Link>
        </li>
        <li onClick={() => toggle()}>
          <Link to="/gallery">galeria</Link>
        </li>
        <li onClick={() => toggle()}>
          <a href="https://ctf.knping.pl" target="_blank">ctf</a>
        </li>
        <li onClick={() => toggle()}>
          <Link to="/contact">kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
