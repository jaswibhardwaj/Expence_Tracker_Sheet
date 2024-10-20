## Expense Tracker App

A simple expense tracker web application built with HTML, CSS, and JavaScript that allows users to add, view, and delete their expenses along with a total expense calculation.

### Features

-   **HTML:** Used for structuring the webpage with forms for inputting expense details and dynamic lists for displaying expenses.
-   **CSS:**  Provides styling for a user-friendly and visually appealing interface using Grid and Flexbox for layout and media queries for responsiveness across various screen sizes.
-   **JavaScript:** Implements the core functionality of the application, including:
    -   Handling user inputs (expense name, amount, date, and category).
    -   Adding new expenses to the list.
    -   Calculating and displaying the total expenses.
    -   Deleting individual expenses from the list.
    -   Local storage for persisting expense data.

### Functionality

1.  **Adding Expenses:**
    -   Users can input the expense name, amount, date, and choose a category.
    -   Clicking the "Add Expense" button adds the expense to the list.

2.  **Viewing Expenses:**
    -   Added expenses are displayed in a list format, each showing:
        -   Expense Name
        -   Amount
        -   Date
        -   Category

3.  **Deleting Expenses:**
    -   Each listed expense has a "Delete" button.
    -   Clicking the "Delete" button removes the corresponding expense.

4.  **Total Expense Calculation:**
    -   The application dynamically calculates and displays the total amount of all added expenses.

### Data Persistence

-   The application uses the browser's `localStorage` to store expense data.
-   This ensures that the expenses are saved even after the browser window is closed and reopened.

### How to Use

1.  Open the `index.html` file in a web browser.
2.  Start adding your expenses using the provided form.
3.  View, delete, and manage your expenses easily.
4.  Your expenses will be saved and loaded automatically.

### Future Enhancements

-   Implementing user authentication.
-   Adding features to edit existing expenses.
-   Allowing users to export their expense data.
-   Creating charts and visualizations to represent spending habits.

This README provides a concise overview of the Expense Tracker application.
