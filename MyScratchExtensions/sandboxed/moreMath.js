class ScratchMoreMath{
    constructor(){
    }

    squareBlock={
        "opcode":"square",
        "blockType":"reporter",
        "text":"raise [base] to [exponent] power",
        "arguements":{
            "base":"number",
            "exponent":"number"
        }
    }

    getInfo(){
        return {
            "id":"moreMath",
            "name":"More Math",
            "blocks":[this.squareBlock]
        }
    }
    //add methods for blocks
    square({base,exponent}){
        return base**exponent
    }
}


Scratch.extensons.regester(new ScratchMoreMath())

