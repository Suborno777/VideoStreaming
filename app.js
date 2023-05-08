let left_btn = document.getElementById('chevron-left');
let right_btn = document.getElementById('chevron-right');
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




for (let i = 0; i <= 10; i++) {
    console.log(i);
  }

// scroll animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

    });
});

const hiddenElem = document.querySelectorAll('.hidden');
hiddenElem.forEach((el) => observer.observe(el));

// slider

const slider = document.querySelector('.alltypecards');
slider.innerHTML += slider.innerHTML; // duplicate slides to create loop

const onScrollStop = callback => {
    let isScrolling;
    window.addEventListener(
      'scroll',
      e => {
        document.body.style.pointerEvents = 'none';
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
          callback();
        }, 150);
      },
      false
    );
  };

  onScrollStop(() => {
    document.body.style.pointerEvents = '';
  });

document.getElementById('title').style.display = 'flex';

$(window).on('beforeonload', function() {
    document.body.style.opacity = 0;
    const nav = document.querySelector("nav");
            if (!window.scrollY == 0) {
                    nav.style.background = "rgb(20, 20, 20)"; 
            } else {
                    nav.style.background = "transparent";
            }



            })

$(window).on('load', ()=> {
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


var x = window.matchMedia("(max-width: 1700px)");
if(x.matches){
    cards.classList.add('small');

} else {
    cards.classList.remove('small');
}

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


if(cards.classList.contains('prev')) {
    left_btn.style.opacity = '0';
} else {
    left_btn.style.opacity = '1';
}

left_btn.addEventListener('click', ()=> {
    right_btn.style.display = 'flex';
    left_btn.style.display = 'none';
    cards.classList.remove('next');
})
right_btn.addEventListener('click', () => {0
    right_btn.style.display = 'none';
    left_btn.style.display = 'flex';
    cards.classList.add('next');
})


left_btn2.addEventListener('click', ()=> {
    right_btn2.style.display = 'flex';
    left_btn2.style.display = 'none';
    cards_2.classList.remove('next');
})
right_btn2.addEventListener('click', ()=> {
    right_btn2.style.display = 'none';
    left_btn2.style.display = 'flex';
    cards_2.classList.add('next');
})


left_btn3.addEventListener('click', ()=> {
    cards_3.classList.remove('snext');
})
right_btn3.addEventListener('click', ()=> {
    cards_3.classList.add('snext');
})


let json_url = "movie.json"
fetch(json_url).then(Response => Response.json())
    .then((data) => {
            let trending_array = data.filter(ele => {
                return ele.trending == "true";
            });

            trending_array.forEach((ele) => {
                let { name, date, bposter, genre, open, type, url } = ele;
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
                                <div class="more"><a id="openmore" href="${open}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                              </svg></a></div>
                            </div>
                                </div>
                            </div>
            `
            cards.appendChild(card);
            
        card.addEventListener('mouseover', ()=> {
            card.classList.add('hover');
        })
        card.addEventListener('mouseout', ()=> {
            card.classList.remove('hover');
        })
        card.addEventListener('mouseover', ()=> {
            cards.classList.add('hovered');
        })
        card.addEventListener('mouseleave', ()=> {
            cards.classList.remove('hovered');
        })
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

    document.getElementById('moreinfo').href = data[random_array].url;
    var vid = document.getElementsByTagName('video')[0];
    vid.ontimeupdate = function(){ontimevid()};

    function ontimevid(){
        if(data[random_array].trailer == 'Not'){
            document.getElementById('sound').style.display = "none";
        } else {
            document.getElementById('sound').style.display = "block";
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
                    sound.classList.add('blink');
                    if(video.muted){
                        localStorage.setItem("soundtoggle", "false");
                        video.muted = false;
                        sound.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard" data-name="VolumeHigh"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 8.28699 22.525 4.72603 19.8995 2.10052L18.4853 3.51474C20.7357 5.76517 22 8.81742 22 12C22 15.1826 20.7357 18.2349 18.4853 20.4853L19.8995 21.8995C22.525 19.274 24 15.7131 24 12ZM11 4.00001C11 3.59555 10.7564 3.23092 10.3827 3.07613C10.009 2.92135 9.57889 3.00691 9.29289 3.29291L4.58579 8.00001H1C0.447715 8.00001 0 8.44773 0 9.00001V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00001ZM5.70711 9.70712L9 6.41423V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70712ZM16.0001 12C16.0001 10.4087 15.368 8.8826 14.2428 7.75739L12.8285 9.1716C13.5787 9.92174 14.0001 10.9392 14.0001 12C14.0001 13.0609 13.5787 14.0783 12.8285 14.8285L14.2428 16.2427C15.368 15.1174 16.0001 13.5913 16.0001 12ZM17.0709 4.92896C18.9462 6.80432 19.9998 9.34786 19.9998 12C19.9998 14.6522 18.9462 17.1957 17.0709 19.0711L15.6567 17.6569C17.157 16.1566 17.9998 14.1218 17.9998 12C17.9998 9.87829 17.157 7.84346 15.6567 6.34317L17.0709 4.92896Z" fill="currentColor"></path></svg>`
                    } else {
                        localStorage.setItem("soundtoggle", "true");
                        video.muted = true;
                        sound.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard" data-name="VolumeOff"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 4.00003C11 3.59557 10.7564 3.23093 10.3827 3.07615C10.009 2.92137 9.57889 3.00692 9.29289 3.29292L4.58579 8.00003H1C0.447715 8.00003 0 8.44774 0 9.00003V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00003ZM5.70711 9.70714L9 6.41424V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70714ZM15.2929 9.70714L17.5858 12L15.2929 14.2929L16.7071 15.7071L19 13.4142L21.2929 15.7071L22.7071 14.2929L20.4142 12L22.7071 9.70714L21.2929 8.29292L19 10.5858L16.7071 8.29292L15.2929 9.70714Z" fill="currentColor"></path></svg>`
                    }})

                    var soundtg = localStorage.getItem("soundtoggle");

                    if(soundtg == "true") {
                        video.muted = true;
                        sound.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard" data-name="VolumeOff"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 4.00003C11 3.59557 10.7564 3.23093 10.3827 3.07615C10.009 2.92137 9.57889 3.00692 9.29289 3.29292L4.58579 8.00003H1C0.447715 8.00003 0 8.44774 0 9.00003V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00003ZM5.70711 9.70714L9 6.41424V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70714ZM15.2929 9.70714L17.5858 12L15.2929 14.2929L16.7071 15.7071L19 13.4142L21.2929 15.7071L22.7071 14.2929L20.4142 12L22.7071 9.70714L21.2929 8.29292L19 10.5858L16.7071 8.29292L15.2929 9.70714Z" fill="currentColor"></path></svg>'
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

            //     series_array.forEach((ele, i) => {
            //         let { name, date, open, bposter, genre, type, url } = ele;
            //         let card = document.createElement('a');
            //         card.style.cursor = 'pointer';
            //         card.classList.add('card');
            //         card.href = url;
            //         card.innerHTML= `
            //         <img src="${bposter}" alt="${name}" class="poster">
            //                     <div class="rest_card">
            //                         <div class="cont">
            //                             <h4>${name}</h4>
            //                             <div class="sub">
            //                                 <p>${genre}, ${date}</p>
            //                                 <h3>${type}</h3>
            //                             </div>
            //                             <div class="more"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
            //                             <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            //                             <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
            //                           </svg></div>
            //                         </div>
            //                     </div>
            //     `
            //     moviesseries_type.innerText = 'Series';
            //     cards_3.appendChild(card);
            // });

                
            })
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

                card.addEventListener('mouseover', ()=> {
                    cards_2.classList.add('hovered');
                })
                card.addEventListener('mouseleave', ()=> {
                    cards_2.classList.remove('hovered');
                })
                
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
                                    <div class="more"><a id="openmore" href="${open}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                  </svg></a></div></div>
                                    </div>
                                </div>
                `
                movies_type.innerText = 'Movies';
                cards_3.appendChild(card);
                card.addEventListener('mouseover', ()=> {
                    cards_3.classList.add('hovered');
                })
                card.addEventListener('mouseleave', ()=> {
                    cards_3.classList.remove('hovered');
                })
            });

            // web transition

            window.transitionToPage = function(href) {
                document.querySelector('body').style.opacity = 0
                setTimeout(function() { 
                    window.location.href = href
                }, 500)
            }
        });
