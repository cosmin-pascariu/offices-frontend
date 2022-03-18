import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AddUserContainer,
  Input,
  InputContent,
  Title,
  InputContainer,
  Label,
  Button,
  WorkModel,
  WorkOption,
  Percentage,
  SwitchContainer,
  SwitchBtn,
  Ball,
  InputSmallContent,
  SmallInput,
  ButtonsContainer,
  ButtonContent,
} from "./AddUserPageElements";
import { MdKeyboardArrowRight as Arrow } from "react-icons/md";
import "./DropDown.css";

const data = [
  { id: 0, label: "Main Builing" },
  { id: 1, label: "Seccondary Building" },
  { id: 2, label: "Primary Building" },
  { id: 3, label: "Building Building" },
];
const DropdownBuildings = ({ items }) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    // eslint-disable-next-line eqeqeq
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    setOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedItem
          ? items.find((item) => item.id == selectedItem).label
          : "Select one of the following option..."}
        <i className={`icon ${isOpen && "open"}`}>
          <Arrow size={"20px"} />
        </i>
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>
        {items.map((item) => (
          <div
            key={item.id}
            className="dropdown-item"
            onClick={(e) => handleItemClick(e.target.id)}
            id={item.id}
          >
            <span
              className={`dropdown-item-dot ${
                item.id == selectedItem && "selected"
              }`}
            >
              •{" "}
            </span>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [workPercentage, setWorkPercentage] = useState("0");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [nationality, setNationality] = useState("");

  const location = useLocation();
  const [switchVisibility, setSwitchVisibility] = useState(false);
  const [buildings, setBuildings] = useState([]);
  const [offices, setOffices] = useState([]);

  function vis() {
    if (location.pathname === "/users/add-user") setSwitchVisibility(false);
    if (location.pathname === "/users/update-user") setSwitchVisibility(true);
  }

  const getBuildingsFromDB = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    };
    const response = await fetch(
      "https://offices-backend.herokuapp.com/api/buildings",
      requestOptions
    );
    const data = await response.json();
    if (data?.length) {
      setBuildings(data);
      console.log(data);
      return;
    }
    setBuildings([]);
    console.log(data);
  };

  const getOfficesFromDB = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    };
    const response = await fetch(
      "https://offices-backend.herokuapp.com/api/offices",
      requestOptions
    );
    const data = await response.json();
    if (data?.length) {
      setOffices(data);
      console.log(data);
      return;
    }
    setOffices([]);
    console.log(data);
  };

  useEffect(() => {
    getBuildingsFromDB();
    getOfficesFromDB();
  }, []);

  useEffect(() => {
    vis();
  }, []);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/users";
    navigate(path);
  };
  const [isPhysical, setIsPhysical] = useState(true);
  const [isHybrid, setIsHybrid] = useState(false);
  const [isRemote, setIsRemote] = useState(false);

  const handlePhysical = () => {
    document.getElementById("percentage").value = "0";
    document.getElementById("percentage").disabled = true;
    document.getElementById("percentage").style.backgroundColor = "#f8f8f8";
    setIsPhysical(true);
    setIsHybrid(false);
    setIsRemote(false);
  };
  const handleHybrid = () => {
    setIsPhysical(false);
    setIsHybrid(true);
    setIsRemote(false);
    document.getElementById("percentage").value = "";
    document.getElementById("percentage").disabled = false;
    document.getElementById("percentage").style.backgroundColor = "#fff";
  };
  const handleRemote = () => {
    setIsPhysical(false);
    setIsHybrid(false);
    setIsRemote(true);
    document.getElementById("percentage").disabled = true;
    document.getElementById("percentage").value = "100";
    document.getElementById("percentage").style.backgroundColor = "#fff";
  };

  const [sActive, setSActive] = useState(true);
  const handleSActive = () => {
    setSActive(!sActive);
    document.getElementById("ball").style.transform = sActive
      ? "translate(40px,0)"
      : "";
  };

  const [user, setUser] = useState([]);
  const sendUserToBD = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
      body: JSON.stringify({
        email: email,
        password: password,
        role: role,
        first_name: firstName,
        last_name: lastName,
        office_id: null,
        building_id: null,
        gender: "M",
        birth_date: birthDate,
        nationality: nationality,
        remote_percentage: parseFloat(workPercentage),
      }),
    };
    console.log(requestOptions);
    const response = await fetch(
      "https://offices-backend.herokuapp.com/api/users/",
      requestOptions
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <AddUserContainer>
      <Helmet>
        <title>Offices | Add New User</title>
      </Helmet>
      <Title>
        Add New User
        {switchVisibility && (
          <SwitchContainer>
            <SwitchBtn
              id="switch-button"
              onClick={handleSActive}
              bgColor={sActive}
            >
              <Ball id="ball" />
            </SwitchBtn>
          </SwitchContainer>
        )}
      </Title>
      <InputContainer>
        <InputContent>
          <Label for="first-name">First Name</Label>
          <Input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            id="first-name"
            type={"text"}
          />
        </InputContent>
        <InputContent>
          <Label for="last-name">Last Name</Label>
          <Input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            id="last-name"
            type={"text"}
          />
        </InputContent>
      </InputContainer>

      <InputContainer>
        <InputContent>
          <Label for="password">Password</Label>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type={"text"}
          />
        </InputContent>
        <InputContent>
          <Label for="buildings">Building</Label>
          <DropdownBuildings
            items={buildings}
            id="dropdownBuildings"
            style={{ zIndex: "10" }}
          />
        </InputContent>
      </InputContainer>

      <InputContainer>
        <InputContent>
          <Label for="email">E-mail Address</Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type={"email"}
          />
        </InputContent>
        <InputContent>
          <Label>Work Model</Label>
          <WorkModel>
            <WorkOption
              id="physical-button"
              onClick={handlePhysical}
              uColor={isPhysical}
            >
              Physical
            </WorkOption>
            <WorkOption
              id="hybrid-button"
              onClick={handleHybrid}
              uColor={isHybrid}
            >
              Hybrid
            </WorkOption>
            <WorkOption
              id="remote-button"
              onClick={handleRemote}
              uColor={isRemote}
            >
              Remote
            </WorkOption>
            <Percentage
              value={workPercentage}
              onChange={(e) => setWorkPercentage(e.target.value)}
              type={"text"}
              id="percentage"
            />
          </WorkModel>
        </InputContent>
      </InputContainer>

      <InputContainer>
        <InputContent id="offices-dropdown">
          <Label for="offices">Office</Label>
          <DropdownBuildings items={offices} />
        </InputContent>

        <InputSmallContent>
          <Label for="role">Role</Label>
          <SmallInput
            value={role}
            onChange={(e) => setRole(e.target.value)}
            id="role"
          />
        </InputSmallContent>
        <InputSmallContent>
          <Label for="gender">Gender (Optional)</Label>
          <SmallInput
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            id="gender"
          />
        </InputSmallContent>
      </InputContainer>

      <InputContainer>
        <InputContent>
          <Label for="birthDate">Birth Date</Label>
          <Input
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            id="birthDate"
            type={"date"}
          />
        </InputContent>
        <InputContent>
          <Label for="nationality">Nationality (Optional)</Label>
          <Input
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            id="nationality"
            type={"text"}
          />
        </InputContent>
      </InputContainer>

      <ButtonsContainer>
        <ButtonContent style={{ alignItems: "flex-end" }}>
          <Button id="save-button" onClick={(e) => sendUserToBD(e)}>
            SAVE
          </Button>
        </ButtonContent>
        <ButtonContent>
          <Button id="cancel-button" onClick={routeChange}>
            CANCEL
          </Button>
        </ButtonContent>
      </ButtonsContainer>
    </AddUserContainer>
  );
};

export default AddUser;
