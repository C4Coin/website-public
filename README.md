# website-public

The main C4Coin Public facing website, providing sales, marketing, and public relations information.

* `develop` — [insert CircleCI badge]
* `master` — [insert CircleCI badge]

## Functional Requirements

1. Provide a curriculum (funnel) for understanding the C4Coin project
2. Provide an interactive/live development roadmap

  - Represents progress of section 4.5.3 of the whitepaper
  - Five Milestones

3. Display C4Coin related press and press releases
4. Drive email list sign ups (to be clarified with PR team)

  - via CRM or custom built system?

5. Drive social media followers (to be clarified with PR team)
6. Content Management System (CMS) integration

  Q:  Will the CMS control only the blog, or being able to reorganise the entire site?

7. The C4Coin team
8. Contact information
9. Legal information

Comments: This site is relatively simple because there are no public user accounts, only internal.

## Development

The site will be built using `react-create-app` as a base and will conform to the general coding standards common to all of the C4Coin sites.

### Development Prerequisites

* [NodeJS](htps://nodejs.org), version 9.7.1 or better (I use [`nvm`](https://github.com/creationix/nvm) to manage Node versions — `brew install nvm`.)
* [Docker](https://www.docker.com) (Use [Docker for Mac](https://docs.docker.com/docker-for-mac/), not the homebrew version)
* [Access to the C4Coin Jira](https://c4coin.atlassian.net)
* [requirements google doc](https://docs.google.com/document/d/1s8kTfWc2VzSOXft3Zky7qowFLgNo9YIWEHuVV09LWXs)

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
