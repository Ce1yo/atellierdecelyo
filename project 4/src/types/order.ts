export type DeliveryMethod = 'pickup' | 'delivery';

export interface DeliveryAddress {
  street: string;
  city: string;
  zipCode: string;
  country: string;
}

export interface OrderDetails {
  deliveryMethod: DeliveryMethod;
  address?: DeliveryAddress;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}