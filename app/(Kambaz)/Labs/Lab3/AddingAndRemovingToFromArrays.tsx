

export default function AddingAndRemovingToFromArrays() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2"];
    let todos = ["Buy milk", "Feed the pets"];
    numberArray1.push(6); // adding new items
    stringArray1.push("string3");
    todos.push("Walk the dogs");
    numberArray1.splice(2, 1); // remove 1 item starting at 2
    stringArray1.splice(1, 1);
    return (
        <div id="wd-adding-removing-from-arrays">
            <h4>Add/remove to/from arrays</h4>
            numberArray1 = {numberArray1.join(", ")} <br />
            stringArray1 = {stringArray1.join(", ")} <br />
            Todo list:
            <ol>
                {todos.map((todo, index) => <li key={index}>{todo}</li>)}
            </ol><hr />
        </div>);
}