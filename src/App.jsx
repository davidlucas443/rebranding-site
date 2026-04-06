import React, { useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=VT323&family=Share+Tech+Mono&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:        #f4ecd8;
    --surface:   #fffdf5;
    --ink:       #2d2a26;
    --ink-muted: #7a7060;
    --accent:    #1a1a1a;
    --border:    2px solid #2d2a26;
    --shadow:    4px 4px 0 #2d2a26;
    --font-display: 'VT323', monospace;
    --font-mono:    'Share Tech Mono', monospace;
  }

  html, body, #root { height: 100%; width: 100%; margin: 0; padding: 0; }
  body { background: var(--bg); color: var(--ink); font-family: var(--font-mono); overflow-x: hidden; }
  a { color: var(--ink); text-decoration: none; }
  a:hover { text-decoration: underline; }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
`;

const scanline = keyframes`
  0%   { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;

  &::before {
    content: '';
    pointer-events: none;
    position: fixed;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 3px,
      rgba(0,0,0,0.03) 3px,
      rgba(0,0,0,0.03) 4px
    );
    z-index: 100;
  }

  &::after {
    content: '';
    pointer-events: none;
    position: fixed;
    left: 0; right: 0;
    height: 3px;
    background: rgba(255,255,255,0.08);
    animation: ${scanline} 6s linear infinite;
    z-index: 101;
  }
`;

const Navbar = styled.nav`
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

  a:hover { text-decoration: underline; }
