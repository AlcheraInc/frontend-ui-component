import FileSaver from "file-saver";
import Excel from "exceljs";
// import Stream from "stream";
// import Vue from 'vue'

let workbook;
let sheet;

function createWorkbook() {
  workbook = new Excel.Workbook();
  workbook.creator = "Alchera";
  workbook.lastModifiedBy = "Alchera";
  workbook.created = new Date();
  workbook.modified = workbook.created;
}

function createSheet(fileName) {
  let options = {
    properties: {
      defaultColWidth: 15
    }
  };
  sheet = workbook.addWorksheet(fileName, options);
}

function createRowCell(logData) {
  logData.forEach((row, rIndex) => {
    sheet.addRow(row);
  });
}

function setStyles(logDurationType) {
  // font size
  sheet.getRow(1).font = { size: 14 };
}

function download(fileName) {
  workbook.xlsx.writeBuffer().then(buffer => {
    FileSaver.saveAs(new Blob([buffer]), `${fileName}.xlsx`);
  });
}

/**
 * writeDataToFile
 * - single sheet
 * @example
 * writeDataToFile('2021-01-01-file', 'sheet_20210101', [[''], ['']], 'day')
 *
 * writeDataToFile('2021-01-file', 'sheet_20210101', [[''], ['']], 'month')
 */
function writeDataToFile(fileName, sheetName, logData, logDurationType) {
  createWorkbook();
  createSheet(sheetName);
  createRowCell(logData);
  setStyles(logDurationType);
  download(fileName);
}

/**
 * writeSheetData
 * - multi sheet
 * @example
 * createWorkbook()
 * writeSheetData('2021-01-file', 'Tim_Burns_20210101', [[''], ['']], 'month')
 * download(fileName)
 */
function writeSheetData(fileName, sheetName, logData, logDurationType) {
  createSheet(sheetName);
  createRowCell(logData);
  setStyles(logDurationType);
}

function makeData(sheet) {
  let data = [];
  let rowNo = 0;
  sheet.eachRow(row => {
    let rowData = [];
    let colNo = 0;
    row.eachCell({ includeEmpty: true }, cell => {
      // custom extraction for date in specific excel template
      if (rowNo === 5 && colNo === 18) {
        if (typeof cell.value === "object") {
          if (cell.value instanceof Date) {
            rowData.push(cell.value);
          } else {
            let result = "";
            if (cell.value && cell.value.richText) {
              cell.value.richText.map(n => {
                result += n.text;
              });
            }
            rowData.push(result);
          }
        } else {
          rowData.push(cell.value);
        }
      } else {
        if (typeof cell.model.value === "object") {
          if (cell.value instanceof Date) {
            rowData.push(cell.value);
          } else {
            let result = "";
            if (cell.model.value.richText) {
              cell.model.value.richText.map(n => {
                result += n.text;
              });
            }
            rowData.push(result);
          }
        } else {
          rowData.push(cell.model.value || cell.model.text);
        }
      }
      colNo += 1;
    });
    data.push(rowData);
    rowNo += 1;
  });
  return data;
}
function readXlsxFile(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onloadend = e => {
      Promise.resolve(e.target.result)
        .then(buffer => {
          workbook = new Excel.Workbook();
          workbook.xlsx
            .load(buffer)
            .then(function() {
              let worksheets = [];
              workbook.eachSheet(sheet => {
                worksheets.push(makeData(sheet));
              });
              resolve(worksheets);
            })
            .catch(err => {
              reject(err);
            });
        })
        .catch(err => {
          reject(err);
        });
    };
    reader.readAsArrayBuffer(file);
  });
}

export {
  createWorkbook,
  writeDataToFile,
  writeSheetData,
  download,
  readXlsxFile
};
