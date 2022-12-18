// here indexes are days
//                  1  2  3  4  5  6
let stock_prices = [7, 1, 5, 3, 6, 4];

const maxProfit = (stock_prices) => {
  let min_price = Infinity;
  let max_profit = 0;
  for (let i = 0; i < stock_prices.length; i++) {
    min_price = Math.min(min_price, stock_prices[i]);
    max_profit = Math.max(stock_prices[i] - min_price, max_profit);
  }
  return max_profit;
};

console.log(maxProfit(stock_prices));

// Time Complexity: (n)
