// const datapro: {
//   titleP: string;
//   price: number;
//   orprice: number;
//   feature: string;
// }[] = [
//   {
//     titleP: "Basic plan",
//     price: 19,
//     orprice: 199,
//     feature: "Feature text goes here",
//   },
//   {
//     titleP: "Business plan",
//     price: 29,
//     orprice: 299,
//     feature: "Feature text goes here",
//   },
//   {
//     titleP: "Enterprise plan",
//     price: 49,
//     orprice: 499,
//     feature: "Feature text goes here",
//   },
// ];

// export default datapro;

type Feature = {
  featureName: string;
};

type PayPlans = {
  titleP: string;
  price: number;
  orprice: number;
  dataFeature: Feature[];
};

export const dataPro: PayPlans[] = [
  {
    titleP: "Basic Plan",
    price: 19,
    orprice: 119,
    dataFeature: [
      {
        featureName: "Feature text goes here",
      },
      {
        featureName: "Feature text goes here",
      },
      {
        featureName: "Feature text goes here",
      },
    ],
  },
  {
    titleP: "Business Plan",
    price: 29,
    orprice: 299,
    dataFeature: [
      {
        featureName: "Feature text goes here",
      },
      {
        featureName: "Feature text goes here",
      },
      {
        featureName: "Feature text goes here",
      },
      {
        featureName: "Feature text goes here",
      },
    ],
  },
  {
    titleP: "Enterprise Plan",
    price: 49,
    orprice: 499,
    dataFeature: [
      {
        featureName: "Feature text goes here",
      },
      {
        featureName: "Feature text goes here",
      },
      {
        featureName: "Feature text goes here",
      },
      {
        featureName: "Feature text goes here",
      },
      {
        featureName: "Feature text goes here",
      },
    ],
  },
];
