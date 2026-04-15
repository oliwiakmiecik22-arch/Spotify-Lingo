import { useNavigate } from "react-router-dom";

export default function Onboarding1() {
  const navigate = useNavigate();

  return (
    <div className="onboarding">
      <div
        className="onboarding-bg"
        style={{ backgroundImage: "url('/bg.png')" }}
      />

      <div className="onboarding-overlay" />

      <div className="onboarding-inner">
        <div className="onboarding-top">
          <img
            src="/logo.png"
            alt="Lingo logo"
            className="onboarding-logo"
          />
        </div>

        <div className="onboarding-middle">
          <h1 className="onboarding-title">Welcome to Lingo</h1>

          <div className="onboarding-subtitle">from</div>

          <img
            src="/spotify-text.png"
            alt="Spotify"
            className="spotify-asset"
          />
        </div>

        <div className="onboarding-bottom">
          <button
            className="button-reset"
            onClick={() => navigate("/onboarding2")}
            aria-label="Let's get started"
          >
            <img
              src="/button-start.png"
              alt="Let's get started"
              className="button-image"
            />
          </button>
        </div>
      </div>
    </div>
  );
}