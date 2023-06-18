## Shopping Cart app

A real-life shopping cart application built with React/Typescript/Vitest.

[//]: # (>_I have written a tutorial about how I did this. You can find it [here]&#40;https://www.mihailgaberov.com/&#41; or [here]&#40;https://www.freecodecamp.org/news/&#41;._)


<hr />

[![Shopping Cart CI](https://github.com/mihailgaberov/shopping-cart-app/actions/workflows/main.yml/badge.svg)](https://github.com/mihailgaberov/shopping-cart-app/actions/workflows/main.yml)

## Tech stack
- React / Typescript / Vite
- SASS / CSS Modules
- react-testing-library / Vitest

### Screenshots (animated)
Desktop view
![Desktop](https://github.com/mihailgaberov/shopping-cart-app/blob/main/screenshots/desktop.gif)

Mobile view
![Mobile](https://github.com/mihailgaberov/shopping-cart-app/blob/main/screenshots/mobile.gif)

## Application features:
The Shopping Cart consists of two pages: the product list page and the cart page

### I. Header
1. The header component contains the application's logo on the left side, which is clickable and points to the product list page
2. The header component contains the application's cart widget, which represents a cart icon with a number, signifying the count of the products added in the cart
3. The header component is auto-shrinkable, which means whenever the user scrolls downs the header and its elements size is reduced
4. The header component supports certain degree of opacity, which adds up to the look and feel of the app and also allows better visibility for the users

### II. Product List page
1. The product list page lists all available products, displaying each product's thumbnail image, title, price (formatted as GBP) and a button for adding it to the cart
2. The product list page is usable on both desktop and mobile devices, whereas on desktop it leverages three items per row grid, on mobile view is two or one, depending on the viewport width

### III. Cart page
1. The cart page lists all products that are added to the cart, displaying each product's thumbnail image, title and an option for updating the desired quantity
2. The logic of the quantifier component allows to add as many items as the user wants, but if the user decreases the count to zero, the product will be removed from the cart
3. The cart page displays the total price of all items added, formatted as GBP, i.e. £100.23, on the bottom of the page, right after the list with all items 

### IV. Footer
1. The footer component displays social media links and copyright info, as well as the current version of the application

### Demo
:star: [Shopping Cart App](https://shopping-cart-app-coral.vercel.app/) :star:


### Possible Improvements
- Add item price in the cart page for better visibility
- Add small animations to improve the UX, for example shaking the cart icon when a product is being added (or vibrating when used on mobile device)
- Add options for registering and login, and saving choices for later
- Add rating system where user can rate each product
- Add option for leaving comments/reviews

### Running the app locally

To run the app, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed.
2. Install [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable/).
3. From the project folder, execute the following commands:

To install dependencies:
```shell
  yarn
```
To run the app:

```shell
  yarn dev
```

To run the tests:

```shell
  yarn test
```

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=mihailgaberov/shopping-cart-app&type=Date)](https://star-history.com/#mihailgaberov/shopping-cart-app&Date)

