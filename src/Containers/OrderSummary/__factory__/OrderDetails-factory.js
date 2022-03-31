export default function orderDetails() {
  return {
    address: {
      city: 'Tumkur',
      country: 'India',
      lineNoOne: "1'st main,",
      lineNoTwo: "3'rd cross",
      pinCode: '572103',
      state: 'Karnataka',
    },
    bookDetails: {
      authorName: 'Arthur Conan Doyle',
      bookImageUrl:
        'https://dev-bootcamp-book-shop.s3.us-east-2.amazonaws.com/default_book_cover.jpg',
      id: 2,
      name: 'Adventures of Sherlock Holmes',
      price: {
        amount: 1200,
        currency: 'INR',
      },
    },
    quantity: 2,
  };
}
