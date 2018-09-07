import Timeago from 'timeago.js'

const { format } = new Timeago(null, 'en')

// github.com/hustcc/timeago.js#1-usage
export const timeAgo = str => {
  if (!str) return ''
  return format(new Date(str))
}

// get string representing the date portion of the given Date
export const formatDate = date => new Date(date).toLocaleDateString()
