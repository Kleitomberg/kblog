import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://seohbnkvltkjnnkxlzrg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlb2hibmt2bHRram5ua3hsenJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA3OTU5NDAsImV4cCI6MTk5NjM3MTk0MH0.9fGORVsGPiN1aEyeI6Zscoe4lgXWfvWowK5Wh1Wo070'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
