let quiz =
[
    {
        question: "Which of the following can read and render HTML web pages",
        a: "Server",
        b: "head Tak",
        c: "web browser",
        d: "empty",
        correct: "c"
         
    },
    {
        question: "Identify the range of byte data types in JavaScript.",
        a: "-10 to 9",
        b: "- 128 to 127",
        c: "-32768 to 32767",
        d: "-2147483648 to 2147483647",
        correct:"b"
    },
    {
        question: " Among the following operators identify the one which is used to allocate memory to array variables in JavaScript.",
        a: "new",
        b: "new malloc",
        c: "alloc",
        d: "malloc",
        correct:"a"
    },
    {
        question: "Simple network management protocol uses which of the following port number",
        a: "164",
        b: "163", 
        c: "160",
        d: "161",
        correct:"d"
    },
    {
        question: "Identify the incorrect HTML tag among the following",
        a: "<input>",
        b: "<select>",
        c: "<list>",
        d: "<textarea>",
        correct: "c"
    },
    {
        question: "Full form of W3C is",
        a: "World Wide Websites community",
        b: "World Wide Web community",
        c: "World Wide Websites consortium",
        d: "World Wide Web consortium",
        correct: "d"
    },
    {
        question: "World Wide Web consortium",
        a: "<sup>",
        b: "<br>",
        c: "<p>",
        d: "<abbr>",
        correct: "b"
    },
    {
        question: "Which of the following attribute is used for merging two or more adjacent columns?",
        a: "ROWSPAN",
        b: "CELLSPACING",
        c: "COLSPAN",
        d: "CELLPADDING",
        correct: "c"
    },
    {
        question: "Which of the following is used to transmit information on the world wide web?",
        a: "HPPT",
        b: "HTTP",
        c: "HITTP",
        d: "HTPP",
        correct: "b"
    },
    {
        question: "A website is a _______   cookie.",
        a: "volatile",
        b: "transient",
        c: "in transient",
        d: "non-volatile",
        correct: "b"
    }
];
let index = 0;
let quenm = document.getElementById("quenm");
let radio = document.querySelectorAll("input[type='radio']")

let tt = quiz.length;
let c = 0;
let w = 0; 
function Question()
{
    let num = document.getElementById("num");
let t = document.getElementById("total");
    let data = quiz[index];
    if(tt === index)
    {
       return end();
    }
    reset();
    console.log("hii");
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
        <h1>${c} Right From ${tt}</h1>
    </div>
    `;
}
function reset()
{
    radio.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
function Sub()
{
    let data = quiz[index];
    let a = ans();
    if( a === data.correct)
    {
        c++;
    }
    else
    {
        w++;
    }
    index++;
    Question();
}
function ans()
{
    let a;
    radio.forEach(
        (input) =>
        {
            if(input.checked)
            {
                a = input.value;
            }
        }
    )
    return a;
}
function It()
{
    let show = document.getElementById("show");
    let hide = document.getElementById("section");
    let sub = document.getElementById("submit");
    sub.style.display = "block";
    show.style.display = "block";
    hide.style.display = "none";
    Question();
    Question(index);
}

//cricket

let quiz1 =
[
    {
        question: "How many times has India won the Cricket World Cup?",
        a: "2",
        b: "3",
        c: "4",
        d: "1",
        correct: "a"
    },
    {
        question: "Which Indian cricketer is also known as the 'God of Cricket'? ",
        a: "MS Dhoni",
        b: "Yuvraj Singh",
        c: "Virat Kohli",
        d: "Sachin Tendulkar",
        correct: "d"
    },
    {
        question: "What is the moniker given to the Indian cricket team?",
        a: "Men in Blue",
        b: "The Team of Lions",
        c: "The Indian Army",
        d: "None of the above",
        correct: "a"
    },
    {
        question: "Who was the first Indian batsman to hit a centuryin a Test match?",
        a: "Lala Amarnath Bharadwaj",
        b: "Kapil Dev",
        c: "Sunil Gavaskar",
        d: "Vijay Hazare",
        correct: "a"
    },
    {
        question: "When did India play its first Test match?",
        a: "1931",
        b: "1930",
        c: "1932",
        d: "1929",
        correct: "c"
    },
    {
        question: "How many times has India won the Asia Cup?",
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        correct: "c"
    },
    {
        question: "Who is the current Captain of the Indian National Men's Cricket Team?",
        a: "Virat Kohli",
        b: "MS Dhoni",
        c: "Rohit Sharma",
        d: "Roger Binny",
        correct: "c"
    },
    {
        question: "Sachin Tendulkar scored world's first 200 runs in ODI of __ balls.",
        a: "147",
        b: "148",
        c: "157",
        d: "197",
        correct: "a"
    },
    {
        question: "Where is the sports stadium, ‘Green Park’ located?",
        a: "Kanpur",
        b: "Jamshedpur",
        c: "Cutlack",
        d: "Patiala",
        correct: "a"
    },
    {
        question: "How many overs are played in Twenty20 cricket match?",
        a: "50",
        b: "20",
        c: "100",
        d: "40",
        correct: "d"
    }
    
];
let total1 = quiz1.length;

let correct = 0;
let wrong = 0; 
let index1 = 0;
function Cricket()
{
    let show = document.getElementById("show");
    let hide = document.getElementById("section");
    let sub = document.getElementById("submit1");
    sub.style.display = "block";
    show.style.display = "block";
    hide.style.display = "none";
    Question1();
    Question1(index1);
}
function Question1()
{
    let num1 = document.getElementById("num");
    let t1 = document.getElementById("total");
    let data = quiz1[index1];
    if(total1 === index1)
    {
       return end1();
    }
    reset1();
    console.log("hii1");
    num1.innerText = index1+1;
    t1.innerText = total1;
    quenm.innerHTML = `${index1 + 1} ${data.question}`;
    radio[0].nextElementSibling.innerText = data.a;
    radio[1].nextElementSibling.innerText = data.b;
    radio[2].nextElementSibling.innerText = data.c;
    radio[3].nextElementSibling.innerText = data.d;
}
function end1()
{
    let con = document.getElementsByClassName("container")[0];
    con.innerHTML = `
    <div class="c1">
        <h1>${correct} Right From ${total1}</h1>
    </div>
    `;
}
function reset1()
{
    radio.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
function Sub1()
{
    let data = quiz1[index1];
    let b = ans1();
    if( b === data.correct)
    {
        correct++;
    }
    else
    {
        wrong++;
    }
    index1++;
    Question1();
}
function ans1()
{
    let b;
    radio.forEach(
        (input) =>
        {
            if(input.checked)
            {
                b = input.value;
            }
        }
    )
    return b;
}