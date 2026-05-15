export const titleize = (value: string) => value.replaceAll('_',' ').replace(/\b\w/g, c => c.toUpperCase());
export const priorityLabel = (priority: number) => `Priority ${priority}`;
export const apiErrorMessage = (message: string) => message || 'Something went wrong';
