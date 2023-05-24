interface LoginInterface {
  email: string;
  password: string;
}
interface RegisterInterface {
  nama: string;
  email: string;
  confirm_password: string;
  password: string;
}

export type { LoginInterface, RegisterInterface };
