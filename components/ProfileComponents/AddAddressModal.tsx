"use client";
import React, { useState, FormEvent, useEffect } from "react";

interface Address {
  id?: string;
  contact_person_name: string;
  address_type: string;
  contact_person_number: string;
  address: string;
  default_status?: any;
}

interface AddAddressModalProps {
  onClose: () => void;
  address?: Address | null; // Allow for null
  onSave: (data: Address) => void;
}

const AddAddressModal: React.FC<AddAddressModalProps> = ({
  onClose,
  address,
  onSave,
}) => {
  const [formData, setFormData] = useState<Address>({
    contact_person_name: "",
    address_type: "",
    contact_person_number: "",
    address: "",
    default_status: 1,
  });

  useEffect(() => {
    if (address) {
      setFormData(address);
    }
  }, [address]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(formData); // Call the onSave prop with form data
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center backdrop-blur-sm ">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-lg font-bold mb-4">
          {address ? "Edit Address" : "Add New Address"}
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="contact_person_name"
            value={formData.contact_person_name}
            onChange={handleChange}
            placeholder="Contact Person Name"
            required
            className="w-full border border-gray-300 rounded-md p-2 mb-4"
          />
          <input
            type="text"
            name="address_type"
            value={formData.address_type}
            onChange={handleChange}
            placeholder="Address Type (e.g., Home)"
            required
            className="w-full border border-gray-300 rounded-md p-2 mb-4"
          />
          <input
            type="text"
            name="contact_person_number"
            value={formData.contact_person_number}
            onChange={handleChange}
            placeholder="Contact Person Number"
            required
            className="w-full border border-gray-300 rounded-md p-2 mb-4"
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            required
            className="w-full border border-gray-300 rounded-md p-2 mb-4"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md px-4 py-2"
            >
              {address ? "Update Address" : "Add Address"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-black rounded-md px-4 py-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAddressModal;
