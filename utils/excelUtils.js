const XLSX = require('xlsx');
const path = require('path');

function readExcelData(fileName, sheetName) {
    const filePath = path.join(__dirname, '..', 'test-data', fileName);

    const workbook = XLSX.readFile(filePath);
    const worksheet = workbook.Sheets[sheetName];

    return XLSX.utils.sheet_to_json(worksheet);
}

module.exports = { readExcelData };