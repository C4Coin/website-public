# website-public

The main C4Coin Public facing website

* `develop` — [insert CircleCI badge]
* `master` — [insert CircleCI badge]

## Functional Requirements

_add details_

## Development

_add details_

### Development Prerequisites

* [NodeJS](htps://nodejs.org), version 9.5+ (I use [`nvm`](https://github.com/creationix/nvm) to manage Node versions — `brew install nvm`.)
* [Docker](https://www.docker.com) (Use [Docker for Mac](https://docs.docker.com/docker-for-mac/), not the homebrew version)
* _add other details_

### Initialisation

    npm install

### Testing

    npm test

or with code coverage

    npm run test:cov

### Linting

    npm run lint

## Deployment

The site will be deployed automatically to [netlify](https://netlify.com) once CircleCI has cleared a merge to either `develop` (staging server) or `master` (production).

## Contributing

Please see the [contributing notes](CONTRIBUTING.md).
