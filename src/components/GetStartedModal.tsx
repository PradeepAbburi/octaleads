import React, { useState } from 'react';

interface GetStartedModalProps {
  show: boolean;
  onClose: () => void;
}

const GetStartedModal: React.FC<GetStartedModalProps> = ({ show, onClose }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
        {!submitted ? (
          <form
            className="flex flex-col gap-4"
            onSubmit={e => {
              e.preventDefault();
              if (name && contact) {
                setSubmitted(true);
              }
            }}
          >
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Get Started</h2>
            <label className="text-sm font-semibold text-blue-700">Name *</label>
            <input
              type="text"
              className="border border-blue-200 rounded-lg px-3 py-2"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              placeholder="Enter your name"
            />
            <label className="text-sm font-semibold text-blue-700">Contact *</label>
            <input
              type="text"
              className="border border-blue-200 rounded-lg px-3 py-2"
              value={contact}
              onChange={e => setContact(e.target.value)}
              required
              placeholder="Enter your contact info"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold mt-2 hover:bg-blue-700 transition-all duration-200"
            >Submit</button>
            <button
              type="button"
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl"
              onClick={onClose}
              aria-label="Close"
            >×</button>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl font-bold text-blue-700">Thank You!</h2>
            <p className="text-blue-700">We will contact you within 12 hours.</p>
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold mt-2 hover:bg-blue-700 transition-all duration-200"
              onClick={() => {
                setSubmitted(false);
                setName('');
                setContact('');
                onClose();
              }}
            >Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetStartedModal;
