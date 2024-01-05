import { registerAs } from '@nestjs/config';

export default registerAs('coffes', () => ({
  foo: 'bar',
}));
