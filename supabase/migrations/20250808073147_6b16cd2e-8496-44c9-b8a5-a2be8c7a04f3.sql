-- Create table for contact form submissions
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text,
  service text,
  message text NOT NULL,
  submitted_at timestamptz NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Recreate policies to avoid duplication errors
DROP POLICY IF EXISTS "Public can insert contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can read contact submissions" ON public.contact_submissions;

-- Allow anyone (website visitors) to submit the contact form
CREATE POLICY "Public can insert contact submissions"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Allow only logged-in users to read submissions (for future admin use)
CREATE POLICY "Authenticated users can read contact submissions"
ON public.contact_submissions
FOR SELECT
TO authenticated
USING (true);
