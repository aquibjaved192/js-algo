/*
  Given an array of stock prices,
  find the minimum buy price and the maximum sell price
  that produce the greatest profit.
*/

function maxProfit(arr) {
	let min_buy = arr[0];
  let max_sell = arr[0];
  let current_buy = arr[0];
  let max_profit = 0;
  for(const price of arr) {
  	current_buy = Math.min(current_buy, price);
    const profit = price - current_buy;
    if(profit > max_profit) {
    	min_buy = current_buy;
      max_profit = profit;
      max_sell = price;
    }
  }
  return [min_buy, max_sell]
}

module.exports = maxProfit;