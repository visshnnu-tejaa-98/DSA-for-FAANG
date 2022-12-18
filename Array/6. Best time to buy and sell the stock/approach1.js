// here indexes are days
//                  1  2  3  4  5  6
let stock_prices = [7, 1, 5, 3, 6, 4];

const maxProfit = (stock_prices) => {
  let max_profit = 0;
  for (let i = 0; i < stock_prices.length; i++) {
    for (let j = i + 1; j < stock_prices.length; j++) {
      if (stock_prices[i] < stock_prices[j]) {
        max_profit = Math.max(max_profit, stock_prices[j] - stock_prices[i]);
      }
    }
  }
  return max_profit;
};

console.log(maxProfit(stock_prices));

// Time Complexity: (n*n)
