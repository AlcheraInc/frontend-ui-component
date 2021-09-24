# Frontend Storybook

## Development server

Run `npm run storybook` for a dev server. Navigate to `http://localhost:6006/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build-storybook` to production build the project. The build artifacts will be stored in the `docs` directory.

## Deploy

Run `npm run deploy-storybook` to manually deploy the project on github pages.

Otherwise, if changes are made under `stories/**` and/or `src/**` and pushed to `master` branch, github actions will automatically build and deploy.

## NPM Publish

```
npm version patch
git push --tags origin master
```

Github pages: https://alcherainc.github.io/frontend-ui-component/

Design pages: https://design.alcherainc.com/

NPM pages: https://www.npmjs.com/package/alchera-ui-component
