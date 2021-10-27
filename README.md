# My website

The webpage is deployed at [https://malmqvist.it/](https://malmqvist.it/)

## Deployment

The website is hosted and deployed using [Netlify](https://www.netlify.com/).

To build and deploy the website, simply merge your PR to the `master` branch. The CI pipeline is set up using Netlify's Github integration

## Noteworthy dependencies

### Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/) is used for styling.

Config can be found in [tailwind.config.js](tailwind.config.js)

### craco

This project uses [@craco/craco](https://github.com/gsoft-inc/craco) instead of react-scripts, as Create React App do not support overriding PostCSS configuration natively, which is needed to use Tailwind CSS properly.

Config can found in [craco.config.js](craco.config.js)

## License

The code is Copyright of Mikael Malmqvist and licensed under the MIT license
