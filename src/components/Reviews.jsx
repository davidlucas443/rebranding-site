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

function Stars({ count }) {
  return (
    <span style={{ letterSpacing: "2px", fontSize: "0.7rem", color: "var(--ink)" }}>
      {Array.from({ length: 5 }, (_, i) => (i < count ? "■" : "□")).join("")}
    </span>
  );
}

export default function Reviews({ reviews }) {
  return (
    <Section style={{ paddingTop: 0 }}>
      <SectionHeader>
        <SectionTitle>Recomendações</SectionTitle>
        <SectionMeta>{reviews.length} usuários</SectionMeta>
      </SectionHeader>
      <Grid>
        {reviews.map((r) => (
          <Card key={r.username}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 28, height: 28, background: "var(--ink)", color: "var(--surface)", fontSize: "11px", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", letterSpacing: "0.04em", flexShrink: 0 }}>
                  {r.initials}
                </div>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.04em", color: "var(--ink)" }}>{r.username}</span>
              </div>
              <span style={{ fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink)", border: "1px solid var(--ink)", padding: "1px 5px" }}>{r.os}</span>
            </div>

            <div style={{ fontSize: "0.65rem", color: "var(--ink-muted)", letterSpacing: "0.04em", borderBottom: "1px dashed var(--border)", paddingBottom: "0.5rem", marginBottom: "0.5rem" }}>
              ▪ {r.software}
            </div>

            <p style={{ fontSize: "0.72rem", lineHeight: 1.6, color: "var(--ink)", margin: 0, marginBottom: "0.5rem", flexGrow: 1 }}>{r.text}</p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "0.5rem" }}>
              <Stars count={r.stars} />
              <span style={{ fontSize: "0.6rem", color: "var(--ink-muted)", letterSpacing: "0.06em" }}>{r.date}</span>
            </div>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
