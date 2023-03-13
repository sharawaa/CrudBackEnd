import { pool } from "../config/mysql-config.js";
export async function getProducts() {
  const [rows] = await pool.query(
    `SELECT products.id, products.image, products.name, products.price, products.sale, brands.name as brand, category.name as category FROM brands INNER JOIN products ON brands.id = products.brand_id INNER JOIN category ON products.category_id = category.id;`
  );
  return rows;
} export async function getBrands(brand){
  const [ruws] = await pool.query(`SELECT * FROM products WHERE brand_id in (SELECT id FROM brands WHERE name= '${brand}');`);
  return ruws;
}

export async function addProduct(){
  const [rows] = await pool.query(`INSERT INTO products(image, name, price, brand_id, category_id, sale) VALUES( 'zurag', 'gar utas', 200, 1005, 2001, 20);`)
  return rows;
}