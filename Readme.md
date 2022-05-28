Deployed at: https://guitar-shop-five.vercel.app/
Created with [Create React App](https://github.com/facebook/create-react-app).
Used libraries: **React, Redux (RTK Queries), React Router(v6), Jest (React Testing Library)

### Pagination
Pagination displays guitar cards in the catalog (9 previews per page).
The number of pages depends on the number of guitar preview cards displayed to the user. 
The button with the page number is clickable and leads to a specific page.
The page on which the user is located is highlighted with the active state.
By default, the user is on the first page.
    
The `Next` button is used to move to the next page. The `Next` button is hidden when the user is on the last page.
The `Back` button appears when the user can go back to the previous page. When the user is on the first page, the back button should be hidden.
Each pagination page has its own unique URL.

### Reviews

3 reviews are visible on the page. The rest of the reviews are hidden until you click on the `Show more reviews` button.
Reviews in the feed are sorted from newest to latest.
When you click on the `Show more reviews` button, three more reviews are displayed in the feed.
If there are no reviews to expand, the `Show more reviews` button is hidden.
`Top` is an anchor link that takes the user back to the top of the page.

### Requirements for modal windows

1. Closing the modal window by the "X" button, by pressing the Esc key, by clicking on the overlay.
2. Focuses from the keyboard on the model window should be looped on the clickable elements of the modal window.
3. Page scrolling behind a modal window should be disabled.
4. The page behind the modal should be "darkened" according to the layout.

### Not found page

Accessing a non-existent page does not lead to errors in the application, but is correctly processed by routing. The user is redirected to a 404 page.

### Search form

When you enter a character search field, the search automatically offers suggestions in a drop-down list.
In the drop-down list, when clicking with the mouse or using the keyboard, you can select one option suggested by the search.
When you click on the proposed option, you go to the product card page of the corresponding option.
When you enter the name of a guitar in the search field, the product is searched for by a partially entered value. 
When searching, only guitars matching the search criteria are displayed in the drop-down list.
The drop-down list displays only the first four options that satisfy the search results, the rest of the options are available by scrolling down inside the drop-down list.
Search results should come out in the form in which they are on the server.
The `x` button clears the search form, resetting the result.

### Filter

When opening the catalog page, filters are not set by default.
The `Clear` button resets all previously entered filters.
Filtering occurs after the user selects the desired parameter.
Product filter includes: price, type of guitar and number of strings.
Filtering results have their own unique URL.

### Price

1. You cannot enter values less than 0 in both fields
2. When uploading to placeholders, the minimum and maximum prices are set according to the real catalog of goods.
3. If in the `from` field you enter a price less than the minimum price of the goods, then the value automatically changes to the minimum.
4. If you enter a price in the `to` field that is higher than the maximum price of the product, then the value automatically changes to the maximum.
5. The `to` field should not take on a value less than that specified in the `from` field

Depending on the options selected in Guitar Type, a choice is made in the Number of Strings. 
If the selected guitar type does not have a certain number of strings, it becomes impossible to select it.

## Basket

The Basket page displays the added products from the Catalog and the Product Card. On the cart page, you can change the quantity of an item, delete an item, see the total cost of your purchase, and apply a promotional code to receive a discount.

From the Catalog, the product is added to the basket by clicking on the `Buy` button in the product card and confirming the action in the pop-up.

By clicking on the `Buy` button, a pop-up "Add item to Cart" opens.
By clicking on the `Add to Cart` button, a pop-up "Product added successfully" opens.
By clicking `Continue shopping`, the pop-up closes and the user remains in the Catalog.
The `Buy` button changes its state in the product card. Button states displayed in UI-kit.
By clicking on the `To cart` button, you will be redirected to the Cart page.

From the Product Card, the product is added to the basket by clicking on the `Add to basket` button and confirming the action in the popup.
By clicking on the button, the pop-up “Add Product to cart” opens, and after it “Pop-up product successfully added” (similar to actions in the Catalog)
By clicking `Continue shopping` the user is redirected to the Catalog.
By clicking on “X”, the pop-up “Product added successfully” closes and the user remains on the Product card page.
The `Add to Cart` button on the Product Card page does not change its state after adding this product. 
After adding a product on the Product Card page, the state of the `Buy` button for the corresponding product on the Catalog page changes to the `In Cart` button.

When adding an item to the cart, the icon indicator with the number of items in the cart changes in the header. If there are no purchases in the cart yet, the indicator next to the icon is hidden. By clicking on the basket icon in the header, the user is taken to the basket page

The index depends on the quantity, and not on the type of product.

## Cart Page

The shopping cart page displays cards of added products
You can change the quantity of goods, but not more than 99 items. It is allowed to enter the quantity of goods by clicking on the `+` and `–` buttons and manually.
An item can be removed from the cart by clicking on `"X"` or `-` (when there is 1 item) and confirming the deletion in the popup.
By clicking on `Continue shopping`, the removal of the product is canceled and the pop-up is closed.

## Promocode

The shopping cart displays the cost of the purchase in the fields **Total** and **Payable**.
By default, the discount amount is 0 rubles and the color does not differ from other fields.
When receiving a discount, the discount amount is displayed and highlighted in red
In the field **Total** - calculation without discount
In the **Payable** field - calculation without discount, or (after applying the coupon) calculation with discount
The action on the `Checkout` button is not implemented at this stage

**Promo codes:**

`light-333`, `medium-444` or `height-555`

The user can add a promo code in the promo code field and get a discount. The discount is calculated automatically after adding a promo code to all products.
If the promo code is correct, the total amount **For payment** is recalculated and the discount amount is displayed.

The promo code field only accepts a promo code of one word and don't accept a space.
