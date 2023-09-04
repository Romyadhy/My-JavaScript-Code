class fibonacci{
    constructor(n){
        this.n = n; 
    }

    output(){
        let result = [];
        let fn = 0;
        let fn_1 = 0;
        let fn_2 = 1;


        for( let i = 0; i < this.n; i++){
            result.push(fn);
            fn = fn_1 + fn_2;
            fn_2 = fn_1;
            fn_1 = fn;
        }

        return result;
    }

    
}


const Data = new fibonacci(10);
console.info(Data.output());





