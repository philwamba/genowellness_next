# GENO Wellness — Customer Web App

The customer-facing website and web app for **GENO Wellness Hub**. Clients use this to discover providers, book wellness sessions, join live video calls, track wellness goals, and access curated resources.

## Tech Stack

| Layer         | Technology                                                                                                                                                                    |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework     | [Next.js 15](https://nextjs.org/) (App Router, Turbopack)                                                                                                                     |
| Language      | TypeScript                                                                                                                                                                    |
| Styling       | [Tailwind CSS 4](https://tailwindcss.com/)                                                                                                                                    |
| State         | [Zustand](https://zustand-demo.pmnd.rs/)                                                                                                                                      |
| Data Fetching | [SWR](https://swr.vercel.app/), [TanStack React Query](https://tanstack.com/query)                                                                                            |
| Auth          | [Firebase Auth](https://firebase.google.com/docs/auth)                                                                                                                        |
| Forms         | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)                                                                                                     |
| UI Components | [Headless UI](https://headlessui.com/), [Radix UI](https://www.radix-ui.com/), [Lucide Icons](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/) |
| Real-time     | [Laravel Echo](https://laravel.com/docs/broadcasting) + [Pusher](https://pusher.com/)                                                                                         |
| Video Calls   | [LiveKit](https://livekit.io/), [Daily.co](https://www.daily.co/)                                                                                                             |
| Charts        | [Recharts](https://recharts.org/)                                                                                                                                             |
| Toasts        | [Sonner](https://sonner.emilkowal.dev/)                                                                                                                                       |

## Features

### Public Pages (Guest)

- **Landing Page** — Hero section, feature highlights, CTA, and waitlist
- **About** — Company story, mission, and team
- **For Individuals** — Personal wellness plans and onboarding
- **For Corporates** — Enterprise wellness programs
- **Blog** — Wellness articles and tips
- **Resources** — Curated wellness content library
- **Download App** — Mobile app download links
- **FAQs** — Frequently asked questions
- **Glossary** — Wellness terminology reference
- **Partners** — Partnership information
- **Press** — Media and press coverage
- **Privacy Policy** — Data privacy information
- **Contact** — Get in touch

### Authentication

- **Login / Register** — Email & Firebase authentication
- **Forgot Password** — Password reset flow
- **Email Verification** — Email confirmation
- **Onboarding** — Profile setup wizard for new users

### Authenticated Pages (Client)

- **Home** — Personalized dashboard with upcoming bookings and recommendations
- **Search** — Find providers by name, specialty, or service
- **Provider Profiles** — View provider bios, reviews, services, and availability
- **Services** — Browse and explore available wellness services
- **Book** — Schedule sessions with providers
- **Bookings** — View, manage, reschedule, or cancel bookings
- **Sessions** — Join live video sessions (LiveKit / Daily.co), view history
- **Notifications** — Real-time booking updates and platform alerts
- **Profile** — Edit personal info and preferences

### Wellness Hub

A comprehensive wellness tracking system across multiple dimensions:

- **Physical** — Exercise, nutrition, and activity tracking
- **Mental** — Mindfulness, stress management, and cognitive health
- **Social** — Relationships and community engagement
- **Financial** — Financial wellness and planning
- **Spiritual** — Meditation and personal growth
- **Occupational** — Work-life balance and career wellness
- **Mood Tracker** — Daily mood logging and trends
- **Goals** — Set, track, and manage wellness goals
- **Journal** — Personal wellness journal entries
- **Daily Tips** — Curated wellness tips and advice

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **pnpm** (recommended, see `packageManager` in `package.json`)

### Installation

```bash
pnpm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_PUSHER_KEY=your_pusher_key
NEXT_PUBLIC_PUSHER_CLUSTER=your_cluster
```

### Development

```bash
pnpm dev
```

Runs on [http://localhost:3000](http://localhost:3000).

### Build

```bash
pnpm build
```

### Lint & Format

```bash
pnpm lint          # Check for lint errors
pnpm lint:fix      # Auto-fix lint errors
pnpm format        # Format code with Prettier
pnpm format:check  # Check formatting
```

## Project Structure

```
src/
├── app/
│   ├── (guest)/             # Public marketing pages
│   │   ├── about/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── corporate/
│   │   ├── download-app/
│   │   ├── faqs/
│   │   ├── glossary/
│   │   ├── individuals/
│   │   ├── partners/
│   │   ├── press/
│   │   ├── privacy/
│   │   └── resources/
│   ├── (auth)/              # Authentication pages
│   │   ├── login/
│   │   ├── register/
│   │   ├── forgot-password/
│   │   ├── verify-email/
│   │   └── onboarding/
│   └── (app)/               # Authenticated client pages
│       ├── home/
│       ├── search/
│       ├── provider/
│       ├── providers/
│       ├── services/
│       ├── book/
│       ├── bookings/
│       ├── sessions/
│       ├── notifications/
│       ├── profile/
│       └── wellness/        # Wellness hub
│           ├── physical/
│           ├── mental/
│           ├── social/
│           ├── financial/
│           ├── spiritual/
│           ├── occupational/
│           ├── mood/
│           ├── goals/
│           ├── journal/
│           └── tips/
├── components/
│   ├── layout/              # Header, footer, sidebar, navigation
│   ├── ui/                  # Reusable UI primitives (Button, Input, Dialog, etc.)
│   ├── sessions/            # Video session components
│   ├── video/               # Video call UI (LiveKit, Daily.co)
│   ├── wellness/            # Wellness-specific components
│   ├── notifications/       # Notification components
│   ├── onboarding/          # Onboarding wizard components
│   └── profile/             # Profile components
├── lib/
│   ├── api/                 # API client and endpoint definitions
│   ├── firebase/            # Firebase config and auth helpers
│   ├── hooks/               # Custom React hooks
│   ├── providers/           # React context providers
│   ├── stores/              # Zustand state stores
│   ├── utils/               # Utility functions
│   ├── validations/         # Zod schemas
│   └── video/               # Video call helpers and configuration
└── types/                   # TypeScript type definitions
```

## Related Repos

| Repo            | Description               |
| --------------- | ------------------------- |
| `geno-provider` | Provider dashboard portal |
| `geno-api`      | Laravel API backend       |
| `genoapp`       | Mobile app                |

## License

© 2026 Vinetech Digital LLC. All rights reserved.
