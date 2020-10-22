//Declaração das varíaveis para calculos/DELEY
var j, c, i, n, m, tempo_deley = 500;

// =============== Mostrar e Esconder Menus Principais ===============
var menu_principal = document.getElementById("menu_principal"),
    menu_calculos_juros_simples = document.getElementById("menu_calculos_juros_simples"),
    menu_calculos_juros_simples_TAXA = document.getElementById("menu_calculos_juros_simples_TAXA"),
    menu_calculos_juros_compostos = document.getElementById("menu_calculos_juros_compostos"),
    menu_calculos_CJM = document.getElementById("menu_calculos_CJM"),
    titulo_menus = document.getElementById("titulo_menus"); 

function mostrar_calculos_juros_simples(){
    menu_principal.classList.add("esconder");
    menu_calculos_juros_simples.classList.remove("esconder");
}
function mostrar_calculos_juros_simples_TAXA(){
    menu_principal.classList.add("esconder");
    menu_calculos_juros_simples_TAXA.classList.remove("esconder");
}
function mostrar_calculos_juros_compostos(){
    menu_principal.classList.add("esconder");
    menu_calculos_juros_compostos.classList.remove("esconder");
}
function mostrar_calculos_CJM(){
    menu_principal.classList.add("esconder");
    menu_calculos_CJM.classList.remove("esconder");
}
// =============== JUROS SIMPLES ===============

//DOM JUROS SIMPLES
    capital = document.getElementById("btn_capital"),
    juros = document.getElementById("btn_juros"),
    taxa = document.getElementById("btn_taxa"),
    periodo = document.getElementById("btn_periodo"),
    resultado = document.getElementById("visor_resultado"),
    input1_simples = document.getElementById("input1_simples"),
    input2_simples = document.getElementById("input2_simples"),
    input3_simples = document.getElementById("input3_simples"),
    iconeAuxiliar1_simples = document.getElementById("iconeAuxiliar1_simples"),
    iconeAuxiliar2_simples = document.getElementById("iconeAuxiliar2_simples"),
    iconeAuxiliar3_simples = document.getElementById("iconeAuxiliar3_simples"),
    botaoCalcular = document.getElementById("botaoCalcular");

