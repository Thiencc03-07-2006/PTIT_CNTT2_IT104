abstract class Job {
  type: string;
  constructor(type: string) {
    this.type = type;
  }
  printType() {
    console.log(this.type);
  }
  abstract calculateSalary(): number;
}
class PartimeJob extends Job {
  workingHour: number;
  constructor(type: string, workingHour: number) {
    super(type);
    this.workingHour = workingHour;
  }
  calculateSalary(): number {
    return 30000 * this.workingHour;
  }
}
class FulltimeJob extends Job {
  calculateSalary(): number {
    return 10000000;
  }
}
let job1 = new PartimeJob("Ban hang thue", 4);
let job2 = new FulltimeJob("Nhan vien van phong");
console.log(job1.type);
console.log(job1.calculateSalary());
console.log(job2.type);
console.log(job2.calculateSalary());
