// Download JSON as CSV file
export const jsonToCsvWriter = (data: any[], filename: string): void => {
    const csvContent = data.map(row => Object.values(row).join(',')).join('\n')
    const blob = new Blob([csvContent], { type: 'text/csvcharset=utf-8' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = filename
    link.click()
    URL.revokeObjectURL(link.href)
  }