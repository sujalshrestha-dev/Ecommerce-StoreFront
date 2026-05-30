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
    <div style={{ background: "#fff", minHeight: "100vh", width: "100%" }}>

      {/* ── Blue announcement strip ────────────────────── */}
      <div style={{
        background: "#2563eb",
        padding: "6px 32px",
        textAlign: "center",
      }}>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "11px",
          fontWeight: 600,
          color: "#bfdbfe",
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}>
          Free shipping on all orders this week
        </span>
      </div>

      {/* ── Black navbar ──────────────────────────────── */}
      <header style={{
        background: "#111",
        padding: "0 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "60px",
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "100%",
      }}>
        {/* Logo */}
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "22px",
          fontWeight: 900,
          color: "#fff",
          letterSpacing: "-1px",
          textTransform: "uppercase",
        }}>
          STORE<span style={{ color: "#2563eb" }}>FRONT</span>
        </div>

        {/* Right side: label + count pill */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            color: "#888",
            letterSpacing: "0.8px",
            textTransform: "uppercase",
          }}>
            Premium Collection
          </span>
          <span style={{
            background: "#2563eb",
            color: "#fff",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            padding: "3px 11px",
            borderRadius: "20px",
          }}>
            {filteredProducts.length} items
          </span>
        </div>
      </header>

      {/* ── Toolbar ───────────────────────────────────── */}
      <div style={{
        background: "#f8f8f8",
        borderBottom: "1px solid #eee",
        padding: "10px 32px",
        width: "100%",
      }}>
        <div style={{ display:"flex", gap:"10px", alignItems:"center", width:"100%" }}>
          <CategoryFilter
            categories={categories}
            onSelect={id => setSelectedCategory(id ? Number(id) : null)}
          />
          <input
            type="text"
            placeholder="Search products…"
            onChange={e => setSearchTerm(e.target.value)}
            style={{
              flex: "1 1 0%",
              minWidth: 0,
              height: "38px",
              border: "1.5px solid #e2e2e2",
              borderRadius: "7px",
              padding: "0 14px",
              fontSize: "13px",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              color: "#333",
              background: "#fff",
              outline: "none",
            }}
          />
          <select
            onChange={e => setSortOrder(e.target.value)}
            style={{
              flexShrink: 0,
              width: "180px",
              height: "38px",
              border: "1.5px solid #e2e2e2",
              borderRadius: "7px",
              padding: "0 14px",
              fontSize: "13px",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              color: "#333",
              background: "#fff",
              outline: "none",
              appearance: "none",
            }}
          >
            <option value="asc">Price: low to high</option>
            <option value="desc">Price: high to low</option>
          </select>
        </div>
      </div>

      {/* ── Main content ──────────────────────────────── */}
      <div style={{ padding: "28px 32px", width: "100%" }}>

        {/* Error banner */}
        {error && (
          <div className="alert mb-4" style={{
            background: "#fff5f5",
            border: "1.5px solid #fca5a5",
            color: "#b91c1c",
            borderRadius: "8px",
            padding: "12px 16px",
            marginBottom: "20px",
          }}>
            ⚠ {error}
          </div>
        )}

        {/* Products */}
        {filteredProducts.length ? (
          <ProductList products={filteredProducts} />
        ) : (
          <div style={{
            textAlign: "center",
            padding: "60px 0",
            color: "#ccc",
            fontSize: "14px",
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