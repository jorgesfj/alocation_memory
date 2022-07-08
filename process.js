class Process {

    constructor(name, time) {
        this.name = name;
        this.time = time;
    }

    get nameProcess(){
        return this.name;
    }

    get timeProcess(){
        return this.time;
    }

    set nameProcess(nameProcess) {
        this.name = nameProcess;
    }

    set timeProcess(timeProcess) {
        this.time = timeProcess;
    }
}

module.exports = Process;