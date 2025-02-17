

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    

    test("update_todo", () => {
    expect(
      todo_service.update_todo(0, {
        title: "Start",
        describtion: "Hello World",
        done: false,
      })
    ).toEqual([
      {
        title: "Start",
        describtion: "Hello World",
        done: false,
      },
      {
        title: "1",
        description: "Hey Everyone",
        done: false,
      },
      {
        title: "1",
        description: "Hey Everyone",
        done: false,
      },
      {
        title: "simple one",
        describtion: "source",


});
