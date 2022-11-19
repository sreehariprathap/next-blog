export const truncateWithEllipsis = (content: string, maxLength: number) => {
  if (content.length > maxLength) {
    return content.substring(0, maxLength) + "..."
  }
  return content
}
