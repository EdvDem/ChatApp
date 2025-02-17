import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://keuulgytogyeanmesdyx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtldXVsZ3l0b2d5ZWFubWVzZHl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3MjkzODksImV4cCI6MjA1NTMwNTM4OX0.Wup2-sp8glgqwEnydFaa9Sjmg4RbD8ykyGCaGl2p4k8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})