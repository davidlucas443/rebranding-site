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

const Button = styled.a`
  background: var(--ink);
  color: var(--surface);
  border: none;
  padding: 7px 14px;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 1px;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
`;

export default function Populars({ apps }) {
  return (
    <Section id="populares">
      <SectionHeader>
        <SectionTitle>Populares</SectionTitle>
        <SectionMeta>{apps.length} programas</SectionMeta>
      </SectionHeader>
      <Grid>
        {apps.map((app) => (
          <Card key={app.name}>
            <CardTop>
              <AppIcon>{app.icon}</AppIcon>
              <AppVersion>{app.version}</AppVersion>
            </CardTop>
            <AppName>{app.name}</AppName>
            <AppDesc>{app.desc}</AppDesc>
            <Button href={app.url || "#"} target="_blank" rel="noreferrer">
              [ Acessar ]
            </Button>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
