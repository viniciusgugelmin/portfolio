type RemoveDiacriticsDTO = {
  text: string;
};

function removeDiacritics({ text }: RemoveDiacriticsDTO): string {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export { removeDiacritics };
