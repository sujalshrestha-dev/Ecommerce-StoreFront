import { useState, useEffect } from "react";
import "./App.css";
import ProductList from "./ProductList";
import CategoryFilter from "./CategoryFilter";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then(r => r.json()).then(setProducts)
      .catch(err => setError(err.message));
    fetch("http://localhost:8080/api/categories")
      .then(r => r.json()).then(setCategories)
      .catch(err => setError(err.message));
  }, []);

  const filteredProducts = products
    .filter(p =>
      (selectedCategory ? p.category.id === selectedCategory : true) &&
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => sortOrder === "asc" ? a.price - b.price : b.price - a.price);

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>

      {/* ── Black header bar ───────────────────────────────── */}
      <header style={{
        background: "#111",
        padding: "0 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "64px",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "26px",
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "-0.5px",
            textTransform: "uppercase",
          }}>
            STORE
          </span>
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "26px",
            fontWeight: 900,
            color: "#ff5c35",
            letterSpacing: "-0.5px",
            textTransform: "uppercase",
          }}>
            FRONT
          </span>
        </div>

        {/* Item count pill */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}>
          <span style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#555",
          }}>
            COLLECTION
          </span>
          <span style={{
            background: "#ff5c35",
            color: "#fff",
            fontFamily: "'Barlow', sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            padding: "3px 10px",
            borderRadius: "20px",
          }}>
            {filteredProducts.length}
          </span>
        </div>
      </header>

      <div className="container py-4">

        {/* ── Error banner ────────────────────────────────── */}
        {error && (
          <div className="alert mb-4" style={{
            background: "#fff5f5",
            border: "1.5px solid #ff5c35",
            color: "#cc2200",
            borderRadius: "8px",
            fontWeight: 600,
          }}>
            ⚠ {error}
          </div>
        )}

        {/* ── Toolbar ─────────────────────────────────────── */}
        <div style={{
          display: "flex",
          gap: "10px",
          marginBottom: "28px",
          flexWrap: "wrap",
        }}>
          <div style={{ minWidth: "140px" }}>
            <CategoryFilter
              categories={categories}
              onSelect={id => setSelectedCategory(id ? Number(id) : null)}
            />
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Search products…"
            style={{ flex: 1, minWidth: "180px" }}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <select
            className="form-select"
            style={{ minWidth: "170px" }}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value="asc">Price: low to high</option>
            <option value="desc">Price: high to low</option>
          </select>
        </div>

        {/* ── Products ─────────────────────────────────────── */}
        {filteredProducts.length ? (
          <ProductList products={filteredProducts} />
        ) : (
          <div className="text-center py-5" style={{
            color: "#bbb",
            fontSize: "15px",
            fontWeight: 600,
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}>
            No products found
          </div>
        )}

      </div>
    </div>
  );
}

export default App;