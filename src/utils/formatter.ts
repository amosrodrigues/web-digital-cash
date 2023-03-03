export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  timeZone: 'America/Sao_Paulo',
});

export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const decimalFormatter = new Intl.NumberFormat('en-NZ', {
  // style: 'currency',
  // currency: 'NZD',
  minimumFractionDigits: 2,
});
