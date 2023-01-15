import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleSubmit(event){
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name,
      category,
    };
    onItemFormSubmit(newItem)

  }

  function handleNameChange(event){
    const itemName = event.target.value
    setName(itemName)
  }

  function handleSelectedCategory(event){
    const itemCategory = event.target.value
    setCategory(itemCategory)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleSelectedCategory}>
          <option name="Produce">Produce</option>
          <option name="Dairy">Dairy</option>
          <option name="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
