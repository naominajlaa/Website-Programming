import React from "react";

class ButtonSimpan extends React.Component {
  render() {
    return <button>Simpan Data</button>;
  }
}

class ButtonHapus extends React.Component {
  render() {
    return <button>Hapus Data</button>;
  }
}

class ButtonEdit extends React.Component {
  render() {
    return <button>Edit Data</button>;
  }
}

export { ButtonSimpan, ButtonHapus, ButtonEdit };
