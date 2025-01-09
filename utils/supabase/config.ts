// Determine if we're in development mode
const isDevelopment = process.env.NODE_ENV === 'development';

// Get the appropriate Supabase URL and keys based on environment
export const getSupabaseConfig = () => ({
  supabaseUrl: isDevelopment
    ? process.env.NEXT_PUBLIC_LOCAL_SUPABASE_URL!
    : process.env.NEXT_PUBLIC_SUPABASE_URL!,
  supabaseAnonKey: isDevelopment
    ? process.env.NEXT_PUBLIC_LOCAL_SUPABASE_ANON_KEY!
    : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  supabaseServiceKey: isDevelopment
    ? process.env.LOCAL_SUPABASE_SERVICE_ROLE_KEY!
    : process.env.SUPABASE_SERVICE_ROLE_KEY!
});
