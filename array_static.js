class ArrayStatic {

    constructor(){
        this.list = "";
        this.row = [];
    }
    
    setProcess(process) {
        if(process.nameProcess.length+ this.list.length >32) {
            if(this.row.indexOf(process) == -1) {
                this.sendToRow(process);
            }
            return "Out of memory"
        } else {
            if(this.row.indexOf(process) != -1) {
                this.row.splice(this.row.indexOf(process),this.row.indexOf(process)+1);
            }
            let position = this.list.length;
            this.list += process.nameProcess;
            this.countTime(process,position);
            return this.list;
        }
    }

    sendToRow(process) {
        this.row.push(process);
        console.log(this.row)
    }

    async countTime(process,position) {
        await this.delay(process.timeProcess);
        console.log("O processo: "+ process.nameProcess +" acabou e liberou: " + process.nameProcess.length + " bits de espaço");
        this.list = this.list.replace(process.nameProcess, "");
        console.log(this.list);
        if(this.row[0] != undefined) {
            this.setProcess(this.row[0]);
        }
    }

    delay(n){
        return new Promise(function(resolve){
            setTimeout(resolve,n*1000);
        });
    }

    
}

module.exports = ArrayStatic;