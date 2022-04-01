const TodoList = artifacts.require('./TodoList.sol')

contract('TodoList', (accounts)=>{
    before(async ()=>{
        this.todoList = await TodoList.deployed()
    })
    it('deployed succesfully', async ()=>{
        const address = await  this.todoList.address
        assert.notEqual(address, 0x0)
        assert.notEqual(address, '')
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
    })

    it('Lists task succesfully', async ()=>{
        const taskCount =  await this.todoList.taskCount()
        const task = await this.todoList.tasks(taskCount)
        assert.equal(task.id.toNumber(), taskCount.toNumber()) 
    })

    it('Create task succesfully', async ()=>{
        const result = await this.todoList.createTask('A new task')
        const taskCount = await this.todoList.taskCount() 
        //console.log(result)
        const event = result.logs[0].args
        assert.equal(event.id.toNumber(),taskCount.toNumber())
    })

})