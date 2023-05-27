let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];
    function showContacts(contacts,index) {
        if (contacts instanceof Array && index>=0 && index < contacts.length) {
            console.log(contacts[index]);
        } else{
            console.log("los argumentos no son validos");
        }
    }
    showContacts(contacts,1)
    function showAllContacts(contacts) {
        if(contacts instanceof Array){
            contacts.forEach(elemento=>{
                console.log(elemento);
            })
        }else{
            console.log("El argumento no es un arreglo");
        }
    }
    showAllContacts(contacts)

    function addNewContact(contacts,nombre,telefono,correo) {
        if(contacts instanceof Array && nombre && telefono && correo){
            contacts.push({name: nombre, phone:telefono,email:correo})
            console.log("Nuevo contacto agregado correctamente");
        }else{
            console.log("Los argumentos pasados no son validos");
        }
    }
    addNewContact(contacts,"Alejandra","777777","libero@convallis.edu")