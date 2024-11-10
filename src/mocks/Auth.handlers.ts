import { BASE_URL } from '@crea/shared/utils/constants/Contants';
import { http, HttpResponse } from 'msw';

export const authHandler = [
  http.post<
    never,
    {
      username: string;
      password: string;
    }
  >(`${BASE_URL}/login`, async ({ request }) => {
    const { username, password } = await request.json();

    if (username === 'user' && password === 'user123') {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidXNlciIsImlhdCI6MTczMTE0ODU0NH0.qJkEfZ6hELITWdfDJ656mLDwwWi9xs76JPMmDYir24k';

      return HttpResponse.json({ token }, { status: 200 });
    }

    return HttpResponse.json(
      { message: 'Invalid credentials' },
      { status: 401 }
    );
  }),
];
