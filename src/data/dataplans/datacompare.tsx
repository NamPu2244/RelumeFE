import CheckIcon from '@mui/icons-material/Check';
import { SvgIconClasses, SvgIconProps } from '@mui/material';
import { ReactElement } from 'react';


// let myIcon: React.ReactElement<SvgIconProps> = <CheckIcon />; 

type DataCompare = {
  basic:  string | number | ReactElement;
  business: string | number | ReactElement;
  enterprise: string | number | ReactElement;
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
        enterprise: "Unlimited",
        featureName: "Feature text goes here",
      },
      {
        basic: <CheckIcon />,
        business: <CheckIcon />,
        enterprise: <CheckIcon />,
        featureName: "Feature text goes here",
      },
      {
        basic: <CheckIcon />,
        business: <CheckIcon />,
        enterprise: <CheckIcon />,
        featureName: "Feature text goes here",
      },
      {
        basic: " ",
        business: <CheckIcon />,
        enterprise: <CheckIcon />,
        featureName: "Feature text goes here",
      },
      {
        basic: " ",
        business: " ",
        enterprise: <CheckIcon />,
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
        enterprise: "Unlimited",
        featureName: "Feature text goes here",
      },
      {
        basic: <CheckIcon />,
        business: <CheckIcon />,
        enterprise: <CheckIcon />,
        featureName: "Feature text goes here",
      },
      {
        basic: <CheckIcon />,
        business: <CheckIcon />,
        enterprise: <CheckIcon />,
        featureName: "Feature text goes here",
      },
      {
        basic: " ",
        business: <CheckIcon />,
        enterprise: <CheckIcon />,
        featureName: "Feature text goes here",
      },
      {
        basic: " ",
        business: " ",
        enterprise: <CheckIcon />,
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
        enterprise: "Unlimited",
        featureName: "Feature text goes here",
      },
      {
        basic: <CheckIcon />,
        business: <CheckIcon />,
        enterprise: <CheckIcon />,
        featureName: "Feature text goes here",
      },
      {
        basic: <CheckIcon />,
        business: <CheckIcon />,
        enterprise: <CheckIcon />,
        featureName: "Feature text goes here",
      },
      {
        basic: " ",
        business: <CheckIcon />,
        enterprise: <CheckIcon />,
        featureName: "Feature text goes here",
      },
      {
        basic: " ",
        business: " ",
        enterprise: <CheckIcon />,
        featureName: "Feature text goes here",
      },
    ],
  },
];



