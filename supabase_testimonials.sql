-- 1. Create the Testimonials table
create table public.testimonials (
    id uuid primary key default gen_random_uuid(),
    customer_name text not null,
    company_name text,
    designation text,
    review text not null,
    rating integer not null default 5,
    customer_image text,
    featured boolean default false,
    published boolean default true,
    display_order integer default 0,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- 2. Enable Row Level Security
alter table public.testimonials enable row level security;

-- 3. Create RLS Policy for Authenticated Admins
create policy "Authenticated users can manage testimonials"
on public.testimonials
for all
to authenticated
using (true)
with check (true);
