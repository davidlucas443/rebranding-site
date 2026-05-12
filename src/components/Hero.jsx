import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  width: 100%;
  text-align: center;
  padding: 72px 20px 64px;
  border-bottom: var(--border);
`;

const HeroBadge = styled.div`
  display: inline-block;
  background: var(--accent);
  color: #fff;
  font-size: 10px;
  letter-spacing: 2px;
  padding: 3px 10px;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

const Title = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(36px, 6vw, 60px);
  line-height: 1;
  margin-bottom: 10px;
  letter-spacing: 2px;
  color: var(--ink);
`;

const Cursor = styled.span`
  display: inline-block;
  width: 3px;
  height: 0.85em;
  background: var(--ink);
  margin-left: 4px;
  vertical-align: middle;
  animation: blink 1s step-end infinite;
`;

const Subtitle = styled.p`
  color: var(--ink);
  font-size: 13px;
  letter-spacing: 2px;
  margin-bottom: 28px;
  text-transform: uppercase;
`;

const SearchWrap = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  max-width: 520px;
`;

const SearchPrefix = styled.span`
  position: absolute;
  left: 14px;
  color: var(--ink);
  pointer-events: none;
  font-size: 14px;
`;

const Search = styled.input`
  width: 100%;
  padding: 14px 14px 14px 38px;
  border: var(--border);
  border-radius: 0;
  background: var(--surface);
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--ink);
  box-shadow: var(--shadow);
`;

export default function Hero({ query, setQuery }) {
  return (
    <HeroSection>
      <Title>
        Softwares Antigos
        <Cursor />
      </Title>
      <Subtitle>Compatibilidade · Performance · Nostalgia</Subtitle>
      <SearchWrap>
        <SearchPrefix>&gt;_</SearchPrefix>
        <Search
          placeholder="buscar.exe..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </SearchWrap>
    </HeroSection>
  );
}
