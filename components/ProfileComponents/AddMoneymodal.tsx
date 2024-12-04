"use client";
import React, { useState, FormEvent } from "react";
import axios from "axios";

interface AddMoneyModalProps {
  onClose: () => void;
  userId: string | null;
}

const AddMoneyModal: React.FC<AddMoneyModalProps> = ({ onClose, userId }) => {
  const [amount, setAmount] = useState<number>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://farmer.handpumpking.in/api/v1/wallet/add-money",
        {
          user_id: userId,
          amount: amount,
        }
      );
      onClose();
    } catch (err) {
      console.log("Error occurred while adding money.");
    } finally {
      //   setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-lg font-bold mb-4">Add Money to Wallet</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="money"
            value={amount}
            onChange={handleChange}
            placeholder="Enter Amount (Rs)"
            required
            className="w-full border border-gray-300 rounded-md p-2 mb-4"
            min="1"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-primary text-white rounded-md px-4 py-2"
            >
              Add Money
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

export default AddMoneyModal;