`;

const Hero = styled.section`
  width: 100%;
  text-align: center;
  padding: 72px 20px 64px;
  border-bottom: var(--border);
  animation: ${fadeUp} .5s ease both;
  position: relative;
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
  animation: ${blink} 1s step-end infinite;
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
  transition: box-shadow .15s;

  &:focus {
    outline: none;
    box-shadow: 6px 6px 0 var(--accent);
  }

  &::placeholder { color: #b0a898; }
`;

const Section = styled.section`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 48px 24px;
  animation: ${fadeUp} .6s ease both;
  animation-delay: ${({ $delay }) => $delay || '0s'};
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 24px;
  border-bottom: var(--border);
  padding-bottom: 8px;
`;

const SectionTitle = styled.h2`
  font-family: var(--font-display);
  font-size: 22px;
  letter-spacing: 1px;
  color: var(--ink);
`;

const SectionMeta = styled.span`
  font-size: 10px;
  letter-spacing: 1px;
  color: var(--ink);
  text-transform: uppercase;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: var(--surface);
  border: var(--border);
  border-radius: 0;
  padding: 20px;
  box-shadow: var(--shadow);
  transition: box-shadow .15s, transform .15s;
  cursor: pointer;

  &:hover {
    box-shadow: 6px 6px 0 var(--accent);
    transform: translate(-2px, -2px);
  }
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const AppIcon = styled.div`
  width: 36px;
  height: 36px;
  background: var(--ink);
  color: var(--surface);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 18px;
`;

const AppVersion = styled.span`
  font-size: 10px;
  letter-spacing: 1px;
  color: var(--ink);
  border: 1px solid currentColor;
  padding: 1px 5px;
`;

const AppName = styled.h3`
  font-family: var(--font-display);
  font-size: 20px;
  margin-bottom: 4px;
`;

const AppDesc = styled.p`
  font-size: 11px;
  color: var(--ink);
  margin-bottom: 16px;
  line-height: 1.5;
`;

const Button = styled.button`
  background: var(--ink);
  color: var(--surface);
  border: none;
  padding: 7px 14px;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background .15s;

  &:hover { background: var(--accent); }
`;

const List = styled.div`
  background: var(--surface);
  border: var(--border);
  box-shadow: var(--shadow);
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px dashed var(--ink);
  transition: background .12s;

  &:last-child { border-bottom: none; }
  &:hover { background: #f0e8d0; }
`;

const ListName = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
`;

const ListDot = styled.span`
  width: 6px; height: 6px;
  background: var(--accent);
  display: inline-block;
`;

const ListMeta = styled.span`
  font-size: 11px;
  color: var(--ink);
`;

const DownloadBtn = styled.button`
  background: none;
  border: 1px solid var(--ink);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 1px;
  padding: 4px 10px;
  cursor: pointer;
  transition: background .12s, color .12s;

  &:hover { background: var(--ink); color: var(--surface); }
`;

const TagGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const Tag = styled.div`
  background: var(--surface);
  border: var(--border);
  padding: 10px 18px;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-shadow: 3px 3px 0 var(--ink);
  cursor: default;
  transition: box-shadow .12s, transform .12s;

  &:hover {
    box-shadow: 3px 3px 0 var(--accent);
    transform: translate(-1px, -1px);
  }
`;

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

const APPS = [
  { name: "Chrome",     icon: "C", version: "v49.0", desc: "Última versão suportada no Windows XP." },
  { name: "Photoshop",  icon: "P", version: "v7.0",  desc: "Clássico de 2002, leve e poderoso." },
  { name: "uTorrent",   icon: "u", version: "v2.2.1",desc: "Antes de virar bloatware." },
];

const RECENT = [
  { name: "Winamp_5.666.exe",    size: "4.2 MB",  date: "2013" },
  { name: "Firefox_3.6.28.exe",  size: "8.1 MB",  date: "2012" },
  { name: "VLC_0.9.10.exe",      size: "15.3 MB", date: "2009" },
];

const TAGS = ["Compatibilidade", "Performance", "Sistemas Antigos", "Nostalgia", "Código Aberto", "Freeware"];

export default function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <GlobalStyle />
      <Container>
        <Navbar>
          <LogoWrap>
            <Logo>OLDVERSION.EXE</Logo>
            <Tagline>Because newer is not always better</Tagline>
          </LogoWrap>
          <NavLinks>
            <a href="#">Categorias</a>
            <a href="#">Populares</a>
            <a href="#">Contribuir</a>
          </NavLinks>
        </Navbar>

        <main style={{ flex: 1 }}>
          <Hero>
            <Title>Softwares Antigos<Cursor /></Title>
            <Subtitle>Compatibilidade · Performance · Nostalgia</Subtitle>
            <SearchWrap>
              <SearchPrefix>&gt;_</SearchPrefix>
              <Search
                placeholder="buscar.exe..."
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
            </SearchWrap>
          </Hero>

          <Section $delay=".1s">
            <SectionHeader>
              <SectionTitle>Populares</SectionTitle>
              <SectionMeta>3 programas</SectionMeta>
            </SectionHeader>
            <Grid>
              {APPS.map((app) => (
                <Card key={app.name}>
                  <CardTop>
                    <AppIcon>{app.icon}</AppIcon>
                    <AppVersion>{app.version}</AppVersion>
                  </CardTop>
                  <AppName>{app.name}</AppName>
                  <AppDesc>{app.desc}</AppDesc>
                  <Button>[ Acessar ]</Button>
                </Card>
              ))}
            </Grid>
          </Section>

          <Section $delay=".2s" style={{ paddingTop: 0 }}>
            <SectionHeader>
              <SectionTitle>Adicionados Recentemente</SectionTitle>
              <SectionMeta>atualizado hoje</SectionMeta>
            </SectionHeader>
            <List>
              {RECENT.map((f) => (
                <ListItem key={f.name}>
                  <ListName>
                    <ListDot />
                    {f.name}
                  </ListName>
                  <ListMeta style={{ flex: 1, textAlign: "center" }}>
                    {f.size} · {f.date}
                  </ListMeta>
                  <DownloadBtn>[ DOWNLOAD ]</DownloadBtn>
                </ListItem>
              ))}
            </List>
          </Section>

          <Section $delay=".3s" style={{ paddingTop: 0 }}>
            <SectionHeader>
              <SectionTitle>Por que usar?</SectionTitle>
            </SectionHeader>
            <TagGrid>
              {TAGS.map((t) => <Tag key={t}>{t}</Tag>)}
            </TagGrid>
          </Section>
        </main>

        <Footer>© 1998–2026 OldVersion Archive · Preservando o passado digital</Footer>
      </Container>
    </>
  );
}