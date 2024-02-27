var heading = document.createElement("h1");
heading.setAttribute("class","text-white text-center");


document.body.append(heading);

setTimeout(function(){
    document.querySelector('h1').innerHTML = `Counter: ${10}`;
    setTimeout(function(){
        document.querySelector("h1").innerText = `Counter: ${9}`;
        setTimeout(function(){
            document.querySelector("h1").innerText = `Counter: ${8}`;
            setTimeout(function(){
                document.querySelector("h1").innerText = `Counter: ${7}`;
                setTimeout(function(){
                    document.querySelector("h1").innerText = `Counter: ${6}`;
                    setTimeout(function(){
                        document.querySelector("h1").innerText = `Counter: ${5}`;
                        setTimeout(function(){
                            document.querySelector("h1").innerText = `Counter: ${4}`;
                            setTimeout(function(){
                                document.querySelector("h1").innerText = `Counter: ${3}`;
                                setTimeout(function(){
                                    document.querySelector("h1").innerText = `Counter: ${2}`;
                                    setTimeout(function(){
                                        document.querySelector("h1").innerText = `Counter: ${1}`;
                                        setTimeout(function(){
                                            document.querySelector("h1").innerText = `HAPPY INDEPENDENCE DAY`;
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000)
},1000);
