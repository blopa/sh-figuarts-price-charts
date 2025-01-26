# SH Figuarts Price Charts

This project provides a web application to explore and visualize the price history of SH Figuarts products. Using `Vue.js`, `Chart.js`, and `Tailwind CSS`, it allows users to search for items, select a product, and view its detailed price history and other data.

## Features

- **Search Functionality**: Filter products by title.
- **Dynamic Data Loading**: Load product details dynamically based on selection.
- **Price History Visualization**: View price trends over time using interactive charts.
- **Clean UI**: Built with Tailwind CSS for a responsive and visually appealing design.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/figuarts-price-charts.git
   cd figuarts-price-charts
   ```
2. Place your data files in the `asin` folder:
    - `asin/index.json` (contains all ASIN codes and product titles).
    - Individual JSON files for each product (e.g., `asin/B0CZQFKB41.json`).

3. Open the `index.html` file in your browser to view the app.

## Data Structure

The project requires the following data files:

- **`asin/index.json`**: Contains an array of objects with `asin` and `title` properties:
  ```json
  [
    {
      "asin": "B0CZQFKB41",
      "title": "Product Name 1"
    },
    {
      "asin": "B0CZQG8GBC",
      "title": "Product Name 2"
    }
  ]
  ```

- **`asin/<asin-code>.json`**: Contains detailed information and price history for each product:
  ```json
  {
    "title": "Product Name",
    "GTIN": "1234567890123",
    "monthlySold": 300,
    "listedSince": 7008960,
    "itemHeight": 140,
    "itemLength": 112,
    "itemWidth": 25,
    "itemWeight": -1,
    "parsedPriceHistory": {
      "amazonPriceHistory": [...],
      "marketplaceNewPriceHistory": [...]
    }
  }
  ```

## License

This project is licensed under the **Creative Commons Attribution-NoDerivatives 4.0 International License (CC BY-ND 4.0)**.

### Summary of the License:
- **Attribution**: You must give appropriate credit, provide a link to the license, and indicate if changes were made.
- **No Derivatives**: If you remix, transform, or build upon the material, you may not distribute the modified material.
- **No Additional Restrictions**: You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.

For more details, see the full license: [CC BY-ND 4.0](https://creativecommons.org/licenses/by-nd/4.0/).

## Contributing

If you find any issues or have suggestions, feel free to open an issue on the repository.

## Acknowledgments

- **Vue.js**: For building the interactive UI.
- **Chart.js**: For visualizing the price trends.
- **Tailwind CSS**: For styling the application.

---

Feel free to reach out if you have any questions about the project!
