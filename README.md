# Tranzact Payment App

This is a monorepo for the Tranzact Payment App, a comprehensive solution for managing transactions, user accounts, and merchant interactions. It leverages modern web technologies and best practices to deliver a robust and scalable application.

## Project Structure

The project is organized into several packages and applications:

### Apps

- **user-app**: Frontend for users, built with [Next.js](https://nextjs.org).
- **merchant-app**: Frontend for merchants, built with [Next.js](https://nextjs.org).
- **bank-webhook**: Webhook service for handling bank-related events.
- **bank-server**: Backend server for banking operations.

### Packages

- **db**: Database schema and migrations using Prisma.
- **eslint-config**: Shared ESLint configurations.
- **store**: State management utilities.
- **typescript-config**: Shared TypeScript configurations.
- **ui**: Shared React component library.

## Technologies Used

- **TypeScript**: Static type checking.
- **Next.js**: Server-side rendered React applications.
- **Prisma**: Database schema management and migrations.
- **ESLint**: Code linting.
- **Prettier**: Code formatting.
- **Turborepo**: Monorepo management and task running.
- **Tailwind CSS**: Utility-first CSS framework.
- **React**: User interface building.

## Getting Started

### Prerequisites

- Node.js (>=18)
- npm (>=10.8.1)

### Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/your-repo/tranzact-payment-app.git
cd tranzact-payment-app
npm install
```

### Running the Application

1. **Set Up Environment Variables**  
   Create a `.env` file in the root directory and add the necessary environment variables:

```sh
DATABASE_URL="your-database-url"
NEXTAUTH_URL="your-next-auth-url"
NEXTAUTH_SECRET="your-next-auth-secret"
```

2. **Generate Prisma Client**  
   Run the following command:

```sh
npm run db:generate
```

3. **Start the Development Server**  
   To start the development server for all applications, run:

```sh
npm run dev
```

4. **Access the Applications**  
   - **User App**: Open [http://localhost:3000](http://localhost:3000)
   - **Merchant App**: Open [http://localhost:3001](http://localhost:3001)
   - **Bank Server**: Runs at [http://localhost:3002](http://localhost:3002)
   - **Bank Webhook**: Runs at [http://localhost:3003](http://localhost:3003)
