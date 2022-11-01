import { Button } from "antd";
import React, { useState } from "react";
import { DisplayUsers, UserForm } from "../Components";

export default function User() {
  const [openUserFormModal, toggleUserFormModal] = useState(false);
  const [userFormData, setUserFormData] = useState({});

  const handleOpenUserFormModal = (userData) => {
    setUserFormData(userData);
    toggleUserFormModal(true);
  };
  const handleModalClose = () => {
    toggleUserFormModal(false);
    setUserFormData({});
  };
  return (
    <div>
      <br />
      <br />
      <Button onClick={() => toggleUserFormModal(true)}>Add User</Button>
      <br />
      <UserForm
        openUserFormModal={openUserFormModal}
        handleModalClose={handleModalClose}
        user={userFormData}
      />
      <br />
      <DisplayUsers handleOpenUserFormModal={handleOpenUserFormModal} />
    </div>
  );
}
