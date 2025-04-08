// Smoothie class following best practices from class
class Smoothie {
    constructor(base, ingredients, size, instructions) {
        this.base = base;
        this.ingredients = ingredients;
        this.size = size;
        this.instructions = instructions;
        this.price = this.calculatePrice();
    }
  //calculate price of smoothie
    calculatePrice() {
        let basePrice = 3; 
        let sizePrice = 0;// price based on size
        if (this.size === "small") {
            sizePrice = 5.00;
        } else if (this.size === "medium") {
          sizePrice = 10;
        } else if (this.size === "large") {
          sizePrice = 15;
        }
        let ingredientCost = this.ingredients.length * 1.5; 
        return basePrice + ingredientCost + sizePrice; // total price
    }
   
    //returns a string describing the smoothie order
    describe() {
        return `A ${this.size} smoothie with ${this.base}, ingredients: ${this.ingredients.join(", ")}, Special Instructions: ${this.instructions}. Total Price: $${this.price.toFixed(2)}`;
    }
  }

 // Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("orderBtn").addEventListener("click", function () {
      let base = document.getElementById("base").value;
      let size = document.getElementById("size").value;
      let instructions = document.getElementById("instructions").value;
  
      // Get checked ingredients (using for loop instead of Array.from)
      let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
      let ingredients = [];
      for (let i = 0; i < checkboxes.length; i++) {
        ingredients.push(checkboxes[i].value);
      }
  
      // Ensure that at least one ingredient is selected
      if (ingredients.length === 0) {
        alert("Please select at least one ingredient.");
        return; // Stop execution if no ingredients are selected
      }
  
      // Create Smoothie object
      let mySmoothie = new Smoothie(base, ingredients, size, instructions);
  
      // Output the result
      let output = document.getElementById("output");
      output.innerHTML = ""; // clear previous output
      let p = document.createElement("p");
      p.textContent = mySmoothie.describe();
      output.appendChild(p);
    });
  });