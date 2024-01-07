# Contributing to The Openary

## Getting Started
### Fork and clone
```bash
git clone git@github.com:<user>/<scaling-pancake>
```

### Install dependencies
You will need `node 20.10.0` to create your local development environment.
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the NextJS development server
   ```bash
   npm run dev
   ```


## Before Commits
__Note: precommit hooks are currently not configured in the repository. Please follow these instructions before committing__
1. Run `prettier` to format.
2. Run `next lint` (or `npm run lint`) and ensure there are no errors
3. Run `vitest` and ensure there are no errors

## Pull Requests
- Be descriptive. What changes have you made?
- Reference any issues created related to the pull request