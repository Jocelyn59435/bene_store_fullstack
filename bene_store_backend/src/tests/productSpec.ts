import { ProductStore } from '../models/product';

const store = new ProductStore();

describe('Product Model', () => {
  beforeAll(function () {
    spyOn(store, 'index').and.returnValue(
      Promise.resolve([
        {
          id: 1,
          product_name: 'Lindt Dark Choc',
          product_price: 5.4,
          product_category: 'Snack',
          src: 'assets/1.jpg',
          product_description:
            'The Lindt Master Chocolatiers have created this masterpiece using whole hazelnuts, roasted to perfection, mixed with crunchy caramelised hazelnut pieces surrounded by smooth dark chocolate.',
        },
        {
          id: 2,
          product_name: 'Bakery Fairy Cupcakes',
          product_price: 4.5,
          product_category: 'Bakery',
          src: 'assets/2.jpg',
          product_description:
            'May Contain TREE NUTS, May Contain PEANUTS, May Contain SULPHITES, Contains CEREALS CONTAINING GLUTEN, Contains MILK, Contains EGG, Contains SOY, May Contain SESAME',
        },
        {
          id: 3,
          product_name: 'Schweppes Soda Water',
          product_price: 2.5,
          product_category: 'Drink',
          src: 'assets/3.jpg',
          product_description:
            'Schweppes Soda Water is available in 4x300mL glass packs, 1.1L PET and 2L PET.',
        },
        {
          id: 4,
          product_name: 'Toscano Chocolate Crepes',
          product_price: 4.7,
          product_category: 'Bakery',
          src: 'assets/4.jpg',
          product_description:
            'French Crêpes with a chocolate & Hazelnut filling. Made in the region of Brittan, the origin of French Crêpes.',
        },
        {
          id: 5,
          product_name: 'Banana Bread Slices 5pack',
          product_price: 4.7,
          product_category: 'Bakery',
          src: 'assets/5.jpg',
          product_description:
            'Less sugar but same great banana taste, the perfect healthier snack on the go.',
        },
        {
          id: 6,
          product_name: 'Frozen Pink Dragonfruit Chunks',
          product_price: 2.8,
          product_category: 'Frozen',
          src: 'assets/6.jpg',
          product_description:
            'Take up your breakfast a notch higher with Creative Gourmet Frozen Pink Dragonfruit Chunks. Make your own dragonfruit smoothies or mix your granola with some dragonfruit chunks for a delicious, fruity taste.',
        },
        {
          id: 7,
          product_name: 'Greek Style Natural Yoghurt',
          product_price: 5.5,
          product_category: 'Dairy',
          src: 'assets/7.jpg',
          product_description:
            'Farmers Union Greek style yogurt is perfect with breakfast, in cooking or as a snack. This versatile, healthy and all natural Greek style yogurt will Make Anything Zing! With the goodness of calcium, no artificial colours, flavours or preservatives.',
        },
      ])
    );
  });

  it('index method should return a list of items', async () => {
    const result = await store.index();
    expect(result.length).toBeGreaterThanOrEqual(1);
  });
});
