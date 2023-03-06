
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pkdumcuxtzmjalfgeydv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrZHVtY3V4dHptamFsZmdleWR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc5OTUyMzQsImV4cCI6MTk5MzU3MTIzNH0.OwyjGFlA-6CEOHJXgXYkP9iPnDTnSF2uCNt-Z0b8Hus'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase