import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmLeft,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";

const DashSidebar = () => {
  const location = useLocation();
  const [tab, setTab] = React.useState("");
  React.useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              active={tab === "profile"}
              label={"user"}
              icon={HiChartPie}
            >
              Profile
            </Sidebar.Item>
          </Link>
          <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            className="cursor-pointer"
            icon={HiArrowSmLeft}
          >
            Sign out
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashSidebar;
