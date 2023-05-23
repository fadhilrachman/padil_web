interface LoginInterface {
  email: string;
  password: string;
}
interface Register {
  nama: string;
  email: string;
  confirm_password: string;
  password: string;
}

export type { LoginInterface, Register };
