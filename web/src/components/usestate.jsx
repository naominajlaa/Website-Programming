import { useState } from "react";

export function FormTerpisah() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [umur, setUmur] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="use-state-form" onSubmit={handleSubmit}>
      <h3>State Terpisah</h3>
      <div>
        <label htmlFor="nama-terpisah">Nama</label>
        <br />
        <input
          id="nama-terpisah"
          type="text"
          placeholder="Nama"
          value={nama}
          onChange={(event) => setNama(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email-terpisah">Email</label>
        <br />
        <input
          id="email-terpisah"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="umur-terpisah">Umur</label>
        <br />
        <input
          id="umur-terpisah"
          type="number"
          placeholder="Umur"
          value={umur}
          onChange={(event) => setUmur(event.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export function FormObject() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    kategori: "pemasukan",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="use-state-form" onSubmit={handleSubmit}>
      <h3>State Object</h3>
      <div>
        <label htmlFor="nama-object">Nama</label>
        <br />
        <input
          id="nama-object"
          type="text"
          name="nama"
          placeholder="Nama"
          value={formData.nama}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email-object">Email</label>
        <br />
        <input
          id="email-object"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="kategori-object">Kategori</label>
        <br />
        <select
          id="kategori-object"
          name="kategori"
          value={formData.kategori}
          onChange={handleChange}
        >
          <option value="pemasukan">Pemasukan</option>
          <option value="pengeluaran">Pengeluaran</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

function UseStateExamples() {
  return (
    <section className="use-state-examples">
      <h2>Pengaturan Keuangan</h2>
      <div className="use-state-forms">
        <FormTerpisah />
        <FormObject />
      </div>
    </section>
  );
}

export default UseStateExamples;
