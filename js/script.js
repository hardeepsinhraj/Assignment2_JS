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