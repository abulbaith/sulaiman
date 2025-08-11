-- Create extension for UUID generation
create extension if not exists pgcrypto;

-- Create contact_submissions table
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  service text,
  message text not null,
  submitted_at timestamptz not null default now(),
  -- Workflow columns
  status text not null default 'pending',
  action_token uuid not null default gen_random_uuid()
);

-- Enable Row Level Security
alter table public.contact_submissions enable row level security;

-- Policies
-- Allow anyone (including anonymous) to create a contact submission
create policy if not exists "Anyone can create contact submissions"
  on public.contact_submissions
  for insert
  to anon, authenticated
  with check (true);

-- Allow reads for authenticated users (can be tightened later)
create policy if not exists "Authenticated users can read submissions"
  on public.contact_submissions
  for select
  to authenticated
  using (true);

-- Indexes
create index if not exists idx_contact_submissions_submitted_at
  on public.contact_submissions (submitted_at desc);

create unique index if not exists idx_contact_submissions_action_token
  on public.contact_submissions (action_token);

create index if not exists idx_contact_submissions_status
  on public.contact_submissions (status);
