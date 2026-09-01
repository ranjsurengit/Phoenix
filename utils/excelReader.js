import * as xlsx from 'xlsx';
import path from 'path';

export function readExcelData(fileName, sheetName) {
    const excelPath = path.join(__dirname,'..',fileName)    
    const workbook = xlsx.readFile(excelPath)
    const worksheet = workbook.Sheets[sheetName]
    return xlsx.utils.sheet_to_json(worksheet , { defval: '' });
    
}