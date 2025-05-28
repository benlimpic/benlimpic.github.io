import '../styles/IphoneMockup.css';

export default function IphoneFrame({ src }) {
  return (
    <div className="iphone-frame">
      <div className="volume-buttons">
        <div className="button volume-up"></div>
        <div className="button volume-down"></div>
      </div>
      <div className="power-button"></div>
      <div className="dynamic-island"></div>
      <div className="screen">
        <iframe
          src={src}
          title="App Preview"
          allow="fullscreen"
          sandbox="allow-same-origin allow-scripts allow-forms"
        />
      </div>
    </div>
  );
}
