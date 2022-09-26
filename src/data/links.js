import { FiHome, FiUsers, FiBarChart2 } from "react-icons/fi";
import { RiSuitcaseLine } from "react-icons/ri";
import { BsLightningCharge } from "react-icons/bs";
import { MdOutlineAddBox } from "react-icons/md";
import { AiOutlineRise } from "react-icons/ai";

export const links = [
  {
    title: "Categories",
    links: [
      {
        name: "House",
        icon: <FiHome />,
      },
      {
        name: "Family",
        icon: <FiUsers />,
      },
      {
        name: "Work",
        icon: <RiSuitcaseLine />,
      },
      {
        name: "Sports",
        icon: <BsLightningCharge />,
      },
      {
        name: "Add",
        icon: <MdOutlineAddBox />,
      },
    ],
  },
  {
    title: "Data",
    links: [
      {
        name: "Statistics",
        icon: <FiBarChart2 />,
      },
      {
        name: "Compare",
        icon: <AiOutlineRise />,
      },
    ],
  },
];
