function Mensagem(){
    var date = document.querySelector('input[type="date"]').value; 
    var time = document.querySelector('input[type="time"]').value; 
    var name = document.querySelector('input[type="text"]').value;
    var barbeiro = document.getElementById('barbeiro').value;
    var whatsapp = document.getElementById('whatsapp');
    
    // https://wa.me/5577998650782?text=Pedido%3A%20Produto%201%2C%20Produto%202
    console.log(date,time,name,barbeiro)
    msg = `https://wa.me/5577998650782?text=Agendamento%20de%20Corte%3A%20
    Cliente%3A%20${name}%2C%20Horário%3A%20${time}%2C%20Data%3A%20${date}%2C%20Barbeiro%3A%20${barbeiro}`

    whatsapp.href = msg
}