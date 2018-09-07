export const onlyTitle = title => title
  .replace(/\.md$/, '')
  .replace(/^\d{4}-\d{1,2}-\d{1,2}-/, '')

export const onlyDate = title => /^\d{4}-\d{1,2}-\d{1,2}/.exec(title)[0]

export const toTitleCase = title => title
  .split(/[- ]/)
  .map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
  .join(' ')
