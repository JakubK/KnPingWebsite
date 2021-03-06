import {Component} from "react";
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-top: -80px;
  height: calc(100vh - 52px - 18px);
  position: relative;

  @media (max-width: 769px) {
    padding-top: 67px;
    height: calc(100vh);
    overflow: hidden;
  }
`;

const TextAnimation = styled.div`
  position: absolute;
  font-weight: 500;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  max-width: 1000px;
  word-break: break-word;
  text-align: center;
  color: white;
  font-size: 80px;
  transition: opacity 0.95s;
  ${props => props.isVisible ? "" : `opacity: 0;`};
  @media (max-width: 1024px) {
    font-size: 70px;
  }
  @media (max-width: 769px) {
    font-size: 32px;
  }
`;

const TextPointer = styled.span`
  font-weight: bold;
  transition: 0.3s;
  color: rgba(255, 255, 255, ${props => props.opacity});
`

const Logo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 600px;
  transition: opacity 2.95s;
  opacity: 0;
  ${props => props.isVisible ? "opacity: 1;" : `opacity: 0;`};
`;

class Main extends Component {
  constructor() {
    super();
    let words = ["KOŁO NAUKOWE POLITECHNIKI GDAŃSKIEJ "];
    if (window.innerWidth < 769) {
      words = ["KOŁO ", "NAUKOWE ", "POLITECHNIKI ", "GDAŃSKIEJ "];
    }
    this.state = {letterIterator: 0, pointerIteration: 0, words: words, isAnimationDone: false, isLogoVisible: false};
  }

  componentDidMount() {
    let allLettersLength = 0;
    for (let i = 0; i < this.state.words.length; i++) allLettersLength += this.state.words[i].length;
    this.setState({allLettersLength: allLettersLength});
    const textInterval = setInterval(() => {
      this.setState({letterIterator: this.state.letterIterator + 1});

      if (this.state.letterIterator + 1 >= this.state.allLettersLength) {
        clearInterval(textInterval);
        setTimeout(() => {
          // to hide text
          this.setState({isAnimationDone: true});

          setTimeout(() => {
            // to show logo
            this.setState({isLogoVisible: true});
          }, 500)
        }, 275)
      }
    }, 125);

    const pointerInterval = setInterval(() => {
      this.setState({pointerIteration: this.state.pointerIteration + 1});
      if (this.state.isAnimationDone) {
        clearInterval(pointerInterval);
      }
    }, 300);
  }

  getWord() {
    let i;
    let counter = 0;
    for (i = 0; i < this.state.words.length; i++) {
      counter += this.state.words[i].length;
      if (counter > this.state.letterIterator) break;
    }

    return this.state.words[i].substring(0, this.state.letterIterator - (counter - this.state.words[i].length));
  }

  render() {
    return(
        <Container>
          <TextAnimation isVisible={!this.state.isAnimationDone}>
            {this.getWord()}
            <TextPointer opacity={this.state.pointerIteration % 2}>|</TextPointer>
          </TextAnimation>
          <Logo isVisible={this.state.isLogoVisible}>
            <svg
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
          </Logo>
        </Container>
    )
  }
}

export default Main;