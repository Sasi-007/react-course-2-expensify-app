const book = {
    title: 'Ego is the enemy',
    author: 'Ryan holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

const items = ['Coffee (hot)', '2.456', '3.45', '5.6'];

const [item, , price = '0.00',] = items;

console.log(`A Medium ${item} costs $${price}`);