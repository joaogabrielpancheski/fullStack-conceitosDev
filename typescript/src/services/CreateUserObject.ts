/**
 * To create: name, email, password, techs, techsMixed
 */

interface TechMixedObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: string[];
  techsMixed: Array<string | TechMixedObject>
}

export default function createUser({ name, email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password
  };

  return user;
}