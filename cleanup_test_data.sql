-- ============================================================
-- Blevon Production Database Cleanup
-- Run this in the Supabase SQL Editor to remove all test data.
-- ============================================================
--
-- This script ONLY deletes data rows.
-- It does NOT modify:
--   • Schema, tables, columns, indexes
--   • RLS policies, triggers, functions, views
--   • Storage buckets or production files
--   • auth.users (admin login account is preserved)
--   • site_settings (production configuration is preserved)
-- ============================================================

-- 1. Remove all test enquiries / contact form submissions
DELETE FROM public.contact_inquiries;

-- 2. Remove all test portfolio projects
DELETE FROM public.portfolio_projects;

-- 3. Remove all test testimonials
DELETE FROM public.testimonials;

-- 4. Remove all test site content blocks
DELETE FROM public.site_content;

-- ============================================================
-- Verification: All counts should return 0
-- ============================================================
SELECT 'contact_inquiries' AS table_name, COUNT(*) AS row_count FROM public.contact_inquiries
UNION ALL
SELECT 'portfolio_projects', COUNT(*) FROM public.portfolio_projects
UNION ALL
SELECT 'testimonials', COUNT(*) FROM public.testimonials
UNION ALL
SELECT 'site_content', COUNT(*) FROM public.site_content;
