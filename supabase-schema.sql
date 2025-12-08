-- Create admissions table
CREATE TABLE IF NOT EXISTS admissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  
  -- Step 1: Personal Information
  student_name TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
  gender TEXT NOT NULL,
  blood_group TEXT,
  
  -- Step 2: Contact & Parent Information
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  parent_name TEXT NOT NULL,
  parent_occupation TEXT,
  parent_phone TEXT NOT NULL,
  
  -- Step 3: Academic Information
  previous_school TEXT NOT NULL,
  last_grade TEXT NOT NULL,
  last_grade_percentage NUMERIC(5,2),
  applying_grade TEXT NOT NULL,
  
  -- Metadata
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'accepted', 'rejected'))
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_admissions_created_at ON admissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_admissions_status ON admissions(status);
CREATE INDEX IF NOT EXISTS idx_admissions_email ON admissions(email);

-- Enable Row Level Security (RLS)
ALTER TABLE admissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for form submissions)
CREATE POLICY "Allow public inserts" ON admissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated users to read all records
CREATE POLICY "Allow authenticated reads" ON admissions
  FOR SELECT
  TO authenticated
  USING (true);

COMMENT ON TABLE admissions IS 'Stores student admission applications for Nexus Academy';
