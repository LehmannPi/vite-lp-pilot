export default function Header() {
  return (
    <div style={{ display: 'flex' }}>
      <p className="header-title">Filipe Editor</p>
      <div className="header-central">
        <button>Main</button>
        <button>About</button>
        <button>Program</button>
        <button>Price</button>
        <button>Contact</button>
      </div>
      <div className="header-social">
        <button>IG</button>
        <button>FB</button>
        <button>LI</button>
      </div>
    </div>
  );
}
