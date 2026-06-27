-- 1. Create the Site Settings table
create table public.site_settings (
    id uuid primary key default gen_random_uuid(),
    settings jsonb not null default '{}'::jsonb,
    updated_at timestamptz default now()
);

-- 2. Enable Row Level Security
alter table public.site_settings enable row level security;

-- 3. Create RLS Policy for Authenticated Admins
create policy "Authenticated users can manage site settings"
on public.site_settings
for all
to authenticated
using (true)
with check (true);

-- 4. Insert Default Configuration JSON
insert into public.site_settings (settings)
values (
'{
  "company": {
    "name": "Blevon",
    "tagline": "Crafting modern websites that help businesses grow.",
    "description": "Boutique web design & engineering agency."
  },

  "contact": {
    "email": "contact@blevon.in",
    "phone": "+91 99999 99999",
    "whatsapp": "+91 99999 99999",
    "address": "Bangalore, Karnataka, India"
  },

  "social": {
    "facebook": "https://facebook.com/blevon",
    "instagram": "https://instagram.com/blevon.in",
    "linkedin": "https://linkedin.com/company/blevon",
    "x": "https://x.com/blevon",
    "github": "https://github.com/blevon",
    "youtube": "https://youtube.com/blevon"
  },

  "branding": {
    "logo": "",
    "favicon": "",
    "primaryColor": "#2563eb",
    "secondaryColor": "#0f172a"
  },

  "seo": {
    "siteTitle": "Blevon | Boutique Web Design & Engineering Agency",
    "siteDescription": "We design and build fast, responsive, and growth-focused web experiences.",
    "keywords": "web design, react, next.js, digital agency",
    "canonicalUrl": "https://blevon.in",
    "ogImage": ""
  },

  "analytics": {
    "googleAnalytics": "",
    "googleTagManager": "",
    "metaPixel": ""
  },

  "business": {
    "workingHours": "Monday - Friday, 9am - 6pm",
    "timezone": "Asia/Kolkata",
    "currency": "INR"
  }
}'::jsonb
);
