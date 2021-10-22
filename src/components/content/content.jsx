import styled from 'styled-components';
import {useState} from "react";
import Main from "../../views/main";
import Gallery from "../../views/gallery/gallery";
import Management from "../../views/management/management";
import Contact from "../../views/contact/contact";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`

const ViewContainer = styled.div`
  width: 100%;
  height: 500px;
  transition: transform 2s;

  float: left;
  
  transform: translateX(${props => props.position * 100}%);
  ${props => props.position === 0 ? ''
  : `
    position: absolute;
    top: 0;
    left: 0;
  `}
`;

const Content = props => {
    const pages = [<Main />, <Management />, <Gallery />, <Contact />];
    const paths = ["/", "/management", "/gallery", "/contact"];
    const path = props.path();
    const currentPageIndex = paths.indexOf(path);

    return (
        <Wrapper>
        {
            pages.map(page =>
                <ViewContainer position={(pages.indexOf(page) - currentPageIndex)}>
                    {page}
                </ViewContainer>
            )
        }
        </Wrapper>
    )
}

export default Content;