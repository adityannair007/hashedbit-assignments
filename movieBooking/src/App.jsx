import React, { useState } from "react";

// --- High Quality Movie Data ---
const MOVIES = [
  {
    id: 1,
    title: "Inception",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fflxt.tmsimg.com%2Fassets%2Fp7825626_p_v8_af.jpg&f=1&nofb=1&ipt=603acb7cdb7c0890bf1e91b4c0fb1be677c8fa615425fd4a9964567ab83602e7",
  },
  {
    id: 2,
    title: "Interstellar",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.themoviedb.org%2Ft%2Fp%2Foriginal%2FnCbkOyOMTEwlEV0LtCOvCnwEONA.jpg&f=1&nofb=1&ipt=ddfbc9150a51b558d400f7b5ab4255b027976c4513b35903ecc434d76272ecde",
  },
  {
    id: 3,
    title: "The Dark Knight",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.themoviedb.org%2Ft%2Fp%2Foriginal%2FpKKvCaL1TPTVtbI6EeliyND3api.jpg&f=1&nofb=1&ipt=50cfac85825abee3884bf9a81a3e1a8438db3acc144aa34b93da084e12d3c141",
  },
  {
    id: 4,
    title: "Oppenheimer",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Futipuatnkaea1.jpg&f=1&nofb=1&ipt=7f5690221ea8ebdf52beeb63c9724553d17a4a06cec7cee96bd124a9c920a651",
  },
  {
    id: 5,
    title: "Tenet",
    img: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    title: "Avatar",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmlpnk72yciwc.i.optimole.com%2FcqhiHLc.IIZS~2ef73%2Fw%3Aauto%2Fh%3Aauto%2Fq%3A75%2Fhttps%3A%2F%2Fbleedingcool.com%2Fwp-content%2Fuploads%2F2022%2F08%2FAVATAR_RERLS_1SHT_DIGITAL_sRGB_V7.jpg&f=1&nofb=1&ipt=fb6a69e8a7d37bedb97ba7c0713925a017db9b50daf1b469be26a8a524ad664e",
  },
  {
    id: 7,
    title: "The Prestige",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.themoviedb.org%2Ft%2Fp%2Foriginal%2FdKoKG8SyvDjOW3ZC4OO6mSza8xZ.jpg&f=1&nofb=1&ipt=07b15534e9e7c253f9649eccb5c833fee9ace68da23adcc48d9d3ab76cf91b0f",
  },
  {
    id: 8,
    title: "Memento",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.themoviedb.org%2Ft%2Fp%2Foriginal%2FcNKT3GNCndTIHlzhEU8Ga6kMNEj.jpg&f=1&nofb=1&ipt=0d9984460e0449fefee1c890b0d6451b13dbfc8afcac9a56de4daff10e0cb532",
  },
];

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });
  const [confirmData, setConfirmData] = useState(null);

  // Styling
  const containerStyle = {
    fontFamily: "'Segoe UI', Roboto, sans-serif",
    backgroundColor: "#0f172a",
    color: "#f8fafc",
    minHeight: "100vh",
    padding: "40px 20px",
  };

  // --- Page 1: Movie Grid ---
  if (page === "home") {
    return (
      <div style={containerStyle}>
        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
          🍿 Cinema Now
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "25px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {MOVIES.map((movie) => (
            <div
              key={movie.id}
              style={cardStyle}
              onClick={() => {
                setSelectedMovie(movie);
                setPage("details");
              }}
            >
              <img
                src={movie.img}
                alt={movie.title}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
              <div style={{ padding: "15px" }}>
                <h3 style={{ margin: 0 }}>{movie.title}</h3>
                <p style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
                  Action, Sci-Fi
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // --- Page 2: Movie Details ---
  if (page === "details") {
    return (
      <div style={containerStyle}>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            display: "flex",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <img
            src={selectedMovie.img}
            alt={selectedMovie.title}
            style={{ width: "300px", borderRadius: "20px" }}
          />
          <div>
            <h1>{selectedMovie.title}</h1>
            <p style={{ color: "#cbd5e1", marginBottom: "30px" }}>
              Join us for an exclusive screening of {selectedMovie.title}.
            </p>
            <button onClick={() => setPage("form")} style={{ ...btnPrimary }}>
              Book My Seat
            </button>
            <button onClick={() => setPage("home")} style={{ ...btnSecondary }}>
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- Page 3: Booking Form ---
  if (page === "form") {
    return (
      <div style={containerStyle}>
        <div
          style={{
            maxWidth: "450px",
            margin: "50px auto",
            backgroundColor: "#1e293b",
            padding: "40px",
            borderRadius: "16px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Secure Your Seat</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setConfirmData({
                ...form,
                id: Math.random().toString(36).substr(2, 9).toUpperCase(),
              });
              setPage("confirmation");
            }}
          >
            <input
              required
              style={inputStyle}
              placeholder="Full Name"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="email"
              required
              style={inputStyle}
              placeholder="Email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              type="tel"
              required
              style={inputStyle}
              placeholder="Mobile"
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
            />
            <button
              type="submit"
              style={{ ...btnPrimary, width: "100%", marginTop: "10px" }}
            >
              Complete Booking
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- Page 4: Confirmation (FIXED EMAIL) ---
  if (page === "confirmation") {
    return (
      <div style={{ ...containerStyle, textAlign: "center" }}>
        <div
          style={{
            backgroundColor: "#1e293b",
            maxWidth: "500px",
            margin: "40px auto",
            padding: "40px",
            borderRadius: "24px",
            border: "2px solid #10b981",
          }}
        >
          <h1>✅ Booking Confirmed!</h1>
          <div
            style={{
              textAlign: "left",
              backgroundColor: "#0f172a",
              padding: "20px",
              borderRadius: "12px",
              marginTop: "20px",
            }}
          >
            <p>
              <strong>Booking ID:</strong>{" "}
              <span style={{ color: "#10b981" }}>{confirmData.id}</span>
            </p>
            <p>
              <strong>Movie:</strong> {selectedMovie.title}
            </p>
            <p>
              <strong>Name:</strong> {confirmData.name}
            </p>
            <p>
              <strong>Email:</strong> {confirmData.email}
            </p>{" "}
            {/* Email added here */}
            <p>
              <strong>Mobile:</strong> {confirmData.mobile}
            </p>
          </div>
          <button
            onClick={() => setPage("home")}
            style={{ ...btnPrimary, marginTop: "30px", width: "100%" }}
          >
            Book Another
          </button>
        </div>
      </div>
    );
  }
}

// Reusable Styles
const cardStyle = {
  backgroundColor: "#1e293b",
  borderRadius: "12px",
  overflow: "hidden",
  cursor: "pointer",
};
const btnPrimary = {
  padding: "12px 24px",
  borderRadius: "8px",
  border: "none",
  fontWeight: "bold",
  backgroundColor: "#3b82f6",
  color: "white",
  cursor: "pointer",
};
const btnSecondary = {
  padding: "12px 24px",
  borderRadius: "8px",
  border: "1px solid #475569",
  backgroundColor: "transparent",
  color: "#94a3b8",
  cursor: "pointer",
  marginLeft: "10px",
};
const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #475569",
  backgroundColor: "#0f172a",
  color: "white",
  boxSizing: "border-box",
  marginBottom: "15px",
};
