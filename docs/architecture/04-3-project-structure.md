### **3. Project Structure**

The project will follow a standard Next.js **App Router** structure. The app/api directory will house our backend logic.

/\
├── src/\
│   ├── app/\
│   │   ├── page.tsx          # Homepage (/)\
│   │   ├── legal-notice/page.tsx\
│   │   ├── consultation/page.tsx\
│   │   ├── document-drafting/page.tsx\
│   │   ├── corporate-retainer/page.tsx\
│   │   ├── api/\
│   │   │   └── leads/\
│   │   │       └── route.ts  # API endpoint for creating leads\
│   │   ├── layout.tsx\
│   │   └── globals.css\
│   ├── components/\
│   │   ├── ui/               # shadcn/ui components\
│   │   ├── shared/           # Header, Footer, etc.\
│   │   └── features/         # LeadForm, etc.\
│   ├── lib/\
│   │   ├── supabase-server.ts # Supabase server-side client\
│   │   ├── utils.ts\
│   │   └── validators.ts     # Zod validation schemas\
│   ├── services/             # Client-side functions for calling our API\
│   └── types/                # TypeScript type definitions\
├── ... (config files)
