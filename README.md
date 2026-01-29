# Frontend Assessment: Seismic Landing Page

A responsive landing page built with Next.js and Tailwind CSS, developed as part of a technical assessment.

## �️ Technical Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/) (using `@tailwindcss/postcss`)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Components**: Functional React components with a focus on reusability and clean structure.

## 🚀 Setup Instructions

1. **Install Dependencies**:

   ```bash
   yarn install
   ```

2. **Run Development Server**:

   ```bash
   yarn dev
   ```

   The site will be available at `http://localhost:3000`.

3. **Build for Production**:
   ```bash
   yarn build
   yarn start
   ```

## � Implementation Highlights

- **Component-Driven Architecture**: The page is broken down into logical sections (Hero, How It Works, FAQs, etc.) located in `app/components/`.
- **Responsive Design**: Implemented a fluid layout that adapts across mobile, tablet, and desktop breakpoints.
- **Tailwind 4 Integration**: Leveraged the latest Tailwind major version for styling, utilizing the new CSS-first configuration approach.
- **Asset Optimization**: Used Next.js `Image` component for efficient image loading and layout stability.

## 📝 Key Assumptions & Decisions

1. **Static Data**: For the scope of this assessment, section content (like FAQ items and Store lists) is managed via local constants within components to simplify the architecture while maintaining clear separation of concerns.
2. **Design Fidelity**: Prioritized matching the provided layout and typography as closely as possible using modern CSS practices.
3. **Accessibility**: Used semantic HTML elements (`<main>`, `<section>`, `<h1>`-`<h6>`, `<button>`) to ensure basic accessibility compliance.
4. **Performance**: Chose Next.js for its built-in optimizations (SSR/RSC) to ensure fast initial page loads, critical for landing pages.
5. **Asset Management**: Image assets are logically grouped within `app/assets/images` and exported via barrel files (`index.ts`). This approach provides:
   - **Type Safety**: TypeScript ensures that all imported images exist.
   - **Autocomplete**: Better developer experience when selecting assets.
   - **Centralization**: Easier management and tracking of all project images.
