/**
 * Generated by orval v6.6.3 🍺
 * Do not edit manually.
 * angular-typescript-starter
 * BE
 * OpenAPI spec version: 1.0.0
 */
import type { NullableString } from './nullableString';
import type { NullableUSERTYPE } from './nullableUSERTYPE';

export interface UserUpdateReq {
  firstname?: NullableString;
  lastname?: NullableString;
  username: string;
  password: string;
  user_type?: NullableUSERTYPE;
  email: string;
}
