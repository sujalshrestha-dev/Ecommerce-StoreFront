const ProductList = ({ products }) => {
  return (
    <div className="row g-3">
      {products.map(product => (
        <div className="col-lg-4 col-md-6 col-sm-12" key={product.id}>
          <div
            style={{
              background: "#fff",
              border: "1.5px solid #f0f0f0",
              borderRadius: "12px",
              overflow: "hidden",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              transition: "border-color 0.2s, transform 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "#ff5c35";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "#f0f0f0";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Image with left accent bar */}
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "5px",
                height: "100%",
                background: "#ff5c35",
                zIndex: 1,
              }} />
              <img
                src={product.imageUrl || "https://placehold.co/600x400/f5f5f5/111?text=Product"}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            {/* Body */}
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
                background: "#111",
                color: "#fff",
                fontFamily: "'Barlow', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                padding: "3px 9px",
                borderRadius: "4px",
                marginBottom: "10px",
              }}>
                {product.category?.name || "General"}
              </span>

              {/* Name */}
              <h6 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "20px",
                fontWeight: 700,
                color: "#111",
                lineHeight: 1.2,
                margin: "0 0 6px",
                textTransform: "uppercase",
                letterSpacing: "-0.3px",
              }}>
                {product.name}
              </h6>

              {/* Description */}
              <p style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "13px",
                color: "#888",
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
                borderTop: "1.5px solid #f0f0f0",
              }}>
                <span style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "22px",
                  fontWeight: 900,
                  color: "#ff5c35",
                  letterSpacing: "-0.5px",
                }}>
                  ${product.price}
                </span>

                <button
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    padding: "7px 16px",
                    borderRadius: "6px",
                    border: "none",
                    background: "#111",
                    color: "#fff",
                    cursor: "pointer",
                    transition: "background 0.15s, transform 0.1s",
                  }}
                  onMouseEnter={e => {
                    e.target.style.background = "#ff5c35";
                  }}
                  onMouseLeave={e => {
                    e.target.style.background = "#111";
                  }}
                  onMouseDown={e => {
                    e.target.style.transform = "scale(0.96)";
                  }}
                  onMouseUp={e => {
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;