//AGREGRAÇÂO E DELEY DAS TRANSIÇÔES, MOSTRAR E ESCONDER BOTÕES
function deley_calculo_juros_simples(){
    setInterval(mostrar_calculo_juros_simples, tempo_deley);

    setInterval(esconder_botoesPrincipais_simples, tempo_deley);
    setInterval(mostrar_inputs_simples, tempo_deley);
}
function deley_calculo_capital_simples(){
    setInterval(mostrar_calculo_capital_simples, tempo_deley);

    setInterval(esconder_botoesPrincipais_simples, tempo_deley);
    setInterval(mostrar_inputs_simples, tempo_deley);
}
function deley_calculo_taxa_simples(){
    setInterval(mostrar_calculo_taxa_simples, tempo_deley);

    setInterval(esconder_botoesPrincipais_simples, tempo_deley);
    setInterval(mostrar_inputs_simples, tempo_deley);
}
function deley_calculo_periodo_simples(){
    setInterval(mostrar_calculo_periodo_simples, tempo_deley);

    setInterval(esconder_botoesPrincipais_simples, tempo_deley);
    setInterval(mostrar_inputs_simples, tempo_deley);
}
function esconder_botoesPrincipais_simples(){
    taxa.classList.add("esconder"); taxa.classList.remove("botoes");
    juros.classList.add("esconder"); juros.classList.remove("botoes");
    capital.classList.add("esconder"); capital.classList.remove("botoes");
    periodo.classList.add("esconder"); periodo.classList.remove("botoes");
}
function mostrar_inputs_simples(){
    input1_simples.classList.remove("esconder");
    input2_simples.classList.remove("esconder");
    input3_simples.classList.remove("esconder");

    iconeAuxiliar1_simples.classList.remove("esconder");
    iconeAuxiliar2_simples.classList.remove("esconder");
    iconeAuxiliar3_simples.classList.remove("esconder");

    resultado.classList.remove("esconder");
}
// ======== Calcular JUROS ========
function mostrar_calculo_juros_simples(){
    input1_simples.setAttribute("placeholder", "Capital");
    input2_simples.setAttribute("placeholder", "Taxa, em % a.m.");
    input3_simples.setAttribute("placeholder", "Período");

    iconeAuxiliar1_simples.innerHTML = "C";
    iconeAuxiliar2_simples.innerHTML = "%";
    iconeAuxiliar3_simples.innerHTML = "N";

    botaoCalcular.classList.remove("esconder");
    botaoCalcular.setAttribute("onclick", "calcular_juros_simples()");
}
function calcular_juros_simples(){
        c = +input1_simples.value ;
        i = +(input2_simples.value / 100);
        n = +input3_simples.value;
    
        j = c * i * n;
    
        resultado.innerHTML = "O juros acumulado é: R$" + j.toFixed(2) +"<br>Capital: R$" + c + " | Taxa (" + i*100 + "%) | " + n + " em meses.";
}
// ======== Calcular CAPITAL ========
function mostrar_calculo_capital_simples(){
    input1_simples.setAttribute("placeholder", "Juros");
    input2_simples.setAttribute("placeholder", "Taxa, em % a.m.");
    input3_simples.setAttribute("placeholder", "Período");

    iconeAuxiliar1_simples.innerHTML = "J ";
    iconeAuxiliar2_simples.innerHTML = "%";
    iconeAuxiliar3_simples.innerHTML = "N";

    botaoCalcular.classList.remove("esconder");
    botaoCalcular.setAttribute("onclick", "calcular_capital_simples()");
}
function calcular_capital_simples(){
    j = +input1_simples.value ;
    i = +(input2_simples.value / 100);
    n = +input3_simples.value;

    c = j/(i * n);

    resultado.innerHTML = "O capital é de: R$" + c.toFixed(2) + "<br>Juros: R$" + j + " | A taxa de (" + (i * 100) + "%) | " + n + " meses";
}
// ======== Calcular TAXAS ========
function mostrar_calculo_taxa_simples(){
    input1_simples.setAttribute("placeholder", "Juros");
    input2_simples.setAttribute("placeholder", "Capital");
    input3_simples.setAttribute("placeholder", "Período");

    iconeAuxiliar1_simples.innerHTML = "J ";
    iconeAuxiliar2_simples.innerHTML = "C";
    iconeAuxiliar3_simples.innerHTML = "N";

    botaoCalcular.classList.remove("esconder");
    botaoCalcular.setAttribute("onclick", "calcular_taxa_simples()");
}
function calcular_taxa_simples(){
    j = +input1_simples.value ;
    c = +input2_simples.value
    n = +input3_simples.value;

    i = j/(c*n);

    resultado.innerHTML = "A taxa do investimento é de " + i.toFixed(2) + "% ao mês" + "<br>Juros: R$" + j + " | Capital: R$" + c + " | Período:" + n + "meses.";
}
// ======== Calcular PERÍODO ========
function mostrar_calculo_periodo_simples(){
    input1_simples.setAttribute("placeholder", "Capital");
    input2_simples.setAttribute("placeholder", "Juros");
    input3_simples.setAttribute("placeholder", "Taxa, em % a.m.");

    iconeAuxiliar1_simples.innerHTML = "C";
    iconeAuxiliar2_simples.innerHTML = "J ";
    iconeAuxiliar3_simples.innerHTML = "%";
    
    botaoCalcular.classList.remove("esconder");
    botaoCalcular.setAttribute("onclick", "calcular_periodo_simples()");
}
function calcular_periodo_simples(){
    var d = 0;
    c = +input1_simples.value;
    j = +input2_simples.value;
    i = +(input3_simples.value/100);

    n = j/(c*i);

    d = n * 30;

    resultado.innerHTML = "Período investido: " + n.toFixed(2) + " em meses (" + d.toFixed(0) +" dias)" + "<br> Capital: R$" + c + " | Juros: " + j + "% <br> " + "Taxa " + i*100 + "% ao mês.";
}





