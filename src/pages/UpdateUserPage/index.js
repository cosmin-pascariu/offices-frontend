import React, { useState } from "react";
import Helmet from "react-helmet";
import { useNavigate } from "react-router-dom";
import {
  AddUserContainer,
  Ball,
  Button,
  ButtonContent,
  ButtonsContainer,
  Input,
  InputContainer,
  InputContent,
  InputSmallContent,
  Label,
  Percentage,
  SmallInput,
  SwitchBtn,
  SwitchContainer,
  Title,
  WorkModel,
  WorkOption,
} from "../AddUserPage/AddUserPageElements";
import { MdKeyboardArrowRight as Arrow } from "react-icons/md";
import "./dropDown.css";

const data = [
  { id: 0, label: "Main Builing" },
  { id: 1, label: "Seccondary Building" },
  { id: 2, label: "Primary Building" },
  { id: 3, label: "Building Building" },
];
const DropdownBuildings = () => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
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
          : "."}
        <i className={`icon ${isOpen && "open"}`}>
          <Arrow size={"20px"} />
        </i>
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>
        {items.map((item) => (
          <div
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
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

const UpdateUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [workPercentage, setWorkPercentage] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [nationality, setNationality] = useState("");

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/users";
    navigate(path);
  };
  const [isPhysical, setIsPhysical] = useState(true);
  const [isHybrid, setIsHybrid] = useState(false);
  const [isRemote, setIsRemote] = useState(false);

  const handlePhysical = () => {
    setIsPhysical(true);
    setIsHybrid(false);
    setIsRemote(false);
    document.getElementById("percentage").disabled = true;
    document.getElementById("percentage").style.backgroundColor = "#f8f8f8";
    document.getElementById("percentage").value = "";
  };
  const handleHybrid = () => {
    setIsPhysical(false);
    setIsHybrid(true);
    setIsRemote(false);
    document.getElementById("percentage").disabled = false;
    document.getElementById("percentage").style.backgroundColor = "#fff";
    document.getElementById("percentage").value = "";
  };
  const handleRemote = () => {
    setIsPhysical(false);
    setIsHybrid(false);
    setIsRemote(true);
    document.getElementById("percentage").disabled = true;
    document.getElementById("percentage").value = "100%";
    document.getElementById("percentage").style.backgroundColor = "#fff";
  };

  const [isSwitchActive, setIsSwitchActive] = useState(false);
  const handleIsSwitchActive = () => {
    setIsSwitchActive(!isSwitchActive);
    document.getElementById("ball").style.transform = isSwitchActive
      ? "translate(40px,0)"
      : "";
  };

  return (
    <AddUserContainer>
      <Helmet>
        <title>Offices | Update User</title>
      </Helmet>
      <Title>
        Update User
        <SwitchContainer>
          <SwitchBtn
            id="switch-button"
            onClick={handleIsSwitchActive}
            bgColor={isSwitchActive}
          >
            {!isSwitchActive ? (
              <>
                <Ball id="ball" />
                <p>ACT</p>
              </>
            ) : (
              <>
                <p>DEACT</p>
                <Ball id="ball" />
              </>
            )}
          </SwitchBtn>
        </SwitchContainer>
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
          <Label for="building">Building</Label>
          <DropdownBuildings />
        </InputContent>
      </InputContainer>

      <InputContainer>
        <InputContent>
          <Label for="office">Office</Label>
          <DropdownBuildings />
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
          <Label for="birth-date">Birth Date</Label>
          <Input
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            id="birth-date"
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
          <Button id="save-button" to="/users">
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

export default UpdateUser;
