import { useState } from "react";

function Counter() {
  const [jumlah, setJumlah] = useState(0);

  const handleTambah = () => setJumlah((value) => value + 1);
  const handleKurang = () => setJumlah((value) => value - 1);

  return (
    <section className="counter-box">
      <h2>Counter</h2>
      <p>Jumlah: {jumlah}</p>
      <div className="counter-actions">
        <button type="button" onClick={handleTambah}>Tambah</button>
        <button type="button" onClick={handleKurang}>Kurang</button>
      </div>
    </section>
  );
}

export default Counter;
