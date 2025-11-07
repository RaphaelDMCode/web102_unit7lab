import { createClient } from '@supabase/supabase-js'

const URL = 'https://zhqgxrmozvsrybchpgbu.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpocWd4cm1venZzcnliY2hwZ2J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzNzgyODYsImV4cCI6MjA3Nzk1NDI4Nn0.sZN1r18iTX-qyf9EJX5wHRkcE6fd2-A-7VNeRzlsa-s'

// → Creates a new Supabase Client instance that Allows the App to connect to the Supabase Project
export const supabase = createClient(URL, API_KEY)
