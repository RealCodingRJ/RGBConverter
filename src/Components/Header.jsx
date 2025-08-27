export default function Header({ title }) {
  return (
    <div>
      <header
        style={{
          padding: "25px",
          backgroundColor: "#101010",
        }}
      >
        <div>
          <a href="">{title}</a>
        </div>
      </header>
    </div>
  );
}
