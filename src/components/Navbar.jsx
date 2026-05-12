import React from "react";
import styled from "styled-components";

const NavbarWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: #d6c7a1;
  border-bottom: 3px solid #2d2a26;
`;

const LogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
`;

const Logo = styled.span`
  font-family: var(--font-display);
  font-size: 28px;
  color: var(--ink);
  letter-spacing: 3px;
`;

const Tagline = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  color: #5c554a;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 24px;

  a {
    color: var(--ink);
    font-size: 14px;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default function Navbar() {
  return (
    <NavbarWrap>
      <LogoWrap>
        <Logo>OLDVERSION.EXE</Logo>
        <Tagline>Because newer is not always better</Tagline>
      </LogoWrap>

      <NavLinks>
        <a href="#categorias">Categorias</a>
        <a href="#populares">Populares</a>
        <a href="#contribuir">Contribuir</a>
      </NavLinks>
    </NavbarWrap>
  );
}
