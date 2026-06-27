-- 1. Add status column to portfolio_projects table
alter table public.portfolio_projects
add column status text default 'Completed' check (status in ('Completed', 'Ongoing'));

-- 2. (Optional) Set initial status for existing projects based on featured flag if desired
update public.portfolio_projects
set status = 'Completed';
