// Homework#1 GB_React 


/*
1. Написать функцию loop, которая будет принимать параметры: times (значение по умолчанию = 0),
callback (значение по умолчанию = null) и будет в цикле (times раз), вызывать функцию callback.
Если функцию не передана, то цикл не должен отрабатывать ни разу. Покажите применение этой функции
*/
const loop = (times = 0, callback = null) => {
  if (!callback) {
    return;
  } else {
    for (let i = 0; i < times; i++) {
      callback(i);
    }
  }
};
// loop(4, (add)=>{console.log(++add)})


/*
2. Написать функцию calculateArea, которая будет принимать параметры, для вычисления 
площади(можете выбрать какую то конкретную фигуру, а можете, основываясь на переданных 
параметрах, выполнять требуемый алгоритм вычисления площади для переданной в параметрах фигуры)
и возвращать объект вида: { area, figure, input }, где area - вычисленная площадь, figure - название
фигуры, для которой вычислялась площадь, input - входные параметры, по которым было произведено вычисление.
*/
const calculateArea = (figure = null, ...input) => {
  let a, b, c, p, S;
  switch (figure) {
    case 'triangle':
      [a, b, c] = [...input];
      p = (a + b + c) / 2
      S = Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(2)
      return S;
    case 'rectangle':
      [a, b] = [...input];
      S = (a * b)
      return S;
    case 'square':
      [a] = [...input]
      S = Math.pow(a, 2).toFixed(2)
      return S;
    default:
      break;
  }
}  
// console.log(calculateArea('triangle', 3.3, 5.4, 5, 5))


/*
  3. Необходимо написать иерархию классов вида: Human -> Employee -> Developer, Human -> Employee -> Manager
  Каждый Менеджер(Manager) должен иметь внутренний массив своих сотрудников(разработчиков), а также методы по удалению / добавлению разработчиков.
  Каждый Разработчик(Developer) должны иметь ссылку на Менеджера и методы для изменения менеджера(имеется ввиду возможность назначить другого менеджера).
  У класса Human должны быть следующие параметры: name(строка), age(число), dateOfBirth(строка или дата)
  У класса Employee должны присутствовать параметры: salary(число), department(строка)
  В классе Human должен присутствовать метод displayInfo, который возвращает строку со всеми параметрами экземпляра Human.
  В классе Employee должен быть реализовать такой же метод(displayInfo), который вызывает базовый метод и дополняет его параметрами из экземпляра Employee
  Чтобы вызвать метод базового класса, необходимо внутри вызова метода displayInfo класса Employee написать: super.displayInfo(), это вызовет метод disaplyInfo класс Human и вернет строку с параметрами Human'a
*/
class Human {
  constructor(name = '', age = 0, dateOfBirth = '') {
    this.name = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
  }

  displayInfo() {
    return `${this.name}, ${this.age} years old, born on ${this.dateOfBirth}`
  }
}


class Employee extends Human {
  constructor(name, age, dateOfBirth, salary, department) {
    super(name, age, dateOfBirth);
    this.salary = salary;
    this.department = department;
  }

  displayInfo() {
    console.log({
      name: this.name,
      age: this.age,
      dateOfBirth: this.dateOfBirth,
      salary: this.salary,
      department: this.department
    });
  }
}


class Developer extends Employee {
  constructor(name, age, dateOfBirth, salary, department, manager) {
    super(name, age, dateOfBirth, salary, department);
    this.manager = manager;
  }
  changeManager(manager) {
    this.manager = manager;
  }
  displayInfo() {
    console.log({
      name: this.name,
      age: this.age,
      dateOfBirth: this.dateOfBirth,
      salary: this.salary,
      department: this.department,
      manager: this.manager
    });
  }
}


class Manager extends Employee {
  constructor(name, age, dateOfBirth, salary, department, employees) {
    super(name, age, dateOfBirth, salary, department);
    this.employees = employees;
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  removeEployee(pos) {
    this.employees.splice(pos);
  }

  displayInfo() {
    console.log({
      name: this.name,
      age: this.age,
      dateOfBirth: this.dateOfBirth,
      salary: this.salary,
      department: this.department,
      employees: this.employees
    });
  }
}

const human = new Human('James Collins', 31, '25.11.1986')
console.log(human.displayInfo())

/*
  4*. При помощи генератора написать функцию - анкету, которая запрашивает у пользователя на ввод параметры и передаёт их в генератор. В конце, когда генератор завершается, он должен вернуть все введённые входные параметры в виде объекта. Этот объект нужно вывести в консоли.
  5*. Написать цикл, который создаёт массив промисов, внутри каждого промиса происходит обращение к ресурсу (https://jsonplaceholder.typicode.com/users/number), где вместо number подставляется число от 1 до 10, в итоге должно получиться 10 промисов. Следует дождаться выполнения загрузки всеми промисами и далее вывести массив загруженных данных.
*/