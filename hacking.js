const Myrandom = () => {
    return new Promise((resolve, reject) => {
        let getRandom = Math.ceil(1 + 6* Math.random());
        setTimeout(() => {
            resolve()
        }, getRandom * 1000)
    })
}

    async function getItem(message) {
        await Myrandom();
        let div = document.createElement("div");
        div.style.width = "1000px";
        div.innerHTML = message;
        document.body.append(div)
    }
    async function main() {
        let timing = setInterval(() => {
            let last = document.body.lastElementChild;
            if(last.innerHTML.endsWith("....")) {
                last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-4)
            } else {
                last.innerHTML = last.innerHTML + "."
            }
        }, 100);
        const MyArray = [
        "Initialized Hacking",
        "Password files detected",
        "Data is sending to the server",
        "Process has being completed", 
        "Your password is sending to the server",
        "Your have been hacked",
        "Mission has completed successfully"
        ];

        for(let message of MyArray) {
        await getItem(message)
    }
    await Myrandom();
    clearInterval(timing)
    }
    main()
