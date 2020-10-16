const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // inserir dados na tabela
    await saveOrphanage(db, { 
        lat: "-27.5924079",
        lng: "-48.5781556",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 05 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "3518399571",
        images: [
            "https://images.unsplash.com/photo-1594269146507-03861ba52e8d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9", 
            "https://images.unsplash.com/photo-1576024267168-6be5e4eabcf4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 18h até 8h",
        open_on_weekends: "0"

    })

    // consultar dados da tabela
    const orphanages = await db.all("SELECT * FROM orphanages")
    console.log(orphanages)

    // consultar somente 1 orfanato, pelo id
    const selectedOrphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(selectedOrphanage)

    // deletar dado da tabela
    console.log(await db.run('DELETE FROM orphanages WHERE id = "3"')) 
})