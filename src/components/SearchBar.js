import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  return (
    <div>
      <input
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch(city)}
      />
      <button onClick={() => onSearch(city)}>🔍</button>
    </div>
  );
}

export default SearchBar;