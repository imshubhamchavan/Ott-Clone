# Netflix Clone

This is a Netflix clone built with modern web technologies, including Next.js, Supabase, Prisma, Tailwind CSS, Shadcn/UI, Next-Auth, and Auth.js. The project is deployed on Vercel.

## 🚀 Live Demo

Check out the live demo: https://simple-ott-clone.vercel.app

## 📚 Technologies Used

- **Next.js**: A powerful and flexible front-end framework.
- **Supabase**: An open-source Firebase alternative for seamless back-end and real-time capabilities.
- **Prisma**: A robust and type-safe ORM for database interactions.
- **Tailwind CSS**: Utility-first CSS framework for creating a beautiful and responsive UI.
- **Shadcn/UI**: Additional UI components and customizations.
- **Next-Auth**: Secure and easy authentication.
- **Auth.js**: Ensuring secure authentication processes.
- **Vercel**: Deployment platform for modern web applications.

## 🛠 Features

- User authentication with GitHub and Google.
- Responsive and modern UI mimicking Netflix.
- Real-time database interactions.

## 📖 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/netflix-clone.git
   cd netflix-clone
   
2. Install dependencies:
   
   npm install
    ### or
   yarn install

3.Set up environment variables:


Create a .env file in the root of the project.
Add the following environment variables:

NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
DATABASE_URL=your-database-url
GITHUB_ID=your-github-id
GITHUB_SECRET=your-github-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
EMAIL_SERVER_HOST=your-email-server-host
EMAIL_SERVER_PORT=your-email-server-port
EMAIL_SERVER_USER=your-email-server-user
EMAIL_SERVER_PASSWORD=your-email-server-password
EMAIL_FROM=your-email-from

4. Push the Prisma schema to the database:
   
   npx prisma db push

6. Run the development server:
   
   npm run dev
   ### or
   yarn dev
