export type AddressFormData = {
  streetAddress: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export type ActionResponse = {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof AddressFormData]?: { errors?: string[] };
  };
  inputs?: AddressFormData,
}

