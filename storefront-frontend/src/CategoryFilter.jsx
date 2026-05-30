const CategoryFilter = ({ categories, onSelect }) => {
  return (
    <select
      id="categorySelect"
      className="form-select w-100"
      onChange={(e) => onSelect(e.target.value)}
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