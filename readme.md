# Pokedex app

The Pokédex is an app created and designed to catalog and provide information regarding the various species of Pokémon featured in the Pokémon video game, anime and manga series.

## Setup

Follow the docs here [https://docs.expo.dev/get-started/installation/#requirements](https://docs.expo.dev/get-started/installation/#requirements) to make sure you have your environment ready for developing Expo apps.
On high level you'll need:

- Node
- Git
- Watchman
- Expo Go app on your mobile device

### Running the project

- `yarn install` or `npm install`
- `yarn start` or `npm start`
- Scan the qr code on the `Expo Go` app (regular Camera app on iOS device)

## Notes

This is the completed sample app after 4 hours of development time.

Given more time, it would have been worthwhile to add some additional changes.

### UX

- Search bar on the home screen
  - There aren't too many Pokemon, so in reality we could just query all Pokemon at once instead of using pagination and filter using some debounced search function on the FE.
- Sprites
  - It seems there is an accompanying package from [PokeAPI](https://github.com/PokeAPI/sprites) that provides the sprites for the Pokemon which are referred to via the API. This would give some much needed context when viewing Pokemon in the details and party screens.
- Better feedback
  - When adding and removing Pokemon from the Party, the app just displays alerts to give feedback to the user. This would clearly be better as a different UI element, i.e. a toast or modal.

### UI

Not much to add, except to note that the chosen colour pallete is rather garish and the UI elements aren't always making full use of the given space. I went for a nostalgic feel with the colours and rough layout of the original Pokedex, but the effort has fallen rather flat. There is certainly an artistic way to explore the original theme while bringing the design in line with current modern app design, unfortunately I was not able to change direction once starting due to time constraints and prioritisation.

### Technical

- Adding Redux
  - The app requires better state management; using `useState` in each screen is not at all maintainable and relying directly on AsyncStorage is tedious. Redux is the obvious choice - inserting middleware like thunks or sagas would offload the api calls from the screen, while adding redux persist would abstract away from AsyncStorage in a helpful way.

- Styled components
  - Styles are a bit all over the place and a fair number of containers are duplicated. Adding styled components would help with this by letting us export some basic styled Views which other screens can then consume.

- Theme
  - The theme that was implemented in the template for this exercise has not been utilised properly. Ideally, we would add styled components as above and use the Theme provider from there to provide our app with colours and spacing values. A dark/light theme would also be nice to properly explore with additional time.


