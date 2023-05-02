let left_btn = document.getElementsByClassName('bi-chevron-left')[0];
let right_btn = document.getElementsByClassName('bi-chevron-right')[0];
let left_btn2 = document.getElementById('chevron-left2');
let right_btn2 = document.getElementById('chevron-right2');
let left_btn3 = document.getElementById('chevron-left3');
let right_btn3 = document.getElementById('chevron-right3');
let left_btn4 = document.getElementById('chevron-left4');
let right_btn4 = document.getElementById('chevron-right4');
let cards = document.getElementsByClassName('alltypecards')[0];
let cards_2 = document.getElementsByClassName('moviecards')[0]
let cards_3 = document.getElementsByClassName('seriescards')[0]
let cards_4 = document.getElementsByClassName('trendingcards')[0]
let search = document.getElementsByClassName('search_user')[0];
var searcharea = document.getElementsByClassName('searcharea')[0];
var search_input = document.getElementById('search_input');
var search_user = document.getElementsByClassName('search')[0];
let moviesseries_type = document.getElementById('movies-series_type');
let video = document.getElementById('show_video');
let play = document.getElementsByClassName('playbutton')[0];

document.getElementById('title').style.display = 'flex';

$(window).on('load', function() {
    const nav = document.querySelector("nav");
            if (!window.scrollY == 0) {
                    nav.style.background = "rgb(20, 20, 20)"; 
            } else {
                    nav.style.background = "transparent";
            }

            var contImage = document.getElementsByClassName('contImage')[0];
            contImage.style.transformOrigin = 'left bottom';
            contImage.style.transform = 'scale(0.8) translate3d(0px, 80px, 0px)';
            contImage.style.transitionDuration = '1200ms';
            contImage.style.transitionDelay = '5000ms';


            var cont = document.getElementsByClassName('detailsAll')[0];
            cont.style.opacity = '0';
            cont.style.transitionDuration = '500ms';
            cont.style.transitionDelay = '5000ms';

            })

var y = window.matchMedia("(max-width: 900px)");
if(y.matches){
    left_btn.style.display = "none";
    right_btn.style.display = "none";
    left_btn2.style.display = "none";
    right_btn2.style.display = "none";
    left_btn3.style.display = "none";
    right_btn3.style.display = "none";
}

// hamburger

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    search_input.classList.add('show');
})


left_btn.addEventListener('click', ()=> {
    cards.scrollLeft -= 1565;
})
right_btn.addEventListener('click', ()=> {
    cards.scrollLeft += 1565;
})


left_btn2.addEventListener('click', ()=> {
    cards_2.scrollLeft -= 1565;
})
right_btn2.addEventListener('click', ()=> {
    cards_2.scrollLeft += 1565;
})
left_btn3.addEventListener('click', ()=> {
    cards_3.scrollLeft -= 1565;
})
right_btn3.addEventListener('click', ()=> {
    cards_3.scrollLeft += 1565;
})
left_btn4.addEventListener('click', ()=> {
    cards_4.scrollLeft -= 1565;
})
right_btn4.addEventListener('click', ()=> {
    cards_4.scrollLeft += 1565;
})


