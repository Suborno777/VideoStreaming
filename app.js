let left_btn = document.getElementsByClassName('bi-chevron-left')[0];
let right_btn = document.getElementsByClassName('bi-chevron-right')[0];
let left_btn2 = document.getElementById('chevron-left2');
let right_btn2 = document.getElementById('chevron-right2');
let left_btn3 = document.getElementById('chevron-left3');
let right_btn3 = document.getElementById('chevron-right3');
let cards = document.getElementsByClassName('cards')[0];
let cards_2 = document.getElementsByClassName('moviecards')[0]
let cards_3 = document.getElementsByClassName('seriescards')[0]
let search = document.getElementsByClassName('search_user')[0];
var searcharea = document.getElementsByClassName('searcharea')[0];
var search_input = document.getElementById('search_input');
var search_user = document.getElementsByClassName('search')[0];
let moviesseries_type = document.getElementById('movies-series_type');
let video = document.getElementById('show_video');
let play = document.getElementsByClassName('playbutton')[0];


left_btn.addEventListener('click', ()=> {
    cards.scrollLeft -= 1000;
})
right_btn.addEventListener('click', ()=> {
    cards.scrollLeft += 1000;
})
left_btn2.addEventListener('click', ()=> {
    cards_2.scrollLeft -= 1000;
})
right_btn2.addEventListener('click', ()=> {
    cards_2.scrollLeft += 1000;
})
left_btn3.addEventListener('click', ()=> {
    cards_3.scrollLeft -= 1000;
})
right_btn3.addEventListener('click', ()=> {
    cards_3.scrollLeft += 1000;
})


