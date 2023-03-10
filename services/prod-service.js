import { pool } from "../config/mysql-config.js";
export async function getProducts() {
  const [rows] = await pool.query(
    `SELECT * FROM brands INNER JOIN products ON brands.id = products.brand_id INNER JOIN category ON products.category_id = category.id;`
  );
  return rows;
}
