import Link from "next/link";
import styled from "@emotion/styled";

const FooterContainer = styled("footer")``;

const FooterPresenter = styled("div")`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 544px) {
    max-width: 576px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 940px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const Logo = styled("a")``;

const Attribution = styled("span")`
  vertical-align: middle;
  margin-left: 10px;
  font-size: 0.8rem;
  color: #bbb;
  font-weight: 300;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterPresenter>
        <Logo href="/">Kunyang Li</Logo>
        <Attribution>
         
          <Link href="https://github.com/likuny0415">Github    </Link>
          
          <Link href="https://www.linkedin.com/in/kunyang-li-006180190/">   LinkedIn</Link>
        </Attribution>
      </FooterPresenter>
    </FooterContainer>
  );
};

export default Footer;
