import pool from "../config/db";

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category_id: number;
}

export const getActiveProducts = async (): Promise<Product[]> => {
  const query = `
    SELECT id, name, price, stock, category_id 
    FROM products 
    WHERE deleted_at IS NULL AND stock > 0
    ORDER BY created_at DESC;
  `;

  const { rows } = await pool.query<Product>(query);
  return rows;
};
