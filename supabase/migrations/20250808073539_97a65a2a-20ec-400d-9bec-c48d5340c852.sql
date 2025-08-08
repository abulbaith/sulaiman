-- Add workflow columns for accept/reject via email
ALTER TABLE public.contact_submissions
  ADD COLUMN IF NOT EXISTS status text NOT NULL DEFAULT 'pending',
  ADD COLUMN IF NOT EXISTS action_token uuid NOT NULL DEFAULT gen_random_uuid();

-- Indexes for quick lookups
CREATE UNIQUE INDEX IF NOT EXISTS idx_contact_submissions_action_token
  ON public.contact_submissions(action_token);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status
  ON public.contact_submissions(status);
