# বাজার দর (BazarDor)

BazarDor is a responsive web application for exploring essential product prices across different markets in Bangladesh and comparing price differences between markets.

## Overview

**BazarDor (বাজার দর)** helps users view the prices of everyday products and compare prices across multiple markets. It provides product price information, price change indicators, and market-level comparisons in one place.

The application is designed to work on mobile, tablet, and desktop devices. It also includes authentication and profile management.

## Key Features

- **Product Price Information:** View the prices of essential products.
- **Market Price Comparison:** Compare the prices of products across multiple markets.
- **Price Change Indicators:** See whether product prices have increased or decreased.
- **Product Sorting:** Organize products using the available sorting options.
- **Authentication and Profile Management:** Sign in and sign up using email/password or Google/GitHub OAuth, with profile management support.
- **Responsive Design:** Use the application on mobile, tablet, and desktop screens.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- MongoDB
- External API
- Email/Password Authentication
- Google OAuth
- GitHub OAuth

## User Interface

- Responsive layout for different screen sizes
- Bengali-language product information and dates
- Price increase and decrease indicators
- Toast notifications for relevant actions
- Loading feedback during supported actions

## Project Structure

The project uses the Next.js App Router. The following is a simplified example of the project structure; update it to match the actual folders in your project.

```text
BazarDor/
├── public/             # Static assets
├── src/
│   └── app/            # Application pages and layouts
├── .env.local          # Local environment variables
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
```

## Data and Authentication

- Product and market information is retrieved from an external API.
- Authentication supports email/password sign-in and sign-up.
- Google and GitHub OAuth authentication are supported.
- MongoDB is used as the database.
