export const foodCategories = [
  'All',
  'Coffee',
  'Tea',
  'Pastries',
  'Sandwiches',
  'Salads',
  'Desserts'
];

export const foodItems = [
  // Coffee
  {
    id: 1,
    name: 'Espresso',
    category: 'Coffee',
    price: 3.50,
    description: 'Rich and bold espresso shot, perfect for coffee lovers',
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=300&h=200&fit=crop',
    popular: true
  },
  {
    id: 2,
    name: 'Cappuccino',
    category: 'Coffee',
    price: 4.25,
    description: 'Classic Italian coffee with steamed milk and foam',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=200&fit=crop',
    popular: true
  },
  {
    id: 3,
    name: 'Latte',
    category: 'Coffee',
    price: 4.75,
    description: 'Smooth espresso with steamed milk and light foam',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop',
    popular: false
  },
  {
    id: 4,
    name: 'Americano',
    category: 'Coffee',
    price: 3.75,
    description: 'Espresso diluted with hot water for a lighter taste',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=300&h=200&fit=crop',
    popular: false
  },
  {
    id: 5,
    name: 'Mocha',
    category: 'Coffee',
    price: 5.25,
    description: 'Rich espresso with chocolate syrup and steamed milk',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
    popular: true
  },

  // Tea
  {
    id: 6,
    name: 'Earl Grey',
    category: 'Tea',
    price: 3.25,
    description: 'Classic black tea with bergamot oil',
    image: 'https://images.unsplash.com/photo-1594631661960-1e9473d2e9a6?w=300&h=200&fit=crop',
    popular: false
  },
  {
    id: 7,
    name: 'Green Tea',
    category: 'Tea',
    price: 3.00,
    description: 'Fresh and light green tea with antioxidants',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=200&fit=crop',
    popular: true
  },
  {
    id: 8,
    name: 'Chamomile',
    category: 'Tea',
    price: 3.50,
    description: 'Soothing herbal tea perfect for relaxation',
    image: 'https://images.unsplash.com/photo-1597318985552-b8d5bf625b4d?w=300&h=200&fit=crop',
    popular: false
  },

  // Pastries
  {
    id: 9,
    name: 'Croissant',
    category: 'Pastries',
    price: 2.75,
    description: 'Buttery, flaky French pastry',
    image: 'https://images.unsplash.com/photo-1555507036-ab794f575c56?w=300&h=200&fit=crop',
    popular: true
  },
  {
    id: 10,
    name: 'Blueberry Muffin',
    category: 'Pastries',
    price: 3.25,
    description: 'Fresh baked muffin with juicy blueberries',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=200&fit=crop',
    popular: true
  },
  {
    id: 11,
    name: 'Danish Pastry',
    category: 'Pastries',
    price: 3.50,
    description: 'Sweet pastry with fruit filling',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop',
    popular: false
  },

  // Sandwiches
  {
    id: 12,
    name: 'Club Sandwich',
    category: 'Sandwiches',
    price: 8.50,
    description: 'Triple-decker with turkey, bacon, lettuce, and tomato',
    image: 'https://images.unsplash.com/photo-1567234669003-dce7a7a88821?w=300&h=200&fit=crop',
    popular: true
  },
  {
    id: 13,
    name: 'Grilled Cheese',
    category: 'Sandwiches',
    price: 6.75,
    description: 'Classic grilled cheese with melted cheddar',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300&h=200&fit=crop',
    popular: false
  },
  {
    id: 14,
    name: 'Veggie Wrap',
    category: 'Sandwiches',
    price: 7.25,
    description: 'Fresh vegetables wrapped in a spinach tortilla',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop',
    popular: false
  },

  // Salads
  {
    id: 15,
    name: 'Caesar Salad',
    category: 'Salads',
    price: 9.50,
    description: 'Crisp romaine lettuce with parmesan and croutons',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop',
    popular: true
  },
  {
    id: 16,
    name: 'Greek Salad',
    category: 'Salads',
    price: 8.75,
    description: 'Fresh vegetables with feta cheese and olives',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&h=200&fit=crop',
    popular: false
  },

  // Desserts
  {
    id: 17,
    name: 'Chocolate Cake',
    category: 'Desserts',
    price: 4.50,
    description: 'Rich chocolate cake with ganache frosting',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop',
    popular: true
  },
  {
    id: 18,
    name: 'Cheesecake',
    category: 'Desserts',
    price: 5.25,
    description: 'Creamy New York style cheesecake',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300&h=200&fit=crop',
    popular: true
  },
  {
    id: 19,
    name: 'Tiramisu',
    category: 'Desserts',
    price: 5.75,
    description: 'Italian dessert with coffee-soaked ladyfingers',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=200&fit=crop',
    popular: false
  }
];