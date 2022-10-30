export function formatCurrency(cantidad) {
  const formater = Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  });

  return formater.format(cantidad);
}
