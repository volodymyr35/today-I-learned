import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://lxnufytjhrrdgrdkwtrs.supabase.co';

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4bnVmeXRqaHJyZGdyZGt3dHJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwMzE2MzUsImV4cCI6MjA0MDYwNzYzNX0.igx37Q1Yolo0POEGZEfSE790irryyVl0v87866w9-p4';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
