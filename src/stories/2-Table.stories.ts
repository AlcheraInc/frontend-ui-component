import { moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withKnobs, array, object } from "@storybook/addon-knobs";

import { TableComponent } from "../app/table/table.component";
import { AppModule } from "../app/app.module";

export default {
  title: "Table",
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [AppModule]
    })
  ]
};

const companyColumns = [
  "select",
  "no",
  "name",
  "workContents",
  "qualification"
];

const companyData = [
  {
    id: 1,
    name: "kajima_19",
    contents_of_work: "nogada",
    required_qualify: "Creative",
    isChecked: false
  },
  {
    id: 2,
    name: "Alchera",
    contents_of_work: "AI",
    required_qualify: "Skill",
    isChecked: false
  },
  {
    id: 3,
    name: "Amazon",
    contents_of_work: "Shipping",
    required_qualify: "Work",
    isChecked: false
  }
];

const workerColumns = [
  "select",
  "no",
  "companyName",
  "workerName",
  "dateOfEntry",
  "healthCheckDeadline",
  "qualification",
  "emergencyContactNumber",
  "dailyWages",
  "pdf"
];

const workerData = [
  {
    id: 1,
    company_name: "alchera",
    worker_name: "yujin1",
    date_of_entry: "2020-09-22T12:42:31Z",
    expired_health_check: "2020-09-22T12:42:31Z",
    emergency_contact_number: "010-9855-6316",
    currency_mark: "¥",
    paid_per_date: 100,
    qualification: [
      {
        no: 1,
        name: "asdasd"
      },
      {
        no: 2,
        name: "adfadf"
      }
    ],
    files: [
      {
        id: 1,
        file_name: "asdasd.pdf",
        path: ""
      },
      {
        id: 1,
        file_name: "asdasd.pdf",
        path: ""
      }
    ],
    isChecked: false
  },
  {
    id: 2,
    company_name: "Amazon",
    worker_name: "Bob",
    date_of_entry: "2020-09-22T12:42:31Z",
    expired_health_check: "2020-09-22T12:42:31Z",
    emergency_contact_number: "010-9855-6316",
    currency_mark: "¥",
    paid_per_date: 100,
    qualification: [
      {
        no: 1,
        name: "asdasd"
      },
      {
        no: 2,
        name: "adfadf"
      }
    ],
    files: [
      {
        id: 1,
        file_name: "asdasd.pdf",
        path: ""
      }
    ],
    isChecked: false
  },
  {
    id: 3,
    company_name: "Google",
    worker_name: "Maria",
    date_of_entry: "2020-09-22T12:42:31Z",
    expired_health_check: "2020-09-22T12:42:31Z",
    emergency_contact_number: "010-9855-6316",
    currency_mark: "¥",
    paid_per_date: 300,
    qualification: [
      {
        no: 1,
        name: "asdasd"
      },
      {
        no: 2,
        name: "adfadf"
      }
    ],
    files: [],
    isChecked: false
  }
];

const qualificationColumns = ["select", "qualificationName"];

const qualificationData = [
  {
    id: 1,
    no: 1,
    name: "qual1",
    isChecked: false
  },
  {
    id: 4,
    no: 2,
    name: "qual4",
    isChecked: false
  },
  {
    id: 9,
    no: 3,
    name: "qual9",
    isChecked: false
  }
];

export const DefaultTable = () => ({
  component: TableComponent,
  props: {
    displayedColumns: array("header", []),
    dataSource: object("data", [])
  }
});
DefaultTable.story = { name: "Default Table" };

export const CompanyTable = () => ({
  component: TableComponent,
  props: {
    displayedColumns: array("header", companyColumns),
    dataSource: object("data", companyData)
  }
});
CompanyTable.story = { name: "Company Table" };

export const WorkerTable = () => ({
  component: TableComponent,
  props: {
    displayedColumns: array("header", workerColumns),
    dataSource: object("data", workerData)
  }
});
WorkerTable.story = { name: "Worker Table" };

export const QualificationTable = () => ({
  component: TableComponent,
  props: {
    displayedColumns: array("header", qualificationColumns),
    dataSource: object("data", qualificationData)
  }
});
QualificationTable.story = { name: "Qualification Table" };
