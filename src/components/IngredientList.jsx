const IngredientList = ({ availableIngredients, addIngredientToStack }) => {
    return (
      <ul>
        {availableIngredients.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => addIngredientToStack(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default IngredientList;