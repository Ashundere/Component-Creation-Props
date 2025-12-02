# React Component Creation and Props

These are a set of Typescript React reusable components 

### Description

These reusable components use Typescript, React, and Tailwind.css to display information on the UI.

## Getting Started

### Dependencies
None!

### Authors

Devon Jones

Github: [@Ashundere](https://github.com/Ashundere)

## Version History

0.1
-Initial Release


## Acknowledgments

JS MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript

W3Schools: https://www.w3schools.com/

Tailwindcss: https://tailwindcss.com/docs/installation/using-vite

Typescript/React Cheatsheet: https://github.com/typescript-cheatsheets/react


## Reflection

### How did you handle optional props in your components?
I used optional chaining to prevent errors should the function be undefined.
### What considerations did you make when designing the component interfaces?
I made sure to add in all items that were needed to ensure that the props would have what they needed.
### How did you ensure type safety across your components?
I used typescript interfaces to define the types for each item in the interface, then exported the interface into the modules as needed.
### What challenges did you face when implementing component composition?
I had some difficulty when it came to the onClick function of the buttons for add to cart and edit user. I was struggling to get the onClick to run the respective "onAddToCart" and "onEdit" functions, but I realized I was missing a curly bracket and was able to fix that fairly quickly. I also realized that I needed to use optional chaining as there was an error that kept telling me that the functions were possibly undefined.