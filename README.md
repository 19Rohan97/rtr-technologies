# RTR Technologies

A modern, professional website for RTR Technologies - a WordPress development agency specializing in growth-driven websites with SEO optimization and analytics integration.

## 🚀 Live Demo

Visit the live website: [RTR Technologies](https://github.com/19Rohan97/rtr-technologies)

## 📋 About

RTR Technologies creates WordPress websites that drive business growth through:

- **Custom WordPress Development** - Scalable, secure, and SEO-friendly websites
- **SEO-Driven Web Design** - Strategy-focused design with speed and visibility
- **Google Analytics Setup & Tracking** - GA4 implementation with custom events
- **Ongoing Support & Growth Plans** - Continuous optimization and monitoring

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: Resend API
- **SEO**: Built-in optimization with next-sitemap
- **Deployment**: Ready for Vercel/Netlify

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/contact/       # Contact form API endpoint
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio page
│   ├── services/          # Services page
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Homepage sections
│   └── ui/                # Reusable UI components
├── content/               # Content configuration
└── lib/                   # Utilities
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/19Rohan97/rtr-technologies.git
cd rtr-technologies
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Add your environment variables:

```env
RESEND_API_KEY=your_resend_api_key
RESEND_FROM="RTR Contact <onboarding@resend.dev>"
CONTACT_TO="connect@rtr-technologies.com"
GA_TRACKING_ID=your_google_analytics_id
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📧 Contact Form Setup

The contact form uses [Resend](https://resend.com) for email delivery. To set it up:

1. Create a Resend account
2. Get your API key
3. Add it to your `.env.local` file
4. Configure your sender and recipient emails

## 🔧 Customization

### Content Updates

- **Site Information**: Edit `src/content/site.ts`
- **Services**: Update `src/content/services.ts`
- **Portfolio**: Modify `src/content/projects.ts`
- **Testimonials**: Edit `src/content/testimonials.ts`

### Styling

The project uses Tailwind CSS. Customize the design by:

- Editing component styles in the respective files
- Updating the Tailwind configuration in `tailwind.config.js`
- Modifying global styles in `src/app/globals.css`

## 📈 SEO Features

- Optimized meta tags and Open Graph data
- Automatic sitemap generation
- Semantic HTML structure
- Fast loading times
- Mobile-responsive design

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The project is compatible with:

- Netlify
- Railway
- DigitalOcean App Platform
- Any Node.js hosting service

## 📝 License

This project is private and proprietary to RTR Technologies.

## 🤝 Contributing

This is a private project. For any changes or updates, please contact the development team.

---

Built with ❤️ by RTR Technologies
# Additional Resources

- `SANITY.md` – CMS setup & editing guide.
- `BLOG_BRIEF.md` – Prompt template for generating schema-ready blog content in ChatGPT.

