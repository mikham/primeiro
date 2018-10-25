var nome=prompt("Qual seu nome?");
var dia= 18;
if(nome=="Mikhaela"){
    alert("O que tem para hoje, "+dia+".10.2018, Mikhaela?");
} else if (nome=="Bárbara"){
    alert ("Ok, você pode ler, mas só porque hoje é dia "+dia+".10.2018,  Bárbara.");
} else if (nome=="Aléxia"){
    alert ("Ok, você pode ler, mas só porque hoje é dia "+dia+".10.2018,  Aléxia.");
} else if (nome=="José Vítor"){
    alert("Ok, talvez tu possa ler.");
} 
else {
 alert("Você é um instruso, "+nome+".");
    var resp=prompt("Você realmente quer entrar aqui?");
    if (resp=="sim"){
        alert ("Tudo bem, você venceu.");
    } else if (resp=="não"){
        alert ("Então sai daqui!");
    }

}