// ================= JUROS SIMPLES TAXA =================
var montante_taxa = document.getElementById("btn_montante_taxa"),
    capital_taxa =  document.getElementById("btn_capital_taxa"),
    taxa_taxa =  document.getElementById("btn_taxa_taxa"),
    periodo_taxa =  document.getElementById("btn_periodo_taxa"),
    resultado_taxa = document.getElementById("visor_resultado_taxa"),
    input1_taxa = document.getElementById("input1_taxa"),
    input2_taxa = document.getElementById("input2_taxa"),
    input3_taxa = document.getElementById("input3_taxa"),
    iconeAuxiliar1_taxa = document.getElementById("iconeAuxiliar1_taxa"),
    iconeAuxiliar2_taxa = document.getElementById("iconeAuxiliar2_taxa"),
    iconeAuxiliar3_taxa = document.getElementById("iconeAuxiliar3_taxa"),
    botaoCalcular_taxa = document.getElementById("botaoCalcular_taxa");

//AGREGAÇÃO DAS FUNÇÕES (DELEY)
function deley_calculo_montante_taxa(){
    setInterval(mostrar_calculo_montante_taxa, tempo_deley);

    setInterval(esconder_botoesPrincipais_taxa, tempo_deley);
    setInterval(mostrar_inputs_taxa, tempo_deley);
    
}
function deley_calculo_capital_taxa(){
    setInterval(mostrar_calculo_capital_taxa, tempo_deley);
    
    setInterval(esconder_botoesPrincipais_taxa, tempo_deley);
    setInterval(mostrar_inputs_taxa, tempo_deley);
}
function deley_calculo_taxa_taxa(){
    setInterval(mostrar_calculo_taxa_taxa, tempo_deley);
    
    setInterval(esconder_botoesPrincipais_taxa, tempo_deley);
    setInterval(mostrar_inputs_taxa, tempo_deley);
}
function deley_calculo_periodo_taxa(){
    setInterval(mostrar_calculo_periodo_taxa, tempo_deley);
    
    setInterval(esconder_botoesPrincipais_taxa, tempo_deley);
    setInterval(mostrar_inputs_taxa, tempo_deley);
}

//Funções para Esconder e Mostrar Botoes
function esconder_botoesPrincipais_taxa(){
    montante_taxa.classList.add("esconder"); montante_taxa.classList.remove("botoes");
    capital_taxa.classList.add("esconder"); capital_taxa.classList.remove("botoes");
    taxa_taxa.classList.add("esconder"); taxa_taxa.classList.remove("botoes");
    periodo_taxa.classList.add("esconder"); periodo_taxa.classList.remove("botoes");
}
function mostrar_inputs_taxa(){
    input1_taxa.classList.remove("esconder");
    input2_taxa.classList.remove("esconder");
    input3_taxa.classList.remove("esconder");

    iconeAuxiliar1_taxa.classList.remove("esconder");
    iconeAuxiliar2_taxa.classList.remove("esconder");
    iconeAuxiliar3_taxa.classList.remove("esconder");

    resultado_taxa.classList.remove("esconder");
}

