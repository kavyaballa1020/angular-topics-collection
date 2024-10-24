export class Student {
  id?: string;
  name: string;
  age: number;
  email: string;

  constructor(name: string, age: number, email: string, id?: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
  }
}
