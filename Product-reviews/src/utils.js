export function getNameInitials(name) {
    // Extract first and last name initials using regular expressions
    if (typeof name !== 'string' || name.trim() === '') {
        return '';
    }
    const initials = name.match(/\b\w/g) || [];
  
    return (
      (initials[0] ?? '') +
      (initials.length - 1 === 0 ? '' : initials[initials.length - 1] ?? '')
    ).toUpperCase();
}
  
export function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
}