// ======== Calcular MONTANTE TAXA ========
function mostrar_calculo_montante_taxa(){
    input1_taxa.setAttribute("placeholder", "Capital");
    input2_taxa.setAttribute("placeholder", "Taxa, em % a.m.");
    input3_taxa.setAttribute("placeholder", "Período");

    iconeAuxiliar1_taxa.innerHTML = "C";
    iconeAuxiliar2_taxa.innerHTML = "%";
    iconeAuxiliar3_taxa.innerHTML = "N";

    botaoCalcular_taxa.classList.remove("esconder");
    botaoCalcular_taxa.setAttribute("onclick", "calcular_montante_taxa()");
}
function calcular_montante_taxa(){
    c = +input1_taxa.value;
    i = +input2_taxa.value;
    n = +input3_taxa.value;

    m = c*(1 + (i/100) * n);

    resultado_taxa.innerHTML = "Montante Investido: R$" + m.toFixed(2) + "<br>Capital: R$" + c + " | Taxa: " + i + "% a. m. <br> Período de: " + n + " meses";  
}
// ======== Calcular CAPITAL TAXA ========
function mostrar_calculo_capital_taxa(){
    input1_taxa.setAttribute("placeholder", "Montante");
    input2_taxa.setAttribute("placeholder", "Taxa, em % a.m.");
    input3_taxa.setAttribute("placeholder", "Período");

    iconeAuxiliar1_taxa.innerHTML = "M";
    iconeAuxiliar2_taxa.innerHTML = "%";
    iconeAuxiliar3_taxa.innerHTML = "N";

    botaoCalcular_taxa.classList.remove("esconder");
    botaoCalcular_taxa.setAttribute("onclick", "calcular_capital_taxa()");
}
function calcular_capital_taxa(){
    m = +input1_taxa.value;
    i = +input2_taxa.value;
    n = +input3_taxa.value;

    c = m/(1 + (i/100) * n);

    resultado_taxa.innerHTML = "Capital acumulado: R$" + c.toFixed(2) + "<br> Montante: R$" + m + " | Taxa: " + i + "% a.m. " + "<br> Periodo: " + n + " meses";
}
// ======== Calcular TAXA TAXA ========
function mostrar_calculo_taxa_taxa(){
    input1_taxa.setAttribute("placeholder", "Montante");
    input2_taxa.setAttribute("placeholder", "Capital");
    input3_taxa.setAttribute("placeholder", "Período");

    iconeAuxiliar1_taxa.innerHTML = "M";
    iconeAuxiliar2_taxa.innerHTML = "C";
    iconeAuxiliar3_taxa.innerHTML = "N";

    botaoCalcular_taxa.classList.remove("esconder");
    botaoCalcular_taxa.setAttribute("onclick", "calcular_taxa_taxa()");
}

function calcular_taxa_taxa(){
    m = +input1_taxa.value;
    c = +input2_taxa.value;
    n = +input3_taxa.value;

    i = (m / c) -1 / n;

    resultado_taxa.innerHTML = "Taxa a. m. : " + i.toFixed(2) + "%<br> Montante: R$" + m + " | Capital: R$" + c + " <br> Período: " + n + " meses";
}
// ======== Calcular PERIODO TAXA ========
function mostrar_calculo_periodo_taxa(){
    input1_taxa.setAttribute("placeholder", "Montante");
    input2_taxa.setAttribute("placeholder", "Capital");
    input3_taxa.setAttribute("placeholder", "Taxa");

    iconeAuxiliar1_taxa.innerHTML = "M";
    iconeAuxiliar2_taxa.innerHTML = "C";
    iconeAuxiliar3_taxa.innerHTML = "%";

    botaoCalcular_taxa.classList.remove("esconder");
    botaoCalcular_taxa.setAttribute("onclick", "calcular_periodo_taxa()");
}
function calcular_periodo_taxa(){
    var d = 0;
    m = +input1_taxa.value;
    c = +input2_taxa.value;
    i = +input3_taxa.value;

    n = (m/c) - 1 / (i/100);

    d = n * 30;

    resultado_taxa.innerHTML ="O período investidos: " + n.toFixed(2) + " em meses ("+ d.toFixed(0) +" dias)" +"<br> Montante: R$" + m + " | Capital: R$" + c + "<br> Taxa: " + i + "% a. m.";
}





