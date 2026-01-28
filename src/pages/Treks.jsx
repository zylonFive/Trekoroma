function Treks() {
  const treks = ["Everest", "Manaslu", "Kedarkantha"];

  return (
    <div>
      <h1>All Treks</h1>
      <ul>
        {treks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default Treks;
