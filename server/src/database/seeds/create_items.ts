import Knex from 'knex';

export async function seed(knex: Knex){
  await knex('items').insert([
    { title: 'Tag', image: 'TAG.png' },
  ]);
};