// ================= JUROS COMPOSTOS =================
var montante_composto = document.getElementById("btn_montante_composto"),
    capital_composto =  document.getElementById("btn_capital_composto"),
    capitalJuros_composto = document.getElementById("btn_capitalJuros_composto"),
    juros_composto =  document.getElementById("btn_juros_composto"),
    taxa_composto =  document.getElementById("btn_taxa_composto"),
    resultado_composto = document.getElementById("visor_resultado_composto"),
    input1_composto = document.getElementById("input1_composto"),
    input2_composto = document.getElementById("input2_composto"),
    input3_composto = document.getElementById("input3_composto"),
    iconeAuxiliar1_composto = document.getElementById("iconeAuxiliar1_composto"),
    iconeAuxiliar2_composto = document.getElementById("iconeAuxiliar2_composto"),
    iconeAuxiliar3_composto = document.getElementById("iconeAuxiliar3_composto"),
    botaoCalcular_composto = document.getElementById("botaoCalcular_composto");

    //AGREGAÇÂO DAS FUNÇÕES (DELEY)
    function deley_calculo_montante_composto(){
        setInterval(mostrar_calculo_montante_composto, tempo_deley);

        setInterval(esconder_botoesPrincipais_composto, tempo_deley);
        setInterval(mostrar_inputs_composto, tempo_deley);
    }
    function deley_calculo_capital_composto(){
        setInterval(mostrar_calculo_capital_composto, tempo_deley);
        
        setInterval(esconder_botoesPrincipais_composto, tempo_deley);
        setInterval(mostrar_inputs_composto, tempo_deley);
        
    }
    function deley_calculo_capitalJuros_composto(){
        setInterval(mostrar_calculo_capitalJuros_composto, tempo_deley);
        
        setInterval(esconder_botoesPrincipais_composto, tempo_deley);
        setInterval(mostrar_inputs_composto, tempo_deley);
        
    }
    function deley_calculo_juros_composto(){
        setInterval(mostrar_calculo_juros_composto, tempo_deley);

        setInterval(esconder_botoesPrincipais_composto, tempo_deley);
        setInterval(mostrar_inputs_composto, tempo_deley);
        
    }
    function deley_calculo_taxa_composto(){
        setInterval(mostrar_calculo_taxa_composto, tempo_deley);

        setInterval(esconder_botoesPrincipais_composto, tempo_deley);
        setInterval(mostrar_inputs_composto, tempo_deley);
        
    }
    //BOTOES
    function esconder_botoesPrincipais_composto(){
        montante_composto.classList.add("esconder"); montante_composto.classList.remove("botoes");
        capital_composto.classList.add("esconder"); capital_composto.classList.remove("botoes");
        capitalJuros_composto.classList.add("esconder"); capitalJuros_composto.classList.remove("botoes");
        juros_composto.classList.add("esconder"); juros_composto.classList.remove("botoes");
        taxa_composto.classList.add("esconder"); taxa_composto.classList.remove("botoes");
    }
    function mostrar_inputs_composto(){
        input1_composto.classList.remove("esconder");
        input2_composto.classList.remove("esconder");
        input3_composto.classList.remove("esconder");
    
        iconeAuxiliar1_composto.classList.remove("esconder");
        iconeAuxiliar2_composto.classList.remove("esconder");
        iconeAuxiliar3_composto.classList.remove("esconder");
    
        resultado_composto.classList.remove("esconder");
    }
// ======== Calcular MONTANTE COMPOSTO ========
    function mostrar_calculo_montante_composto(){
        input1_composto.setAttribute("placeholder", "Capital");
        input2_composto.setAttribute("placeholder", "Taxa, em % a.m.");
        input3_composto.setAttribute("placeholder", "Período");
    
        iconeAuxiliar1_composto.innerHTML = "C";
        iconeAuxiliar2_composto.innerHTML = "%";
        iconeAuxiliar3_composto.innerHTML = "N";
    
        botaoCalcular_composto.classList.remove("esconder");
        botaoCalcular_composto.setAttribute("onclick", "calcular_montante_composto()");
    }
    function calcular_montante_composto(){
        c = +input1_composto.value ;
        i = +input2_composto.value;
        n = +input3_composto.value;
    
        m = c * (Math.pow(1+(i/100), n));
    
        resultado_composto.innerHTML = "Montante Investido: R$" + m.toFixed(2);

    }
