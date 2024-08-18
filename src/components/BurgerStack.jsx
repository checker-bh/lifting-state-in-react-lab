const BurgerStack = ({ stack, removeIngredientFromStack }) => {
    return (
      <ul>
        {stack.length === 0 ? (
          <li>No Ingredients</li>
        ) : (
          stack.map((ingredient, index) => (
            <li key={index} style={{ backgroundColor: ingredient.color }}>
              {ingredient.name}
              <button onClick={() => removeIngredientFromStack(index)}>X</button>
            </li>
          ))
        )}
      </ul>
    );
  };
  
  export default BurgerStack;