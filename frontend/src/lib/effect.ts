//typing effect

declare const type_text: HTMLElement | null;

async function sleep(time: number) { return new Promise(reslove => setTimeout(reslove, time)) }

async function keep_typing(text: string[], time = 1000): Promise<void> { 
    while (true) await typesentence(text, time);
}


async function typetext(text: string, time = 1000): Promise<void> {
    if(!type_text) return;

    for (const char of text) {
        type_text.innerHTML += char;
        await sleep(time);
    }
}

async function typesentence(sentence: string[], time: number): Promise<void> {
    for (const eachsen of sentence) {
        cursornotblinking("2px solid var(--lavender-blush)", "animate-cursorTyping");
        await typetext(eachsen, time);
        cursorblinking("animate-cursorTyping");
        await sleep(2500);
        cursornotblinking("2px solid var(--lavender-blush)", "animate-cursorTyping");
        await erase(Math.round(time / 4));
        await sleep(500);

    }
}

 async function erase(time: number): Promise<void> {
        if(!type_text) return;

        const length = type_text.innerHTML.length;
        for(let i = length-1 ; i>=0; --i ){
            type_text.innerHTML = type_text.innerHTML.slice(0,i)
            await sleep(time)
        }  
    }

function cursornotblinking(border: string, class_border_animation: string ): void {
    if(!type_text) return;

    type_text.classList.remove(class_border_animation);
    type_text.style.borderRight = border;
}

function cursorblinking(class_border_animation: string): void {
    if(!type_text) return;

    type_text.style.borderRight = "";
    type_text.classList.add(class_border_animation);
}

export { typesentence , keep_typing , sleep};