// src/Ultiy/Icon.jsx
import React from 'react';
import { AiFillDashboard } from 'react-icons/ai';
import { MdOutlineReceipt } from 'react-icons/md';
import { FaChartPie, FaCalendarAlt, FaDatabase, FaTasks, FaClipboardList, FaShieldAlt, FaCogs } from 'react-icons/fa';
import { GiSandsOfTime } from 'react-icons/gi';

export const Icons = {
  Dashboard: <AiFillDashboard />,
  Motions: <GiSandsOfTime />,
  Invoices: <MdOutlineReceipt />,
  Reports: <FaChartPie />,
  Calendar: <FaCalendarAlt />,
  Data: <FaDatabase />,
  EUO: <GiSandsOfTime />,
  Tasks: <FaTasks />,
  Templates: <GiSandsOfTime />,
  Security: <FaShieldAlt />,
  Features: <FaClipboardList />,
  Settlements: <FaClipboardList />,
  Settings: <FaCogs />
};
