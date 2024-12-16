import React from 'react';
import { DeliveryAddress } from '../../types/order';

interface DeliveryAddressFormProps {
  address: DeliveryAddress;
  onChange: (address: DeliveryAddress) => void;
}

export default function DeliveryAddressForm({ address, onChange }: DeliveryAddressFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ ...address, [name]: value });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Adresse
        </label>
        <input
          type="text"
          name="street"
          value={address.street}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ville
          </label>
          <input
            type="text"
            name="city"
            value={address.city}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Code postal
          </label>
          <input
            type="text"
            name="zipCode"
            value={address.zipCode}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Pays
        </label>
        <input
          type="text"
          name="country"
          value={address.country}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          required
        />
      </div>
    </div>
  );
}