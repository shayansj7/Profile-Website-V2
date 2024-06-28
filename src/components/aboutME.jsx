export default function AboutMe(){
    return(
        <article class="aboutMe">
            <div class="myPic">
                {/* <img src="assets/image/myPic.jpg" alt="Shayan's picture"> */}
                <h3>Shayan Shimura</h3>
                <h4>志村冴優</h4>
            </div>
            <div class="myDetail">
                <h1 class="greeting">Hi!</h1>
                <p class="detail">I am a Junior Web Developer in Toronto.</p>
                <p class="detail">Studying Computer Programming at Seneca.</p>
                <a href="/resume"><button class="resumeBtn">RESUME</button></a>
            </div>
        </article>
    )
}