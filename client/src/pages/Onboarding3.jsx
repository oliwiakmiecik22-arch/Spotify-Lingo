export default function Onboarding3() {
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
          <div className="onboarding-title-group">
  <h1 className="onboarding-title">Connect Your</h1>

  <img
    src="/Spotify3.png"
    alt="Spotify"
    className="spotify-lockup"
  />
</div>

          <p className="onboarding-subtitle">
            Connect Spotify to learn languages through your favorite songs.
          </p>
        </div>

        <div className="onboarding-bottom">
          <button className="button-reset" aria-label="Connect Spotify">
            <img
              src="/button-connect.png"
              alt="Connect Spotify"
              className="button-image"
            />
          </button>
        </div>
      </div>
    </div>
  );
}