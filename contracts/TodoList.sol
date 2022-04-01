// SPDX-License-Identifier: MIT
pragma solidity >= 0.4.22 < 0.9.0 ;

contract TodoList{
    uint public taskCount = 0 ; 

    mapping (uint => Task) public tasks;

    struct Task{
        uint id;
        string content;
        bool completed;
    }

    // event CreateTask {
    //     uint id,
    //     string content,
    //     bool completed
    // };

   
    constructor() public {
        createTask("Rohit Demo ");
    }

    function createTask(string memory _content) public {
        taskCount ++;
        tasks[taskCount] = Task(taskCount, _content , false);
        //emit CreateTask

    }

}