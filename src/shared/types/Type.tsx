import { ReactElement } from "react";
import StarIcon from "@mui/icons-material/Star";

type DataReview = {
  rating: ReactElement;
  comment: string;
};
type CustomerData = {
  custumerName: string;
  custumerImg: string;
  custumerPosition: string;
  custumerCompany: string;
  custumerCompanyImg: string;
  review: DataReview[];
};
export const dataRatingReview: CustomerData[] = [
  {
    custumerName: "Customer Name",
    custumerImg: "Img",
    custumerPosition: "Position",
    custumerCompany: "Company name",
    custumerCompanyImg: "Img",
    review: [
      {
        rating: <StarIcon />,
        comment:
          "A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers.",
      },
    ],
  },
  {
    custumerName: "Customer Name",
    custumerImg: "Img",
    custumerPosition: "Position",
    custumerCompany: "Company name",
    custumerCompanyImg: "Img",
    review: [
      {
        rating: <StarIcon />,
        comment:
          "A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers.",
      },
    ],
  },
  {
    custumerName: "Customer Name",
    custumerImg: "Img",
    custumerPosition: "Position",
    custumerCompany: "Company name",
    custumerCompanyImg: "Img",
    review: [
      {
        rating: <StarIcon />,
        comment:
          "A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers.",
      },
    ],
  },
];
