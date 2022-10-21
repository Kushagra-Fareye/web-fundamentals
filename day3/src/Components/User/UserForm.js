import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { createUser, updateUser } from "../../Api/User/User";

export default function UserForm(props) {
  const [id, setId] = useState(props.user.id);
  const [firstName, setFirstName] = useState(props.user.firstName);
  const [lastName, setLastName] = useState(props.user.lastName);
  const [email, setEmail] = useState(props.user.email);
  const [bloodGroup, setBloodGroup] = useState(props.user.bloodGroup);
  const [age, setAge] = useState(props.user.age);
  const [company, setCompany] = useState(props.user.company);
  const [password, setPassword] = useState(props.user.password);
  const [userName, setUserName] = useState(props.user.userName);

  const [user, setUser] = useState({});

  useEffect(() => {
    setId(props.user.id);
    setUser(props.user);
    setFirstName(props.user.firstName);
    setLastName(props.user.lastName);
    setEmail(props.user.email);
    setAge(props.user.age);
    setBloodGroup(props.user.bloodGroup);
    setCompany(props.user.company);
    setPassword(props.user.password);
    setUserName(props.user.userName);
  }, [props.user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      id,
      firstName,
      lastName,
      email,
      bloodGroup,
      age,
      company,
      password,
      userName,
    };
    setUser(user);
    user["age"] = parseInt(user.age);
    if (props?.user?.id) {
      await updateUser(props.user.id, user);
    } else {
      await createUser(user);
    }
  };

  const handleAddUserSubmit = () => {};

  return (
    <Modal
      open={props.openUserFormModal}
      title="Add/Update User"
      onCancel={props.handleModalClose}
      onOk={handleAddUserSubmit}
      centered
      destroyOnClose={true}
    >
      <form onSubmit={handleSubmit}>
        <label for="firstName">First Name: </label>
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />

        <br />

        <label for="lastName">Last Name: </label>
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />

        <br />
        <label for="age">Age: </label>
        <input
          type="text"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <br />
        <label for="bloodGroup">Blood Group: </label>
        <input
          type="text"
          onChange={(e) => setBloodGroup(e.target.value)}
          value={bloodGroup}
        />
        <br />
        <label for="company">Company: </label>
        <input
          type="text"
          onChange={(e) => setCompany(e.target.value)}
          value={company}
        />
        <br />
        <label for="email">Email: </label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <label for="password">Password: </label>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <label for="userName">User Name: </label>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </Modal>
  );
}
