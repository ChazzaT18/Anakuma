import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export const getFullMenu = async () => {
  try {
    const tableNames = ["Anakuma_snacks", "Anakuma_bao_buns", 'Anakuma_small_plates', 'Anakuma_cocktails', 'Anakuma_beers', 'Anakuma_spirits', 'Anakuma_kampai', 'Anakuma_soft_drinks' ]; 

    const tableDataPromises = tableNames.map(async tableName => {
      const { data, error } = await supabase.from(tableName).select("*");

      if (error) {
        throw error;
      }

      return { tableName, data };
    });

    const tableData = await Promise.all(tableDataPromises);

    return tableData;
  } catch (error) {
    console.error("Error fetching data from all tables:", error.message);
    throw error;
  }

};
