/**
 * Récupère la liste complète des produits agricoles depuis notre API locale
 * @returns {Promise<Array>} Un tableau contenant les 20 produits
 */
export const fetchProducts = async () => {
  try {
    // import.meta.env.BASE_URL s'adaptera automatiquement à '/chariot-agricole/
    const response = await fetch(`${import.meta.env.BASE_URL}products.json`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des produits agricoles');
    }
    return await response.json();
  } catch (error) {
    console.error("Erreur service API :", error);
    return [];
  }
};