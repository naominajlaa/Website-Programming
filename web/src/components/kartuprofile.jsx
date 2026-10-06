function KartuProfile({ nama, perkerjaan }) {
  return (
    <article className="card profile-card">
      <h3>{nama}</h3>
      <p>{perkerjaan}</p>
    </article>
  );
}

export default KartuProfile;