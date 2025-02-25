import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoIosWarning } from "react-icons/io";
import { FaTimesCircle } from "react-icons/fa";
import { HiMiniInformationCircle } from "react-icons/hi2";

export const bannerData = [{
    'title': 'Congratulation!',
    'status': 'success',
    'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, corrupti?',
    'icon': <IoIosCheckmarkCircle className="icon"/>
},
{
    'title': 'Attention',
    'status': 'warning',
    'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, corrupti?',
    'icon': <IoIosWarning className="icon" />
},
{
    'title': 'There is a problem with your application',
    'status': 'error',
    'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, corrupti?',
    'icon': <FaTimesCircle className="icon"/>
},
{
    'title': 'Update available',
    'status': 'neutral',
    'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, corrupti?',
    'icon': <HiMiniInformationCircle className="icon" />
},
];

