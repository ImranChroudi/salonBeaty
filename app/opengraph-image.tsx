import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Maison Lumière — Atelier de Maquillage & Beauté de Luxe à Paris";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(120% 120% at 50% 0%, #F3E9E1 0%, #E8DED4 55%, #C4A882 100%)",
          color: "#2C2624",
          fontFamily: "Georgia, 'Times New Roman', serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 24,
            border: "1px solid rgba(201,169,110,0.55)",
            borderRadius: "50% 50% 0 0 / 30% 30% 0 0",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginBottom: 22,
          }}
        >
          <div
            style={{
              width: 56,
              height: 44,
              border: "2px solid #C9A96E",
              borderRadius: "50% 50% 0 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 600,
              fontStyle: "italic",
              color: "#2C2624",
            }}
          >
            M
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 44, fontWeight: 600, letterSpacing: 1 }}>
              Maison Lumière
            </span>
            <span style={{ fontSize: 15, letterSpacing: 8, color: "#2C2624", opacity: 0.7 }}>
              BEAUTÉ · PARIS
            </span>
          </div>
        </div>
        <div
          style={{
            fontSize: 52,
            fontStyle: "italic",
            textAlign: "center",
            padding: "0 80px",
            lineHeight: 1.15,
          }}
        >
          Révélez votre beauté naturelle
        </div>
        <div
          style={{
            fontSize: 20,
            marginTop: 28,
            letterSpacing: 3,
            color: "#2C2624",
            opacity: 0.75,
          }}
        >
          ATELIER DE MAQUILLAGE & BEAUTÉ · 24 RUE DE LA PAIX, PARIS
        </div>
      </div>
    ),
    { ...size }
  );
}
