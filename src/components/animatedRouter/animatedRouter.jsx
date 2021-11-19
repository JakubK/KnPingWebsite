import styled from 'styled-components';
import Main from "../../views/main/main";
import Gallery from "../../views/gallery/gallery";
import Management from "../../views/management/management";
import Contact from "../../views/contact/contact";

const Wrapper = styled.div`
  position: relative;
  width: calc(100% + 160px);
  margin-right: -80px;
  margin-left: -80px;
  overflow: hidden;

  @media (max-width: 769px) {
    margin-right: -16px;
    margin-left: -16px;
    width: calc(100% + 32px);
  }
`

const ViewContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 80px;
  padding-right: 80px;
  overflow: hidden;
  @media (max-width: 769px) {
    padding-left: 16px;
    padding-right: 16px;
  }
  transition: transform 1.25s, opacity 0.9s;
  float: left;

  transform: translateX(${props => props.position * 100}%);
  ${props => props.animation === "fade" ? "transform: none;" : ""}
  
  ${props => props.position !== 0
          ? `
            position: absolute;
            top: 0;
            left: 0;
            `
          : ''
  }

  opacity: 1;

  ${props => props.animation === "fade" && props.position !== 0
          ? `
            opacity: 0;
            `
          : ''
  }
`;

const AnimatedRouter = props => {
    const pages = [<Main />, <Management />, <Gallery />, <Contact />];
    const paths = ["/", "/management", "/gallery", "/contact"];
    const path = props.path();
    const currentPageIndex = paths.indexOf(path);

    return (
        <Wrapper>
            {
                pages.map(page =>
                    <ViewContainer animation="slide" position={(pages.indexOf(page) - currentPageIndex)}>
                        {page}
                    </ViewContainer>
                )
            }
        </Wrapper>
    )
}

export default AnimatedRouter;