import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdAddShoppingCart } from "react-icons/md";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { MdDisplaySettings } from "react-icons/md";
import { RiApps2AddFill } from "react-icons/ri";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { Link } from "react-router";

export function DefaultSidebar() {
  return (
    <Card className=" w-full max-w-[20rem] p-4 shadow-xl shadow-gray-900/4">
      <div className="mb-2 p-4 font-tiro select-none">
        <Typography variant="h5" color="blue-gray">
          MEFWD Dashboard
        </Typography>
      </div>
      <List className="font-tiro select-none">
        <ListItem>
          <ListItemPrefix>
            <MdDisplaySettings className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/">Dashboard</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <RiApps2AddFill className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/leavemanagement">Leave Management</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <BiSolidCategoryAlt className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/showleave">Show Leave Management</Link>
        </ListItem>

        <ListItem>
          <ListItemPrefix>
            <MdAddShoppingCart className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/discipline ">Discipline</Link>
        </ListItem>

        <ListItem>
          <ListItemPrefix>
            <MdAddShoppingCart className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/personel ">Personal Information</Link>
        </ListItem>

        <ListItem>
          <ListItemPrefix>
            <MdFormatListBulletedAdd className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/inventory">Store</Link>
        </ListItem>

        <ListItem>
          <ListItemPrefix>
            <MdFormatListBulletedAdd className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/consumption">Consunption</Link>
        </ListItem>

        <ListItem>
          <ListItemPrefix>
            <RiLogoutCircleRLine className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
