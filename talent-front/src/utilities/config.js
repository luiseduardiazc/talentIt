const Options = Object.freeze({
  Microsoft: "1",
  Oracle: "2",
});

const optionsTecnologies = [
  { value: Options.Microsoft, label: "Microsoft .Net" },
  { value: Options.Oracle, label: "Oracle Java" },
];

const microsofItems = [
  { value: 1, label: "Asp.Net" },
  { value: 2, label: "MVVM" },
  { value: 3, label: "Ado.Net" },
  { value: 4, label: "Entity FrameWork" },
  { value: 5, label: "LinQ" },
];

const oracleItems = [
  { value: 1, label: "Java Server Pages" },
  { value: 2, label: "Java Server Faces" },
  { value: 3, label: "Enterprise Java Beans" },
  { value: 4, label: "Java Persistence Api" },
  { values: 5, label: "Java Messaging Services" },
];

const config = {
  Options,
  optionsTecnologies,
  microsofItems,
  oracleItems,
  URL_EXTERNAL_API: "http://jsonplaceholder.typicode.com/users",
};

export default config;
