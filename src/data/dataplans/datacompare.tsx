type DataCompare = {
  basic: string | number;
  business: string | number;
  enterprise: string | number;
  featureName: string;
};

type TableCategory = {
  categoryName: string;
  rowData: DataCompare[];
};

export const dataTableCompare: TableCategory[] = [
  {
    categoryName: "One",
    rowData: [
      {
        basic: 10,
        business: 25,
        enterprise: "Unlimit",
        featureName: "Feature text goes here",
      },
      {
        basic: "check",
        business: "check",
        enterprise: "check",
        featureName: "Feature text goes here",
      },
      {
        basic: "check",
        business: "check",
        enterprise: "check",
        featureName: "Feature text goes here",
      },
      {
        basic: " ",
        business: "check",
        enterprise: "check",
        featureName: "Feature text goes here",
      },
      {
        basic: " ",
        business: " ",
        enterprise: "check",
        featureName: "Feature text goes here",
      },
    ],
  },
  {
    categoryName: "Two",
    rowData: [
      {
        basic: 10,
        business: 25,
        enterprise: "Unlimit",
        featureName: "Feature text goes here",
      },
      {
        basic: "check",
        business: "check",
        enterprise: "check",
        featureName: "Feature text goes here",
      },
      {
        basic: "check",
        business: "check",
        enterprise: "check",
        featureName: "Feature text goes here",
      },
      {
        basic: " ",
        business: "check",
        enterprise: "check",
        featureName: "Feature text goes here",
      },
      {
        basic: " ",
        business: " ",
        enterprise: "check",
        featureName: "Feature text goes here",
      },
    ],
  },
  {
    categoryName: "Three",
    rowData: [
      {
        basic: 10,
        business: 25,
        enterprise: "Unlimit",
        featureName: "Feature text goes here",
      },
      {
        basic: "check",
        business: "check",
        enterprise: "check",
        featureName: "Feature text goes here",
      },
      {
        basic: "check",
        business: "check",
        enterprise: "check",
        featureName: "Feature text goes here",
      },
      {
        basic: " ",
        business: "check",
        enterprise: "check",
        featureName: "Feature text goes here",
      },
      {
        basic: " ",
        business: " ",
        enterprise: "check",
        featureName: "Feature text goes here",
      },
    ],
  },
];



