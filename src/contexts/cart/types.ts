export type CartProps = {
  children: React.ReactNode;
};

export type CartContextProps = {
  cart: CartItem[];
  addItemCart: (item: CartItem) => void;
  getTotalCart: () => number;
  finishCart: () => void;
};

export type CartItem = {
  name?: string;
  price: number;
};
