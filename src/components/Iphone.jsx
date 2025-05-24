import '../styles/IphoneMockup.css';

export default function IphoneMockup({ src }) {
  return (
    <div className="iphone">
      <div className="notch"></div>
      <div className="iphone-screen">
        <iframe
          src={src}
          title="iPhone Preview"
          allowFullScreen
          sandbox="allow-same-origin allow-scripts allow-forms"
        />
      </div>
    </div>
  );
}
