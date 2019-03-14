System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logarTempoDeExecucao(emSegundos = false) {
        return function (target, propertykey, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                let divisor = 1;
                let unidade = 'milisegundos';
                if (emSegundos) {
                    divisor = 1000;
                    unidade = 'segundos';
                }
                console.log('-----------------------');
                console.log(`Parâmetros do método ${propertykey}: ${JSON.stringify(args)}`);
                const t1 = performance.now();
                const resultado = metodoOriginal.apply(this, args);
                console.log(`o resultado do método ${JSON.stringify(resultado)}`);
                const t2 = performance.now();
                console.log(`${propertykey} demorou ${(t2 - t1) / divisor} ${unidade}`);
                console.log('-----------------------');
                return resultado;
            };
            return descriptor;
        };
    }
    exports_1("logarTempoDeExecucao", logarTempoDeExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
