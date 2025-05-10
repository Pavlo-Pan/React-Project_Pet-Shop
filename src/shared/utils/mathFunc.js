export function calcDiscountPercent(price, newPrice) {
    if (newPrice == null || price === 0) return null;
    return Math.round((1 - newPrice / price) * 100);
}
export function getFinalPrice(price, newPrice) {
    return newPrice != null ? newPrice : price;
}