let json_url = "movie.json"
fetch(json_url).then(Response => Response.json())
    .then((data) => {
        data.forEach((ele, i) => {
            let { name, date, url, trending, bposter, genre, type, open } = ele;
            let card = document.createElement('a');
            card.style.cursor = 'pointer';
            card.classList.add('card');
            card.href = url;
            card.loop = true;
            card.innerHTML= `
            <a href="${open}">
            <div class="posterimage">
            <img src="${bposter}" alt="${name}" class="poster">
            </div></a>
            <div class="rest_card">
                            <div class="cont">
                                <h4>${name}</h4>
                                <div class="sub">
                                <p>${genre}, ${date}, ${type}</p>
                            </div>
                            <div class="more"><a id="openmore" href="${open}"><i class="bi bi-play-circle"></i></a></div>
                        </div>
                            </div>
                        </div>
        `
        cards.appendChild(card);
    });

    let random_array = Math.floor(Math.random() * 15);
    

    var x = window.matchMedia("(max-width: 900px)");
    function widthfunc (x){}
    if(x.matches){
        document.getElementsByClassName('show_image')[0].src = data[random_array].sposter;
        document.getElementsByClassName('rate')[0].style.display = "none";
    } else {
        document.getElementsByClassName('show_image')[0].src = data[random_array].bposter;
        document.getElementsByClassName('rate')[0].style.display = "flex";
    }
    widthfunc(x)

    document.getElementById('moreinfo').href = data[random_array].url;
    var vid = document.getElementsByTagName('video')[0];
    vid.ontimeupdate = function(){ontimevid()};

    function ontimevid(){
        if(vid.currentTime > 0.1){
            document.getElementById('sound').style.display = "block";
        } else {
            document.getElementById('sound').style.display = "none";
        }
    }
    document.getElementsByTagName('video')[0].src = data[random_array].trailer;
    document.getElementsByTagName('video')[0].volume = 0.3;
    document.getElementsByClassName('rating')[0].innerText = data[random_array].rate;
    document.getElementById('play_video').href = data[random_array].open;
    document.getElementById('title').src = data[random_array].logo;
    document.getElementById('det').innerText = data[random_array].detail;
    document.getElementById('gen').innerText = data[random_array].genre;
    document.getElementById('date').innerText = data[random_array].date;


    const imageWrapper = document.querySelector('.alltypecards')
    const imageItems = document.querySelectorAll('.alltypecards > *')
    const imageLength = imageItems.length
    const perView = 0
    let totalScroll = 10

    imageWrapper.style.setProperty('--per-view', perView)
    for(let i = 0; i < perView; i++){
        imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML)
    }


    function scrolling() {
        totalScroll++
        if(totalScroll == imageLength + 5){
            totalScroll = 10
            imageWrapper.style.transition = '0s'
            imageWrapper.style.left = '0'
        }
        const widthEl = document.querySelector('.alltypecards > :first-child').offsetWidth + 50
        imageWrapper.style.left = `-${totalScroll * widthEl}px`
        imageWrapper.style.transition = '.3s'
    }
    
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
            if (!search_input.classList.contains('show')) {
                search_input.classList.add('show');
            } else {
                search_input.classList.remove('show');
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
                        search_user.style.opacity = 1;
                    } else {
                        a[index].style.display = "none";
                        search_user.style.visibility = "visible";
                    }
                    if (search_input.value == 0) {
                        search_user.style.visibility = "hidden";
                        search_user.style.opacity = 0;
                    }
                }
            })

            //scroll

            document.addEventListener("scroll", () => {
                const nav = document.querySelector("nav");
                if (!window.scrollY == 0) {
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
                        localStorage.setItem("soundtoggle", "false");
                        video.muted = false;
                        sound.innerHTML = '<div id="svg"><i class="bi bi-volume-up-fill"></i></div>'
                    } else {
                        localStorage.setItem("soundtoggle", "true");
                        video.muted = true;
                        sound.innerHTML = '<div id="svg"><i class="bi bi-volume-mute-fill"></i></div>'
                    }})

                    var soundtg = localStorage.getItem("soundtoggle");

                    if(soundtg == "true") {
                        video.muted = true;
                        sound.innerHTML = '<div id="svg"><i class="bi bi-volume-mute-fill"></i></div>'
                    } else {
                        video.muted = false;
                    }
        

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
                    let { name, date, trending, bposter, genre, type, url } = ele;
                    let card = document.createElement('a');
                    card.style.cursor = 'pointer';
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
let trending_array = data.filter(ele => {
                    return ele.trending == "true";
                });

                trending_array.forEach((ele, i) => {
                    let { name, date, bposter, genre, type, url } = ele;
                    let card = document.createElement('a');
                    card.style.cursor = 'pointer';
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
                                        <p>${genre}, ${date}, ${type}</p>
                                    </div>
                                    <div class="more"><a id="openmore" href="${open}"><i class="bi bi-play-circle"></i></a></div>
                                </div>
                                    </div>
                                </div>
                `
                movies_type.innerText = 'Trending';
                cards_4.appendChild(card);
            });
                let moviecards = data.filter(ele => {
                    return ele.type == "movie";
                });

                moviecards.forEach((ele, i) => {
                    let { name, date, open, bposter, genre, type, url } = ele;
                    let card = document.createElement('a');
                    card.style.cursor = 'pointer';
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
                                        <p>${genre}, ${date}, ${type}</p>
                                    </div>
                                    <div class="more"><a id="openmore" href="${open}"><i class="bi bi-play-circle"></i></a></div>
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
                    let { name, date, open, bposter, genre, type, url } = ele;
                    let card = document.createElement('a');
                    card.style.cursor = 'pointer';
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
                                        <p>${genre}, ${date}, ${type}</p>
                                    </div>
                                    <div class="more"><a id="openmore" href="${open}"><i class="bi bi-play-circle"></i></a></div>                                </div>
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
