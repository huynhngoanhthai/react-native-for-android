exports.currencyFormat = (num) => {
  let currentValue = num;
  if (isNaN(currentValue)) {
    currentValue = +currentValue;
  }
  return (
    currentValue.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "đ"
  );
};
