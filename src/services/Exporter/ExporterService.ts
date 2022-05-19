import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

export class ExporterService {
  public static exportToPdf(element: HTMLDivElement) {
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF({
        orientation: 'landscape',
      })
      const imgProps = pdf.getImageProperties(imgData)
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
      pdf.save('download.pdf')
    })
  }
}
