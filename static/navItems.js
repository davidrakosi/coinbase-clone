import {
  AiOutlinePieChart,
  AiOutlinePlusCircle,
  AiOutlineGift,
} from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'
import { RiCoinsLine, RiNotification3Line } from 'react-icons/ri'
import { MdWeb } from 'react-icons/md'
import { BsPersonPlus } from 'react-icons/bs'

export const navItems = [
  {
    title: 'Assets',
    icon: <AiOutlinePieChart />,
  },
  {
    title: 'Trade',
    icon: <BiTrendingUp />,
  },
  {
    title: 'Pay',
    icon: <RiCoinsLine />,
  },
  {
    title: 'For You',
    icon: <MdWeb />,
  },
  {
    title: 'Learn and earn',
    icon: <AiOutlinePlusCircle />,
  },
  {
    title: 'Notifications',
    icon: <RiNotification3Line />,
  },
  {
    title: 'Invite Friends',
    icon: <BsPersonPlus />,
  },
  {
    title: 'Send a gift',
    icon: <AiOutlineGift />,
  },
]
