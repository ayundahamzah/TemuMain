'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Games', [{
        Game_name: 'The Evil Within 2',
        Thumbnail: '/images/evil.jpg',
        Description:`Detective Sebastian Castellanos has lost his daughter, Lily. To save her, he must descend into the nightmarish world of STEM.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Game_name: 'Cuphead',
        Thumbnail: '/images/cuphead.jpg',
        Description:`Cuphead is a classic run and gun action game heavily focused on boss battles. Do you have what it takes?`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Game_name: 'Okami',
        Thumbnail: '/images/okami.jpg',
        Description:`Okami tells the story of a mythical sun god who sets out to restore a dismal world, decimating the forces of evil who stand in the way by commanding the elements and mythical abilities the deity possesses.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Game_name: 'Shadow of the Colossus',
        Thumbnail: '/images/sotc.jpg',
        Description:`Shadow of the Colossus is a majestic journey through ancient lands. With your trusty horse at your side, you'll explore spacious lands and unearth anicent monsters called Colossus. `,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Game_name: 'Tekken 7',
        Thumbnail: '/images/tekken.jpg',
        Description:`Discover the epic conclusion of the long-time clan warfare between members of the Mishima family.`,
        createdAt: new Date(),
        updatedAt: new Date(), }] );

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
