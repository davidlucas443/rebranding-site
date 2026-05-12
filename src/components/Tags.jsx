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
`;

export default function Tags({ tags }) {
  return (
    <Section id="categorias" style={{ paddingTop: 0 }}>
      <SectionHeader>
        <SectionTitle>Por que usar?</SectionTitle>
      </SectionHeader>
      <TagGrid>
        {tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </TagGrid>
    </Section>
  );
}
