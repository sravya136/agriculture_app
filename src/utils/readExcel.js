// src/utils/readExcel.js
import * as XLSX from 'xlsx';

export const readExcelFile = (file) => {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      resolve(jsonData);
    };

    reader.onerror = reject;

    reader.readAsArrayBuffer(file);
  });
};
