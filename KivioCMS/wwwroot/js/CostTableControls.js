
function showDonateButtons(selectedId, selectedTime) {
    // Hide all donation button sections
    document.querySelectorAll('.buttons-cell').forEach(function (section) {
        section.classList.add('hidden');
    });
    // Show the selected donation buttons
    document.getElementById(selectedId).classList.remove('hidden');
    if(selectedTime=="mes"){
        document.getElementById("desAltext").innerHTML = "Para desayuno y almuerzo mensual";
        document.getElementById("altext").innerHTML = "Para almuerzo mensual";
        document.getElementById('copAl').href = 'https://api.whatsapp.com/send/?phone=573216453086&text=¡Hola! Estoy interesado en apadrinar el almuerzo de un niño por un mes en COP, por un total de $84.600.&type=phone_number&app_absent=0';
        document.getElementById('usdAl').href = 'https://api.whatsapp.com/send/?phone=573216453086&text=¡Hola! Estoy interesado en apadrinar el almuerzo de un niño por un mes en USD, por un total de $19.&type=phone_number&app_absent=0';
        document.getElementById('copDesAl').href = 'https://api.whatsapp.com/send/?phone=573216453086&text=¡Hola! Estoy interesado en apadrinar el desayuno y almuerzo de un niño por un mes en COP, por un total de $130.700.&type=phone_number&app_absent=0';
        document.getElementById('usdDesAl').href = 'https://api.whatsapp.com/send/?phone=573216453086&text=¡Hola! Estoy interesado en apadrinar el desayuno y almuerzo de un niño por un mes en USD, por un total de $29.&type=phone_number&app_absent=0';
    }else if(selectedTime=="semestre"){
        document.getElementById("desAltext").innerHTML = "Para desayuno y almuerzo semestre";
        document.getElementById("altext").innerHTML = "Para almuerzo semestre";
        document.getElementById('copAl').href = 'https://api.whatsapp.com/send/?phone=573216453086&text=¡Hola! Estoy interesado en apadrinar el almuerzo de un niño por un semestre en COP, por un total de $508.000.&type=phone_number&app_absent=0';
        document.getElementById('usdAl').href = 'https://api.whatsapp.com/send/?phone=573216453086&text=¡Hola! Estoy interesado en apadrinar el almuerzo de un niño por un semestre en USD, por un total de $113.&type=phone_number&app_absent=0';
        document.getElementById('copDesAl').href = 'https://api.whatsapp.com/send/?phone=573216453086&text=¡Hola! Estoy interesado en apadrinar el desayuno y almuerzo de un niño por un semestre en COP, por un total de $784.00.&type=phone_number&app_absent=0';
        document.getElementById('usdDesAl').href = 'https://api.whatsapp.com/send/?phone=573216453086&text=¡Hola! Estoy interesado en apadrinar el desayuno y almuerzo de un niño por un semestre en USD, por un total de $174.&type=phone_number&app_absent=0';
    }else if(selectedTime=="ano"){
        document.getElementById("desAltext").innerHTML = "Para desayuno y almuerzo año";
        document.getElementById("altext").innerHTML = "Para almuerzo año";
        document.getElementById('copAl').href = 'https://api.whatsapp.com/send/?phone=573216453086&text=¡Hola! Estoy interesado en apadrinar el almuerzo de un niño por un año en COP, por un total de $1.015.000.&type=phone_number&app_absent=0';
        document.getElementById('usdAl').href = 'https://api.whatsapp.com/send/?phone=573216453086&text=¡Hola! Estoy interesado en apadrinar el almuerzo de un niño por un año en USD, por un total de $226.&type=phone_number&app_absent=0';
        document.getElementById('copDesAl').href = 'https://api.whatsapp.com/send/?phone=573216453086&text=¡Hola! Estoy interesado en apadrinar el desayuno y almuerzo de un niño por un año en COP, por un total de $1.568.000.&type=phone_number&app_absent=0';
        document.getElementById('usdDesAl').href = 'https://api.whatsapp.com/send/?phone=573216453086&text=¡Hola! Estoy interesado en apadrinar el desayuno y almuerzo de un niño por un año en USD, por un total de $348.&type=phone_number&app_absent=0';
    } 
}