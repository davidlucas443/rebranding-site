import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  text-align: center;
  padding: 20px;
  font-size: 11px;
  letter-spacing: 2px;
  color: var(--ink);
  border-top: var(--border);
  text-transform: uppercase;
`;

export default function FooterLink() {
  return (
    <Footer as="a" href="https://ko-fi.com/oldversion" target="_blank" rel="noopener noreferrer" id="contribuir">
      <p style={{ margin: 0, marginBottom: 6 }}>Contribua aqui</p>
      © 1998–2026 OldVersion Archive · Preservando o passado digital
    </Footer>
  );
}
