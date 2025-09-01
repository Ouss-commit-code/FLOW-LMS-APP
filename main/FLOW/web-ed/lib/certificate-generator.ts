// lib/certificate-generator.ts
import { CertificationExam } from "@/lib/data/certificationExams";
import jsPDF from "jspdf";

export const generateCertificate = async (
  fullName: string,
  exam: CertificationExam,
  score: number
) => {
  // Create PDF document
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4"
  });

  // Add background
  doc.setFillColor(240, 240, 240);
  doc.rect(0, 0, 297, 210, 'F');

  // Add border
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(1);
  doc.rect(10, 10, 277, 190);

  // Add decorative elements
  doc.setFillColor(59, 130, 246);
  doc.rect(10, 10, 277, 30, 'F');

  // Add title
  doc.setFontSize(28);
  doc.setTextColor(255, 255, 255);
  doc.setFont('Franklin', 'bold');
  doc.text("FLOW Certificate OF Achievement", 148.5, 25, { align: "center" });

  // Add content
  doc.setFontSize(17);
  doc.setTextColor(74, 85, 99);
  doc.text("This certificate of Preparation goes to", 148.5, 60, { align: "center" });

  // Add name
  doc.setFontSize(24);
  doc.setTextColor(31, 41, 55);
  doc.setFont("helvetica", "bold");
  doc.text(fullName.toUpperCase(), 148.5, 80, { align: "center" });

  // Add achievement
  doc.setFontSize(16);
  doc.setTextColor(75, 85, 99);
  doc.setFont("helvetica", "normal");
  doc.text("has successfully completed the advanced preparation exam for", 148.5, 100, { align: "center" });

  // Add exam name
  doc.setFontSize(20);
  doc.setTextColor(59, 130, 246);
  doc.setFont("helvetica", "bold");
  doc.text(`${exam.title} Certificate`, 148.5, 115, { align: "center" });

  // Add score
  doc.setFontSize(16);
  doc.setTextColor(75, 85, 99);
  doc.setFont("helvetica", "normal");
  doc.text(`with a score of ${score}%`, 148.5, 130, { align: "center" });

  // Add date
  const date = new Date().toLocaleDateString();
  doc.text(`Completed on: ${date}`, 148.5, 145, { align: "center" });

  // Add footer
  doc.setFontSize(12);
  doc.setTextColor(156, 163, 175);
  doc.text("This is a preparation certificate for learning purposes", 148.5, 180, { align: "center" });
  doc.text("Not an official certification from the provider", 148.5, 187, { align: "center" });

  // Generate PDF and download
  doc.save(`${exam.title}_Preparation_Certificate_${fullName.replace(/\s+/g, '_')}.pdf`);
};