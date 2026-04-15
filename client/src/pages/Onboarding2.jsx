import { useNavigate } from "react-router-dom";

export default function Onboarding2() {
  const navigate = useNavigate();

  return (
    <div className="onboarding">
      <div
        className="onboarding-bg"
        style={{ backgroundImage: "url('/bg.png')" }}
      />

      <div className="onboarding-overlay" />

      <div className="onboarding-inner">
        <div className="onboarding-top" />

        <div className="onboarding-middle">
          <h1 className="onboarding-title">Learn languages through your music</h1>

          <p className="onboarding-subtitle">
            Practice vocabulary and grammar with your favorite Spotify songs.
          </p>
        </div>

        <div className="onboarding-bottom">
          <button
            className="button-reset"
            onClick={() => navigate("/onboarding3")}
            aria-label="Next"
          >
            <img
              src="/button-next.png"
              alt="Next"
              className="button-image"
            />
          </button>
        </div>
      </div>
    </div>
  );
}