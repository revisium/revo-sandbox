import Ajv from 'ajv/dist/2020.js';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
export const schema = require('../schema/greet.schema.json');

const ajv = new Ajv();
const validate = ajv.compile(schema);

export function greet(input) {
  if (!validate(input)) {
    const messages = validate.errors.map(e => `${e.instancePath || '(root)'} ${e.message}`).join('; ');
    throw new Error(`Invalid input: ${messages}`);
  }
  const { name, greeting = 'Hello' } = input;
  return `${greeting}, ${name}!`;
}
