import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eohqlpvothpelazgrxwc.supabase.co";
const supabaseKey = "sb_publishable_ybajbA1sBf2QQxCivOL2-w_xi2aNPeN";

export const supabase = createClient(supabaseUrl, supabaseKey);