let json_url = "movie.json"
fetch(json_url).then(Response => Response.json())
    .then((data) => {
        data.forEach((ele, i) => {
            let { name, date, sposter, bposter, genre, type, url } = ele;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML= `
            <div class="posterimage">
            <img src="${bposter}" alt="${name}" class="poster">
            </div>
            <div class="rest_card">
                            <div class="cont">
                                <h4>${name}</h4>
                                <div class="sub">
                                    <p>${genre}, ${date}</p>
                                    <h3>${type}</h3>
                                </div>
                            </div>
                        </div>
        `
        cards.appendChild(card);
    });

    let random_array = Math.floor(Math.random() * 12);
    
    document.getElementById('title').innerText = data[random_array].name;
    document.getElementsByClassName('show_image')[0].src = data[random_array].bposter;
    document.getElementById('moreinfo').href = data[random_array].url;
    document.getElementsByTagName('video')[0].src = data[random_array].trailer;
    document.getElementById('det').innerText = data[random_array].detail;
    document.getElementById('gen').innerText = data[random_array].genre;
    document.getElementById('date').innerText = data[random_array].date;



    
    // search data load
    data.forEach(element => {
        let { name, date, sposter, genre, url } = element;
        let card = document.createElement('a');
        card.classList.add('card');
        card.href = url;
        card.innerHTML= `
        <img src="${sposter}">
                    <div class="cont">
                        <h3>${name}</h3>
                        <p>${genre}, ${date}</p>
                    </div>
        `
        search_user.appendChild(card);
        });

        // search filter

        let buttonsearch = document.getElementsByClassName('searchbutton')[0];
        buttonsearch.addEventListener('click', function() {
            if (search_input.style.display == "none") {
                search_input.style.display = "flex";
            } else {
                search_input.style.display = "none";
            }

        })
        search_input.addEventListener('keyup', ()=> {
                let filter = search_input.value.toUpperCase();
                let a = search.getElementsByTagName('a');

                for (let index = 0; index < a.length; index++) {
                    let b = a[index].getElementsByClassName('cont')[0];
                    // console.log(a.textContent);
                    let TextValue = b.textContent || b.innerText;
                    if (TextValue.toUpperCase().indexOf(filter) > -1) {
                        a[index].style.display = "flex";
                        search_user.style.visibility = "visible";
                        search_user.style.display = "block";
                        search_user.style.opacity = 1;
                    } else {
                        a[index].style.display = "none";
                        search_user.style.visibility = "hidden";
                        search_user.style.display = "block";
                    }
                    if (search_input.value == 0) {
                        search_user.style.visibility = "hidden";
                        search_user.style.display = "block";
                        search_user.style.opacity = 0;
                    }
                }
            })

            // video play and pause

            play.addEventListener('click', () => {
                if (video.paused) {
                    video.play();
                    play.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard" data-name="Play"><path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path></svg><div class="space" style="width: 5px;"></div>Play';
                } else {
                    video.pause();
                    play.innerHTML = '<span id="boot-icon" class="bi bi-pause-fill" style="font-size: 20px"></span><div class="space" style="width: 5px;"></div>Pause';
                }
            })

            //scroll

            document.addEventListener("scroll", () => {
                const nav = document.querySelector("nav");

                if (window.scrollY > 0 == true) {
                    nav.style.background = "rgb(20, 20, 20)";
                } else {
                    nav.style.background = "transparent";
                }
            })

            // sound toggle

            let sound = document.getElementById('sound');
            let btnsound = document.getElementsByClassName('btnsound')[0];
            let video = document.getElementById('show_video');


                sound.addEventListener('click', () => {
                    if(video.muted){
                        video.muted = false;
                        sound.innerHTML = '<div id="svg"><i class="bi bi-volume-up-fill"></i></div>'
                    } else {
                        video.muted = true;
                        sound.innerHTML = '<div id="svg"><i class="bi bi-volume-mute-fill"></i></div>'
                        btnsound.style.outline = "1px solid #fff";
                    }})

            // movie and series array
            let movies = document.getElementById('movies');

            movies.addEventListener('click', () => {
            })
            let series = document.getElementById('series');
            series.addEventListener('click', () => {
                cards.innerHTML = '';

                let series_array = data.filter(ele => {
                    return ele.type == "series";
                });

                series_array.forEach((ele, i) => {
                    let { name, date, sposter, bposter, genre, type, url } = ele;
                    let card = document.createElement('a');
                    card.classList.add('card');
                    card.href = url;
                    card.innerHTML= `
                    <img src="${bposter}" alt="${name}" class="poster">
                                <div class="rest_card">
                                    <div class="cont">
                                        <h4>${name}</h4>
                                        <div class="sub">
                                            <p>${genre}, ${date}</p>
                                            <h3>${type}</h3>
                                        </div>
                                    </div>
                                </div>
                `
                moviesseries_type.innerText = 'Series';
                cards_3.appendChild(card);
            });
            })

                let moviecards = data.filter(ele => {
                    return ele.type == "movie";
                });

                moviecards.forEach((ele, i) => {
                    let { name, date, sposter, bposter, genre, type, url } = ele;
                    let card = document.createElement('a');
                    card.classList.add('card');
                    card.href = url;
                    card.innerHTML= `
                    <div class="posterimage">
                    <img src="${bposter}" alt="${name}" class="poster">
                    </div>
                                <div class="rest_card">
                                    <div class="cont">
                                        <h4>${name}</h4>
                                        <div class="sub">
                                            <p>${genre}, ${date}</p>
                                            <h3>${type}</h3>
                                        </div>
                                    </div>
                                </div>
                `
                movies_type.innerText = 'Movies';
                cards_2.appendChild(card);
            });


                let seriescards = data.filter(ele => {
                    return ele.type == "series";
                });

                seriescards.forEach((ele, i) => {
                    let { name, date, sposter, bposter, genre, type, url } = ele;
                    let card = document.createElement('a');
                    card.classList.add('card');
                    card.href = url;
                    card.innerHTML= `
                    <div class="posterimage">
                    <img src="${bposter}" alt="${name}" class="poster">
                    </div>
                                <div class="rest_card">
                                    <div class="cont">
                                        <h4>${name}</h4>
                                        <div class="sub">
                                            <p>${genre}, ${date}</p>
                                            <h3>${type}</h3>
                                        </div>
                                    </div>
                                </div>
                `
                movies_type.innerText = 'Movies';
                cards_3.appendChild(card);
            });

            // web transition

            window.transitionToPage = function(href) {
                document.querySelector('body').style.opacity = 0
                setTimeout(function() { 
                    window.location.href = href
                }, 500)
            }
        });
