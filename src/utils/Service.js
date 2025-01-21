export const services = [
  {
    id: '1',
    title: 'Plombier',
    provider: 'Said Gherbi',
    rating: 4.8,
    totalReviews: '(156 Avis)',
    image: require('../assets/plumber.png'),
    providerImage: require('../assets/said.png'),
    profileImage:require('../assets/provider.png'),
    ordersCompleted: 155,
    experience: '4 Years',
    bio: "Expert en plomberie avec 4 ans d'expérience. Réactif et fiable.",
  },
  {
    id: '2',
    title: 'Femme de ménage',
    provider: 'Hanane Zouani',
    rating: 4.9,
    totalReviews: '(124 Avis)',
    image: require('../assets/cleaner.png'),
    providerImage: require('../assets/hanane.png'),
    profileImage:require('../assets/provider.png'),
    ordersCompleted: 124,
    experience: '5 Years',
    bio: "Femme de ménage professionnelle offrant des services impeccables.",
  },
];

export const messages = [
    {
      id: 1,
      text: "Nice. I don't know why people get all worked up about hawaiian pizza.",
      isUser: false
    },
    {
      id: 2,
      text: "Nice. I don't know why people get all worked up about hawaiian pizza.",
      isUser: true
    },
    {
      id: 3,
      text: "Nice. I don't know why people get all worked up about hawaiian pizza.",
      isUser: false
    }
  ];

export  const reviews = [
    {
      id: 1,
      user: {
        name: 'John Peter',
        image: require('../assets/user1.png'),
      },
      date: '12/12/2024',
      rating: 5,
      comment: 'Really exceeded my expectations! Quick, reliable, and fixed my plumbing issue with precision. Highly recommended!',
    },
    {
      id: 2,
      user: {
        name: 'Craig',
        image:require('../assets/user2.png'),
      },
      date: '12/12/2024',
      rating: 4,
      comment: 'Reliable and professional service. Would hire again.',
    },
    {
      id: 3,
      user: {
        name: 'Ethan',
        image: require('../assets/user3.png'),
      },
      date: '12/12/2024',
      rating: 5,
      comment: 'Excellent service. Highly recommended!',
    },
  ];
  