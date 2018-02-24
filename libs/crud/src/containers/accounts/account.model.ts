import { Entity } from '@nx-starter-kit/shared';

export class Account implements Entity {
  constructor(
    public id: number = 0,
    public first_name?: string,
    public last_name?: string,
    public name?: string,
    public gender?: Gender,
    public age?: number,
    public email?: string,
    public phone?: string,
    public company?: string,
    public address?: Address
  ) {}
}

export class Address {
  constructor
  (
    public street?: string,
    public city?: string,
    public state?: string,
    public zip?: string
  ) {}
}

export enum Gender {
  male = 'make',
  female = 'female'
}
