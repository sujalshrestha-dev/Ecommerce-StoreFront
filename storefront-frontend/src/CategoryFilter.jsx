const CategoryFilter = ({ categories, onSelect }) => {
  return (
    <select
      id="categorySelect"
      onChange={(e) => onSelect(e.target.value)}
      style={{
        flexShrink: 0,
        width: "170px",
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
      <option value="">All categories</option>
      {categories.map(category => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;