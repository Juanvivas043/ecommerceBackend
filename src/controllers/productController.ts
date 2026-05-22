import { Request, Response } from "express";
import * as ProductModel from "../models/productModel";

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await ProductModel.getActiveProducts();

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).json({
      success: false,
      message: "Error interno del servidor al consultar la base de datos",
    });
  }
};
