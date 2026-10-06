import { useState } from "react";

export function PrimaryButton() {
  return <button className="primary">Simpan</button>;
}

export function DangerButton() {
  return <button className="danger">Hapus</button>;
}

export function SuccessButton() {
  return <button className="success">Success Button</button>;
}

export function WarningButton() {
  return <button className="warning">Warning Button</button>;
}

export function InfoButton() {
  return <button className="info">Info</button>;
}

export function SecondaryButton() {
  return <button className="secondary">Secondary Button</button>;
}

export function ButtonSimpan() {
  return <PrimaryButton />;
}

export function ButtonHapus() {
  return <DangerButton />;
}

export function ButtonEdit() {
  return <SecondaryButton />;
}

function TampilanStatus({ status, angka }) {
  return (
    <p>
      Status: {status}, Angka: {angka}
    </p>
  );
}

export function PengelolaanAplikasi() {
  const [status, setStatus] = useState("Aktif");
  const [angka, setAngka] = useState(0);

  const handleUbahStatus = () => {
    setStatus((currentStatus) =>
      currentStatus === "Aktif" ? "Nonaktif" : "Aktif",
    );
  };

  const handleTambah = () => {
    setAngka((currentAngka) => currentAngka + 1);
  };

  const handleReset = () => {
    setAngka(0);
  };

  return (
    <section className="status-panel">
      <TampilanStatus status={status} angka={angka} />
      <div className="app-actions">
        <button type="button" onClick={handleUbahStatus}>
          Ubah Status
        </button>
        {" "}
        <button type="button" onClick={handleTambah}>
          Tambah Angka
        </button>
        {" "}
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </section>
  );
}
