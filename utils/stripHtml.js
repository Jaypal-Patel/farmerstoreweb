export const stripHtmlTags = (str) => {
    if (!str) return '';
    return str.replace(/<[^>]*>?/gm, '');
  };