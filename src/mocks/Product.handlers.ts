import { BASE_URL } from '@crea/shared/utils/constants/Contants';
import { http, HttpResponse } from 'msw';

export const productHandler = [
  http.get(`${BASE_URL}/products`, async () => {
    const products = [
      {
        id: 1,
        name: 'Product 1',
        price: 29.99,
        rating: 4,
        thumbnail: 'https://picsum.photos/256?1',
      },
      {
        id: 2,
        name: 'Product 2',
        price: 49.99,
        rating: 5,
        thumbnail: 'https://picsum.photos/256?2',
      },
      {
        id: 3,
        name: 'Product 3',
        price: 19.99,
        rating: 3,
        thumbnail: 'https://picsum.photos/256?3',
      },
    ];

    return HttpResponse.json(products, { status: 200 });
  }),

  http.get(`${BASE_URL}/product/:id`, async ({ params }) => {
    const id = Number(params.id);

    const productDetails = {
      1: {
        name: 'Product 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 29.99,
        arrival: new Date().toISOString(),
        rating: 4,
        thumbnail: 'https://picsum.photos/256?1',
        images: [
          'https://picsum.photos/800/400?1',
          'https://picsum.photos/800/400?2',
          'https://picsum.photos/800/400?3',
          'https://picsum.photos/800/400?4',
        ],
        comments: [
          {
            id: 1,
            user: 'user',
            rating: 3,
            comment: 'Comment 1',
          },
          {
            id: 2,
            user: 'user 2',
            rating: 4,
            comment: 'Comment 2',
          },
          {
            id: 1,
            user: 'user 3',
            rating: 5,
            comment: 'Comment 3',
          },
        ],
      },

      2: {
        name: 'Product 2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 49.99,
        arrival: new Date().toISOString(),
        rating: 5,
        thumbnail: 'https://picsum.photos/256?2',
        images: [
          'https://picsum.photos/800/400?1',
          'https://picsum.photos/800/400?2',
          'https://picsum.photos/800/400?3',
          'https://picsum.photos/800/400?4',
        ],
        comments: [
          {
            id: 1,
            user: 'user',
            rating: 5,
            comment: 'Comment 1',
          },
          {
            id: 2,
            user: 'user 2',
            rating: 5,
            comment: 'Comment 2',
          },
          {
            id: 1,
            user: 'user 3',
            rating: 5,
            comment: 'Comment 3',
          },
        ],
      },
      3: {
        name: 'Product 3',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 19.99,
        arrival: new Date().toISOString(),
        rating: 3,
        thumbnail: 'https://picsum.photos/256?3',
        images: [
          'https://picsum.photos/800/400?1',
          'https://picsum.photos/800/400?2',
          'https://picsum.photos/800/400?3',
          'https://picsum.photos/800/400?4',
        ],
        comments: [
          {
            id: 1,
            user: 'user',
            rating: 2,
            comment: 'Comment 1',
          },
          {
            id: 2,
            user: 'user 2',
            rating: 4,
            comment: 'Comment 2',
          },
          {
            id: 1,
            user: 'user 3',
            rating: 3,
            comment: 'Comment 3',
          },
        ],
      },
    };

    return HttpResponse.json(
      productDetails[id as keyof typeof productDetails],
      { status: 200 }
    );
  }),
];
