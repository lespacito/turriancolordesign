import * as React from "react";
import CookieConsent from "react-cookie-consent";

interface CookieConsentBannerProps {
  onAccept?: () => void;
  onDecline?: () => void;
}

export function CookieConsentBanner({ onAccept, onDecline }: CookieConsentBannerProps) {
  const handleAccept = () => {
    // Initialize GA4 when user accepts
    const initGA = (window as unknown as { initializeGA?: () => void }).initializeGA;
    if (initGA) {
      initGA();
    }
    onAccept?.();
  };

  const handleDecline = () => {
    // User declined, do not initialize GA4
    console.log("Analytics cookies declined");
    onDecline?.();
  };

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accepter"
      declineButtonText="Refuser"
      enableDeclineButton
      onAccept={handleAccept}
      onDecline={handleDecline}
      cookieName="turrian-analytics-consent"
      style={{
        background: "linear-gradient(135deg, #388e3c, #1976d2)",
        padding: "1rem 1.5rem",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.15)",
      }}
      buttonStyle={{
        background: "#f9a825",
        color: "white",
        fontSize: "14px",
        fontWeight: "600",
        padding: "10px 24px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "white",
        fontSize: "14px",
        fontWeight: "500",
        padding: "10px 24px",
        borderRadius: "8px",
        border: "2px solid white",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      expires={365}
      overlay={false}
      containerClasses="cookie-consent-container"
      buttonWrapperClasses="cookie-consent-buttons"
    >
      <span style={{ fontSize: "14px", lineHeight: "1.6", color: "white" }}>
        Nous utilisons des cookies pour analyser le trafic de notre site web et améliorer votre expérience.
        En cliquant sur "Accepter", vous consentez à notre utilisation des cookies d'analyse.{" "}
        <a
          href="#"
          style={{
            color: "#f9a825",
            textDecoration: "underline",
            fontWeight: "500"
          }}
          onClick={(e) => {
            e.preventDefault();
            alert("Politique de confidentialité: Turrian Color & Design utilise Google Analytics pour analyser le trafic du site. Les données sont anonymisées et conservées pendant 2 mois maximum. Vous pouvez retirer votre consentement à tout moment en supprimant les cookies de votre navigateur.");
          }}
        >
          En savoir plus
        </a>
      </span>
    </CookieConsent>
  );
}
