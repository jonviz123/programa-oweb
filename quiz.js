function corrigir() {
    let pontTotal = 0;

    let camSel = document.getElementById("Q01").value;
    if (camSel === 'informaticaAndDS') {
        pontTotal += 1;
    }

    let camTextArea = document.getElementById("Q02").value;
    let Q02Res = 0;
    camTextArea.includes('Informática') ? Q02Res += 1 : Q02Res;
    camTextArea.includes('Administração') ? Q02Res += 1 : Q02Res;
    camTextArea.includes('Enfermagem') ? Q02Res += 1 : Q02Res;
    camTextArea.includes('Des. Sistemas') ? Q02Res += 1 : Q02Res;

    if (Q02Res === 4) {
        pontTotal += 1; 
    }

    let camCheckOct = document.getElementById("check1").checked;
    let camCheckBin = document.getElementById("check2").checked;
    let camCheckDec = document.getElementById("check3").checked;
    let camCheckHex = document.getElementById("check4").checked;

    if (camCheckOct && camCheckBin && camCheckHex && !camCheckDec) {
        pontTotal += 1;
    }

    let camRadioIso = document.getElementById("iso").checked;
    if (camRadioIso) {
        pontTotal += 1;
    }

    let camRadioVer = document.getElementById("ver").checked;
    if (camRadioVer) {
        pontTotal += 1;
    }

    let nomeAluno = document.getElementById("texto").value;
    let percentual = (pontTotal / 5) * 100;

    let campoResumo = document.querySelector("fieldset.hide");
    campoResumo.classList.remove("hide");

    document.getElementById("nome").innerHTML = `<b>Nome:</b> ${nomeAluno}`;
    document.getElementById("corretas").innerHTML = `<b>Acertos:</b> ${pontTotal} de 5`;
    document.getElementById("percentual").innerHTML = `<b>Percentual:</b> ${percentual.toFixed(2)}%`;
}