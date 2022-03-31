export function bookById() {
    return {id: 1, name: "Malcom Gladwell", authorName: "Outliers", price: {currency: 'INR', amount: 200}};
}

export function bookByIdWithInventoryNotAvailable() {
    return {
        id: 5,
        name: "Arabian Nights",
        authorName: "Sir Richard Burton",
        price: {
            "currency": "INR",
            "amount": 700.0
        },
        bookImageUrl: "https://images-na.ssl-images-amazon.com/images/I/81cedjKnBYS.jpg",
        quantityAvailable: 0,
        bookReviewList: [
            {
                id: 5,
                reviewDescription: "The pages are average but let's be honest, we don't buy books because of the quality of the pages. Absolutely wonderful.",
                rating: 4.5,
                user: {
                    id: "0",
                    email: "guest@gmail.com"
                }
            }
        ]
    }
}

export function bookByIdWithInventoryAvailable() {
    return {
        id: 5,
        name: "Arabian Nights : Second Edition",
        authorName: "Sir Richard Burton",
        price: {
            "currency": "INR",
            "amount": 700.0
        },
        bookImageUrl: "https://images-na.ssl-images-amazon.com/images/I/81cedjKnBYS.jpg",
        quantityAvailable: 4,
        bookReviewList: [
            {
                id: 5,
                reviewDescription: "The pages are average but let's be honest, we don't buy books because of the quality of the pages. Absolutely wonderful.",
                rating: 4.5,
                user: {
                    id: "0",
                    email: "guest@gmail.com"
                }
            }
        ]
    }
}
