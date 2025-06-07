export function ServiceContent() {
  return (
    <section>
      <header>
        <h3>Layanan</h3>
      </header>

      <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
        {/* Layanan 1 */}
        <article style={{ flex: 1, textAlign: "left" }}>
          <div>
            <img src="/judol.jpeg" alt="Layanan 1" />
          </div>
          <p>Deskripsi untuk layanan pertama. Jelaskan fitur atau manfaat utama layanan ini di sini.</p>
        </article>

        {/* Layanan 2 */}
        <article style={{ flex: 1, textAlign: "center" }}>
          <div>
            <img src="/judol.jpeg" alt="Layanan 2" />
          </div>
          <p>Deskripsi untuk layanan kedua. Jelaskan fitur atau manfaat utama layanan ini di sini.</p>
        </article>

        {/* Layanan 3 */}
        <article style={{ flex: 1, textAlign: "right" }}>
          <div>
            <img src="/judol.jpeg" alt="Layanan 3" />
          </div>
          <p>Deskripsi untuk layanan ketiga. Jelaskan fitur atau manfaat utama layanan ini di sini.</p>
        </article>
      </div>
    </section>
  );
}
