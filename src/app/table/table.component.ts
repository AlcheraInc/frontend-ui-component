import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  getFiles(files) {
    return files.map(f => f.file_name);
  }

  isAllChecked(data) {
    for (let i = 0; i < data.length; i += 1) {
      if (!data[i].isChecked) {
        return false;
      }
    }
    return true;
  }

  checkAllBoxes(data) {
    const checkStatus = !this.isAllChecked(data);
    data.forEach(d => (d.isChecked = checkStatus));
  }
}
