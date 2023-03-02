import * as React from "react";
import { Box, Typography, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AddUser from "../../component/AddUser"; //Create Naw Contact 
import ContectList from "../../component/ContectList"; //Contact list
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import "./MainPage.scss";

const MainPage = () => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="main-ctn">
      <Box>
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            className="tablist"
          >
            <Tab label="Contact List" value="1" className="tab" />
          </TabList>
          <TabPanel value="1" className="tab-panel">
            <div className="card-ctn mt-5">
              <Typography component="h1" className="title">
               <PersonAddIcon/> Add To Contact
              </Typography>
              <div className="card-body">
                <AddUser />
              </div>
            </div>
            <div className="card-ctn">
              <Typography component="h1" className="title">
               <ContactPageIcon/> Contact List
              </Typography>
              <div className="card-body1">
                <ContectList />
              </div>
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default MainPage;
