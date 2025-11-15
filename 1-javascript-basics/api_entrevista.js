// Passo 1
async function zgAPI_1() {
    try {
        const request = await fetch("https://desafio-endpoint-hashcode-n2.onrender.com/passo1");
        const data = await request.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

zgAPI_1();

// Passo 2
POST_URL2 = "https://desafio-endpoint-hashcode-n2.onrender.com/passo2";

const postData = JSON.stringify({
    cpf: "114.803.415-33"
});

async function zgAPI_2() {
    console.log(postData);
    
    try {
        const response = await fetch(POST_URL2, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: postData
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

    } catch (err) {
        console.error(err);
    }
}

zgAPI_2();

// Passo 3
POST_URL3 = "https://desafio-endpoint-hashcode-n2.onrender.com/passo3";

const post = JSON.stringify({
    cpf: "114.803.415-33",
    respostaQuestaoObjetiva: "13"
});

async function zgAPI_3() {
    console.log(post);
    
    try {
        const response = await fetch(POST_URL3, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: post
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

    } catch (err) {
        console.error(err);
    }
}

zgAPI_3();

// Passo 4
POST_URL4 = "https://desafio-endpoint-hashcode-n2.onrender.com/passo4";

const post4 = new URLSearchParams({
    cpf: "114.803.415-33",
    token: "54f8b2c059600f637a869f04c753b7a62e46f65f"
});

const FINAL_URL = `${POST_URL4}?${post4.toString()}`;

async function zgAPI_4() {
    console.log(post4);
    
    try {
        const response = await fetch(FINAL_URL);

        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

    } catch (err) {
        console.error(err);
    }
}

zgAPI_4();