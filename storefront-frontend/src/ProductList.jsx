const CATEGORY_COLORS = {
  default: { bg: "#eef2ff", text: "#1d4ed8" },
  Electronics: { bg: "#eef2ff", text: "#1d4ed8" },
  Outdoors: { bg: "#f0fdf4", text: "#166534" },
  Home: { bg: "#fef3c7", text: "#92400e" },
  Fashion: { bg: "#fdf2f8", text: "#9d174d" },
  Sports: { bg: "#ecfdf5", text: "#065f46" },
  Books: { bg: "#fff7ed", text: "#9a3412" },
  Beauty: { bg: "#fdf4ff", text: "#7e22ce" },
  Toys: { bg: "#eff6ff", text: "#1e40af" },
};

function getCategoryStyle(name) {
  return CATEGORY_COLORS[name] || CATEGORY_COLORS.default;
}

const ProductList = ({ products }) => {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
      gap: "16px",
      width: "100%",
    }}>
      {products.map(product => {
        const catName = product.category?.name || "General";
        const catStyle = getCategoryStyle(catName);

        return (
          <div
            key={product.id}
            style={{
              background: "#fff",
              border: "1.5px solid #f0f0f0",
              borderRadius: "10px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              transition: "border-color 0.18s, transform 0.18s",
              cursor: "pointer",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "#2563eb";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "#f0f0f0";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Product image */}
            <div style={{ position: "relative" }}>
              <img
                src={product.imageUrl || `https://placehold.co/600x400/${catStyle.bg.replace("#", "")}/${catStyle.text.replace("#", "")}?text=Product`}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "210px",
                  objectFit: "cover",
                  display: "block",
                  background: catStyle.bg,
                }}
              />
            </div>

            {/* Card body */}
            <div style={{
              padding: "14px 16px",
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }}>
              {/* Category badge */}
              <span style={{
                display: "inline-block",
                alignSelf: "flex-start",
                background: catStyle.bg,
                color: catStyle.text,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.4px",
                padding: "3px 9px",
                borderRadius: "4px",
                marginBottom: "8px",
              }}>
                {catName}
              </span>

              {/* Name */}
              <h6 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                fontWeight: 800,
                color: "#111",
                lineHeight: 1.25,
                margin: "0 0 6px",
              }}>
                {product.name}
              </h6>

              {/* Description */}
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                color: "#999",
                lineHeight: 1.6,
                flex: 1,
                margin: 0,
              }}>
                {product.description}
              </p>

              {/* Footer */}
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "14px",
                paddingTop: "12px",
                borderTop: "1.5px solid #f5f5f5",
              }}>
                {/* Price */}
                <div>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "18px",
                    fontWeight: 800,
                    color: "#111",
                    lineHeight: 1,
                  }}>
                    ${product.price}
                  </div>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "10px",
                    color: "#bbb",
                    marginTop: "2px",
                  }}>
                    Free shipping
                  </div>
                </div>

                {/* Add to cart */}
                <button
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    padding: "8px 16px",
                    borderRadius: "7px",
                    border: "none",
                    background: "#2563eb",
                    color: "#fff",
                    cursor: "pointer",
                    transition: "background 0.15s, transform 0.1s",
                  }}
                  onMouseEnter={e => e.target.style.background = "#1d4ed8"}
                  onMouseLeave={e => e.target.style.background = "#2563eb"}
                  onMouseDown={e => e.target.style.transform = "scale(0.96)"}
                  onMouseUp={e => e.target.style.transform = "scale(1)"}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;