// ======== Calcular CAPITAL COMPOSTO ========
    function mostrar_calculo_capital_composto(){
        input1_composto.setAttribute("placeholder", "Montante");
        input2_composto.setAttribute("placeholder", "Taxa, em % a.m.");
        input3_composto.setAttribute("placeholder", "Período");
    
        iconeAuxiliar1_composto.innerHTML = "M";
        iconeAuxiliar2_composto.innerHTML = "%";
        iconeAuxiliar3_composto.innerHTML = "N";
    
        botaoCalcular_composto.classList.remove("esconder");
        botaoCalcular_composto.setAttribute("onclick", "calcular_capital_composto()");
    }
    function calcular_capital_composto(){
        m = +input1_composto.value ;
        i = +input2_composto.value;
        n = +input3_composto.value;
    
        c = m/Math.pow(1+i/100, n);
    
        resultado_composto.innerHTML = "O Capital: R$" + c.toFixed(2) + "<br>Montante acumulado: R$" + (m+c).toFixed(2) +"<br>Montante: R$" + m + " | Taxa de: " + i + "% a.m. <br> Período: " + n +" meses" 
        
    }
// ======== Calcular CAPITALJUROS COMPOSTO ========
    function mostrar_calculo_capitalJuros_composto(){
        input1_composto.setAttribute("placeholder", "Juros");
        input2_composto.setAttribute("placeholder", "Taxa, em % a.m.");
        input3_composto.setAttribute("placeholder", "Período");
    
        iconeAuxiliar1_composto.innerHTML = "J ";
        iconeAuxiliar2_composto.innerHTML = "%";
        iconeAuxiliar3_composto.innerHTML = "N";
    
        botaoCalcular_composto.classList.remove("esconder");
        botaoCalcular_composto.setAttribute("onclick", "calcular_capitalJuros_composto()");
    }
    function calcular_capitalJuros_composto(){
        j = +input1_composto.value;
        i = +input2_composto.value;
        n = +input3_composto.value;
    
        c = j/(Math.pow(1+i/100, n) -1);
    
        resultado_composto.innerHTML = "Capital: R$" + c.toFixed(2) + "<br>Montante acumulado: R$" + (c+j).toFixed(2) + "<br>Juros: R$" + j + " | Taxa: " + i + "% a.m. <br>Período: " + n + " meses";
    }
// ======== Calcular JUROS COMPOSTO ========
    function mostrar_calculo_juros_composto(){
        input1_composto.setAttribute("placeholder", "Capital");
        input2_composto.setAttribute("placeholder", "Taxa, em % a.m.");
        input3_composto.setAttribute("placeholder", "Período");
    
        iconeAuxiliar1_composto.innerHTML = "C";
        iconeAuxiliar2_composto.innerHTML = "%";
        iconeAuxiliar3_composto.innerHTML = "N";
    
        botaoCalcular_composto.classList.remove("esconder");
        botaoCalcular_composto.setAttribute("onclick", "calcular_juros_composto()");
    }
    function calcular_juros_composto(){
        c = +input1_composto.value;
        i = +input2_composto.value;
        n = +input3_composto.value;
    
        j = c*(Math.pow(1+i/100, n) -1);
    
        resultado_composto.innerHTML = "Juros: R$" + j + "<br> Montante acumulado: R$" + (j+c) + "<br>Capital: R$" + c + " | Taxa: " + i + "% a.m. <br>Período: " + n + " meses";
    }
// ======== Calcular TAXA COMPOSTO ========
    function mostrar_calculo_taxa_composto(){
        input1_composto.setAttribute("placeholder", "Capital");
        input2_composto.setAttribute("placeholder", "Juros");
        input3_composto.setAttribute("placeholder", "Período");
    
        iconeAuxiliar1_composto.innerHTML = "C";
        iconeAuxiliar2_composto.innerHTML = "J ";
        iconeAuxiliar3_composto.innerHTML = "N";
    
        botaoCalcular_composto.classList.remove("esconder");
        botaoCalcular_composto.setAttribute("onclick", "calcular_taxa_composto()");
    }
    function calcular_taxa_composto(){
        c = +input1_composto.value;
        j = +input2_composto.value;
        n = +input3_composto.value;
    
        i = Math.pow((j/c + 1), 1/n) -1;
    
        resultado_composto.innerHTML = "A Taxa do investimento é: " + (i*1000).toFixed(0) + "% a.m. <br>Montante Acumulado: R$" + (c+j) + "<br>Capital: R$" + c + " | Juros: R$" + j + "<br>Período: " + n + " meses";
    }
