let quiz =
[
    {
        question: "Which of the following can read and render HTML web pages",
        a: "Server",
        b: "head Tak",
        c: "web browser",
        d: "empty",
        correct: "c",
    },
    {
        question: "Identify the range of byte data types in JavaScript.",
        a: "-10 to 9",
        b: "- 128 to 127",
        c: "-32768 to 32767",
        d: "-2147483648 to 2147483647",
        correct:"b",
    },
    {
        question: " Among the following operators identify the one which is used to allocate memory to array variables in JavaScript.",
        a: "new",
        b: "new malloc",
        c: "alloc",
        d: "malloc",
        correct:"a",
    },
    {
        question: "Simple network management protocol uses which of the following port number",
        a: "164",
        b: "163", 
        c: "160",
        d: "161",
        correct:"d",
    }
];
let index = 0;
let quenm = document.getElementById("quenm");
let radio = document.querySelectorAll("input[type='radio']")
let num = document.getElementById("num");
let t = document.getElementById("total");
let tt = quiz.length;
function Question()
{
    if(tt === index)
    {
       return end();
    }
    reset();
    console.log("hii");
    let data = quiz[index];
    num.innerText = index+1;
    t.innerText = tt;
    quenm.innerHTML = `${index + 1} ${data.question}`;
    radio[0].nextElementSibling.innerText = data.a;
    radio[1].nextElementSibling.innerText = data.b;
    radio[2].nextElementSibling.innerText = data.c;
    radio[3].nextElementSibling.innerText = data.d;
}
function end()
{
    let con = document.getElementsByClassName("container")[0];
    con.innerHTML = `
    <div class="c1">
        <h1>Hii</h1>
    </div>
    `;
}
function reset()
{
    radio.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}
function Sub()
{
    index++;
    Question();
}
Question(index);
