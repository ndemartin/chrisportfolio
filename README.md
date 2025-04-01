# Chris DeMartin Portfolio

A modern, professional portfolio website showcasing Chris DeMartin's experience as a Full-Stack Application Engineer in medical technology, particularly in Electronic Medical Records (EMR) systems.

## Features

- Clean, modern design with a focus on readability
- Responsive layout that works on all devices
- Smooth animations and transitions
- Detailed project showcase
- Contact form for potential collaborations
- Integration with LinkedIn profile

## Technologies Used

- React with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ChrisPortfolio.git
cd ChrisPortfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`.

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build output will be in the `build` directory.

## Deployment

This project is configured for deployment on GitHub Pages. To deploy:

1. Add the following to your `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/ChrisPortfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

2. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
# or
yarn add -D gh-pages
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
# or
yarn deploy
```

## Customization

- Update the content in the respective components in the `src/pages` directory
- Modify the color scheme in `tailwind.config.js`
- Add your own images to the `public` directory
- Update the contact form handling in `src/pages/Contact.tsx`

## License

This project is licensed under the MIT License - see the LICENSE file for details. 