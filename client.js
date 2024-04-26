import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://sklgsosfzcxefgyailfq.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrbGdzb3NmemN4ZWZneWFpbGZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2OTUzNzAsImV4cCI6MjAyODI3MTM3MH0.0pSk7G7DN7oTl6tCwRecD95hvXqG0pM0mnEer-9AryE'

export const supabase = createClient(supabaseUrl, API_KEY)