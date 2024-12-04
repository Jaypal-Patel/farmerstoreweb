export const calculateDiscountedPrice = (price, discount, discountType) => {
    if (discountType === 'percent') {
      return price - (price * discount / 100);
    } else if (discountType === 'fixed') {
      return price - discount;
    } else {
      return price;
    }
  };