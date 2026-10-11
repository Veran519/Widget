export const translations = {
  en: {
    title: 'Where does it come from? Why do we use it?',
    subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    departPlaceholder: 'Depart date',
    returnPlaceholder: 'Return date',
    search: 'SEARCH',
  },
  ru: {
    title: 'Откуда это? Зачем мы это используем?',
    subtitle: 'Давно известно, что читатель отвлекается на читаемый контент страницы, когда смотрит на её макет.',
    departPlaceholder: 'Дата вылета',
    returnPlaceholder: 'Дата возврата',
    search: 'ПОИСК',
  },
};

export function getTranslation(lang) {
  return translations[lang] || translations.en;
}