import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 48px 24px;
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
`;

const ListName = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
`;

const ListDot = styled.span`
  width: 6px;
  height: 6px;
  background: #000;
  display: inline-block;
`;

const ListMeta = styled.span`
  font-size: 11px;
  color: var(--ink);
`;

const DownloadBtn = styled.a`
  background: none;
  border: 1px solid var(--ink);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 1px;
  padding: 4px 10px;
  cursor: pointer;
  text-decoration: none;
  color: var(--ink);
  transition:
    background 0.12s,
    color 0.12s;

  &:hover {
    background: #000;
    color: var(--surface);
  }
`;

export default function Recent({ files }) {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Adicionados Recentemente</SectionTitle>
        <SectionMeta>atualizado hoje</SectionMeta>
      </SectionHeader>
      <List>
        {files.map((f) => (
          <ListItem key={f.name}>
            <ListName>
              <ListDot />
              {f.name}
            </ListName>
            <ListMeta style={{ flex: 1, textAlign: "center" }}>
              {f.size} · {f.date}
            </ListMeta>
            <DownloadBtn href={f.url || "#"} download>
              [ DOWNLOAD ]
            </DownloadBtn>
          </ListItem>
        ))}
      </List>
    </Section>
  );
}
