export const formatDate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
};

export const guessTotal = (items) => items?.map(
    (item) => item.price * item.quantity)?.reduce((a, b) => a + b, 0)
